let agentData = [];
    function parseRate(rateStr) {
        const raw = rateStr?.toString().replace('%', '').trim();
        const num = parseFloat(raw);
        return isNaN(num) ? 0 : (num > 1 ? num / 100 : num);
    }

    function getAgentDiscount() {
        const raw = document.getElementById('agentSearch').dataset.selected;
        if (!raw) return { rate: 0, info: null, currency: 'THB' };
        const agent = JSON.parse(raw);
        const code = agent.Code?.trim();
        const currency = ['AUD', 'NZD'].includes(code) ? code : 'THB';
        return { rate: parseRate(agent.Rate), info: agent, currency };
    }

    function isFreeKidsPromo(month) {
        return ['May', 'Jun', 'Sep'].includes(month);
    }

    // ... (โค้ดเก่าของคุณ function isFreeKidsPromo ... ) ...


// ⬇️ 2.1 โค้ดใหม่: "เครื่องยนต์" หรือ "พนักงานเช็กลิสต์" ⬇️
// ----------------------------------------------------

// 'inputs' คือ "ข้อมูลหน้างาน" (เช่น เดือน, แพ็กเกจ, สกุลเงิน)
// 'basePrices' คือ "ราคาก่อนโปร" (ราคาผู้ใหญ่, ราคาเด็ก)
    function applyPromotions(inputs, basePrices) {
        
        let adultPrice = basePrices.adult;
        let childPrice = basePrices.child;
        let totalDiscount = 0; // ยอดลดราคารวม (สำหรับโปร % และ โปรลดราคาคงที่)
        
        const promoMessages = []; // กล่องเก็บข้อความโปรโมชั่นที่เข้าเงื่อนไข

        // ให้ "เครื่องยนต์" วิ่งดูกฎทีละข้อใน "สมุดกฎ" (PROMOTION_RULES)
        for (const rule of PROMOTION_RULES) {
            
            let ruleMet = true; // ตั้งธงว่า "ผ่าน" ไว้ก่อน

            // --- 1. เริ่มการตรวจสอบเงื่อนไข (Conditions) ---
            
            // เช็กเงื่อนไข "เดือน"
            if (rule.conditions.months) {
                if (!rule.conditions.months.includes(inputs.month)) {
                    ruleMet = false; // เดือนไม่ตรง -> กฎนี้ไม่ผ่าน
                }
            }
            
            // เช็กเงื่อนไข "Season"
            if (rule.conditions.seasons) {
                if (!rule.conditions.seasons.includes(inputs.season)) {
                    ruleMet = false; // Season ไม่ตรง -> กฎนี้ไม่ผ่าน
                }
            }

            // เช็กเงื่อนไข "แพ็กเกจ"
            if (rule.conditions.packages) {
                if (!rule.conditions.packages.includes(inputs.pkg)) {
                    ruleMet = false; // แพ็กเกจไม่ตรง -> กฎนี้ไม่ผ่าน
                }
            }

            // เช็กเงื่อนไข "สกุลเงิน"
            if (rule.conditions.currencies) {
                if (!rule.conditions.currencies.includes(inputs.currency)) {
                    ruleMet = false; // สกุลเงินไม่ตรง -> กฎนี้ไม่ผ่าน
                }
            }
            
            // เช็กเงื่อนไข "เอเจนต์"
            if (rule.conditions.agents) {
                // ถ้าไม่มี Agent (เลือก Agent ไม่ได้) หรือ Agent Code ไม่ตรง
                if (!inputs.agent || !rule.conditions.agents.includes(inputs.agent.Code)) {
                    ruleMet = false; // -> กฎนี้ไม่ผ่าน
                }
            }
            
            // ... อนาคตเพิ่มเงื่อนไขเช็กอื่นๆ (เช่น จำนวนผู้ใหญ่, เด็ก) ที่นี่ ...

            // --- 2. จบการตรวจสอบเงื่อนไข ---


            // --- 3. ถ้า "ผ่าน" ทุกเงื่อนไข (ruleMet ยังเป็น true) ---
            if (ruleMet) {
                // ให้ "เครื่องยนต์" เริ่มทำงาน (Apply Action)
                switch (rule.action.type) {
                    
                    case 'SET_CHILD_PRICE_TO_ZERO':
                        childPrice = 0; // 💥 เปลี่ยนราคาเด็กเป็น 0
                        promoMessages.push(`<span class='yellow-highlight'>${rule.name}</span>`);
                        break;
                    
                    case 'PERCENTAGE_DISCOUNT_TOTAL':
                        // คำนวณส่วนลดจาก "ราคารวม" (สมมติว่าคิดจากราคาผู้ใหญ่ + เด็ก)
                        let totalBeforeThisPromo = (basePrices.adult * inputs.adults) + (basePrices.child * inputs.children);
                        let discount = totalBeforeThisPromo * rule.action.value;
                        totalDiscount += discount; // เพิ่มยอดส่วนลดรวม
                        promoMessages.push(`<span class='red-bold-highlight'>${rule.name}: -${discount.toLocaleString()}</span>`);
                        break;
                    
                    case 'FIXED_DISCOUNT_PER_BOOKING':
                        totalDiscount += rule.action.value; // เพิ่มยอดส่วนลดรวม
                        promoMessages.push(`<span class='red-bold-highlight'>${rule.name}: -${rule.action.value}</span>`);
                        break;
                }
            }
        } // --- จบการวนลูปเช็กกฎ ---

        // 4. ส่งค่าที่คำนวณใหม่ + ข้อความโปรโมชั่น กลับไป
        return { 
            finalChildPrice: childPrice,   // ราคาเด็ก (ที่อาจกลายเป็น 0)
            finalTotalDiscount: totalDiscount, // ยอดส่วนลดรวม
            promoMessages: promoMessages   // รายการโปรที่ได้
        };
    }
    // ⬆️ 2.1 จบส่วน "เครื่องยนต์" ⬆️
    // ----------------------------------------------------

    function calculatePrice() {
    const adults = parseInt(document.getElementById("adults").value);
    const children = parseInt(document.getElementById("children").value);
    const pkg = document.getElementById("package").value;
    const month = document.getElementById("month").value;
    const year = document.getElementById("year").value;
    const { rate, info: agent, currency } = getAgentDiscount();

    // (ส่วน Error Check ของคุณ... )
    const yearPrices = prices[currency]?.[year];
    if (!yearPrices) {
        document.getElementById("result").innerHTML = `
            ⚠️ <strong>No price data available for ${year} in ${currency}.</strong><br>
            โปรดตรวจสอบว่าปี <strong>${year}</strong> มีข้อมูลราคาในสกุลเงิน <strong>${currency}</strong> หรือไม่`;
        return;
    }
    const monthData = yearPrices[month];
    if (!monthData || !monthData[pkg]) {
        document.getElementById("result").innerHTML = `
            ⚠️ <strong>No price data available for ${month} ${year}, package ${pkg} in ${currency}.</strong><br>
            โปรดตรวจสอบว่า:
            <ul>
                <li>คุณเลือก Agent ที่มีสกุลเงิน <strong>${currency}</strong> ถูกต้อง</li>
                <li>เดือน <strong>${month}</strong>, ปี <strong>${year}</strong> มีข้อมูลราคาสำหรับแพ็กเกจ <strong>${pkg}</strong> ในระบบหรือไม่</li>
            </ul>`;
        return;
    }

    // --- 1. ดึงราคาตั้งต้น ---
    const { season, price: [baseAdult, baseChild] } = monthData[pkg];

    // --- 2. 💥 "เรียกใช้เครื่องยนต์" 💥 ---
    const inputs = {
        pkg: pkg,
        month: month,
        year: year,
        season: season,
        agent: agent, 
        currency: currency,
        adults: adults,
        children: children
    };
    
    const basePrices = {
        adult: baseAdult,
        child: baseChild
    };

    // 🚀 "สตาร์ทเครื่องยนต์" 🚀
    const promoResult = applyPromotions(inputs, basePrices);
    
    // --- 3. คำนวณราคาสุทธิ ---
    
    // 3.1 ราคาผู้ใหญ่ (หลังหัก Agent Rate)
    const roundedAdult = Math.floor(baseAdult * (1 - rate));
    const adultTotal = roundedAdult * adults;
    
    // 3.2 ราคาเด็ก (ใช้ราคาที่ "เครื่องยนต์" บอกมา)
    const childTotal = +(promoResult.finalChildPrice * children).toFixed(2);

    // 3.3 ส่วนลดโปรโมชั่น (ใช้ยอดที่ "เครื่องยนต์" บอกมา)
    const totalDiscount = promoResult.finalTotalDiscount;
    
    // 3.4 ค่า Single Supplement (เหมือนเดิม)
    let singleSup = 0;
    if (adults === 1 && season === 'high') {
        singleSup = SINGLE_SUP_RATE[currency] * PACKAGE_NIGHTS[pkg];
    }
    
    // 3.5 ราคาสุดท้าย
    const total = +(adultTotal + childTotal + singleSup - totalDiscount).toFixed(2);


    // --- 4. แสดงผลลัพธ์ (HTML) ---
    let resultHtml = `<div class="line-group"><strong>Agent Info:</strong></div>`;
    if (agent?.Company) resultHtml += `<div class="line-group">Company: ${agent.Company}</div>`;
    if (agent?.["E-mail"]) resultHtml += `<div class="line-group">Email: ${agent["E-mail"]}</div>`;
    if (agent?.Code) resultHtml += `<div class="line-group">Code: ${agent.Code}</div>`;
    if (agent?.profil) resultHtml += `<div class="line-group">Profile: ${agent.profil}</div>`;
    resultHtml += `<div class="line-group">Currency: ${currency}</div>`;
    resultHtml += `<div class="line-group">Season: ${season.charAt(0).toUpperCase() + season.slice(1)}</div>`;
    resultHtml += `<div class="line-group">Package: ${pkg}</div>`;
    
    let baseAdultPriceDisplay = `Base Adult Price: ${baseAdult.toLocaleString()} ${currency}`;
    if (rate > 0) {
        baseAdultPriceDisplay += ` - ${(rate * 100).toFixed(0)}% = ${roundedAdult.toLocaleString()} ${currency}`;
    }
    resultHtml += `<div class="line-group">${baseAdultPriceDisplay}</div>`;

    resultHtml += `<div class="line-group">Base Child Price: ${baseChild.toLocaleString()} ${currency} (After Promo: ${promoResult.finalChildPrice.toLocaleString()} ${currency})</div>`;

    resultHtml += `<hr style="border-top: 1px dashed #eee; margin: 15px 0;">`;

    resultHtml += `<div class="line-group"><strong>Adult Total:</strong> ${roundedAdult.toLocaleString()} ${currency} &times; ${adults} Adults = <span class="highlight">${adultTotal.toLocaleString()} ${currency}</span></div>`;
    
    if (children > 0) { 
        resultHtml += `<div class="line-group"><strong>Child Total:</strong> ${promoResult.finalChildPrice.toLocaleString()} ${currency} &times; ${children} Children = <span class="highlight">${childTotal.toLocaleString()} ${currency}</span></div>`;
    }

    // ✅ 1. แก้ไขจุดที่ 1 (จุดที่ Error)
    if (singleSup > 0) {
         resultHtml += `<div class="line-group"><strong>Single Supplement:</strong> <span class="highlight">${singleSup.toLocaleString()} ${currency}</span></div>`;
    }

    if (totalDiscount > 0) {
        resultHtml += `<div class="line-group"><strong>Promotions Discount:</strong> <span class="highlight">-${totalDiscount.toLocaleString()} ${currency}</span></div>`;
    }

    resultHtml += `<div class="total-highlight">TOTAL: ${total.toLocaleString()} ${currency}</div>`;

    // --- 5. แสดงรายการโปรโมชั่น (อัตโนมัติ) ---
    const promoLines = [];
    
    // ✅ 2. แก้ไขจุดที่ 2 (พิมพ์ผิด)
    if (rate > 0) {
        promoLines.push(`<span class='red-bold-highlight'>Agent Rate -${(rate * 100).toFixed(0)}%</span>`);
    }
    
    promoResult.promoMessages.forEach(msg => promoLines.push(msg)); 
    
    if (promoLines.length > 0) {
        resultHtml += `<div style="margin-top: 15px; font-size: 0.9em;">Promotions Applied:<br>${promoLines.join('<br>')}</div>`;
    } else {
        resultHtml += `<div style="margin-top: 15px; font-size: 0.9em;">Promotions: None</div>`;
    }

    document.getElementById("result").innerHTML = resultHtml;
}

    document.getElementById('excelFile').addEventListener('change', function(e) {
        const reader = new FileReader();
        reader.onload = function(evt) {
            const data = new Uint8Array(evt.target.result);
            const workbook = XLSX.read(data, { type: 'array' });
            const sheet = workbook.Sheets[workbook.SheetNames[0]];
            agentData = XLSX.utils.sheet_to_json(sheet);
        };
        reader.readAsArrayBuffer(e.target.files[0]);
    });

    document.getElementById('agentSearch').addEventListener('input', function() {
        const keyword = this.value.toLowerCase();
        const container = document.getElementById('agentList');
        container.innerHTML = '';
        if (!keyword) return container.style.display = 'none';
        const filtered = agentData.filter(a => a.Company?.toLowerCase().includes(keyword) || a["E-mail"]?.toLowerCase().includes(keyword));
        filtered.slice(0, 10).forEach(agent => {
            const div = document.createElement('div');
            div.className = 'agent-item';
            div.textContent = `${agent.Company || ''} (${agent["E-mail"] || ''})`;
            div.onclick = () => {
                document.getElementById('agentSearch').value = agent.Company;
                document.getElementById('agentSearch').dataset.selected = JSON.stringify(agent);
                container.style.display = 'none';
            };
            container.appendChild(div);
        });
        container.style.display = filtered.length ? 'block' : 'none';
        });

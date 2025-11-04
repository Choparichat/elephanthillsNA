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

    function calculatePrice() {
        const adults = parseInt(document.getElementById("adults").value);
        const children = parseInt(document.getElementById("children").value);
        const pkg = document.getElementById("package").value;
        const month = document.getElementById("month").value;
        const year = document.getElementById("year").value;
        const { rate, info: agent, currency } = getAgentDiscount();

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

        const { season, price: [baseAdult, baseChild] } = monthData[pkg];

        const roundedAdult = Math.ceil(baseAdult * (1 - rate));
        const adultTotal = roundedAdult * adults;
        const childTotal = isFreeKidsPromo(month) ? 0 : +(baseChild * children).toFixed(2);

        let singleSup = 0;
        if (adults === 1) {
            if (season === 'high') { // Single supplement applies only in high season
                singleSup = SINGLE_SUP_RATE[currency] * PACKAGE_NIGHTS[pkg];
            }
        }
        
        const total = +(adultTotal + childTotal + singleSup).toFixed(2);

        let resultHtml = `<div class="line-group"><strong>Agent Info:</strong></div>`;
        if (agent?.Company) resultHtml += `<div class="line-group">Company: ${agent.Company}</div>`;
        if (agent?.["E-mail"]) resultHtml += `<div class="line-group">Email: ${agent["E-mail"]}</div>`;
        if (agent?.Code) resultHtml += `<div class="line-group">Code: ${agent.Code}</div>`;
        if (agent?.profil) resultHtml += `<div class="line-group">Profile: ${agent.profil}</div>`;
        // Remove the 'Rate' line from Agent Info, as it's now in Promotions
        resultHtml += `<div class="line-group">Currency: ${currency}</div>`;
        resultHtml += `<div class="line-group">Season: ${season.charAt(0).toUpperCase() + season.slice(1)}</div>`;
        resultHtml += `<div class="line-group">Package: ${pkg}</div>`;
        
        // Modified Base Adult Price line to show calculation
        let baseAdultPriceDisplay = `Base Adult Price: ${baseAdult.toLocaleString()} ${currency}`;
        if (rate > 0) {
            baseAdultPriceDisplay += ` - ${(rate * 100).toFixed(0)}% = ${roundedAdult.toLocaleString()} ${currency}`;
        }
        resultHtml += `<div class="line-group">${baseAdultPriceDisplay}</div>`;

        resultHtml += `<div class="line-group">Base Child Price: ${baseChild.toLocaleString()} ${currency}</div>`;

        resultHtml += `<hr style="border-top: 1px dashed #eee; margin: 15px 0;">`;

        // Modified Adult Total line to explicitly show the calculation
        resultHtml += `<div class="line-group"><strong>Adult Total:</strong> ${roundedAdult.toLocaleString()} ${currency} &times; ${adults} Adults = <span class="highlight">${adultTotal.toLocaleString()} ${currency}</span></div>`;
        
        if (children > 0) { // Only show child total if there are children
            resultHtml += `<div class="line-group"><strong>Child Total:</strong> ${isFreeKidsPromo(month) ? "<span class='highlight'>0</span>" : `<span class="highlight">${baseChild.toLocaleString()} ${currency} &times; ${children} Children = ${childTotal.toLocaleString()} ${currency}</span>`}</div>`;
        }

        if (singleSup > 0) { // Only show single supplement if it applies
            resultHtml += `<div class="line-group"><strong>Single Supplement:</strong> <span class="highlight">${singleSup.toLocaleString()} ${currency}</span></div>`;
        }

        resultHtml += `<div class="total-highlight">TOTAL: ${total.toLocaleString()} ${currency}</div>`;

        const promoLines = [];
        if (rate > 0) promoLines.push(`<span class='red-bold-highlight'>Agent Rate -${(rate * 100).toFixed(0)}%</span>`);
        if (isFreeKidsPromo(month)) promoLines.push("<span class='yellow-highlight'>Free Kids Promotion</span>");
        
        if (promoLines.length > 0) {
            resultHtml += `<div style="margin-top: 15px; font-size: 0.9em;">Promotions: <br>${promoLines.join('<br>')}</div>`;
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

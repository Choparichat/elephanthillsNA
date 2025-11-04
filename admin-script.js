// รอให้หน้าเว็บ (DOM) โหลดเสร็จก่อน
document.addEventListener('DOMContentLoaded', () => {
    
    // 1. หา "พื้นที่" ที่เราจะใช้แสดงผล
    const ruleListContainer = document.getElementById('rule-list');

    // 2. ตรวจสอบว่า "สมุดกฎ" (PROMOTION_RULES) โหลดมาหรือยัง
    if (typeof PROMOTION_RULES !== 'undefined' && PROMOTION_RULES.length > 0) {

        // 3. วนลูป "กฎ" แต่ละข้อ
        PROMOTION_RULES.forEach(rule => {
            // 4. สร้าง HTML สำหรับกฎข้อนี้
            const ruleElement = document.createElement('div');
            ruleElement.className = 'rule-item'; // ใช้ .css ที่เราเพิ่งเขียนไป

            // แปลง "เงื่อนไข" (Conditions) และ "สิ่งที่ทำ" (Actions)
            // จาก Object ให้เป็นข้อความที่อ่านง่าย (ด้วย JSON.stringify)
            const conditionsText = JSON.stringify(rule.conditions);
            const actionText = JSON.stringify(rule.action);

            // 5. ใส่ข้อมูลลงใน HTML
            ruleElement.innerHTML = `
                <h3>${rule.name} (ID: ${rule.id})</h3>
                <p><strong>Conditions:</strong> <code>${conditionsText}</code></p>
                <p><strong>Action:</strong> <code>${actionText}</code></p>
                `;

            // 6. เพิ่ม HTML นี้ลงไปใน "พื้นที่" ที่เตรียมไว้
            ruleListContainer.appendChild(ruleElement);
        });

    } else {
        // ถ้ารไม่เจอ "สมุดกฎ"
        ruleListContainer.innerHTML += '<p>No promotion rules found in data.js</p>';
    }

});
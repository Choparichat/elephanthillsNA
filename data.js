const SINGLE_SUP_RATE = { THB: 6500, AUD: 280, NZD: 310 };
        const PACKAGE_NIGHTS = {
            'EH-JS2': 1,
            'EH-JS3': 2,
            'EH-JS4': 3,
            'EH-JLS3': 2,
            'EH-JLS4': 3
        };

        // Initialize prices object correctly for structured data
        const prices = {
            THB: { '2024': {}, '2025': {}, '2026': {} },
            AUD: { '2024': {}, '2025': {}, '2026': {} },
            NZD: { '2024': {}, '2025': {}, '2026': {} }
        };

        // THB Prices
        prices.THB["2024"] = {
            "Nov": {
                "EH-JS2": { season: "high", price: [17350, 4338] },
                "EH-JS3": { season: "high", price: [22900, 5725] },
                "EH-JS4": { season: "high", price: [28500, 7125] },
                "EH-JLS3": { season: "high", price: [26900, 6725] },
                "EH-JLS4": { season: "high", price: [36000, 9000] }
            },
            "Dec": {
                "EH-JS2": { season: "high", price: [17350, 4338] },
                "EH-JS3": { season: "high", price: [22900, 5725] },
                "EH-JS4": { season: "high", price: [28500, 7125] },
                "EH-JLS3": { season: "high", price: [26900, 6725] },
                "EH-JLS4": { season: "high", price: [36000, 9000] }
            },
        };

        prices.THB["2025"] = {
            "Jan": {
                "EH-JS2": { season: "high", price: [17350, 4338] },
                "EH-JS3": { season: "high", price: [22900, 5725] },
                "EH-JS4": { season: "high", price: [28500, 7125] },
                "EH-JLS3": { season: "high", price: [26900, 6725] },
                "EH-JLS4": { season: "high", price: [36000, 9000] }
            },
            "Feb": {
                "EH-JS2": { season: "high", price: [17350, 4338] },
                "EH-JS3": { season: "high", price: [22900, 5725] },
                "EH-JS4": { season: "high", price: [28500, 7125] },
                "EH-JLS3": { season: "high", price: [26900, 6725] },
                "EH-JLS4": { season: "high", price: [36000, 9000] }
            },
            "Mar": {
                "EH-JS2": { season: "high", price: [17350, 4338] },
                "EH-JS3": { season: "high", price: [22900, 5725] },
                "EH-JS4": { season: "high", price: [28500, 7125] },
                "EH-JLS3": { season: "high", price: [26900, 6725] },
                "EH-JLS4": { season: "high", price: [36000, 9000] }
            },
            "Apr": {
                "EH-JS2": { season: "high", price: [17350, 4338] },
                "EH-JS3": { season: "high", price: [22900, 5725] },
                "EH-JS4": { season: "high", price: [28500, 7125] },
                "EH-JLS3": { season: "high", price: [26900, 6725] },
                "EH-JLS4": { season: "high", price: [36000, 9000] }
            },
            "May": {
                "EH-JS2": { season: "low", price: [14600, 1825] },
                "EH-JS3": { season: "low", price: [21500, 2688] },
                "EH-JS4": { season: "low", price: [27100, 3388] },
                "EH-JLS3": { season: "low", price: [25700, 3213] },
                "EH-JLS4": { season: "low", price: [34000, 4250] }
            },
            "Jun": {
                "EH-JS2": { season: "low", price: [14600, 1825] },
                "EH-JS3": { season: "low", price: [21500, 2688] },
                "EH-JS4": { season: "low", price: [27100, 3388] },
                "EH-JLS3": { season: "low", price: [25700, 3213] },
                "EH-JLS4": { season: "low", price: [34000, 4250] }
            },
            "Jul": {
                "EH-JS2": { season: "low", price: [14600, 1825] },
                "EH-JS3": { season: "low", price: [21500, 2688] },
                "EH-JS4": { season: "low", price: [27100, 3388] },
                "EH-JLS3": { season: "high", price: [26900, 6725] },
                "EH-JLS4": { season: "high", price: [36000, 9000] }
            },
            "Aug": {
                "EH-JS2": { season: "low", price: [14600, 1825] },
                "EH-JS3": { season: "low", price: [21500, 2688] },
                "EH-JS4": { season: "low", price: [27100, 3388] },
                "EH-JLS3": { season: "high", price: [26900, 6725] },
                "EH-JLS4": { season: "high", price: [36000, 9000] }
            },
            "Sep": {
                "EH-JS2": { season: "low", price: [14600, 1825] },
                "EH-JS3": { season: "low", price: [21500, 2688] },
                "EH-JS4": { season: "low", price: [27100, 3388] },
                "EH-JLS3": { season: "low", price: [25700, 3213] },
                "EH-JLS4": { season: "low", price: [34000, 4250] }
            },
            "Oct": {
                "EH-JS2": { season: "low", price: [14600, 1825] },
                "EH-JS3": { season: "low", price: [21500, 2688] },
                "EH-JS4": { season: "low", price: [27100, 3388] },
                "EH-JLS3": { season: "low", price: [25700, 3213] },
                "EH-JLS4": { season: "low", price: [34000, 4250] }
            },
            "Nov": {
                "EH-JS2": { season: "high", price: [18220, 4555] },
                "EH-JS3": { season: "high", price: [24045, 6011] },
                "EH-JS4": { season: "high", price: [29925, 7481] },
                "EH-JLS3": { season: "high", price: [28790, 7198] },
                "EH-JLS4": { season: "high", price: [38520, 9630] }
            },
            "Dec": {
                "EH-JS2": { season: "high", price: [18220, 4555] },
                "EH-JS3": { season: "high", price: [24045, 6011] },
                "EH-JS4": { season: "high", price: [29925, 7481] },
                "EH-JLS3": { season: "high", price: [28790, 7198] },
                "EH-JLS4": { season: "high", price: [38520, 9630] }
            }
        };

        prices.THB["2026"] = {
            "Jan": {
                "EH-JS2": { season: "high", price: [18220, 4555] },
                "EH-JS3": { season: "high", price: [24045, 6011] },
                "EH-JS4": { season: "high", price: [29925, 7481] },
                "EH-JLS3": { season: "high", price: [28790, 7198] },
                "EH-JLS4": { season: "high", price: [38520, 9630] }
            },
            "Feb": {
                "EH-JS2": { season: "high", price: [18220, 4555] },
                "EH-JS3": { season: "high", price: [24045, 6011] },
                "EH-JS4": { season: "high", price: [29925, 7481] },
                "EH-JLS3": { season: "high", price: [28790, 7198] },
                "EH-JLS4": { season: "high", price: [38520, 9630] }
            },
            "Mar": {
                "EH-JS2": { season: "high", price: [18220, 4555] },
                "EH-JS3": { season: "high", price: [24045, 6011] },
                "EH-JS4": { season: "high", price: [29925, 7481] },
                "EH-JLS3": { season: "high", price: [28790, 7198] },
                "EH-JLS4": { season: "high", price: [38520, 9630] }
            },
            "Apr": {
                "EH-JS2": { season: "high", price: [18220, 4555] },
                "EH-JS3": { season: "high", price: [24045, 6011] },
                "EH-JS4": { season: "high", price: [29925, 7481] },
                "EH-JLS3": { season: "high", price: [28790, 7198] },
                "EH-JLS4": { season: "high", price: [38520, 9630] }
            },
            "May": {
                "EH-JS2": { season: "low", price: [15330, 1916] },
                "EH-JS3": { season: "low", price: [22575, 2822] },
                "EH-JS4": { season: "low", price: [28455, 3557] },
                "EH-JLS3": { season: "low", price: [27499, 3437] },
                "EH-JLS4": { season: "low", price: [36380, 4548] }
            },
            "Jun": {
                "EH-JS2": { season: "low", price: [15330, 1916] },
                "EH-JS3": { season: "low", price: [22575, 2822] },
                "EH-JS4": { season: "low", price: [28455, 3557] },
                "EH-JLS3": { season: "low", price: [27499, 3437] },
                "EH-JLS4": { season: "low", price: [36380, 4548] }
            },
            "Jul": {
                "EH-JS2": { season: "low", price: [15330, 1916] },
                "EH-JS3": { season: "low", price: [22575, 2822] },
                "EH-JS4": { season: "low", price: [28455, 3557] },
                "EH-JLS3": { season: "high", price: [28790, 7198] },
                "EH-JLS4": { season: "high", price: [38520, 9630] }
            },
            "Aug": {
                "EH-JS2": { season: "low", price: [15330, 1916] },
                "EH-JS3": { season: "low", price: [22575, 2822] },
                "EH-JS4": { season: "low", price: [28455, 3557] },
                "EH-JLS3": { season: "high", price: [28790, 7198] },
                "EH-JLS4": { season: "high", price: [38520, 9630] }
            },
            "Sep": {
                "EH-JS2": { season: "low", price: [15330, 1916] },
                "EH-JS3": { season: "low", price: [22575, 2822] },
                "EH-JS4": { season: "low", price: [28455, 3557] },
                "EH-JLS3": { season: "low", price: [27499, 3437] },
                "EH-JLS4": { season: "low", price: [36380, 4548] }
            },
            "Oct": {
                "EH-JS2": { season: "low", price: [15330, 1916] },
                "EH-JS3": { season: "low", price: [22575, 2822] },
                "EH-JS4": { season: "low", price: [28455, 3557] },
                "EH-JLS3": { season: "low", price: [27499, 3437] },
                "EH-JLS4": { season: "low", price: [36380, 4548] }
            },
        };

        // AUD Prices
        prices.AUD["2024"] = {
            "Nov": {
                "EH-JS2": { season: "high", price: [738, 185] },
                "EH-JS3": { season: "high", price: [974, 244] },
                "EH-JS4": { season: "high", price: [1213, 303] },
                "EH-JLS3": { season: "high", price: [1145, 286] },
                "EH-JLS4": { season: "high", price: [1532, 383] }
            },
            "Dec": {
                "EH-JS2": { season: "high", price: [738, 185] },
                "EH-JS3": { season: "high", price: [974, 244] },
                "EH-JS4": { season: "high", price: [1213, 303] },
                "EH-JLS3": { season: "high", price: [1145, 286] },
                "EH-JLS4": { season: "high", price: [1532, 383] }
            },
        };

        prices.AUD["2025"] = {
            "Jan": {
                "EH-JS2": { season: "high", price: [738, 185] },
                "EH-JS3": { season: "high", price: [974, 244] },
                "EH-JS4": { season: "high", price: [1213, 303] },
                "EH-JLS3": { season: "high", price: [1145, 286] },
                "EH-JLS4": { season: "high", price: [1532, 383] }
            },
            "Feb": {
                "EH-JS2": { season: "high", price: [738, 185] },
                "EH-JS3": { season: "high", price: [974, 244] },
                "EH-JS4": { season: "high", price: [1213, 303] },
                "EH-JLS3": { season: "high", price: [1145, 286] },
                "EH-JLS4": { season: "high", price: [1532, 383] }
            },
            "Mar": {
                "EH-JS2": { season: "high", price: [738, 185] },
                "EH-JS3": { season: "high", price: [974, 244] },
                "EH-JS4": { season: "high", price: [1213, 303] },
                "EH-JLS3": { season: "high", price: [1145, 286] },
                "EH-JLS4": { season: "high", price: [1532, 383] }
            },
            "Apr": {
                "EH-JS2": { season: "high", price: [738, 185] },
                "EH-JS3": { season: "high", price: [974, 244] },
                "EH-JS4": { season: [1213, 303] },
                "EH-JLS3": { season: "high", price: [1145, 286] },
                "EH-JLS4": { season: "high", price: [1532, 383] }
            },
            "May": {
                "EH-JS2": { season: "low", price: [621, 78] },
                "EH-JS3": { season: "low", price: [915, 114] },
                "EH-JS4": { season: "low", price: [1153, 144] },
                "EH-JLS3": { season: "low", price: [1094, 137] },
                "EH-JLS4": { season: "low", price: [1447, 181] }
            },
            "Jun": {
                "EH-JS2": { season: "low", price: [621, 78] },
                "EH-JS3": { season: "low", price: [915, 114] },
                "EH-JS4": { season: "low", price: [1153, 144] },
                "EH-JLS3": { season: "low", price: [1094, 137] },
                "EH-JLS4": { season: "low", price: [1447, 181] }
            },
            "Jul": {
                "EH-JS2": { season: "low", price: [621, 78] },
                "EH-JS3": { season: "low", price: [915, 114] },
                "EH-JS4": { season: "low", price: [1153, 114] },
                "EH-JLS3": { season: "high", price: [1145, 286] },
                "EH-JLS4": { season: "high", price: [1532, 383] }
            },
            "Aug": {
                "EH-JS2": { season: "low", price: [621, 78] },
                "EH-JS3": { season: "low", price: [915, 114] },
                "EH-JS4": { season: "low", price: [1153, 114] },
                "EH-JLS3": { season: "high", price: [1145, 286] },
                "EH-JLS4": { season: "high", price: [1532, 383] }
            },
            "Sep": {
                "EH-JS2": { season: "low", price: [621, 78] },
                "EH-JS3": { season: "low", price: [915, 114] },
                "EH-JS4": { season: "low", price: [1153, 144] },
                "EH-JLS3": { season: "low", price: [1094, 137] },
                "EH-JLS4": { season: "low", price: [1447, 181] }
            },
            "Oct": {
                "EH-JS2": { season: "low", price: [621, 78] },
                "EH-JS3": { season: "low", price: [915, 114] },
                "EH-JS4": { season: "low", price: [1153, 144] },
                "EH-JLS3": { season: "low", price: [1094, 137] },
                "EH-JLS4": { season: "low", price: [1447, 181] }
            },
            "Nov": {
                "EH-JS2": { season: "high", price: [775, 194] },
                "EH-JS3": { season: "high", price: [1023, 256] },
                "EH-JS4": { season: "high", price: [1274, 319] },
                "EH-JLS3": { season: "high", price: [1225, 306] },
                "EH-JLS4": { season: "high", price: [1639, 410] }
            },
            "Dec": {
                "EH-JS2": { season: "high", price: [775, 194] },
                "EH-JS3": { season: "high", price: [1023, 256] },
                "EH-JS4": { season: "high", price: [1274, 319] },
                "EH-JLS3": { season: "high", price: [1225, 306] },
                "EH-JLS4": { season: "high", price: [1639, 410] }
            }
        };

        prices.AUD["2026"] = {
            "Jan": {
                "EH-JS2": { season: "high", price: [775, 194] }, // Adjusted from THB to AUD for 2026 as per pattern
                "EH-JS3": { season: "high", price: [1023, 256] },
                "EH-JS4": { season: "high", price: [1274, 319] },
                "EH-JLS3": { season: "high", price: [1225, 306] },
                "EH-JLS4": { season: "high", price: [1639, 410] }
            },
            "Feb": {
                "EH-JS2": { season: "high", price: [775, 194] },
                "EH-JS3": { season: "high", price: [1023, 256] },
                "EH-JS4": { season: "high", price: [1274, 319] },
                "EH-JLS3": { season: "high", price: [1225, 306] },
                "EH-JLS4": { season: "high", price: [1639, 410] }
            },
            "Mar": {
                "EH-JS2": { season: "high", price: [775, 194] },
                "EH-JS3": { season: "high", price: [1023, 256] },
                "EH-JS4": { season: "high", price: [1274, 319] },
                "EH-JLS3": { season: "high", price: [1225, 306] },
                "EH-JLS4": { season: "high", price: [1639, 410] }
            },
            "Apr": {
                "EH-JS2": { season: "high", price: [775, 194] },
                "EH-JS3": { season: "high", price: [1023, 256] },
                "EH-JS4": { season: "high", price: [1274, 319] },
                "EH-JLS3": { season: "high", price: [1225, 306] },
                "EH-JLS4": { season: "high", price: [1639, 410] }
            },
            "May": {
                "EH-JS2": { season: "low", price: [652, 82] }, // Adjusted from THB to AUD for 2026 as per pattern
                "EH-JS3": { season: "low", price: [960, 120] },
                "EH-JS4": { season: "low", price: [1209, 151] },
                "EH-JLS3": { season: "low", price: [1166, 146] },
                "EH-JLS4": { season: "low", price: [1546, 193] }
            },
            "Jun": {
                "EH-JS2": { season: "low", price: [652, 82] },
                "EH-JS3": { season: "low", price: [960, 120] },
                "EH-JS4": { season: "low", price: [1209, 151] },
                "EH-JLS3": { season: "low", price: [1166, 146] },
                "EH-JLS4": { season: "low", price: [1546, 193] }
            },
            "Jul": {
                "EH-JS2": { season: "low", price: [652, 82] },
                "EH-JS3": { season: "low", price: [960, 120] },
                "EH-JS4": { season: "low", price: [1209, 151] },
                "EH-JLS3": { season: "high", price: [1225, 306] }, // Keeping high season for JLS packages
                "EH-JLS4": { season: "high", price: [1639, 410] }
            },
            "Aug": {
                "EH-JS2": { season: "low", price: [652, 82] },
                "EH-JS3": { season: "low", price: [960, 120] },
                "EH-JS4": { season: "low", price: [1209, 151] },
                "EH-JLS3": { season: "high", price: [1225, 306] },
                "EH-JLS4": { season: "high", price: [1639, 410] }
            },
            "Sep": {
                "EH-JS2": { season: "low", price: [652, 82] },
                "EH-JS3": { season: "low", price: [960, 120] },
                "EH-JS4": { season: "low", price: [1209, 151] },
                "EH-JLS3": { season: "low", price: [1166, 146] },
                "EH-JLS4": { season: "low", price: [1546, 193] }
            },
            "Oct": {
                "EH-JS2": { season: "low", price: [652, 82] },
                "EH-JS3": { season: "low", price: [960, 120] },
                "EH-JS4": { season: "low", price: [1209, 151] },
                "EH-JLS3": { season: "low", price: [1166, 146] },
                "EH-JLS4": { season: "low", price: [1546, 193] }
            },
        };

        // NZD Prices
        prices.NZD["2024"] = {
            "Nov": {
                "EH-JS2": { season: "high", price: [789, 197] },
                "EH-JS3": { season: "high", price: [1041, 260] },
                "EH-JS4": { season: "high", price: [1295, 324] },
                "EH-JLS3": { season: "high", price: [1223, 306] },
                "EH-JLS4": { season: "high", price: [1636, 409] }
            },
            "Dec": {
                "EH-JS2": { season: "high", price: [789, 197] },
                "EH-JS3": { season: "high", price: [1041, 260] },
                "EH-JS4": { season: "high", price: [1295, 324] },
                "EH-JLS3": { season: "high", price: [1223, 306] },
                "EH-JLS4": { season: "high", price: [1636, 409] }
            },
        };

        prices.NZD["2025"] = {
            "Jan": {
                "EH-JS2": { season: "high", price: [789, 197] },
                "EH-JS3": { season: "high", price: [1041, 260] },
                "EH-JS4": { season: "high", price: [1295, 324] },
                "EH-JLS3": { season: "high", price: [1223, 306] },
                "EH-JLS4": { season: "high", price: [1636, 409] }
            },
            "Feb": {
                "EH-JS2": { season: "high", price: [789, 197] },
                "EH-JS3": { season: "high", price: [1041, 260] },
                "EH-JS4": { season: "high", price: [1295, 324] },
                "EH-JLS3": { season: "high", price: [1223, 306] },
                "EH-JLS4": { season: "high", price: [1636, 409] }
            },
            "Mar": {
                "EH-JS2": { season: "high", price: [789, 197] },
                "EH-JS3": { season: "high", price: [1041, 260] },
                "EH-JS4": { season: "high", price: [1295, 324] },
                "EH-JLS3": { season: "high", price: [1223, 306] },
                "EH-JLS4": { season: "high", price: [1636, 409] }
            },
            "Apr": {
                "EH-JS2": { season: "high", price: [789, 197] },
                "EH-JS3": { season: "high", price: [1041, 260] },
                "EH-JS4": { season: "high", price: [1295, 324] },
                "EH-JLS3": { season: "high", price: [1223, 306] },
                "EH-JLS4": { season: "high", price: [1636, 409] }
            },
            "May": {
                "EH-JS2": { season: "low", price: [664, 83] },
                "EH-JS3": { season: "low", price: [977, 122] },
                "EH-JS4": { season: "low", price: [1232, 154] },
                "EH-JLS3": { season: "low", price: [1168, 146] },
                "EH-JLS4": { season: "low", price: [1545, 193] }
            },
            "Jun": {
                "EH-JS2": { season: "low", price: [664, 83] },
                "EH-JS3": { season: "low", price: [977, 122] },
                "EH-JS4": { season: "low", price: [1232, 154] },
                "EH-JLS3": { season: "low", price: [1168, 146] },
                "EH-JLS4": { season: "low", price: [1545, 193] }
            },
            "Jul": {
                "EH-JS2": { season: "low", price: [664, 83] },
                "EH-JS3": { season: "low", price: [977, 122] },
                "EH-JS4": { season: "low", price: [1232, 154] },
                "EH-JLS3": { season: "high", price: [1223, 306] },
                "EH-JLS4": { season: "high", price: [1636, 409] }
            },
            "Aug": {
                "EH-JS2": { season: "low", price: [664, 83] },
                "EH-JS3": { season: "low", price: [977, 122] },
                "EH-JS4": { season: "low", price: [1232, 154] },
                "EH-JLS3": { season: "high", price: [1223, 306] },
                "EH-JLS4": { season: "high", price: [1636, 409] }
            },
            "Sep": {
                "EH-JS2": { season: "low", price: [664, 83] },
                "EH-JS3": { season: "low", price: [977, 122] },
                "EH-JS4": { season: "low", price: [1232, 154] },
                "EH-JLS3": { season: "low", price: [1168, 146] },
                "EH-JLS4": { season: "low", price: [1545, 193] }
            },
            "Oct": {
                "EH-JS2": { season: "low", price: [664, 83] },
                "EH-JS3": { season: "low", price: [977, 122] },
                "EH-JS4": { season: "low", price: [1232, 154] },
                "EH-JLS3": { season: "low", price: [1168, 146] },
                "EH-JLS4": { season: "low", price: [1545, 193] }
            },
            "Nov": {
                "EH-JS2": { season: "high", price: [828, 207] },
                "EH-JS3": { season: "high", price: [1093, 273] },
                "EH-JS4": { season: "high", price: [1360, 340] },
                "EH-JLS3": { season: "high", price: [1309, 327] },
                "EH-JLS4": { season: "high", price: [1750, 438] }
            },
            "Dec": {
                "EH-JS2": { season: "high", price: [828, 207] },
                "EH-JS3": { season: "high", price: [1093, 273] },
                "EH-JS4": { season: "high", price: [1360, 340] },
                "EH-JLS3": { season: "high", price: [1309, 327] },
                "EH-JLS4": { season: "high", price: [1750, 438] }
            }
        };

        // NZD Prices 2026 (based on provided, incomplete data - will use what's available)
        prices.NZD["2026"] = {
            "Jan": {
                "EH-JS2": { season: "high", price: [828, 207] },
                "EH-JS3": { season: "high", price: [1093, 273] },
                "EH-JS4": { season: "high", price: [1360, 340] },
                "EH-JLS3": { season: "high", price: [1309, 327] },
                "EH-JLS4": { season: "high", price: [1750, 438] }
            },
            "Feb": {
                "EH-JS2": { season: "high", price: [828, 207] },
                "EH-JS3": { season: "high", price: [1093, 273] },
                "EH-JS4": { season: "high", price: [1360, 340] },
                "EH-JLS3": { season: "high", price: [1309, 327] },
                "EH-JLS4": { season: "high", price: [1750, 438] }
            },
            "Mar": {
                "EH-JS2": { season: "high", price: [828, 207] },
                "EH-JS3": { season: "high", price: [1093, 273] },
                "EH-JS4": { season: "high", price: [1360, 340] },
                "EH-JLS3": { season: "high", price: [1309, 327] },
                "EH-JLS4": { season: "high", price: [1750, 438] }
            },
            "Apr": { // Adding April based on the high season pattern from 2025
                "EH-JS2": { season: "high", price: [828, 207] },
                "EH-JS3": { season: "high", price: [1093, 273] },
                "EH-JS4": { season: "high", price: [1360, 340] },
                "EH-JLS3": { season: "high", price: [1309, 327] },
                "EH-JLS4": { season: "high", price: [1750, 438] }
            },
            "May": { // Adding May based on the low season pattern from 2025
                "EH-JS2": { season: "low", price: [664, 83] },
                "EH-JS3": { season: "low", price: [977, 122] },
                "EH-JS4": { season: "low", price: [1232, 154] },
                "EH-JLS3": { season: "low", price: [1168, 146] },
                "EH-JLS4": { season: "low", price: [1545, 193] }
            },
            "Jun": { // Adding June based on the low season pattern from 2025
                "EH-JS2": { season: "low", price: [664, 83] },
                "EH-JS3": { season: "low", price: [977, 122] },
                "EH-JS4": { season: "low", price: [1232, 154] },
                "EH-JLS3": { season: "low", price: [1168, 146] },
                "EH-JLS4": { season: "low", price: [1545, 193] }
            },
            "Jul": { // Adding July based on the low/high season pattern from 2025
                "EH-JS2": { season: "low", price: [664, 83] },
                "EH-JS3": { season: "low", price: [977, 122] },
                "EH-JS4": { season: "low", price: [1232, 154] },
                "EH-JLS3": { season: "high", price: [1309, 327] }, // Using 2025 High season rates for JLS
                "EH-JLS4": { season: "high", price: [1750, 438] }  // Using 2025 High season rates for JLS
            },
            "Aug": { // Adding August based on the low/high season pattern from 2025
                "EH-JS2": { season: "low", price: [664, 83] },
                "EH-JS3": { season: "low", price: [977, 122] },
                "EH-JS4": { season: "low", price: [1232, 154] },
                "EH-JLS3": { season: "high", price: [1309, 327] },
                "EH-JLS4": { season: "high", price: [1750, 438] }
            },
            "Sep": { // Adding Sep based on the low season pattern from 2025
                "EH-JS2": { season: "low", price: [664, 83] },
                "EH-JS3": { season: "low", price: [977, 122] },
                "EH-JS4": { season: "low", price: [1232, 154] },
                "EH-JLS3": { season: "low", price: [1168, 146] },
                "EH-JLS4": { season: "low", price: [1545, 193] }
            },
            "Oct": { // Adding Oct based on the low season pattern from 2025
                "EH-JS2": { season: "low", price: [664, 83] },
                "EH-JS3": { season: "low", price: [977, 122] },
                "EH-JS4": { season: "low", price: [1232, 154] },
                "EH-JLS3": { season: "low", price: [1168, 146] },
                "EH-JLS4": { season: "low", price: [1545, 193] }
            },
            "Nov": { // Adding Nov based on the high season pattern from 2025
                "EH-JS2": { season: "high", price: [828, 207] },
                "EH-JS3": { season: "high", price: [1093, 273] },
                "EH-JS4": { season: "high", price: [1360, 340] },
                "EH-JLS3": { season: "high", price: [1309, 327] },
                "EH-JLS4": { season: "high", price: [1750, 438] }
            },
            "Dec": { // Adding Dec based on the high season pattern from 2025
                "EH-JS2": { season: "high", price: [828, 207] },
                "EH-JS3": { season: "high", price: [1093, 273] },
                "EH-JS4": { season: "high", price: [1360, 340] },
                "EH-JLS3": { season: "high", price: [1309, 327] },
                "EH-JLS4": { season: "high", price: [1750, 438] }
            }
        };
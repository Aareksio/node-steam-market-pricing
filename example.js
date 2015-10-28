var market = require('./index.js');

var names = [
    'PP-Bizon | Urban Dashed (Field-Tested)',
    'SG 553 | Traveler (Factory New)',
    'Operation Breakout Weapon Case',
    'Sawed-Off | Origami (Well-Worn)',
    'Sticker | Kawaii Killer CT',
    'MP9 | Storm (Minimal Wear)',
    'UMP-45 | Corporal (Field-Tested)',
    'MAG-7 | Seabird (Field-Tested)',
    'Tec-9 | Bamboo Forest (Factory New)',
    'Operation Bloodhound Challenge Coin',
    'CZ75-Auto | Twist (Field-Tested)',
    'Sawed-Off | Origami (Field-Tested)',
    'MP7 | Urban Hazard (Field-Tested)',
    'Negev | Desert-Strike (Field-Tested)',
    'AK-47 | Elite Build (Minimal Wear)',
    'CZ75-Auto | Pole Position (Minimal Wear)',
    'AK-47 | Blue Laminate (Field-Tested)',
    'Desert Eagle | Bronze Deco (Field-Tested)',
    'Glock-18 | Death Rattle (Minimal Wear)',
    'P250 | Boreal Forest (Minimal Wear)',
    'Dual Berettas | Contractor (Field-Tested)',
    'Sticker | Team Dignitas | Cologne 2014'
];

market.getItemsPrice(730, names, function(data) {
    console.log(data);
    console.log(data['Dual Berettas | Contractor (Field-Tested)']);
});

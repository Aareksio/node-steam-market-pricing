# Steam market price checker for Node.js
[![NPM version](https://img.shields.io/npm/v/steam-market-pricing.svg)](https://npmjs.org/package/steam-market-pricing "View this project on NPM")
[![NPM license](https://img.shields.io/npm/l/steam-market-pricing.svg)](https://npmjs.org/package/steam-market-pricing "View this project on NPM")

## Installation

Install using:
```js
npm install steam-market-pricing
```

## Usage

### Get single item data
**Input:**
```js
var market = require('steam-market-pricing');

market.getItemPrice(730, 'MP9 | Storm (Minimal Wear)', function(err, data) {
    if(!err) {
        console.log(data);
    }
});
```

**Output:**
```json
{
    "success": true,
    "lowest_price": "$0.06",
    "volume": "237",
    "median_price": "$0.04",
    "market_hash_name": "MP9 | Storm (Minimal Wear)"
}
```

### Get multiple items data
**Input:**
```js
var market = require('steam-market-pricing');

var names = [
    'MP9 | Storm (Minimal Wear)', 
    'Sawed-Off | Origami (Well-Worn)'
];

market.getItemsPrice(730, names, function(data) {
    //console.log(data);
    for(var i in names) {
        console.log(names[i] + ' median price: ' + data[names[i]]['median_price']);
    }
});
```

**Output:**
```
MP9 | Storm (Minimal Wear) median price: $0.05
Sawed-Off | Origami (Well-Worn) median price: $0.09
```

### Get single item data using getItemsPrice
**Input:**
```js
var market = require('steam-market-pricing');

market.getItemsPrice(730, 'MP9 | Storm (Minimal Wear)', function(data) {
    console.log(data);
});
```

**Output:**
```json
{
    "Sawed-Off | Origami (Well-Worn)": {
        "success": true,
        "lowest_price": "$0.09",
        "volume": "160",
        "median_price": "$0.07"
    }
}
```

**Note:** You can't handle response errors using getItemsPrice() method, any error will show as `success`: `false`.

## Methods

### getItemPrice(appid, name, callback, [currency])
- `appid` - Steam application id
- `name` - Item name, market hashed
- `callback` - Callback function, called on response
    - `err` - Request error, null if none
    - `data` - JSON response data
- `currency` - Optional. Currency code (see: https://github.com/SteamRE/SteamKit/blob/master/Resources/SteamLanguage/enums.steamd#L696)

Requests steam item market details

### getItemsPrice(appid, names, callback, [currency])
- `appid` - Steam application id
- `names` - Array with item names, market hashed
- `callback` - Callback function, called on response
    - `data` - JSON response data
- `currency` - Optional. Currency code (see: https://github.com/SteamRE/SteamKit/blob/master/Resources/SteamLanguage/enums.steamd#L696)

Requests multiple steam items market details. Any error will be shown as `success`: `false`.

## License
MIT


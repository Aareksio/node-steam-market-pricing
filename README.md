# Steam market price checker for Node.js
[![NPM version](https://img.shields.io/npm/v/steam-market-pricing.svg)](https://npmjs.org/package/steam-market-pricing "View this project on NPM")
[![NPM license](https://img.shields.io/npm/l/steam-market-pricing.svg)](https://npmjs.org/package/steam-market-pricing "View this project on NPM")

## Installation

Install using:
```js
npm install steam-market-pricing
```

**Note** Latest release requires `async/await` (node >= 7.6) support to run  to run, install 1.0.3 if your environment does not support it

## Usage

### Get single item data
**Input:**
```js
const market = require('steam-market-pricing');

market.getItemPrice(730, 'MP9 | Storm (Minimal Wear)').then(item => console.log(item));
```

**Output:**
```json
{
    "success": true,
    "lowest_price": "$0.05",
    "volume": "108",
    "median_price": "$0.03",
    "market_hash_name": "MP9 | Storm (Minimal Wear)"
}
```

### Get multiple items data
**Input:**
```js
const market = require('steam-market-pricing');

const names = [
  'MP9 | Storm (Minimal Wear)',
  'Sawed-Off | Origami (Well-Worn)'
];

market.getItemsPrices(730, names).then(items => names.forEach(name => console.log(`${name}: ${items[name].median_price}`)));
```

**Output:**
```
MP9 | Storm (Minimal Wear) median price: $0.03
Sawed-Off | Origami (Well-Worn) median price: $0.09
```

### Get single item data using getItemsPrice
**Input:**
```js
const market = require('steam-market-pricing');

market.getItemsPrices(730, 'Sawed-Off | Origami (Well-Worn)').then(items => console.log(items));
```

**Output:**
```json
{
    "Sawed-Off | Origami (Well-Worn)": {
        "success": true,
        "lowest_price": "$0.12",
        "volume": "18",
        "median_price": "$0.09"
    }
}
```

Use with `await` for the best experience, check `test.js` for examples

## Methods

### getItemPrice(appid, name, [currency = 1])
- `appid` - Steam application id
- `name` - Item name, market hashed
- `currency` - Optional. Currency code

Requests steam item market details. Returns promise.

### getItemsPrices(appid, names[, currency = 1][, concurrency = 1])
- `appid` - Steam application id
- `names` - Array with item names, market hashed
- `currency` - Optional. Currency code
- `currency` - Optional. Number of concurrent requests

Requests multiple steam items market details. Returns promise. 

**Note:** `getItemsPrices` will not throw, instead, it will attach the error into response object: `{ "success": false, "err": HTTPError }` check [GOT errors](https://www.npmjs.com/package/got#errors) for error descriptions

Currency codes can be found [here](https://github.com/SteamRE/SteamKit/blob/master/Resources/SteamLanguage/enums.steamd)

## License

```
The MIT License (MIT)

Copyright (c) 2015-2018 Arkadiusz Sygulski <arkadiusz@sygulski.pl>

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```


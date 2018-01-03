const market = require('../index'); // Replace with 'steam-market-pricing' when used outside module directory

market.getItemPrice(730, 'MP9 | Storm (Minimal Wear)').then(item => console.log(item));

/*
  Example output:

  {
    success: true,
    lowest_price: '$0.05',
    volume: '108',
    median_price: '$0.03',
    market_hash_name: 'MP9 | Storm (Minimal Wear)'
  }
 */

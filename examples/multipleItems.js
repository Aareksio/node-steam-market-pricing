const market = require('../index'); // Replace with 'steam-market-pricing' when used outside module directory

const names = [
  'MP9 | Storm (Minimal Wear)',
  'Sawed-Off | Origami (Well-Worn)'
];

market.getItemsPrices(730, names).then(items => console.log(items));

/*
  Example output:

  {
    'MP9 | Storm (Minimal Wear)': {
      success: true,
      lowest_price: '$0.05',
      volume: '108',
      median_price: '$0.04',
      market_hash_name: 'MP9 | Storm (Minimal Wear)'
    },
    'Sawed-Off | Origami (Well-Worn)': {
      success: true,
      lowest_price: '$0.12',
      volume: '18',
      median_price: '$0.13',
      market_hash_name: 'Sawed-Off | Origami (Well-Worn)'
    }
  }
 */

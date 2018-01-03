const test = require('ava');
const market = require('./index');

test.serial('Retrieves price for single item', async t => {
  const response = await market.getItemPrice(730, 'MP9 | Storm (Minimal Wear)');
  t.true(response.success);
});

test.serial('Retrieves correct selected currency', async t => {
  const response = await market.getItemPrice(730, 'MP9 | Storm (Minimal Wear)', 6);
  t.regex(response.lowest_price, /PLN|zł/);
});

test.serial('Retrieves multiple items prices', async t => {
  const response = await market.getItemsPrices(730, [
    'MP9 | Storm (Minimal Wear)',
    'Sawed-Off | Origami (Well-Worn)'
  ]);

  t.true(response['MP9 | Storm (Minimal Wear)'].success);
  t.true(response['Sawed-Off | Origami (Well-Worn)'].success);
});

test.serial('getItemPrice throws on unknown name', async t => {
  try {
    await market.getItemPrice(730, 'Blah blah');
    t.fail('Got response');
  } catch (err) {
    t.pass();
  }
});

test.serial('getItemsPrices fails silently on unknown name', async t => {
    const response = await market.getItemsPrices(730, 'Blah blah');
    t.false(response['Blah blah'].success);
});

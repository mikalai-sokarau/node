const fs = require('fs');

function getProductsById({ params: { id } }, response) {
  response.cookie('get-products-by-id', 'called');
  fs.readFile('./src/data/index.json', 'utf8', (err, data) => {
    if (err) {
      console.log(err);
    }
    const products = JSON.parse(data).products;
    const result = products.find(item => item.id === +id);
    response.send(result ? result : 'Not found');
  });
}

module.exports = getProductsById;

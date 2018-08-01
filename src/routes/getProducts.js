const fs = require('fs');

function getProducts(request, response) {
  response.cookie('get-products', 'called');
  fs.readFile('./src/data/index.json', 'utf8', (err, data) => {
    if (err) {
      console.log(err);
    }
    const products = JSON.parse(data).products;
    response.send(products ? products : 'No products found');
  });
}

module.exports = getProducts;

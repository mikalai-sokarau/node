const fs = require('fs');

const fakeProduct = {
  id: 4,
  name: 'Supreme T-Shirt - 4',
  brand: 'Supreme - 4',
  price: 499.99,
  options: [
    {
      color: 'yellow'
    },
    {
      size: 'XS'
    }
  ]
};

function postProducts(request, response) {
  response.cookie('post-products', 'called');
  fs.readFile('./src/data/index.json', 'utf8', (err, data) => {
    if (err) {
      console.log(err);
    }
    const products = JSON.parse(data).products;
    products.push(fakeProduct);
    fs.writeFile('./src/data/index.json', JSON.stringify(products));

    response.send(fakeProduct);
  });
  response.send('/api/products/');
}

module.exports = postProducts;

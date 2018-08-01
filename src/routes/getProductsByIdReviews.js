function getProductsByIdReviews(request, response) {
  response.cookie('get-products-by-id-review', 'called');
  response.send('/api/products/:id/:reviews');
}

module.exports = getProductsByIdReviews;

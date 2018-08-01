function home(request, response) {
  response.cookie('home', 'called');
  response.send('home');
}

module.exports = home;

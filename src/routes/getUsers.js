const fs = require('fs');

function getUsers(request, response) {
  response.cookie('get-users', 'called');
  fs.readFile('./src/data/index.json', 'utf8', (err, data) => {
    if (err) {
      console.log(err);
    }
    const users = JSON.parse(data).users;
    response.send(users ? users : 'No users found');
  });
}

module.exports = getUsers;

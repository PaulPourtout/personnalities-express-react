const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const path = require('path');
// const userController = require('./controllers/user');
// const homeController = require('./controllers/home');
// const creationController = require('./controllers/creation');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());


// Pour servir les pages statiques
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));

// Route static vers le build
app.use(express.static('client/build/'));
// Pour la route ci-dessous ('/'), utilisez 'res.render' pour charger le template ejs désiré :
// index page
app.get('/about', (req, res) => {
	res.render('pages/about');
});

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
});



app.listen(8080, (err) => {
  if (err) {
    throw(err);
  }

  console.log('server is running on http://localhost:8080');

});

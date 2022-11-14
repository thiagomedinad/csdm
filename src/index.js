const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const db = require('../routes/queries');

PORT = 8080;
app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)

app.get('/', (req, res) => {
    res.json({message: 'API is working!'})
});

// User CRUD Routes
app.get('/users', db.getAllUsers);
app.get('/users/:id', db.getUser);
app.post('/users', db.addUser);
app.put('/users/:id', db.updateUserName);
app.delete('/users/:id', db.deleteUser);

// Product CRUD Routes
app.get('/products', db.getAllProducts);
app.post('/products/register', db.addProduct);

// Categorie CRUD Routes
app.get('/categorie', db.getAllCategories);
app.post('/categorie/register', db.addCategorie);

app.listen(PORT, () => {
    console.log(`App running on port ${PORT}`);
});
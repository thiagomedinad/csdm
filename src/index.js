const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const db = require('../routes/user');
const db_prod = require('../routes/product');
const db_cat = require('../routes/categorie');

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
app.get('/users/name', db.getUser);
app.post('/users', db.addUser);
app.put('/users/:id', db.updateUserName);
app.delete('/users/:id', db.deleteUser);

// Product CRUD Routes
app.get('/products', db_prod.getAllProducts);
app.get('/products/:id', db_prod.getProductById);
app.post('/products/register', db_prod.addProduct);
app.put('products/:id', db_prod.updateProductName);
//app.delete('products/:id', db_prod.delete);

 
// Categorie CRUD Routes
app.get('/categorie', db_cat.getAllCategories);
app.get('/categorie/:id', db_cat.getCategorieById); //*
app.post('/categorie/register', db_cat.addCategorie);
app.put('/categorie/:id', db_cat.updateCategorie);
app.delete('/categorie/:id', db_cat.deleteCategorie);
  
app.listen(PORT, () => {
    console.log(`App running on port ${PORT}`);
});   
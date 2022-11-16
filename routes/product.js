const { query, request } = require('express');
var mysql = require('mysql');

const con = mysql.createConnection({
    host: 'db-cesarschool.c83ialoosnfk.us-east-1.rds.amazonaws.com',
    user: 'admin',
    password: 'admin123456',
    port: '3306',
    database: 'csdm'
});

con.connect ((error) => {
    if (error) throw error;
});

// Products Routes
const getAllProducts = (req, res) => {
    con.query('SELECT * FROM produto ORDER BY id ASC', (error, results) => {
        if (error) {
            throw error;
        }

        res.status(200).json(results);
    })
}

const addProduct = (req, res) => {
    const { price, time, name, categorie } = req.body;

    var categorie_id;
    con.query('SELECT id FROM categoria WHERE nome = ?', [categorie], (error, results) => {
        if (error) {
            throw error;
        } else {
            categorie_id = parseInt(JSON.stringify(results[0].id));
            console.log(results[0].id);
        }
    })
    
    con.query('INSERT INTO produto2 (categoria_id, preco, prazo, nome) values (?, ?, ?, ?)', [categorie_id, price, time, name], (error, results) => {
        if (error) {
            throw error;
        }

        res.status(201).send('Product successfully registered!');
    })
}


// Categories Routes
const getAllCategories = (req, res) => {
    con.query('SELECT * FROM categoria ORDER BY id ASC', (error, results) => {
        if (error) {
            throw error;
        }

        res.status(200).json(results);
    })
}

const addCategorie = (req, res) => {
    const { name } = req.body;

    con.query('INSERT INTO categoria (nome) values (?)', [name], (error, results) => {
        if (error) {
            throw error;
        }

        res.status(201).send('Categorie successfully registered!');
    })
}

module.exports = {
    addProduct,
    addCategorie,
    getAllCategories,
    getAllProducts
}
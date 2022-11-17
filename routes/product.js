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


var count = 0;
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
	const { price, time, rating, name, categorie } = req.body;
	let categorie_id;

	con.query(`SELECT ID FROM categoria WHERE nome = '${categorie}'`, (error, results) => {
		console.log(categorie);
		if (error) {
			throw error;
		} else {
			categorie_id = results[0].ID;
		}

		con.query(`INSERT INTO produto (categoria_id, preco, prazo, avaliacao, nome) values (${categorie_id}, ${price}, ${time}, ${rating}, "${name}")`,(error, results) => {
			if (error) {
				console.log(error);
				throw error;
			}

			res.status(201).send('Product successfully registered!');
		});
	});
}

const getProductById = (req, res) => {
	const { id } = req.body;

	con.query('SELECT * FROM produto2 WHERE (id) = (?)', [id], (error, results) => {
		if (error) {
			throw error;
		}

		res.status(200).json(results);
	})
}

const updateProductName = (req, res) => {
	const { id, new_name } = req.body;

	con.query('UPDATE produto2 SET (nome)=(?) WHERE (id)=(?)', [new_name, id], (error, results) => {
		// categoria_id, preco, prazo, nome
		if (error) {
			throw error;
		}
		console.log(id);
		console.log(new_name);

		res.status(201).send('Category sucessfully updated!');

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

const updateCategorie = (req, res) => {
	const { id, new_name } = req.body;

	con.query('UPDATE categoria SET (nome)=(?) WHERE (id)=(?)', [new_name, id], (error, results) => {
		if (error) {
			throw error;
		}
		console.log(id);
		console.log(new_name);

		res.status(201).send('Category sucessfully updated!');

	})
}

const getCategorieById = (req, res) => {
	const { id } = req.body;

	con.query('SELECT * FROM categoria WHERE (id) = (?)', [id], (error, results) => {
		if (error) {
			throw error;
		}

		res.status(200).json(results);
	})
}



module.exports = {
	addProduct,
	addCategorie,
	getAllCategories,
	getAllProducts,
	getProductById,
	getCategorieById,
	updateCategorie,
	updateProductName
}
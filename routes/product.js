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

		res.status(200).send(results);
	})
}

const addProduct = (req, res) => {
	const { price, time, name, categorie } = req.body;
	let categorie_id;

	con.query(`SELECT ID FROM categoria WHERE nome = '${categorie}'`, (error, results) => {
		console.log(categorie);
		if (error) {
			throw error;
		} else {
			categorie_id = results[0].ID;
		}

		con.query(`INSERT INTO produto (categoria_id, preco, prazo, nome) values (${categorie_id}, ${price}, ${time}, "${name}")`,(error, results) => {
			if (error) {
				console.log(error);
				throw error;
			}

			res.status(201).send('Product successfully registered!');
		});
	});
}

// Criar um método
const rateProduct = (req, res) => {

}

const getProductById = (req, res) => {
	const { id } = req.params;

	con.query('SELECT * FROM produto2 WHERE (id) = (?)', [id], (error, results) => {
		if (error) {
			throw error;
		}

		res.status(200).send(results);
	})
}

const updateProductName = (req, res) => {
	const  { new_name } = req.body;
	const { id } = req.params;

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


module.exports = {
	addProduct,
	getAllProducts,
	getProductById,
	updateProductName
}
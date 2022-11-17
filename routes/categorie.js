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


// Categories Routes
const getAllCategories = (req, res) => {
	con.query('SELECT * FROM categoria ORDER BY id ASC', (error, results) => {
		if (error) {
			throw error;
		}

		res.status(200).send(results);
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
    const { id } = req.params;
	const name = req.body;

	con.query(`UPDATE categoria SET nome='${name}' WHERE ID=${id}`, (error, results) => {
		if (error) {
			throw error;
		}

		res.status(201).send('Category sucessfully updated!');
	})
}

const getCategorieById = (req, res) => {
	const { id } = req.params;

	con.query('SELECT * FROM categoria WHERE (id) = (?)', [id], (error, results) => {
		if (error) {
			throw error;
		}

		res.status(200).send(results);
	})
}

const deleteCategorie = (req, res) => {
	const { id } = req.params;

	con.query('DROP * FROM categoria WHERE (id) = (?)', [id], (error, results) => {
		if (error) {
			throw error;
		} 

		res.status(200).send(results);
	})
}


module.exports = {
	addCategorie,
	getAllCategories,
	getCategorieById,
	updateCategorie,
    deleteCategorie
}
const { query, request } = require('express');
var mysql = require('mysql');

const con = mysql.createConnection({
    host: 'db-cesarschool.c83ialoosnfk.us-east-1.rds.amazonaws.com',
    user: 'admin',
    password: 'admin123456',
    port: '3306',
    database: 'csdm'
});

con.connect((err) => {
    if (err) throw err;
    console.log('Database connected!');
});

// User Routes
const getAllUsers = (req, res) => {
    con.query('SELECT * FROM usuario ORDER BY id ASC', (error, results) => {
        if (error) {
            throw error;
        }

        res.status(200).send(results);
    })
}



const getUser = (req, res) => {
    const { name } = req.body;
    
    con.query('SELECT * FROM usuario WHERE nome = ?', [name], (error, results) => {
        if (error) {
            throw error;
        }

        res.status(200).send(results);
    });
}

const addUser = (req, res) => {
    const { cpf, name, email } = req.body;

    con.query(`SELECT nome FROM usuario WHERE cpf = ?`, [cpf], (error, results) => {
        if (error) {
            throw error;
        }
        
        if (results[0] != null) {
            return res.status(400).send('CPF already registered!');
        } else {
            con.query('INSERT INTO usuario (cpf, name, email) VALUES (?, ?, ?)', [cpf, name, email], (error, results) => {
                if (error) {
                    throw error;
                }
            });
        }
    });
}

const updateUserName = (req, res) => {
    const name = req.params;
    const { new_name } = req.body;

    con.query('UPDATE usuario SET name = ? WHERE name = ?', 
    [new_name, name], 
    (error, results) => {
        if (error) {
            throw error
        }

        res.status(200).send('User: ? sucessfully modified', [name]);
    });
}

const deleteUser = (req, res) => {
    const name = req.params;

    con.query('SELECT * FROM usuario where name = ?', [name], (error, results) => {
        if (error) {
            throw error;
        }

        if (results[0] != null) {
            con.query('DELETE FROM usuario WHERE name = ?', [name], (error, results) => {
                if (error) {
                    throw error;
                }
        
                res.status(200).send(`User: ${name} was sucessfully deleted!`);
            });
        } else {
            return res.send('User dont exists!');
        }
    });
}

module.exports = {
    con,
    getAllUsers,
    getUser,
    addUser,
    updateUserName,
    deleteUser,
}
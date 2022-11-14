const { query, request } = require('express');
var mysql = require('mysql');

const con = mysql.createConnection({
    host: 'db-cesarschool.c83ialoosnfk.us-east-1.rds.amazonaws.com',
    user: 'admin',
    password: 'admin123456',
    port: '3306',
    database: 'csdm'
})

con.connect((err) => {
    if (err) throw err;
    console.log('Database connected!');
});


const getAllUsers = (req, res) => {
    con.query('SELECT * FROM users ORDER BY id ASC', (error, results) => {
        if (error) {
            throw error;
        }

        res.status(200).json(results);
    })
}

const getUser = (req, res) => {
    const name = req.params.id;
    
    con.query('SELECT * FROM users WHERE name = ?', [name], (error, results) => {
        if (error) {
            throw error;
        }

        res.status(200).json(results);
    });
}

const addUser = (req, res) => {
    const { cpf, name, email } = req.body;

    con.query(`SELECT name FROM users WHERE cpf = ?`, [cpf], (error, results) => {
        if (error) {
            throw error;
        }
        
        if (results[0] != null) {
            return res.status(400).send('CPF already registered!');
        } else {
            con.query('INSERT INTO users (cpf, name, email) VALUES (?, ?, ?)', [cpf, name, email], (error, results) => {
                if (error) {
                    throw error;
                }
            });

            con.query('INSERT INTO account (num) VALUES (1234)', (error, results) => {
                if (error) {
                    throw error;
                }

                res.status(201).send(`User succesfully created!`);
            });
        }
    });
}

const updateUserName = (req, res) => {
    const name = req.params.id;;
    const { new_name } = req.body;

    con.query('UPDATE users SET name = ? WHERE name = ?', 
    [new_name, name], 
    (error, results) => {
        if (error) {
            throw error
        }

        res.status(200).send('User: ? sucessfully modified', [name]);
    });
}

const deleteUser = (req, res) => {
    const name = req.params.id;

    con.query('SELECT * FROM users where name = ?', [name], (error, results) => {
        if (error) {
            throw error;
        }

        if (results[0] != null) {
            con.query('DELETE FROM users WHERE name = ?', [name], (error, results) => {
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
    getAllUsers,
    getUser,
    addUser,
    updateUserName,
    deleteUser,
}
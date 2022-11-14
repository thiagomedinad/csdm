CREATE TABLE users (
    ID SERIAL PRIMARY KEY,
    cpf varchar(11) NOT NULL,
    name varchar(30),
    email varchar(50)
);

CREATE TABLE produto (
    ID SERIAL PRIMARY KEY,
    preco integer NOT NULL,
    prazo varchar(10),
    nota integer DEFAULT 0,
    nome varchar(20)
);

CREATE TABLE categorie (
    ID SERIAL PRIMARY KEY,
    nome varchar(30)
);
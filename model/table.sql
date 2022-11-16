CREATE TABLE usuario (
    ID SERIAL,
    nome varchar(30) NOT NULL,
    PRIMARY KEY (ID)
);

CREATE TABLE produto (
    ID SERIAL,
    preco integer NOT NULL,
    prazo integer DEFAULT 0 NOT NULL,
    avaliacao integer DEFAULT 0 NOT NULL,
    nome varchar(30) NOT NULL
    PRIMARY KEY (ID)
);

CREATE TABLE categoria (
    ID SERIAL,
    id_usuario integer NOT NULL,
    PRIMARY KEY(ID),
    CONSTRAINT fk_categoria_usuario_id_idx FOREIGN KEY (id_usuario) REFERENCES usuario(ID); 
);

CREATE TABLE fornecedor (
    ID SERIAL,

)
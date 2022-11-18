CREATE TABLE usuario (
	ID SERIAL,
	cpf VARCHAR 11,
	name varchar(30) NOT NULL,
	email varchar(30) NOT NULL,
	senha varchar(30) NOT NULL,
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
	description varchar(255),
	PRIMARY KEY(ID),
	CONSTRAINT fk_categoria_usuario_id_idx FOREIGN KEY (id_usuario) REFERENCES usuario(ID);
);

CREATE TABLE fornecedor (
	id SERIAL,
	name varchar(255),
	is_local boolean,
	email varchar(30),
	cellphone varchar(30),
	city varchar(30),
	site varchar(255),
	status varchar(),
	PRIMARY KEY(id)
);

CREATE TABLE fornecedor_categoria (
	id SERIAL,
	fornecedor_id BIGINT UNSIGNED not null,
	category_id BIGINT UNSIGNED not null,
	FOREIGN KEY (fornecedor_id) REFERENCES fornecedor(id),
	FOREIGN KEY (category_id) REFERENCES categoria(id),
	PRIMARY KEY(id)
);

CREATE TABLE fornecedor_produto (
	id SERIAL,
	fornecedor_id BIGINT UNSIGNED NOT NULL,
	produto_id BIGINT UNSIGNED NOT NULL,
	FOREIGN KEY (fornecedor_id) REFERENCES fornecedor(id),
	FOREIGN KEY (produto_id) REFERENCES produto(id),
	PRIMARY KEY(id)
);

CREATE TABLE produto_categoria (
	id SERIAL,
	produto_id BIGINT UNSIGNED NOT NULL,
	category_id BIGINT UNSIGNED NOT NULL,
	FOREIGN KEY (produto_id) REFERENCES produto(id),
	FOREIGN KEY (category_id) REFERENCES categoria(id),
	PRIMARY KEY(id)
);

create table interacao (
	id SERIAL,
	tempo_entrega varchar(255),
	preço float,
	qualidade varchar(255),
	pagamento varchar(255),
	impacto_positivo(255),
	fornecedor_id BIGINT UNSIGNED NOT NULL,
	FOREIGN KEY fornecedor_id references fornecedor(id)
	PRIMARY KEY(id)
);

create table interacao_produto (
	id SERIAL,
	interacao_id BIGINT UNSIGNED NOT NULL,
	produto_id BIGINT UNSIGNED NOT NULL,
	quantidade integer NOT NULL,
	FOREIGN KEY interacao_id REFERENCES interacao(id),
	FOREIGN KEY produto_id REFERENCES produto(id)
	PRIMARY KEY(id)
)

CREATE TABLE usuario (
    ID SERIAL,
    nome varchar(30) NOT NULL,
    PRIMARY KEY (ID)
);

CREATE TABLE categoria (
    ID SERIAL,
	nome varchar(30),
    PRIMARY KEY(ID)
);

CREATE TABLE produto (
    ID SERIAL,
    categoria_id BIGINT UNSIGNED NOT NULL,
    preco double NOT NULL,
    prazo integer DEFAULT 0 NOT NULL,
    avaliacao double DEFAULT 0 NOT NULL,
    nome varchar(30) NOT NULL,
    PRIMARY KEY (ID)
);


CREATE TABLE fornecedor (
	id SERIAL,
	nome varchar(255),
	eh_local boolean,
	email varchar(30),
	celular varchar(30),
	cidade varchar(30),
	site varchar(255),
	PRIMARY KEY(id)
);

CREATE TABLE fornecedor_produto (
	id SERIAL,
	fornecedor_id BIGINT UNSIGNED NOT NULL,
	produto_id BIGINT UNSIGNED NOT NULL,
	FOREIGN KEY (fornecedor_id) REFERENCES fornecedor(id),
	FOREIGN KEY (produto_id) REFERENCES produto(id),
	PRIMARY KEY(id)
);

CREATE TABLE produto_categoria (
	id SERIAL,
	produto_id BIGINT UNSIGNED NOT NULL,
	category_id BIGINT UNSIGNED NOT NULL,
	FOREIGN KEY (produto_id) REFERENCES produto(id),
	FOREIGN KEY (category_id) REFERENCES categoria(id),
	PRIMARY KEY(id)
);

create table interacao (
	id SERIAL,
	tempo_entrega varchar(255),
	preço float,
	qualidade varchar(255),
	pagamento varchar(255),
	fornecedor_id BIGINT UNSIGNED NOT NULL,
	FOREIGN KEY (fornecedor_id) references fornecedor(id),
	PRIMARY KEY(id)
)

create table interacao_produto (
	id SERIAL,
	interacao_id BIGINT UNSIGNED NOT NULL,
	produto_id BIGINT UNSIGNED NOT NULL,
	quantidade integer NOT NULL,
	FOREIGN KEY (interacao_id) REFERENCES interacao(id),
	FOREIGN KEY (produto_id) REFERENCES produto(id),
	PRIMARY KEY(id)
)


select * from categoria;

ALTER TABLE produto 
modify avaliacao double







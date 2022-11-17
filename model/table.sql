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
	fornecedor_id integer not null,
	category_id integer not null,
	FOREIGN KEY (fornecedor_id) REFERENCES fornecedor(id),
	FOREIGN KEY (category_id) REFERENCES categoria(id),
	PRIMARY KEY(id)
);

CREATE TABLE fornecedor_produto (
	id SERIAL,
	fornecedor_id integer NOT NULL,
	produto_id integer NOT NULL,
	FOREIGN KEY (fornecedor_id) REFERENCES fornecedor(id),
	FOREIGN KEY (produto_id) REFERENCES produto(id),
	PRIMARY KEY(id)
);

CREATE TABLE produto_categoria (
	id SERIAL,
	produto_id integer NOT NULL,
	category_id integer NOT NULL,
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
	fornecedor_id integer NOT NULL,
	FOREIGN KEY fornecedor_id references fornecedor(id)
	PRIMARY KEY(id)
);

create table interacao_produto (
	id SERIAL,
	interacao_id integer NOT NULL,
	produto_id integer NOT NULL,
	quantidade integer NOT NULL,
	FOREIGN KEY interacao_id REFERENCES interacao(id),
	FOREIGN KEY produto_id REFERENCES produto(id)
	PRIMARY KEY(id)
)





DROP DATABASE IF EXISTS tempo;
CREATE DATABASE tempo;
USE tempo;

CREATE TABLE bands (
	id INT AUTO_INCREMENT NOT NULL,
	name VARCHAR(50) NOT NULL,
	photoURL VARCHAR(255),
	hometown VARCHAR(100),
    genre VARCHAR(100),
    bio TEXT(1000),
	/* Set ID as primary key */
	PRIMARY KEY (id)
);

CREATE TABLE discog (
	id INT AUTO_INCREMENT NOT NULL,
	title VARCHAR(255) NOT NULL,
	year VARCHAR(255) NOT NULL,
	tracks INT,
	/* Set ID as primary key */
	PRIMARY KEY (id)
);
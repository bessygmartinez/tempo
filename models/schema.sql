DROP DATABASE IF EXISTS gitdown;
CREATE DATABASE gitdown;
USE gitdown;

CREATE TABLE bandmbrs (
	id Int( 11 ) AUTO_INCREMENT NOT NULL,
	name VARCHAR( 50 ) NOT NULL,
	instrument VARCHAR( 50 ),
	hometown VARCHAR(100),
    influence VARCHAR(100),
    bio TEXT(1000),
    profilepic VARCHAR(50),
	/* Set ID as primary key */
	PRIMARY KEY (id)
);

CREATE TABLE discog (
	id Int( 11 ) AUTO_INCREMENT NOT NULL,
	title VARCHAR( 255) NOT NULL,
	year VARCHAR( 255 ) NOT NULL,
	tracks Int(11),
	/* Set ID as primary key */
	PRIMARY KEY (id)
);

CREATE TABLE tour (
	id Int( 11 ) AUTO_INCREMENT NOT NULL,
    venue VARCHAR(255),
	city VARCHAR( 255) NOT NULL,
	state VARCHAR( 255 ) NOT NULL,
	date DATE NOT NULL,
    time TIME,
	/* Set ID as primary key */
	PRIMARY KEY (id)
);

CREATE TABLE merch (
	itemid Int( 11 ) AUTO_INCREMENT NOT NULL,
    item_name VARCHAR(255),
	type VARCHAR( 255) NOT NULL,
	price VARCHAR( 255 ) NOT NULL,
	inventory INT(200)NOT NULL,
	/* Set ID as primary key */
	PRIMARY KEY (itemid)
);

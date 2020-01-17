DROP DATABASE IF EXISTS tempo;
CREATE DATABASE tempo;
USE tempo;
/* parent/referenced table */
CREATE TABLE bands (
	bandId INT AUTO_INCREMENT PRIMARY KEY,
	bandName VARCHAR(100) NOT NULL,
	bandPhotoURL VARCHAR(255),
	bandHometown VARCHAR(100),
    bandGenre VARCHAR(100),
    bandBio TEXT(1000)
);
/*child/referencing table */
CREATE TABLE discog (
	discId INT AUTO_INCREMENT PRIMARY KEY,
	discTitle VARCHAR(255) NOT NULL,
	discYear VARCHAR(255) NOT NULL,
	discTracks INT,
	bandId INT,
	CONSTRAINT fk_category_discog
	FOREIGN KEY (bandId)
		REFERENCES bands(bandId)
		ON DELETE CASCADE
		ON UPDATE CASCADE
);
/*child/referencing table */
CREATE TABLE tours (
	tourId INT AUTO_INCREMENT PRIMARY KEY,
    tourVenue VARCHAR(255),
	tourCity VARCHAR(255) NOT NULL,
	tourState VARCHAR(255) NOT NULL,
	tourDate DATE NOT NULL,
    tourTime TIME,
	bandId INT,
	CONSTRAINT fk_category_tours
	FOREIGN KEY (bandId)
		REFERENCES bands(bandId)
		ON DELETE CASCADE
		ON UPDATE CASCADE
);

CREATE TABLE merch (
	itemId INT AUTO_INCREMENT PRIMARY KEY,
    itemName VARCHAR(255),
	itemType VARCHAR(255) NOT NULL,
	itemPrice VARCHAR(255) NOT NULL,
	itemQuantity INT(200)NOT NULL,
	bandId INT,
	CONSTRAINT fk_category_merch
	FOREIGN KEY (bandId)
		REFERENCES bands(bandId)
		ON DELETE CASCADE
		ON UPDATE CASCADE
);

CREATE TABLE user (
	userId INT AUTO_INCREMENT PRIMARY KEY,
	email VARCHAR(255) NOT NULL,
	password VARCHAR(255) NOT NULL,
	accountType VARCHAR(11),
	createdAt DATETIME,
    updatedAt DATETIME
);
DROP DATABASE IF EXISTS tempo;
CREATE DATABASE tempo;
USE tempo;
/* parent/referenced table */
CREATE TABLE Bands (
	bandId INT AUTO_INCREMENT,
	bandName VARCHAR(100) NOT NULL,
	bandPhotoURL VARCHAR(255),
	bandHometown VARCHAR(100),
    bandGenre VARCHAR(100),
    bandBio TEXT(1000),
    PRIMARY KEY (bandId)
);
/*child/referencing table */
CREATE TABLE Discogs (
	discId INT AUTO_INCREMENT,
	discTitle VARCHAR(255) NOT NULL,
	discYear VARCHAR(255) NOT NULL,
	discTracks INT,
	bandId INT,
    PRIMARY KEY (discId),
	FOREIGN KEY (bandId)
		REFERENCES Bands(bandId)
		ON DELETE CASCADE
		ON UPDATE CASCADE
);
/*child/referencing table */
CREATE TABLE Tours (
	tourId INT AUTO_INCREMENT PRIMARY KEY,
    tourVenue VARCHAR(255),
	tourCity VARCHAR(255) NOT NULL,
	tourState VARCHAR(255) NOT NULL,
	tourDate DATE,
    tourTime TIME,
	bandId INT,
	FOREIGN KEY (bandId)
		REFERENCES Bands(bandId)
		ON DELETE CASCADE
		ON UPDATE CASCADE
);

-- CREATE TABLE User (
-- 	userId INT AUTO_INCREMENT PRIMARY KEY,
-- 	email VARCHAR(255) NOT NULL,
-- 	password VARCHAR(255) NOT NULL,
-- 	accountType VARCHAR(11),
-- 	createdAt DATETIME,
--     updatedAt DATETIME
-- );

-- CREATE TABLE AccountType (
-- 	id INT AUTO_INCREMENT PRIMARY KEY,
--     displayName VARCHAR(255) NOT NULL,
--     userId INT,
-- 	CONSTRAINT fk_category_account_type
-- 	FOREIGN KEY (userId)
-- 		REFERENCES user(userId)
-- 		ON DELETE CASCADE
-- 		ON UPDATE CASCADE
-- );

-- CREATE TABLE merch (
-- 	itemId INT AUTO_INCREMENT PRIMARY KEY,
--     itemName VARCHAR(255),
-- 	itemType VARCHAR(255) NOT NULL,
-- 	itemPrice VARCHAR(255) NOT NULL,
-- 	itemQuantity INT(200)NOT NULL,
-- 	bandId INT,
-- 	CONSTRAINT fk_category_merch
-- 	FOREIGN KEY (bandId)
-- 		REFERENCES band(bandId)
-- 		ON DELETE CASCADE
-- 		ON UPDATE CASCADE
-- );
-- DROP TABLE merch;

-- CREATE TABLE user (
-- 	userId INT AUTO_INCREMENT PRIMARY KEY,
-- 	email VARCHAR(255) NOT NULL,
-- 	password VARCHAR(255) NOT NULL,
-- 	accountType VARCHAR(11),
-- 	createdAt DATETIME,
--     updatedAt DATETIME
-- );

-- CREATE TABLE accountType (
-- 	id INT AUTO_INCREMENT PRIMARY KEY,
--     displayName VARCHAR(255) NOT NULL,
--     userId INT,
-- 	CONSTRAINT fk_category_account_type
-- 	FOREIGN KEY (userId)
-- 		REFERENCES user(userId)
-- 		ON DELETE CASCADE
-- 		ON UPDATE CASCADE
-- );
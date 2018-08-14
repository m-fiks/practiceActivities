DROP DATABASE IF EXISTS wishes_db;

CREATE DATABASE wishes_db;

USE wishes_db;

CREATE TABLE wishes_db
(
    id INT AUTO_INCREMENT NOT NULL,
    wish VARCHAR(100) NOT NULL,
    PRIMARY KEY (id)
);


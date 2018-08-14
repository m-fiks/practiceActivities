DROP DATABASE IF EXISTS moviePlanner_db;

CREATE DATABASE moviePlanner_db;

USE moviePlanner_db;

CREATE TABLE movies
(
    id INT AUTO_INCREMENT NOT NULL,
    movie VARCHAR(100) NOT NULL,
    PRIMARY KEY (id)
);

INSERT INTO movies (movie)
VALUES 
("Superbad"),
("Hercules"),
("Titanic");

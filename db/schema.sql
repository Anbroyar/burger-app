DROP DATABASE IF EXISTS burgers_db;
CREATE DATABASE burgers_db;
USE burgers_db;

CREATE TABLE burgers (
  id int AUTO_INCREMENT,
  burger_name varchar(100) NOT NULL,
  devoured boolean NULL,
  PRIMARY KEY(id)
);

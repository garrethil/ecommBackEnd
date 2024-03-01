-- DROP DATABASE
DROP DATABASE IF EXISTS ecommerce_db;

-- CREATE DATABASE
CREATE DATABASE ecommerce_db;

-- CREATE category TABLE
CREATE TABLE category (
    id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    name VARCHAR(30) NOT NULL
);
-- CREATE product TABLE
CREATE TABLE product (
    id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    product_name STRING NOT NULL,
    price DECIMAL NOT NULL,
    stock INT NOT NULL,
    category_id INT,
    FOREIGN KEY (category_id)
    REFERENCES category(id)
);
-- CREATE tag TABLE
CREATE TABLE tag (
    id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    tag_name STRING
);
-- CREATE productTag TABLE
CREATE TABLE productTag (
    id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    product_id INT,
    tag_id INT
)




-- for help \?
--  list all database \l 
-- create new database create database name;

-- create table
CREATE TABLE products(
     id INT,
     name VARCHAR(20),
     price INT,
     on_sale BOOLEAN



);

-- list all tables inside database \d
-- list all detailes inside  tables  \d tablename

-- add column
-- ALTER TABLE table_name 
-- ADD COLUMN column_name datatype column_constraint;
ALTER TABLE products
ADD COLUMN featured BOOLEAN;

-- delete column
ALTER TABLE table_name 
DROP COLUMN column_name;

ALTER TABLE products
DROP COLUMN featured2;


DROP TABLE [IF EXISTS] table_name 
[CASCADE | RESTRICT];

-- yelp
CREATE TABLE restaurants (
     id BIGSERIAL NOT NULL PRIMARY KEY,
     name VARCHAR(30)NOT NULL,
     location  VARCHAR(30) NOT NULL,
     price_range INT NOT NULL check(price_range >= 1 and price_range <=5)
);

INSERT INTO restaurants(id, name, location, price_range)
VALUES (1,'name1','location1',3);

INSERT INTO restaurants(id, name, location, price_range)
VALUES (2,'name2','location2',2);

INSERT INTO restaurants( name, location, price_range)
VALUES ('name1','location1',1); 
INSERT INTO restaurants( name, location, price_range)
VALUES ('name2','location2',2); 
INSERT INTO restaurants( name, location, price_range)
VALUES ('name3','location3',3);

-- view record
select * from tablename
select * from restaurants; 
select name,price_range from restaurants;

-- update record
UPDATE restaurants SET name = 'name update1', location = 'location update1', price_range = 2 where id =1;


-- 
-- 
-- 
-- 
-- review table
CREATE TABLE reviews (
     id BIGSERIAL NOT NULL PRIMARY KEY,
     restaurant_id BIGINT NOT NULL REFERENCES restaurants(id),
     name VARCHAR(30) NOT NULL,
     review TEXT NOT NULL,
      rating INT NOT NULL CHECK(rating >= 1 AND rating <=5)
);

insert into reviews (name,restaurant_id,review,rating) values('name1',6,'review1',5);  
insert into reviews (name,restaurant_id,review,rating) values('name2',6,'review2',2);  
insert into reviews (name,restaurant_id,review,rating) values('name2',7,'review2',2);  
insert into reviews (name,restaurant_id,review,rating) values('name3',7,'review3',1);  selec
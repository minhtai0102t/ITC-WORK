--CREATE TABLE	
CREATE TABLE CAR (
	id char(10) not null primary key,
	name varchar(50),
	brand varchar(30)
);
CREATE TABLE LAMBORGINI(
	id char(10) not null primary key,
	price int,
	engine varchar(20),
	LAMBO_id char(10) references CAR(id)
);
CREATE TABLE FERRARY(
	id char(10) not null primary key,
	price int,
	engine varchar(20),
	FER_id char(10) references CAR(id)
);

--INSERT INTO LAMBORGINI
INSERT INTO lamborgini
VALUES ('l1' , '1000', 'x100');
INSERT INTO lamborgini
VALUES ('l2' , '2000', 'x200');
INSERT INTO lamborgini
VALUES ('l3' , '3000', 'x300');
INSERT INTO lamborgini
VALUES ('l4' , '4000', 'x400');
--INSERT INTO FERRARY
INSERT INTO ferrary
VALUES ('f1', '1500', 'x200');
INSERT INTO ferrary
VALUES ('f2', '2500', 'x250');
INSERT INTO ferrary
VALUES ('f3', '3500', 'x300');
INSERT INTO ferrary
VALUES ('f4', '4500', 'x350');
INSERT INTO ferrary
VALUES ('f5', '1500', 'x200');


--SELECT
SELECT *
FROM lamborgini, ferrary;

SELECT * 
FROM lamborgini
WHERE engine = 'x100' and price = 2000;

SELECT * 
FROM lamborgini
WHERE engine = 'x100' and price = 1000;


SELECT * 
FROM lamborgini
ORDER BY price DESC;

SELECT * 
FROM lamborgini
ORDER BY price;

SELECT * 
FROM lamborgini
ORDER BY price, id;

SELECT DISTINCT price
FROM ferrary


SELECT *
FROM lamborgini INNER JOIN ferrary ON (lamborgini.price = ferrary.price);

SELECT max(price)
FROM lamborgini

SELECT id 
FROM lamborgini
WHERE price = (SELECT max(price) FROM lamborgini);

SELECT id, max(price)
FROM ferrary
GROUP BY id;

SELECT id, max(price)
FROM ferrary
GROUP BY id
HAVING max(price) > 1500;

--UPDATE
UPDATE lamborgini
SET price = price + 1000;


UPDATE ferrary
SET price = 2000
where id = 'f3';

--DELETE
DELETE 
FROM lamborgini 
WHERE price = 2000;
--VIEW
CREATE VIEW myview AS
	SELECT id, price, engine
	FROM ferrary
	WHERE price > 2000;

SELECT* 
FROM myview;




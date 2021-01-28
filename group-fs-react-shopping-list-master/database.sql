-- Don't forget to add your create table SQL 
-- It is also helpful to include some test data

-- Table structure
CREATE TABLE "list" (
	"id" SERIAL PRIMARY KEY,
	"name" VARCHAR(80) NOT NULL,
	"quantity" INTEGER NOT NULL,
    "unit" VARCHAR (20) NOT NULL,
    "purchased" BOOLEAN DEFAULT 'false'
);

INSERT INTO list (name, quantity, unit)
VALUES ('Apples', '2', 'basket'), 
('Milk', '1', 'gallon'), 
('Eggs', '1', 'Dozen'),
('Coffee', '3', 'pounds'),
('Bacon', '5', 'pounds')

-- PostgreSQL Queries

-- From the Country table
-- Columns: code, name, continent, region, surfacearea, indepyear, population, gnp, localname, governmentform, headofstate, capital


-- Basic command, all the rows and all the columns from the table
SELECT * FROM country

-- Only the first 10 rows
SELECT * FROM country LIMIT 10

-- Only the rows were the surfacearea is greater than 1 million
SELECT * FROM country WHERE surfacearea > 1000000

-- Only the columns name and surfacearea from the rows were the surfacearea is greater than 1 million
SELECT name, surfacearea
FROM country
WHERE surfacearea > 1000000

-- Only the columns name and population where population is not zero and in order by population from least to greatest
SELECT name, population
FROM country
WHERE population != 0
ORDER BY population

-- Only the columns name and population where population is not zero and in order by population from greatest to least
SELECT name, population
FROM country
WHERE population != 0
ORDER BY population DESC

-- Only the 10 most populated countries
SELECT name, population
FROM country
ORDER BY population
DESC LIMIT 10

-- Only the columns name and governmentform, all the rows
SELECT name, governmentform FROM country

-- Only the columns name and governmentform where governmentform is 'Republic'
SELECT name, governmentform
FROM country
WHERE governmentform
LIKE 'Republic'

-- Only the columns name and governmentform where governmentform contains 'Republic'
SELECT name, governmentform
FROM country
WHERE governmentform
LIKE '%Republic'


-- Creating alias columns using AS
SELECT name, population, surfacearea, population / surfacearea AS density
FROM country

-- Only the most densely populated country using the alias column
SELECT name, population, surfacearea, population / surfacearea AS density
FROM country
ORDER BY density DESC
LIMIT 1

-- Using AS and WITH to create an alias table
-- What are the forms of government for the top ten countries by surface area? (HINT: Number 10 is Kazakstan)
WITH top_ten AS (SELECT name, surfacearea, governmentform from country ORDER BY surfacearea DESC LIMIT 10)
SELECT name, governmentform
FROM top_ten

-- Aggregate functions
SELECT SUM(population)
FROM country;

-- Using an alias table and an aggregate function
WITH top_ten AS (SELECT name, surfacearea from country ORDER BY surfacearea DESC LIMIT 10)
SELECT SUM (surfacearea)
FROM top_ten

-- GROUP BY
SELECT region, AVG(lifeexpectancy)
FROM country
GROUP BY region;

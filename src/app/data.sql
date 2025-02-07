--1
SELECT * FROM people WHERE age < 21;
--2
SELECT * FROM people WHERE age >= 21;
--3
SELECT * FROM people WHERE age >= 21 and gender = 'female';
--4 
SELECT * FROM people WHERE age >= 21 and gender = 'male';
--5
SELECT * FROM people ORDER BY age ASC;
--6
SELECT * FROM people WHERE age = (SELECT MAX(age) FROM people WHERE gender = 'female');
--7
SELECT * FROM people WHERE age = (SELECT MIN(age) FROM people WHERE gender = 'male');
--8
SELECT * FROM people WHERE firstname = 'Johnson' ORDER BY gender DESC;
--9
SELECT * FROM people WHERE firstname != 'Adams' ORDER BY age DESC; 11/25 2021
CREATE DATABASE my_database;


-- Connect to the newly created database
\c my_database;


-- Create the table
CREATE TABLE course_list(
    id SERIAL PRIMARY KEY,
    description TEXT,
    category TEXT
);


INSERT INTO course_list (description, category)
VALUES
    ('CSCI 253', 'Course 1'),
    ('CSCI 250', 'Course 2'),
    ('CSCI 264', 'Course 3');

-- DROP TABLE course_list
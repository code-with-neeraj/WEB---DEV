USE delta_app;
SHOW TABLES;

CREATE TABLE user (
    id VARCHAR(50) PRIMARY KEY,
    username VARCHAR(50) UNIQUE,
    email VARCHAR(50) UNIQUE NOT NULL,
    password VARCHAR(50) NOT null
); 

SELECT * FROM user;

SELECT count(*) FROM user;

SELECT * FROM user WHERE username="Max67";


CREATE TABLE IF NOT EXISTS birthdates (
   id INT NOT NULL AUTO_INCREMENT,
   birthdate DATETIME NOT NULL,
   PRIMARY key (id)
)

CREATE TABLE IF NOT EXISTS date_start (
   id INT NOT NULL AUTO_INCREMENT,
   date_start DATETIME NOT NULL,
   PRIMARY key (id)
)

CREATE TABLE IF NOT EXISTS salaries (
   id INT NOT NULL AUTO_INCREMENT,
   salaries DECIMAL NOT NULL,
   PRIMARY key (id)
)

CREATE TABLE IF NOT EXISTS usernames (
   id INT NOT NULL AUTO_INCREMENT,
   username VARCHAR(25),
   PRIMARY key (id)
)

CREATE TABLE IF NOT EXISTS users (
   id INT NOT NULL AUTO_INCREMENT,
   Name VARCHAR(100) NOT NULL,
   email VARCHAR(100) NOT NULL,
   passwrd VARCHAR(200) NOT NULL,
   id_username INT NOT NULL,
   id_salary INT NOT NULL,
   id_date_start INT NOT NULL,
   id_birth_date INT NOT NULL,
   PRIMARY key (id),
   FOREIGN KEY (id_username) REFERENCES usernames(id),
   FOREIGN KEY (id_salary) REFERENCES salaries(id),
   FOREIGN KEY (id_date_start) REFERENCES date_start(id),
   FOREIGN KEY (id_birth_date) REFERENCES birthdates(id)
)

)
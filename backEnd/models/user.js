const db = require("../util/database");

module.exports = class user{
    constructor(id, name, email, password, id_username, 
                id_salary, id_date_start, id_birth_date){

        this.id = id;
        this.name = name;
        this.email = email;
        this.password = password;
        this.id_username = id_username;
        this.id_salary = id_salary;
        this.id_date_start = id_date_start;
        this.id_birth_date = id_birth_date;
    }
    //
    async save(){
        return await db.execute(`INSERT INTO users 
        (name, email, passwrd, id_username, id_salary, id_date_start, id_birth_date) 
        VALUES (?,?,?,?,?,?,?)`,
        [this.name, this.email, this.password, this.id_username ,this.id_salary, this.id_date_start, this.id_birth_date] 
        );
    }
    //	
    static async find_all(){
        return await db.execute(`SELECT id, name, email, id_username,
        id_salary, id_date_start, id_birth_date
        FROM users`);
    }
    //
    static async find_by_id(id){
        return  await db.execute(`SELECT id, name, id_username, 
        id_salary, id_date_start, id_birth_date
        FROM users
        WHERE users.id = ?`,
        [id]
        );
    }
    //
    static async find_by_email(data){
        return await db.execute(`SELECT id
        FROM users
        WHERE users.email = ?`,
        [data]
        );
    }
    //
    static delete_by_id(id){
        return db.execute(`DELETE FROM users
        WHERE users.id = ?` ,
        [id]
        );
    }
    // 
    static async update_by_id(id, name, email , password, id_username, id_salary, id_date_start, id_birth_date){
        return await db.execute(`UPDATE users 
        SET name = ?,
        SET email = ?, 
        SET passwrd = ?, 
        SET id_username = ?, 
        SET id_salary = ?, 
        SET id_date_start = ?, 
        SET id_birth_date = ?
        WHERE users.id = ?`, [name,email,password, id_username
        , id_salary, id_date_start, id_birth_date, id]);
    }

    static async pagination(start, end){
        return await db.execute(`
          SELECT users.id, name, email, id_username, id_salary,
          id_date_start, id_birth_date, salaries.salaries,
          usernames.username, date_start.date_start, 
          birthdates.birthdate
          FROM users
          INNER JOIN salaries ON users.id_salary = salaries.id
          INNER JOIN usernames ON users.id_username = usernames.id
          INNER JOIN date_start ON users.id_date_start = date_start.id
          INNER JOIN birthdates ON users.id_birth_date = birthdates.id
          LIMIT ?, ?`, [start.toString(), end.toString()]);
      }

    static async pagination2 (start, end, username){
        return await db.execute(`SELECT users.id, name, email, salaries.salaries,
        usernames.username, date_start.date_start, 
        birthdates.birthdate
        FROM users
        INNER JOIN salaries on users.id_salary = salaries.id
        INNER JOIN usernames on users.id_username = usernames.id
        INNER JOIN date_start on users.id_date_start = date_start.id
        INNER JOIN birthdates on users.id_birth_date = birthdates.id
        WHERE usernames.username LIKE ?
        LIMIT ?, ?`, 
        [username, start.toString(), end.toString()]);
    }
    
    static async getLastID(){
        return await db.execute(`SELECT MAX(id) 
        FROM users`);
    }

    
}
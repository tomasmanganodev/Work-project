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
    save(){
        return db.execute(`INSERT INTO users 
        (name, email, passwrd, id_username, id_salary, id_date_start, id_birth_date) 
        VALUES (?,?,?,?,?,?,?)`,
        [this.name, this.email, this.password, 1,1,1,1] /* this.id_username, 
         this.id_salary,this.id_date_start ,this.id_birth_date]*/
        );
    }
    //	
    static find_all(){
        return db.execute(`SELECT id, name, email, password, id_username,
        id_salary, id_date_start, id_birth_date
        FROM users`);
    }
    //
    static find_by_id(id){
        return db.execute(`SELECT id, name, email, password, id_username, 
        id_salary, id_date_start, id_birth_date
        FROM users
        WHERE users.id = ?`,
        [id]
        );
    }
    //
    static find_by_email(data){
        return db.execute(`SELECT id
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
    static update_by_id(id){
        return db.execute(`UPDATE users 
        SET name = ?,
        SET email = ?, 
        SET passwrd = ?, 
        SET id_username = ?, 
        SET id_salary = ?, 
        SET id_date_start = ?, 
        SET id_birth_date = ?
        WHERE users.id = ?`, [this.name,this.email,this.password, this.id_username
        , this.id_salary, this.id_date_start, this.id_birth_date, id]);
    }
}
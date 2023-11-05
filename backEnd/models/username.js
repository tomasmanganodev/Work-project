const db = require("../util/database");

module.exports = class username{
    constructor(id, username){
        this.id = id;
        this.username = username;
    }
    //
    save(){
        return db.execute(`INSERT INTO usernames (username) 
        VALUES (?)`,
        [this.username]
        );
    }
    //
    static find_all(){
        return db.execute(`SELECT id, username
        FROM usernames`);
    }
    
    static find_by_id(id){
        return db.execute(`SELECT id, username
        FROM usernames
        WHERE usernames.id = ?`,
        [id]
        );
    }
    //
    static find_by_username(data){
        return db.execute(`SELECT id
        FROM usernames
        WHERE usernames.username = ?`,
        [data]
        );
    }
    //
    static delete_by_id(id){
        return db.execute(`DELETE FROM usernames
        WHERE usernames.id = ?` ,
        [id]
        );
    }
    // 
    static update_by_id(id){
        return db.execute(`UPDATE usernames 
        SET username = ?
        WHERE usernames.id = ?`, [this.username, id]);
    }
}
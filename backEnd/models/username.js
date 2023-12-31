const db = require("../util/database");

module.exports = class username{
    constructor(id, username){
        this.id = id;
        this.username = username;
    }
    //
    async save(){
        return await db.execute(`INSERT INTO usernames (username) 
        VALUES (?)`,
        [this.username]
        );
    }
    //
    static async find_all(){
        return await db.execute(`SELECT id, username
        FROM usernames`);
    }
    
    static async find_by_id(id){
        return await db.execute(`SELECT id, username
        FROM usernames
        WHERE usernames.id = ?`,
        [id]
        );
    }
    //
    static async find_by_username(data){
        return await db.execute(`SELECT *
        FROM usernames
        WHERE usernames.username LIKE ?`,
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
const db = require("../util/database");

module.exports = class username{
    constructor(id, user_name){
        this.id = id;
        this.user_name = user_name;
    }
    //
    save(){
        return db.execute(`INSERT INTO usernames (user_name) 
        VALUES (?)`,
        [this.user_name]
        );
    }
    //
    static find_all(){
        return db.execute(`SELECT id, user_name
        FROM usernames`);
    }
    
    static find_by_id(id){
        return db.execute(`SELECT id, user_name
        FROM usernames
        WHERE usernames.id = ?`,
        [id]
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
        SET user_name = ?
        WHERE usernames.id = ?`, [this.user_name, id]);
    }
}
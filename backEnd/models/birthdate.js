const db = require("../util/database");

module.exports = class birthDate{
    constructor(id, birth_date){
        this.id = id;
        this.birth_date = birth_date;
    }
    //
    save(){
        return db.execute(`INSERT INTO birth_date (birth_date) 
        VALUES (?)`,
        [this.birth_date]
        );
    }
    //	
    static find_all(){
        return db.execute(`SELECT id, birth_date
        FROM birthdates`);
    }
    //
    static find_by_id(id){
        return db.execute(`SELECT id, birth_date
        FROM birthdates
        WHERE birthdates.id = ?`,
        [id]
        );
    }
    //
    static delete_by_id(id){
        return db.execute(`DELETE FROM birthdates
        WHERE birthdates.id = ?` ,
        [id]
        );
    }
    // 
    static update_by_id(id){
        return db.execute(`UPDATE birthdates
        SET birth_date = ?
        WHERE birthdates.id = ?`, [this.birth_date, id]);
    }
}
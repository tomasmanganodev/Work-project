const db = require("../util/database");

module.exports = class birthDate{
    constructor(id, birthdate){
        this.id = id;
        this.birthdate = birthdate;
    }
    //
    async save(){
        return await db.execute(`INSERT INTO birthdates (birthdate) 
        VALUES (?)`,
        [this.birthdate]
        );
    }
    //	
    static find_all(){
        return db.execute(`SELECT id, birthdate
        FROM birthdates`);
    }
    //
    static find_by_id(id){
        return db.execute(`SELECT id, birthdate
        FROM birthdates
        WHERE birthdates.id = ?`,
        [id]
        );
    }
    //
      static async find_by_birthdate(data){
        return await db.execute(`SELECT id
        FROM birthdates
        WHERE birthdates.birthdate = ?`,
        [data]
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
        SET birthdate = ?
        WHERE birthdates.id = ?`, [this.birthdate, id]);
    }
}
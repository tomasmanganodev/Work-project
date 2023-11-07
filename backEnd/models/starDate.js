const db = require("../util/database");

module.exports = class startDate{
    constructor(id, date_start){
        this.id = id;
        this.date_start = date_start;
    }
    //
    async save(){
        return await db.execute(`INSERT INTO date_start (date_start) 
        VALUES (?)`,
        [this.date_start]
        );
    }
    //	
    static find_all(){
        return db.execute(`SELECT id, date_start
        FROM date_start`);
    }
    //
    static find_by_id(id){
        return db.execute(`SELECT id, date_start
        FROM date_start
        WHERE date_start.id = ?`,
        [id]
        );
    }
    //
    static async find_by_datestart(data){
        return await db.execute(`SELECT id
        FROM date_start
        WHERE date_start.date_start = ?`,
        [data]
        );
    }
    //
    static delete_by_id(id){
        return db.execute(`DELETE FROM date_start
        WHERE date_start.id = ?`,
        [id]
        );
    }
    // 
    static update_by_id(id){
        return db.execute(`UPDATE date_start 
        SET date_start = ?
        WHERE date_start.id = ?`, [this.date_start, id]);
    }
}
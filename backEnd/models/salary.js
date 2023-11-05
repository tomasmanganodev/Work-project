const db = require("../util/database");

module.exports = class salaries{
    constructor(id, salaries){
        this.id = id;
        this.salaries = salaries;
    }
    //
    save(){
        return db.execute(`INSERT INTO salaries (salaries) 
        VALUES (?)`,
        [this.salaries]
        );
    }
    //	
    static find_all(){
        return db.execute(`SELECT id, salaries
        FROM salaries`);
    }
    //
    static find_by_id(id){
        return db.execute(`SELECT id, salaries
        FROM salaries
        WHERE salaries.id = ?`,
        [id]
        );
    }
    static find_by_salaries(data){
        return db.execute(`SELECT id
        FROM salaries
        WHERE salaries.salaries = ?`,
        [data]
        );
    }
    //
    static delete_by_id(id){
        return db.execute(`DELETE FROM salaries
        WHERE salaries.id = ?` ,
        [id]
        );
    }
    // 
    static update_by_id(id){
        return db.execute(`UPDATE salaries 
        SET salaries = ?
        WHERE salaries.id = ?`, [this.salaries, id]);
    }

    static checkDataExists(data) {
        return db.execute
        (`SELECT COUNT(*) as count FROM salaries WHERE salaries = ?`, [data]);
    }
          
}
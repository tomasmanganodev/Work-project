const db = require("../util/database");

module.exports = class salary{
    constructor(id, salary){
        this.id = id;
        this.salary = salary;
    }
    //
    save(){
        return db.execute(`INSERT INTO salaries (salary) 
        VALUES (?)`,
        [this.salary]
        );
    }
    //	
    static find_all(){
        return db.execute(`SELECT id, salary
        FROM salaries`);
    }
    //
    static find_by_id(id){
        return db.execute(`SELECT id, salary
        FROM salaries
        WHERE salaries.id = ?`,
        [id]
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
        SET salary = ?
        WHERE salaries.id = ?`, [this.salary, id]);
    }
}
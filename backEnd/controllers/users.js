const user = require("../models/user");
const username = require("../models/username");
const salary = require("../models/salary");
const birthDate = require("../models/birthdate");
const startDate = require("../models/salary");

exports.postAddUser = (req, res, next){
    const name = req.body.name;
    const email = req.body.email;
    const password = req.body.password;
    const username = req.body.username;
    const salary = req.body.salary;
    const date_start = req.body.date_start;
    const birthdate = req.body.birthdate;

    


}
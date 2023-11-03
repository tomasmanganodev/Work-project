const user = require("../models/user");
const username = require("../models/username");
const salary = require("../models/salary");
const birth_date = require("../models/birthdate");
const startDate = require("../models/salary");

exports.postAddUser = async (req, res, next)=>{
    const name = req.body.name;
    const email = req.body.email;
    const password = req.body.password;
    const username = req.body.username;
    const salary = req.body.salary;
    const date_start = req.body.date_start;
    const birthDate = req.body.birthdate;

    const newUser = new user(null, name, email, password,
        1, 1, 1, 1);// username, salary, date_start, birthDate);
    newUser.save();


}
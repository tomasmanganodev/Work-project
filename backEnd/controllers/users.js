const bcrypt =require("bcrypt");
const user = require("../models/user");
const Username = require("../models/username");
const Salary = require("../models/salary");
const birth_date = require("../models/birthdate");
const startDate = require("../models/starDate");
const validation = require("../middlewares/validations");

exports.postAddUser = async (req, res, next)=>{
    const name = req.body.name;
    let email = req.body.email;
    const password = req.body.password;
    let username = req.body.username;
    let salary = req.body.salary;
    let date_start = req.body.date_start;
    let birthDate = req.body.birthdate;
    const val_email = await validation.checkDataExists(email,"users","email");
    const val_username = await validation.checkDataExists(username,"usernames","username");
    const val_Salary = await validation.checkDataExists(salary, "salaries", "salaries");
    const val_birthDate = await validation.checkDataExists(birthDate, "birthdates", "birthdate");
    const val_datestart = await validation.checkDataExists(date_start, "date_start", "date_start");
    const saltRounds = 10;
    
   
     // Check if username already exist
    if (val_username === 0) 
     {
         const newUsername = new Username(null, username);
         newUsername.save();
        const username_id = await Username.find_by_username(username);
        username = username_id[0][0].id;
       
        
     }
     else if(val_username === 1)
     {
        const username_id = await Username.find_by_username(username);
        username = username_id[0][0].id;
        
     } 
    // Check if salary already exist
    if (val_Salary === 0) {
        const newSalary = new Salary(null, salary);
        await newSalary.save();
        const salaryRecord = await Salary.find_by_salaries(salary);
        salary = salaryRecord[0][0].id
        
      } else if (val_Salary === 1) {
        const salaryRecord = await Salary.find_by_salaries(salary);
        salary = salaryRecord[0][0].id
        
      }
    // Check if birthDate already exist
    if(val_birthDate === 0){
        const newBirthdate = new birth_date(null, birthDate);
        await newBirthdate.save();
        const birthDate_id = await birth_date.find_by_birthdate(birthDate);
        
        birthDate = birthDate_id[0][0].id;
    }
    else if(val_birthDate === 1){
        const birthDate_id = await birth_date.find_by_birthdate(birthDate);
        
        birthDate = birthDate_id[0][0].id;
    }
    // Check if datestart already exist
    if(val_datestart === 0){
        const  newDatestart = new startDate(null, date_start);
        await newDatestart.save();
        const date_start_id = await startDate.find_by_datestart(date_start);
        
        date_start = date_start_id[0][0].id;
    }
    else if (val_datestart === 1){
        const date_start_id = await startDate.find_by_datestart(date_start);
        
        date_start = date_start_id[0][0].id;
    }
    
     // Check if email already exist
    
    if (val_email === 0) 
     {
        const salt = await bcrypt.genSalt(saltRounds);
        const hashed_password = await bcrypt.hash(password, salt);
        const newUser = new user(null, name, email, hashed_password,
        username, salary, 
        date_start, birthDate);
        console.log(name, email , hashed_password, username, salary, date_start, birthDate);
        await newUser.save(); 
        return res.status(201).json({ message: "User created" });;  
     }
     else if(val_email === 1)
     {
         const email_id = await user.find_by_email(email);
         return email_id;
    } 
    
}

exports.getUsers = async (req, res, next) => {
    try {
      const users = await user.find_all();
      res.status(201).json({
        list: users[0],
      });
    } catch (error) {
      next(error);
    }
  };
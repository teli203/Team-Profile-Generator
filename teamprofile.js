const mysql = require("mysql"),
const inquirer = require ("inquirer");
const table = require ("table");


//creating the connection for MySql//
const connection = mysql.createConnection({
    host:"localhost",
    port: 3306,
    user: "root", //double check to see if root is still the user//
    password: "hardworkeR/1",
    database: "teamprofile_db"
});

async function init() {
    try {
        const data = await promptUser();
        const md = generateMarkdown(data);

    }
    catch (err) {
        console.log(err);
    }     
}

let department = [];
let roles = [];
let employees = [];

//selection from department//
function populateDepartment() {}
const query = "Select";
connection.query (query, err, res) => {
 if (err) {
     await promptUser ();
    
 }
 res.forEach (department) => {

 }
}
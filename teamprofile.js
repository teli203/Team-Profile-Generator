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
connection.query (query, err, res => {
 if (err) {
     await promptUser ();
    
 }
 res.forEach (department => {
     department.set({
         name: department.name,
         value: department.id,
     })
 })
 return departments;
})

function populateRoles(){
    const query = "Select * from roles";
    connection.query(query, (err,res) => {
        if (err) {
            await promptUser ();
           
        }
        res.forEach (role => {
            role.set({
                name: role.name,
                value: role.id,
            })
        })
    })
    return role;
}

function mainPrompt (){
    inquirer.prompt({
        name: "choice",
        type: "list",
        message:"What can I help you with?",
        choices: 
        [ "Add employees, departments, roles",
        "Update roles, employees, departments",
        "View employees, departments, roles",
        "Exit"]
    }).then(onMainPromptAnswer);
}

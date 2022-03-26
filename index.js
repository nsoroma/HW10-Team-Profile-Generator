const inquirer = require('inquirer');
const { choices } = require('yargs');

const Employee = require("./lib/employee");
const Manager = require("./lib/manager");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");


const path = require("path");
const fs = require("fs");
const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "org.html");
const generateOrg = require("./src/generateorg.js");


// Create Main Menu - Select Type of Employee
let employeeArray = [];

function mainMenu() {
    inquirer.prompt({
        type: 'list',
        name: 'empRole', 
        message: 'Add an employee to the org chart. Select the employee type below:', 
        choices: ["Add a Manager", "Add an Engineer", "Add an Intern", "Exit the program"]

    }).then(function (answer) {
        switch(answer.empRole) {
            case "Add a Manager":
                addManager();
                break;

            case "Add an Engineer":
                addEngineer();
                break;

            case "Add an Intern":
                addIntern();
                break;

        default:
            displayPage();
            
    }
    //    console.log(answer);
    })
}

// Add Manager is selected, also provide Office Number
function addManager() {
    inquirer.prompt ([
      
      {
        type: "input",
        name: "name",
        message: "What is the name of the Manager?"
      },
  
      {
        type: "input",
        name: "id",
        message: "What is the employee ID of the Manager?"
      },
  
      {
        type: "input",
        name: "email",
        message: "What is the Manager's email address?"
      },
  
      {
        type: "input",
        name: "officeNumber",
        message: "What is the Manager's office number?"
      }
  
    ]).then(answers => {
      const manager = new Manager(answers.name, answers.id, answers.email, answers.officeNumber);
      console.log(manager);
      employeeArray.push(manager);

      console.log(employeeArray);
      mainMenu();
    });
  
  }
  

// Add Engineer if selected, extend to include GitHub Name
function addEngineer() {
    inquirer.prompt ([
    
        {
          type: "input",
          name: "name",
          message: "What is the name of the Engineer?"
        },
  
        {
            type: "input",
            name: "id",
            message: "What is the employee ID of the Engineer?"
          },
      
        {
          type: "input",
          name: "email",
          message: "What is the Engineer's email address?"
        },
    
        {
          type: "input",
          name: "github",
          message: "What is the Engineer's GitHub username?"
        }
    
      ]).then(answers => {
        const engineer = new Engineer(answers.name, answers.id, answers.email, answers.github);
        employeeArray.push(engineer);
        console.log(employeeArray);

        mainMenu();
    });
}


// Add Engineer if selected, extend to include GitHub Name
function addIntern() {
    inquirer.prompt ([
    
        {
          type: "input",
          name: "name",
          message: "What is the name of the Intern?"
        },
  
        {
            type: "input",
            name: "id",
            message: "What is the employee ID of the Intern?"
          },
      
        {
          type: "input",
          name: "email",
          message: "What is the Intern's email address?"
        },
  
        {
            type: "input",
            name: "school",
            message: "What school does the Intern attend?"
          },
      
    
      ]).then(answers => {
        const intern = new Intern(answers.name, answers.id, answers.email, answers.school);
        employeeArray.push(intern);
        console.log(employeeArray);

        mainMenu();
    });
}


// Create output directory and display the team to formatted html output
  function displayPage() {
     console.log("All members added")
    if (!fs.existsSync(OUTPUT_DIR)) {
        fs.mkdirSync(OUTPUT_DIR)
    }
    fs.writeFileSync(outputPath, generateOrg(employeeArray), "UTF-8");

 }


mainMenu();
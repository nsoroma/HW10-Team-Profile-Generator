
const generateOrg = (employee) => {
  
    // Initiate array of employee cards
    const employeeCards = [];

    // Write Manager Employee Data to Card
    const writeManager = manager => {
        console.log(manager);
        let managerCard = ` 
        <div class="member-card">
        <div class="card" style="width: 18rem;">
            <div class="card-header"> 
            ${manager.name} <br/>
            <i class="fas fa-mug-hot"></i> Manager</div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${manager.id}</li>
                <li class="list-group-item">Email: <span id="email"><a href="mailto:${manager.email}">${manager.email}</a></span></li>
                <li class="list-group-item">Office Number: ${manager.officeNumber}</li>
            </ul>
        </div>
        </div>
        `;
        employeeCards.push(managerCard);
    }

    // Write Engineer Employee Data to Card
    const writeEngineer = engineer => {
        console.log(engineer);
        let engineerCard = ` 
        <div class="member-card">

        <div class="card" style="width: 18rem;">
            <div class="card-header"> 
            ${engineer.name} <br/>
            <i class="fas fa-glasses"></i> Engineer</div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${engineer.id}</li>
                <li class="list-group-item">Email: <span id="email"><a href="mailto:${engineer.email}">${engineer.email}</a></span></li>
                <li class="list-group-item">Github Username: <a target="_blank" href="https://github.com/${engineer.github}">${engineer.github}</a></li>
            </ul>
        </div>
        </div>
        `;
        employeeCards.push(engineerCard);
    }

    // Write Intern Employee Data to Card
    const writeIntern = intern => {
        console.log(intern);
        let internCard = ` 
        <div class="member-card">
        <div class="card" style="width: 18rem;">
            <div class="card-header"> 
            ${intern.name} <br/>
            <i class="fas fa-user-graduate"></i> Intern</div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${intern.id}</li>
                <li class="list-group-item">Email: <span id="email"><a href="mailto:${intern.email}">${intern.email}</a></span></li>
                <li class="list-group-item">School: ${intern.school}</li>
            </ul>
        </div>
        </div>
        `;
        employeeCards.push(internCard);
    }

    // Display Cards for each employee
    for (let i = 0; i < employee.length; i++) {
        if (employee[i].getRole() === "Manager") {
            writeManager(employee[i]);
        }
        if (employee[i].getRole() === "Engineer") {
            writeEngineer(employee[i]);
        }
        if (employee[i].getRole() === "Intern") {
            writeIntern(employee[i]);
        }
    }

    return employeeCards.join('');
}
// export function to generate entire page
module.exports = employee => {

    return `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

        <!-- JavaScript Bundle with Popper -->

<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">

    <script src="https://kit.fontawesome.com/1e0a13a89f.js" crossorigin="anonymous"></script>
    <link rel="stylesheet" href="../dist/style.css" />
    <title>employee Profile Generator</title>
</head>
<body>
    <header>
    <h1> My Team </h1>
    </header>

    <main> ${generateOrg(employee)} </main>
     
</body>
</html>
    `;
}

//Node packages
const inquirer = require(`inquirer`);
const fs = require('fs');
const path = require('path');

//JS classes
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');

//Employee array
const employees = [];

//Initialize application
function initApp() {
  startHtml();
  addMember();
}

//Add Team members information from question responses
function addMember() {
  inquirer
    .prompt([
      {
        type: 'input',
        name: 'name',
        message: "Enter team member's name",
        default: 'Juan',
      },
      {
        type: 'list',
        name: 'role',
        message: "Select team member's role",
        choices: ['Engineer', 'Intern', 'Manager'],
        default: 'Engineer',
      },
      {
        type: 'input',
        name: 'id',
        message: "Enter team member's id",
        default: '1',
      },
      {
        type: 'input',
        name: 'email',
        message: "Enter team member's email address",
        default: 'juan.sanchez@phila.gov',
      },
    ])
    .then(function ({ name, role, id, email }) {
      let roleInfo = '';
      if (role === 'Engineer') {
        roleInfo = 'GitHub Username';
      } else if (role === 'Intern') {
        roleInfo = 'School Name';
      } else {
        roleInfo = 'Office Number';
      }
      inquirer
        .prompt([
          {
            message: `Enter Team Member's ${roleInfo}`,
            name: 'roleInfo',
          },
          {
            type: 'list',
            message: 'Would you like to add more team members?',
            choices: ['yes', 'no'],
            name: 'moreMembers',
          },
        ])
        .then(function ({ roleInfo, moreMembers }) {
          let newMember;
          if (role === 'Engineer') {
            newMember = new Engineer(name, id, email, roleInfo);
          } else if (role === 'Intern') {
            newMember = new Intern(name, id, email, roleInfo);
          } else {
            newMember = new Manager(name, id, email, roleInfo);
          }
          employees.push(newMember);
          addHtml(newMember).then(function () {
            if (moreMembers === 'yes') {
              addMember();
            } else {
              finishHtml();
            }
          });
        });
    });
}

//Template for creating HTML file
function startHtml() {
  const html = `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-BmbxuPwQa2lc/FVzBcNJ7UAyJxM6wuqIj61tLrc4wSX0szH/Ev+nYRRuWlolflfl" crossorigin="anonymous">
        <script src="https://kit.fontawesome.com/a695a3856f.js" crossorigin="anonymous"></script>
        <link rel="stylesheet" href="/dist/styles.css">
        <title>Team Profile Generator</title>
    </head>
    <body>
        <nav class="navbar navbar-dark bg-dark mb-5">
            <span class="navbar-brand mb-3 mt-3 h1 w-100 text-center">My Team</span>
        </nav>
        <div class="container">
            <div class="row">`;
  fs.writeFile('./dist/index.html', html, function (err) {
    if (err) {
      console.log(err);
    }
  });
  console.log('Enter Team Member Information');
}

//Template for adding team members to html based on roles selected
function addHtml(member) {
  return new Promise(function (resolve, reject) {
    const name = member.getName();
    const role = member.getRole();
    const id = member.getId();
    const email = member.getEmail();
    let data = '';
    if (role === 'Engineer') {
      const gitHub = member.getGithub();
      data = `<div class="col-4">
            <div class="card mx-auto mb-3" style="width: 18rem">
            <h5 class="card-header">${name}<br /><br /><i class="fas fa-glasses"></i> Engineer</h5>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${id}</li>
                <li class="list-group-item">Email:<a href="mailto:${email}" target="_blank"> ${email}</a></li>
                <li class="list-group-item">GitHub:<a href="https://github.com/${gitHub}" target="_blank"> ${gitHub}</a></li>
            </ul>
            </div>
        </div>`;
    } else if (role === 'Intern') {
      const school = member.getSchool();
      data = `<div class="col-4">
            <div class="card mx-auto mb-3" style="width: 18rem">
            <h5 class="card-header">${name}<br /><br /><i class="fas fa-user-graduate"></i> Intern</h5>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${id}</li>
                <li class="list-group-item">Email:<a href="mailto:${email}" target="_blank"> ${email}</a></li>
                <li class="list-group-item">School: ${school}</li>
            </ul>
            </div>
        </div>`;
    } else {
      const officeNumber = member.getOfficeNumber();
      data = `<div class="col-4">
            <div class="card mx-auto mb-3" style="width: 18rem">
            <h5 class="card-header">${name}<br /><br /><i class="fas fa-mug-hot"></i> Manager</h5>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${id}</li>
                <li class="list-group-item">Email:<a href="mailto:${email}" target="_blank"> ${email}</a></li>
                <li class="list-group-item">Office Number: ${officeNumber}</li>
            </ul>
            </div>
        </div>`;
    }
    console.log('Team Member Added');
    fs.appendFile('./dist/index.html', data, function (err) {
      if (err) {
        return reject(err);
      }
      return resolve();
    });
  });
}

//add finishing tags to html file and log finished message
function finishHtml() {
  const html = ` </div>
    </div>
    
</body>
</html>`;

  fs.appendFile('./dist/index.html', html, function (err) {
    if (err) {
      console.log(err);
    }
  });
  console.log('HTML Created');
}

initApp();

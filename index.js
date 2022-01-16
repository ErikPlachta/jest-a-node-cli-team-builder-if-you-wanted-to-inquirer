/*
    Author:: Erik Plachta
    Date:: 01/15/2022
    Purpose:: Use Node.js and Inquirier.js node package to build a README.md
                via command line.  
*/
//----------------------------------------------------------------------------//
//-- Imports


//-- runs prompts
const inquirer = require('inquirer');

//-- builds template based on user defined team
const {set_TeamTemplate} = require('./src/template.js');

//-- Writes myteam.html file
const set_writeTeamFile = require('./utils/write-team.js');

//----------------------------------------------------------------------------//
//-- Running Program

class Init {
  constructor(){
    // TODO:: 01/16/2022 #EP || Add things or remove this is not needed.
    this.set_TeamTemplate = set_TeamTemplate;
    this.set_writeTeamFile = set_writeTeamFile;
    
    //-- Array that holds user and project data. Defined here for ez management    
    this.teamData_Dict = {};
  };

  //--------------------------------------------------------------------------
  //-- Getting User Data

  _verify_AddAnotherEmployee = () => {
    //-- Prompt user to give them choice to add or redo employee

    //-- Print user prompt
    console.log(`
    ==================================
      Keep Building Your Team
    ==================================
    `)

    return inquirer
      .prompt([
        {
          type: 'list',
          name: 'add',
          message: 'Would you like to add another employee to your team?: ',
          choices: ['Yes','No'],
          validate: userChoice => {
            if(userChoice === 'Yes'){
              return true;
            }
            else {
              return false;
            }
          }
        }
      ]);
  };

  _verify_EmployeeEntry = employee_Obj =>  { 
      //-- Prompt user to give them choice to add or redo employee

      //-- Print user prompt
        console.log(`
    ==================================
      Confirming Employee Entry
    ==================================
    - Name: ${employee_Obj.name}
    - Email: ${employee_Obj.email}
    - Role: ${employee_Obj.role}
    `);

    return inquirer
    .prompt([
      {
        type: 'list',
        name: 'add',
        message: 'Would you like to add the above employee to your team?: ',
        choices: ['Yes','No'],
        validate: userChoice => {
          if(userChoice === 'Yes'){
            return employee_Obj;
          }
          else {
            return false;
          }
        }
      }
    ]);
  };

  _get_GitHub(){
    return inquirer
      .prompt([ 
          //-- GitHub Username
        {
          type: 'input',
          name: 'github',
          message: 'Your GitHub Username: ',
          validate: githubInput => {
              if (githubInput) {
              return true;
              } else {
              console.log('Please enter your GitHub username!');
              return false;
              }
          }
        }
      ]);
  };

  _get_EmployeeBasics = () => { /* 
          Uses inquirer.js to prompt user specific details.

          collecting the following values
            name
            github
            email
      */

      console.log(`
  ==================================
    Add an Employee to Your Team
  ==================================
      `);
      
      return inquirer
        .prompt([

          //-- Name
          {
            type: 'input',
            name: 'name',
            message: 'Define employees name: ',
            validate: nameInput => {
              if (nameInput) {
                return true;
              } else {
                console.log('Please enter a name.');
                return false;
              }
            }
          },
          //-- Email Address
          {
              type: 'input',
              name: 'email',
              message: 'Define employees email address: ',
              validate: function(email) {
                // Regex mail check (return true if valid mail)
                let valid_Email = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()\.,;\s@\"]+\.{0,1})+([^<>()\.,;:\s@\"]{2,}|[\d\.]+))$/.test(email);
                if (valid_Email){
                  return true;
                }
                else {
                  console.log('Please enter a valid email address.');
                  return false;
                }
            }
          },
          //-- Role
          {
            type: 'list',
            name: 'role',
            message: 'Define employees role:',
            choices: ['Manager', 'Engineer', 'Intern']
          },          
      ]);
  };

  // set_team_Data


   //-- Runs program
   run(){
    /*
      Primary function that runs the program.
    */
    
    //-- Get user specific info
    this._get_EmployeeBasics()
      //-- then write userdata to array
      .then(employee_Obj => {
        return this._verify_EmployeeEntry(employee_Obj),employee_Obj
      })
      
      //-- Confirm if created employee is ok to add.
      .then(results => {
        if(results != false) {
          // -- Add to Dict
          this.teamData_Dict[Object.keys(this.teamData_Dict).length+1] = results;
        }
      })

      .then( () => {
        return this._verify_AddAnotherEmployee();
      })
      
      //--- Determine if done. if YES, 
      .then( results => {
        if (results == true) {

        }
        else {
          return this.teamData_Dict;
        }
      })
      
      //-- Build the HTML content
      .then( teamData_Dict => {
        return set_TeamTemplate(teamData_Dict);
      })

      //-- Write File to ./dist/myteam.html
      .then( template_MyTeam => {
        return set_writeTeamFile(template_MyTeam);
      })
  
      //-- If success, we take the writeFileResponse object provided by the writeFile()
      // function's resolve() execution to log it.
      .then(write_Response => {
        console.log(write_Response);
      })
      //-- if it fails any-step along the way, catch error nd log here.
      .catch(err => {
        console.log("ERROR: ", err);
      })
    ;
  
  };

}; 


//------------------------------------------------------------------------------
//-- Export / Running
/* 
  If calling index.js directly, creates Init OBJ and then run
    - For using the app with CLI `node index`
  
  If calling index.js indirectly, exports Init class.
    - For testing the app with jest `npm test index`

*/

if (require.main === module) {
  // console.log('called directly');
  const init = new Init();
  init.run();
} else {
  // console.log('Exporting');
  module.exports = Init;
}
//-- Runs program

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

    //-- all team-members have been added
    // this.teamComplete = false;
  };

  



  //----------------------------------------------------------------------------
  //-- Validating User Data

  //-- User to verify if want to add another employee
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
          message: 'Would you like to add ANOTHER employee to your team?: ',
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

  //-- User to verify if employee info is correct
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
        message: 'Is this correct?: ',
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



  //--------------------------------------------------------------------------
  //-- Getting User Data

  //-- Get GitHub Username
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

  //-- Function that asks employee details
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
            choices: ['Manager', 'Engineer', 'Intern'],
          },          
      ]);
  };

  //----------------------------------------------------------------------------
  //-- Primary function that runs building the team
  _set_Team = () => { 
    //-- runs team building and then when completed lets run() know it can build to write


    //-- Used for each time this is called, so employee created can be added to team if needed
    let temp_Employee = {};

    //-- Get user specific info
    this._get_EmployeeBasics()
      
      //-- Define role specific values
      .then(employee_Obj => {  
        return _get_Roles(employee_Obj);
      })

      .then(employee_Obj => {
        temp_Employee = employee_Obj;
        return this._verify_EmployeeEntry(employee_Obj)
      })
      
      //-- Confirm if created employee is ok to add.
      .then(results => {
        //-- If want to add to dict
        if(results.add === 'Yes') {
          

          //-- create ID based on next available
          temp_Employee.id = Object.keys(this.teamData_Dict).length + 1;
          // -- Add to Dict
          this.teamData_Dict[Object.keys(this.teamData_Dict).length + 1] = temp_Employee;
          // console.log(`Lenght: ${Object.keys(this.teamData_Dict).length}`)
        } 
        //-- don't add to dict
        else {
          console.log("don't add")
        }
      })

      .then( () => {
        return this._verify_AddAnotherEmployee();
      })
      
      //--- Determine if done. if YES, 
      .then( ({ add }) => {
        
        if (add === 'Yes') {
          //-- re-run to add another
          this._set_Team();
        }
        
        //-- Move on from user entry to build content
        else {
          console.log(`this.teamData_Dict: ${JSON.stringify(this.teamData_Dict)}`);
          return this._BuildingContent();
          
        }
    })
    .catch( err => {
      console.log(`Error: ${err}`);
    });
  };


  //----------------------------------------------------------------------------
  //-- makes template then creates file

  _BuildingContent = () => { 

    //-- Build the HTML content
    let template = this.set_TeamTemplate(this.teamData_Dict);
    // console.log(template);
    set_writeTeamFile(template)
     .then(write_Response => {
        console.log(write_Response);
      })
      //-- if it fails any-step along the way, catch error nd log here.
      .catch(err => {
        console.log("ERROR: ", err);
      });
    
    
      // //-- Write File to ./dist/myteam.html
      // .then( template_MyTeam => {
      //   return set_writeTeamFile(template_MyTeam);
      // })
  
      // //-- If success, we take the writeFileResponse object provided by the writeFile()
      // // function's resolve() execution to log it.
      // .then(write_Response => {
      //   console.log(write_Response);
      // })
      // //-- if it fails any-step along the way, catch error nd log here.
      // .catch(err => {
      //   console.log("ERROR: ", err);
      // });
  };
  

   //-- Runs program
   run(){
    //-- Starts the APP by kicking off team builder
    
    this._set_Team()
    
    
      
    //   //-- Build the HTML content
    //   .then( teamData_Dict => {
    //     return set_TeamTemplate(this.teamData_Dict);
    //   })

    //   //-- Write File to ./dist/myteam.html
    //   .then( template_MyTeam => {
    //     return set_writeTeamFile(template_MyTeam);
    //   })
  
    //   //-- If success, we take the writeFileResponse object provided by the writeFile()
    //   // function's resolve() execution to log it.
    //   .then(write_Response => {
    //     console.log(write_Response);
    //   })
    //   //-- if it fails any-step along the way, catch error nd log here.
    //   .catch(err => {
    //     console.log("ERROR: ", err);
    //   })
    // ;
  
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

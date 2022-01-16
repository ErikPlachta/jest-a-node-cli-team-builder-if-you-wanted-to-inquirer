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
  };

  //----------------------------------------------------------------------------
  //-- Getting Data about the project specifically.

  get_ProjectData = () => {
    /* 
        Uses inquirer.js to prompt user for README specific details.

        collecting the following values
          
            license
            title
            description
            installation
            guidelines
            useage
    */


    console.log(`
  =========================
  Enter Project Information
  =========================
    `);

    return inquirer
      .prompt([
        
        //-- License assigned to project
        //-- TODO:: 01/07/2022 #EP || Add more
        {
          type: 'list',
          name: 'License',
          message: 'Add a License:',
          choices: ['None','ISC', 'MIT', 'GNU']
        },
      //-- Project Title
        {
          type: 'input',
          name: 'Title',
          message: 'Enter your Project Title ( as appears on GitHub ): ',
          validate: input => {
            if (input) {
              return true;
            } else {
              console.log('Please enter a Project Title!');
              return false;
            }
            }
        },
        
        //-- Description
        {
          type: 'input',
          name: 'Description',
          message: 'Enter your Project description: ',
          validate: input => {
            if (input) {
              return true;
            } else {
              console.log('Please enter your Project Description!');
              return false;
            }
          }
        },
        
        //-- Installation
          // What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.
          {
            type: 'input',
            name: 'Installation',
            message: 'Enter installation instructions (text summary) : ',
            validate: input => {
              if (input) {
                return true;
              } else {
                console.log('Please enter your Project installation instructions!');
                return false;
              }
            }
          },
          
        //-- Gudielines
          //-- 
          {
            type: 'input',
            name: 'Guidelines',
            message: 'Enter your project guidelines: ',
            validate: input => {
              if (input) {
                return true;
              } else {
                console.log('Please enter your Project guidelines!');
                return false;
              }
            }
          },

        //-- Useage
          // Provide instructions and examples for use. Include screenshots as needed.
          {
            type: 'input',
            name: 'Useage_summary',
            message: 'Enter a short summary of HOW to use the project ( syntax is next ): ',
            validate: input => {
              if (input) {
                return true;
              } else {
                console.log('Please enter your Project useage summary!');
                return false;
              }
              }
          },

          {
            type: 'input',
            name: 'Useage_syntax',
            message: 'Enter the syntax  ( required ): ',
            validate: input => {
              if (input) {
                return true;
              } else {
                console.log('Please enter your Project useage syntax!');
                return false;
              }
            }
          },

          //-- Testing
          //-- 
          {
            type: 'input',
            name: 'Test',
            message: 'Enter how to test this project: ',
            validate: input => {
              if (input) {
                return true;
              } else {
                console.log('Please enter your Project testing paramters!');
                return false;
              }
            }
          },

          //-- Contribution
          //TODO:: 01/07/2022 #EP || Add more contribution options
          {
            type: 'list',
            name: 'Contributing',
            message: 'How would you like to handle project contributions?: ',
            choices: ['Contributor-Covenant','None'],
          },

      ])
    ; //-- End of return statement
  };


//----------------------------------------------------------------------------//
//-- Getting User Data

_verify_EmployeeEntry = employee_Obj => { 
  //-- Prompt user to give them choice to add or redo employee
 

console.log(`
==================================
  Confirming Employee Entry
==================================
${employee_Obj}`);
  return inquirer
  .prompt([
    {
      type: 'list',
      confirmation: 'License',
      message: 'Would you like to add this employee to your team: ',
      choices: ['None','ISC', 'MIT', 'GNU']
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
  
      //-- Array that holds user and project data
      var teamData_Dict = {
        'user_Data':{
          'name' : undefined,
          'github' : undefined,
          'email' : undefined
        }
      };
    
    //-- Get user specific info
    this._get_EmployeeBasics()
      //-- then write userdata to array
      .then( teamData_Results => {
      
        // teamData_Dict.user_Data = Object.assign({},readme_Data.user_Data, user_Data);
        teamData_Dict.user_Data = teamData_Results;

        //-- 01/16/2022 #EP ||ADD While Loop for getting team membesr until done
        // while still adding team members
        // run _get_teamData()
        // ask if done
        // exit once done

        return teamData_Dict;
      })  
      
      //-- Send data into template to build OBJ that will be used to write
      .then( teamData_Dict => {
        return set_TeamTemplate(teamData_Dict);
      })

      //-- Write readme file to ./dist/README.md
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

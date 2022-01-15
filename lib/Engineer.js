//------------------------------------------------------------------------------
//-- Imports
const Employee = require('./Employee');


//------------------------------------------------------------------------------
//-- Engineer Class

class Engineer extends Employee {
    constructor(name, id, email, github){

         //-- inherit parent
        super(name, id, email);

        //-- update engineer specific values
        this.github = github;
        this.role = "Engineer";
    }


    getGithub(){
        return this.github;
    }

}



//------------------------------------------------------------------------------
//-- Exports

module.exports = Engineer;



//------------------------------------------------------------------------------
//-- Imports
const Employee = require('./Employee');


//------------------------------------------------------------------------------
//-- Intern Class

class Intern extends Employee {
    constructor(name, id, email, school){

    //-- inherit parent and create base employee object
    super(name, id, email);

    //-- update Intern specific values
    this.school = school;
    this.role = "Intern";
    };

    getSchool(){
        return this.school;
    };

    getRole(){
        return this.role;
    }
};



//------------------------------------------------------------------------------
//-- Exports

module.exports = Intern;
//------------------------------------------------------------------------------
//-- Imports
const Employee = require('./Employee');


//------------------------------------------------------------------------------
//-- Manager Class

class Manager extends Employee {
    constructor(name, id, email, officeNumber){

    //-- inherit parent and create base employee object
    super(name, id, email);

    //-- update Manager specific values
    this.officeNumber = officeNumber;
    this.role = "Manager";
    };


    getOfficeNumber(){
        return this.officeNumber;
    };

    getRole(){
        return this.role;
    }
};



//------------------------------------------------------------------------------
//-- Exports

module.exports = Manager;
//------------------------------------------------------------------------------
//-- Imports

//------------------------------------------------------------------------------
//-- Main Class

class Employee {
    constructor(name, id, email){
        this.name = name;
        this.id = id;
        this.email = email;
        this.role = 'Employee';
        
    };


    getName(){
        return this.name;
    };

    getId() {
        return this.id;
    };

    getEmail(){
        return this.email;
    };

    getEmployee(){
        return this;
    }

    //  TODO: 01/15/2022 #EP || Make this work to replace others
    getRole(){
        return this.role;
    }
};




//------------------------------------------------------------------------------
//-- Exports

module.exports = Employee;
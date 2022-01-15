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


    getName = function() {
        return this.name;
    };

    getId = function() {
        return this.id;
    };

    getEmail = function(){
        return this.email;
    };

    getEmployee = function(){
        return this;
    }

    // //  TODO: 01/15/2022 #EP || Make this work to replace others
    // getRole = function(){
    //     return this.role;
    // }
};




//------------------------------------------------------------------------------
//-- Exports

module.exports = Employee;
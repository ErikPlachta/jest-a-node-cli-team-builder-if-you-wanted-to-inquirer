//------------------------------------------------------------------------------
//-- Imports

const Intern = require('../lib/Intern');

jest.mock('../lib/Employee.js');


//------------------------------------------------------------------------------
//-- Testing with Jest


//-- Creating an Employee Intern
test('SET Intern Employee. Accepts normal Employee values, school, and assigns role of Intern ', () => {
    
    //-- make employee to test
    //-- TODO:: use mock for this
    const intern = new Intern(this.name,this.id,this.email,"UNC");
    
    //-- what it should be

    //-- Default Employee values
    expect(intern.name).toBe('Erik');
    expect(intern.id).toBe('001');
    expect(intern.email).toBe('erik@noemail.com');

    //-- Intern specific values
    expect(intern.school).toBe('UNC');
    expect(intern.role).toBe('Intern');
});


//-- Get intern GitHub username
test('GET Interns school', () => {
    
    //-- make employee to test
    const intern = new Intern(this.name,this.id,this.email,"UNC");

    //-- Intern specific values
    expect(intern.getSchool()).toBe('UNC');
});


//-- Get Intern Role
test('GET Intern employee role', () => {
    
    //-- make employee to test
    
    
    const intern = new Intern(this.name,this.id,this.email,"UNC");
    //-- what it should be
    console.log(intern.getRole());
    expect(intern.getRole()).toBe('Intern');
});
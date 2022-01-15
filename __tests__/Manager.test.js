//------------------------------------------------------------------------------
//-- Imports

const Manager = require('../lib/Manager');

jest.mock('../lib/Employee.js');


//------------------------------------------------------------------------------
//-- Testing with Jest


//-- Creating an Employee manager
test('SET Manager Employee. Accepts normal Employee values, officeNumber, and assigns role of Manager.', () => {
    
    //-- make employee to test
    //-- TODO:: use mock for this
    const manager = new Manager(this.name,this.id,this.email,"01-01");
    
    //-- what it should be

    //-- Default Employee values
    expect(manager.name).toBe('Erik');
    expect(manager.id).toBe('001');
    expect(manager.email).toBe('erik@noemail.com');

    //-- manager specific values
    expect(manager.officeNumber).toBe('01-01');
    expect(manager.role).toBe('Manager');
});

//-- Get Manager ID
test('GET Manager ID', () => {
    
    //-- make employee to test
    const manager = new Manager(this.name,this.id,this.email,"erikplachta");
    
    //-- what it should be
    expect( manager.getID ).toBe(this.id);
});

//-- Get Manager Name
test('GET Manager Name', () => {
    
    //-- make employee to test
    const manager = new Manager(this.name,this.id,this.email,"erikplachta");
    
    //-- what it should be
    expect( manager.getName ).toBe(this.name);
});


//-- Get Manager Email
test('GET Manager Email', () => {
    
    //-- make employee to test
    const manager = new Manager(this.name,this.id,this.email,"erikplachta");
    
    //-- what it should be
    expect( manager.getEmail ).toBe(this.email);
});

//-- Get manager GitHub username
test('GET managers officeNumber', () => {
    
    //-- make employee to test
    const manager = new Manager(this.name,this.id,this.email,"01-01");

    //-- manager specific values
    expect(manager.getOfficeNumber()).toBe('01-01');
});


//-- Get manager Role
test('GET manager employee role', () => {
    
    //-- make employee to test
    
    
    const manager = new Manager(this.name,this.id,this.email,"01-01");
    
    //-- what it should be
    expect(manager.getRole()).toBe('Manager');
});
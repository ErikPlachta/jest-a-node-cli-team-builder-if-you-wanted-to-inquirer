//------------------------------------------------------------------------------
//-- Imports

const Engineer = require('../lib/Engineer');

jest.mock('../lib/Employee.js');


//------------------------------------------------------------------------------
//-- Testing with Jest


//-- Creating an Employee
test('SET Engineer Employee. Accepts github username, and assigns a role of Engineer', () => {
    
    //-- make employee to test
    //-- TODO:: use mock for this
    const engineer = new Engineer(this.name,this.id,this.email,"erikplachta");
    
    //-- what it should be

    //-- Default Employee values
    expect(engineer.name).toBe('Erik');
    expect(engineer.id).toBe('001');
    expect(engineer.email).toBe('erik@noemail.com');

    //-- Engineer specific values
    expect(engineer.github).toBe('erikplachta');
    expect(engineer.role).toBe('Engineer');
});


//-- Get Engineer GitHub username
test('GET Engineer github username', () => {
    
    //-- make employee to test
    const engineer = new Engineer(this.name,this.id,this.email,"erikplachta");
    

    //-- what it should be
    expect(engineer.getGithub()).toBe('erikplachta');
});



//-- Get Engineer Role
test('GET Engineers employee role', () => {
    
    //-- make employee to test
    const engineer = new Engineer(this.name,this.id,this.email,"erikplachta");
    

    //-- what it should be
    expect(engineer.getRole()).toBe('Engineer');
});
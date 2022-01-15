//------------------------------------------------------------------------------

const Employee = require('../lib/Employee');


//-- Creating an Employee
test('creates a new employee', () => {
    
    //-- make employee to test
    const employee = new Employee("Erik",'001',"erik@noemail.com");

    //-- what it should be
    expect(employee.name).toBe('Erik');
    expect(employee.id).toBe('001');
    expect(employee.email).toBe('erik@noemail.com');
});


//-- Getting name
test('GET employee.name value', () => {
    
    //-- make employee to test
    const employee = new Employee("Erik",'001',"erik@noemail.com");

    expect(employee.getName()).toBe("Erik");

});


//-- Getting ID
test('GET employee.id value', () => {

    //-- make employee to test
    const employee = new Employee("Erik",'001',"erik@noemail.com");

    expect(employee.getId()).toBe("001");
});


//-- Getting email
test('GET employee.email value', () => {

    //-- make employee to test
    const employee = new Employee("Erik",'001',"erik@noemail.com");

    expect(employee.getEmail()).toBe("erik@noemail.com");
});


//-- Getting email
test('GET employee OBJ', () => {

    //-- make employee to test
    const employee = new Employee("Erik",'001',"erik@noemail.com");

    expect(employee.getRole()).toBe(employee);
});
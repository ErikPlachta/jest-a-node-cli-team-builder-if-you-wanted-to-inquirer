//------------------------------------------------------------------------------

const Employee = require('../lib/Employee');


//-- Creating an Employee
test('creates a new employee', () => {
    const employee = new Employee("Erik",'001',"erik@noemail.com");

    expect(employee.name).toBe('Erik');
    expect(employee.id).toBe('001');
    expect(employee.email).toBe('erik@noemail.com');
});
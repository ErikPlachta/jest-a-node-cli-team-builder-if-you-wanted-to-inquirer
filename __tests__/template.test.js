//------------------------------------------------------------------------------
//-- Imports

const {set_TeamTemplate,_get_GitHub, _get_EmployeeCards} = require('../src/template.js');

const Team = require('../lib/__mocks__/team.js');

//------------------------------------------------------------------------------
//-- Testing with Jest

//-- Build data into template to prepare to write
test('RUN template primary build function to verify returns a response', () => {
    
    expect(set_TeamTemplate(Team.getTeam())).toBeDefined();
});

test("GET each employee card HTML based on their employee type from function _get_EmployeeCard.", () => {

    expect(_get_EmployeeCards(Team.getTeam())).toBeDefined();
});
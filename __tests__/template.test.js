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




// test("GET Intern School", () => {

//     expect(_get_School(Team.getTeam())).toBeDefined();
// });


// test("GET Manager officeNumber", () => {

//     expect(_get_officeNumber(Team.getTeam())).toBeDefined();
// });

// //-- Write build data to file
// test('RUN index.set_writeTeamFile() to build ./dist/myteam.html and verify promise resolves.', () => {
//     //-- If promise fails, throws error 'Received promise rejected instead of resolved'

//     //-- Create new obj
//     const index = new Index;
    
//     // //-- Send built template with mock TeamData to write to file
//     // index.set_writeTeamFile(index.set_TeamTemplate(team.getTeam()));

//     return expect(index.set_writeTeamFile(index.set_TeamTemplate(team.getTeam())))
//     .resolves.toBeDefined();

// });
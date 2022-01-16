//------------------------------------------------------------------------------
//-- Imports

const {set_TeamTemplate,_get_GitHub,} = require('../src/template.js');

const Team = require('../lib/__mocks__/team.js');

//------------------------------------------------------------------------------
//-- Testing with Jest

//-- Build data into template to prepare to write
test('RUN template primary build function to verify returns a response', () => {
    
    expect(set_TeamTemplate(Team.getTeam())).toBeDefined();
});



test('GET Intern GitHub URLs', () => {

    //-- Create new template OBJ

    expect(_get_GitHub(Team.getTeam())).toBeDefined();

});

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
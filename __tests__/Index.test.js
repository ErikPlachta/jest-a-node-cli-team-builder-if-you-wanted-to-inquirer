//------------------------------------------------------------------------------
//-- Imports

const Index = require('../index.js');

const team = require('../lib/__mocks__/team.js');

//------------------------------------------------------------------------------
//-- Testing with Jest

//-- Build data into template to prepare to write
test('RUN index.set_TeamTemplate(teamData_Dict) to receive team data, respond with HTML to build template.', () => {

    //-- Create new obj
    const index = new Index;
    
    //-- send mock  TeamData in to verify it reutrns something
    expect(index.set_TeamTemplate(team.getTeam())).toBeDefined();
});

//-- Write build data to file
test('RUN index.set_writeTeamFile() to build ./dist/myteam.html and verify promise resolves.', () => {
    //-- If promise fails, throws error 'Received promise rejected instead of resolved'

    //-- Create new obj
    const index = new Index;
    
    // //-- Send built template with mock TeamData to write to file
    // index.set_writeTeamFile(index.set_TeamTemplate(team.getTeam()));

    return expect(index.set_writeTeamFile(index.set_TeamTemplate(team.getTeam())))
    .resolves.toBeDefined();

});
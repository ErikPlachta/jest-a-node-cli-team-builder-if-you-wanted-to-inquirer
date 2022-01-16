//-----------------------------------------------------------------------------
//-- Exports

const getTeam =() => {
        
    team = {
        '001' : {
            name : 'Erik Plachta',
            id : "001",
            email : "erik@noemail.com",
            role  : 'Manager',
            officeNumber : '01-01'
        },
        '002' : {
            name : 'Nikola Tesla',
            id : "002",
            email : "nikola@tesla.com",
            role  : 'Engineer',
            github : 'nikolatesla'
        },
        '003' : {
            name : 'Bill Gates',
            id : "003",
            email : "bill@gatesfoundation.com",
            role  : 'Intern',
            school : 'Harvard University'
        }
    };

    return team;
}

//-----------------------------------------------------------------------------
//-- Exports

module.exports = {
    getTeam
};
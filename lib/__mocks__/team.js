//-----------------------------------------------------------------------------
//-- Exports

const getTeam =() => {
        
    team = {
        '001' : {
            name : 'Erik Plachta',
            id : "001",
            email : "erik@noemail.com",
            role  : 'Manager'
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
            email : "bill@gatesfoundation.org",
            role  : 'Intern',
            school : 'Hardvard University'
        }
    };

    return team;
}

//-----------------------------------------------------------------------------
//-- Exports

module.exports = {
    getTeam
};
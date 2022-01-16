//----------------------------------------------------------------------------//
//-- Building Employee Cards

function _get_GitHub(github_Username){
  //-- Get GitHub URLS updated for interns
  return `https://www.github.com/${github_Username}`;
}

  
  
const _get_EmployeeRole = role => {
  //-- Takes the role of employee as argument, returns results

  if (role === 'Manager') {
    return`<i class='fas fa-mug-hot'></i>Manager`
  }
  else if ( role === 'Engineer') {
    return`<i class='fas fa-glasses'></i>Engineer`
  }
  else if ( role === 'Intern'){
    return`<i class='fas fa-user-graduate'></i>Intern`
  } 
  else {
    return`Employee`
  }
};

const _get_EmployeeRoleValues = this_Employee => {
  //-- Takes unique employee obj values, returns unique results for card if has one.

  if(this_Employee.role === "Manager") {
    return`<li class="list-group-item bg-white p-3">Office Number: ${this_Employee.officeNumber}</li>`
  }
  else if ( this_Employee.role === 'Engineer') {
    return`<li class="list-group-item bg-white p-3">GitHub: <a href="${_get_GitHub(this_Employee.github)}">${this_Employee.github}</a></li>`
  }
  else if ( this_Employee.role === 'Intern'){
    return`<li class="list-group-item bg-white p-3">School: ${this_Employee.school}</li>`
  } 
  else {
    //-- Returns something so doesn't appear as undefined
    return 'null';
  }
}

const _get_EmployeeCards = teamData_Dict => {
  //-- Takes team dictionary and build Card HTML based on each employees unique values

  //-- List to hold each employee's card HTML, joined in return statement
  var teamData_Cards = [];


  for(employee in teamData_Dict){
    
    //-- holds the current employee obj values to clean up code below
    let this_Employee = teamData_Dict[employee];
    
    let card_Template = `
    <!-- ${employee} -->
      <div class="card shadow border-light m-3 col-lg-4 d-flex align-items-stretch p-0" style="max-width: 18rem;">
        <div class="card-header bg-primary text-white">
          <h3 class="card-title">${this_Employee.name}</h3>
          <h5 class="card-title"> 
            ${_get_EmployeeRole(this_Employee.role)}
          </h5>
        </div>
        <div class ="p-3 bg-light col">
          <ul class="list-group list-group-flush p-2 pb-3 pt-3">
            <li class="list-group-item bg-white p-3">ID: ${this_Employee.id}</li>
            <li class="list-group-item bg-white p-3">Email: ${this_Employee.email}</li>
            ${_get_EmployeeRoleValues(this_Employee)}
          </ul>
        </div>
      </div>`
  
      //-- Adds employee card to array with others
      teamData_Cards.push(card_Template);
  };
  
  // console.log(teamData_Cards.join(''));

  return teamData_Cards.join('');
};

//----------------------------------------------------------------------------//
//-- RUNNING 
  
const set_TeamTemplate = teamData_Dict => {

  // _get_EmployeeCards(teamData_Dict)


  return`<!DOCTYPE html>
<html>
<head>
  <meta charset='utf-8'>
  <meta http-equiv='X-UA-Compatible' content='IE=edge'>
  <title>My Team</title>
  <meta name='viewport' content='width=device-width, initial-scale=1'>

  <!-- Bootstrap for Cards -->
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
        rel="stylesheet"
        integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
        crossorigin="anonymous">
  <!-- FontAwesome for Icons -->
  <script src='https://kit.fontawesome.com/a076d05399.js'></script>
  
</head>
<body>
  <header class="p-5 mb-5 d-flex justify-content-evenly text-white" style="background-color: #E84756">
    <h1 class="row">My Team</h1>
  </header>
  
  <!-- Parent Container -->
  <section class="container">

    
    <!-- Puts all cards in row and flexes so size and space is consistent -->
    <div class="d-flex justify-content-center row">
      ${_get_EmployeeCards(teamData_Dict)}
    </div> <!-- End of ROW holding cards COL -->
  </section> <!-- End of parent container -->

<footer class="p-2 mt-5 d-flex justify-content-evenly text-white bottom-0 end-0" style="background-color: #E84756">
  <span>
    Generated on: ${new Date()}
    </span>
</footer>
</body>
</html>
`;};


//------------------------------------------------------------------------------
//-- Exports

module.exports = {set_TeamTemplate,_get_GitHub,_get_EmployeeCards}
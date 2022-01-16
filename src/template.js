
//----------------------------------------------------------------------------//
//-- building the page


//----------------------------------------------------------------------------//
//-- Get GitHub URLS updated for interns

function _get_GitHub(teamDict){
  return true;
}

//----------------------------------------------------------------------------//
//-- Build Table of Contents

//TODO:: 01/15/2022 #EP | get waht I need then delete this
function _set_TOC(project_Data, toc, TOC) {
    //-- if values defined, add to index4
  
    let location = 1;
    for (section in toc){
      
      //-- the section has defined content within the user data
      if(project_Data[toc[section]]){
  
        //-- if title of project as header
        if (toc[section] === 'title'){
          //-- remove spaces between letters and assign to actual title of project
          TOC[location] = (project_Data[toc[section]].replace(/\s/g, '-')).toLowerCase();
          location = location +1;
        }
  
        //-- all other section titles don't change
        else {
          TOC[location] = toc[section];
          location = location +1;
        }
      }
  
    };
    return TOC;
  };
  
  
  //TODO:: 01/15/2022 #EP | get waht I need then delete this
  const _get_TOC = TOC => {
    //-- Build TOC based on if values are defined
    
    TOC_Formatted = '';
  
    for (section in TOC) {
      // console.log(TOC[section])
      //-- Build the ToC
      TOC_Formatted = TOC_Formatted + `
  ${section}. [${TOC[section]}](#${TOC[section]})`;
      
    }; 
    return TOC_Formatted;
  };
  
  //----------------------------------------------------------------------------//
  //-- Building section data
  
  
  // TODO:: 01/07/2022 #EP || Build these out
  const _get_License = readme_Data => {
    
    //-- Build README content
    
    //-- based on selected license, return short summary and URL
    let { user_Data, project_Data } = readme_Data;
    return `![GitHub license](https://img.shields.io/github/license/${user_Data.github}/${project_Data.Title.replace(/\s/g, '-')})`
  
  }
  
  //TODO -- give user option to pick from this or type manually
  const _get_Contribution = project_Data => {
    
  if (project_Data.Contributing === 'Contributor-Covenant'){
    return `This Project abides by the Contributor Covenant. 
  > For more information, check out https://www.contributor-covenant.org/.`
  } 
  else if (project_Data.Contributing === 'None'){
    return `This Project Does not accept contributions at this time.`
  } 
  //-- Whatever user picked/typed
  else {
    return `${project_Data.Contributing}`
  }
};
  
const _get_EmployeeRole = role => {
  //-- Takes the role of employee as argument, returns results

  if (role === 'manager') {
    return`<i class='fas fa-mug-hot'></i>Manager`
  }
  else if ( role === 'engineer') {
    return`<i class='fas fa-glasses'></i>Engineer`
  }
  else if ( role === 'intern'){
    return`<i class='fas fa-user-graduate'></i>Intern`
  } 
  else {
    return`Employee`
  }
}

const _get_EmployeeCards = teamData_Dict => {
  //-- Takes team dictionary and build HTML based on values provided.

  var teamData_Cards = [];
  for(employee in teamData_Dict){
    let card_Template = `
    <!-- ${employee} -->
      <div class="card shadow border-light m-3 col-lg-4 d-flex align-items-stretch p-0" style="max-width: 18rem;">
        <div class="card-header bg-primary text-white">
          <h3 class="card-title">${teamData_Dict[employee].name}</h3>
          <h5 class="card-title"> 
            ${_get_EmployeeRole(teamData_Dict[employee].role)}
          </h5>
        </div>
        <div class ="p-3 bg-light col">
          <ul class="list-group list-group-flush p-2 pb-3 pt-3">
            <li class="list-group-item bg-white p-3">ID: </li>
            <li class="list-group-item bg-white p-3">Email: </li>
            <li class="list-group-item bg-white p-3">GitHub: </li>
          </ul>
        </div>
      </div>`
  
      teamData_Cards.push(card_Template);
  
    // console.log(teamData_Dict[employee])
  }
  console.log(teamData_Cards.join(''))
  return teamData_Cards;
};

//----------------------------------------------------------------------------//
//-- RUNNING 
  
const set_TeamTemplate = teamData_Dict => {

  _get_EmployeeCards(teamData_Dict)


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
  <!-- <script src="https://use.fontawesome.com/bab062a6a0.js"></script> -->
  
</head>
<body>
  <header class="p-5 mb-5 d-flex justify-content-evenly text-white" style="background-color: #E84756">
    <h1 class="row">My Team</h1>
  </header>
  
  <!-- Parent Container -->
  <section class="container">

    
    <!-- Puts all cards in row and flexes so size and space is consistent -->
    <div class="d-flex justify-content-center row">


      <!-- Card -->
      <div class="card shadow border-light m-3 col-lg-4 d-flex align-items-stretch p-0" style="max-width: 18rem;">
        <div class="card-header bg-primary text-white">
          <h3 class="card-title">Manager Name</h3>
          <h5 class="card-title"> 
            <i class='fas fa-mug-hot'></i>
            Manager
          </h5>
        </div>
        <div class ="p-3 bg-light col">
          <ul class="list-group list-group-flush p-2 pb-3 pt-3">
            <li class="list-group-item bg-white p-3">ID: </li>
            <li class="list-group-item bg-white p-3">Email: </li>
            <li class="list-group-item bg-white p-3">GitHub: </li>
          </ul>
        </div>
      </div>
  
       <!-- Card -->
       <div class="card shadow border-light m-3 col-lg-4 d-flex align-items-stretch p-0" style="max-width: 18rem;">
        <div class="card-header bg-primary text-white">
          <h3 class="card-title">Manager Name</h3>
          <h5 class="card-title"> 
            <i class='fas fa-mug-hot'></i>
            Manager
          </h5>
        </div>
        <div class ="p-3 bg-light col">
        <ul class="list-group list-group-flush">
            <li class="list-group-item bg-white p-3">ID: </li>
            <li class="list-group-item bg-white p-3">Email: </li>
            <li class="list-group-item bg-white p-3">GitHub: </li>
          </ul>
        </div>
      </div>
  
       <!-- Card -->
       <div class="card shadow border-light m-3 col-lg-4 d-flex align-items-stretch p-0" style="max-width: 18rem;">
        <div class="card-header bg-primary text-white">
          <h3 class="card-title">Manager Name</h3>
          <h5 class="card-title"> 
            <i class='fas fa-mug-hot'></i>
            Manager
          </h5>
        </div>
        <div class ="p-3 bg-light col">
        <ul class="list-group list-group-flush">
            <li class="list-group-item bg-white p-3">ID: </li>
            <li class="list-group-item bg-white p-3">Email: </li>
            <li class="list-group-item bg-white p-3">GitHub: </li>
          </ul>
        </div>
      </div>
  

      <!-- Card -->
      <div class="card shadow border-light m-3 col-lg-4 d-flex align-items-stretch p-0" style="max-width: 18rem;">
        <div class="card-header bg-primary text-white">
          <h3 class="card-title">Engineer Name</h3>
          <h5 class="card-title"> 
            <i class='fas fa-glasses'></i>
            Engineer
          </h5>
        </div>
        <div class ="p-3 bg-light">
        <ul class="list-group list-group-flush">
            <li class="list-group-item bg-white p-3">ID: </li>
            <li class="list-group-item bg-white p-3">Email: </li>
            <li class="list-group-item bg-white p-3">GitHub: </li>
          </ul>
        </div>
      </div>
  
      <!-- Card -->
      <div class="card shadow border-light m-3 col-lg-4 d-flex align-items-stretch p-0" style="max-width: 18rem;">
        <div class="card-header bg-primary text-white">
          <h3 class="card-title">Intern Name</h3>
          <h5 class="card-title"> 
            <i class='fas fa-user-graduate'></i>
            Intern
          </h5>
        </div>
        <div class ="p-3 bg-light">
        <ul class="list-group list-group-flush">
            <li class="list-group-item bg-white p-3">ID: </li>
            <li class="list-group-item bg-white p-3">Email: </li>
            <li class="list-group-item bg-white p-3">GitHub: </li>
          </ul>
        </div>
      </div>

    <!-- End of ROW holding cards COL -->
    </div>
    <!-- End of parent container -->
  </section>

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
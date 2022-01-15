//----------------------------------------------------------------------------//
//-- building the page


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
  
  //TODO:: 01/15/2022 #EP | get waht I need then delete this
  const _get_Guidelines = project_Data => {
    // -- If provided guidelines, build them.
  
    // console.log(project_Data.guidelines);
    if (project_Data.Guidelines) {
      return `## Guidelines
  
  ${project_Data.Guidelines}`
    }
  }
  
  //TODO:: 01/15/2022 #EP | get waht I need then delete this
  const _get_Useage = project_Data => {
    // -- If provided guidelines, build them.
  
    //-- if defined
    if (project_Data.Useage_summary) {
      //-- return markdown content
      return `${project_Data.Useage_summary}
  
  ${project_Data.Useage_syntax}`
    } 
  }
  
  
  // TODO:: 01/07/2022 #EP || Build these out
  const _get_License = readme_Data => {
    
    //-- Build README content
    
    //-- based on selected license, return short summary and URL
    let { user_Data, project_Data } = readme_Data;
    return `![GitHub license](https://img.shields.io/github/license/${user_Data.github}/${project_Data.Title.replace(/\s/g, '-')})`
    // +`${project_Data.license}`
  
    const license_Dict = {
      'NONE' : 'No license.',
      'MIT' : 'mit',
    }
    return license_Summary;
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
  }
  




  
//----------------------------------------------------------------------------//
//-- RUNNING 
  
module.exports = myTeam => {
  // destructure page data by section
      
  
  // console.log("project_Data: ", project_Data)
  // console.log("TOC: ", TOC)
  //-- Build and then return dynamically
  return `<html>
<head>
  <style></style>
  <title>My Team</title>
</head>
<body>
  <header>
    <h1>My Teamr</h1>
  </header>
  
  <section class="teamMembers">
    
    <div class="teamMember manager">
      <span>  
        <h2>Manger Name</h2>
        <span class="role">Manager</span>
      </span>
      <span class="teamMember_details">
        <span class="id">ID: </span>
        <span class="email">Email: </span>
        <span class="github">GitHub: </span>
      </span>
    </div>


    <div class="teamMember engineer">
      <span>  
        <h2>Engineer Name</h2>
        <span class="role">Engineer</span>
      </span>
      <span class="teamMember_details">
        <span class="id">ID: </span>
        <span class="email">Email: </span>
        <span class="github">GitHub: </span>
      </span>
    </div>

    <div class="teamMember intern">
      <span>  
        <h2>Intern Name</h2>
        <span class="role">Intern</span>
      </span>
      <span class="teamMember_details">
        <span class="id">ID: </span>
        <span class="email">Email: </span>
        <span class="github">GitHub: </span>
      </span>
    </div>
  
  </section>

<footer>
  <span>
    Generated on: ${new Date().getFullYear()}
    </span>
</footer>
</body>
</html>
`;};

//pulls parm, if it exists, and tries to render the site.
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const sysId = urlParams.get('sysId')

//takes a single member object from PK and returns formatted html as template literal
function buildMemberDiv(member) {
  return `
<div id="${member.id}" class="row">
      <img
        src="${member.avatar_url}"
        alt="${member.name}"
        class="avatar"
      />

      <h2>${
        member.display_name === null ? member.name : member.display_name
      }</h2>

      ${
        member.pronouns === null
          ? ""
          : `<h3>
        Pronouns
      </h3>
      <p>
        ${member.pronouns}
      </p>`
      }
     
     ${
       member.description === null
         ? ""
         : `<h3>
                Description
      </h3>
      <p>
        ${member.description}
      </p>`
     }
      <a href="#contents">Back</a>
    </div>
    `;
}

//Builds toc
function toc(member) {
    return `
    <a href="#${member.id}">${
    member.display_name === null ? member.name : member.display_name
  }</a></br>
  `;
}

function renderSite(pkSysID) {
  fetch("https://api.pluralkit.me/v1/s/" + pkSysID + "/members")
    .then(response => response.json())
    .then(data => {
      //build TOC - just iterate over each data[].id
      console.log(data);
    let contents = []  
    let members = []
      data.map(
        //memberNum =>
        memberNum => {
          members.push(buildMemberDiv(memberNum))
          contents.push(toc(memberNum))  
        }
        )
    console.log(contents);  
    console.log(members);
    document.getElementById('toc').innerHTML=contents.join('')
    document.getElementById('members').innerHTML=members.join('')
    });
}

function getFronter(sysId) {
  var fronter = "";

      fetch("https://api.pluralkit.me/v1/s/" + sysId + "/fronters")
        .then(response => response.json())
        .then(data => {
          fronter = data.members[0].display_name;
          ava = data.members[0].avatar_url;
          document.getElementById("fronter").innerHTML = `<h2>Currently up:</h2>
                      <img
        src="${ava}"
        alt="${fronter}"
        class="avatar"
      />
        <p> ${fronter}</p>`
      });
}

getFronter(sysId)
renderSite(sysId)


var addie = {
  id: "nhzfx",
  name: "Addie ☔️ (they/she)",
  color: null,
  display_name: null,
  birthday: "1984-01-01",
  pronouns: "she/her",
  avatar_url:
    "https://media.discordapp.net/attachments/771384008360722474/815297186237251594/482731_JCRh7z9I.png?width=256&height=256",
  description: "Primary fronter, gets stuff done, loves lifting",
  proxy_tags: [
    { prefix: "Addie ", suffix: null },
    { prefix: "☔️ ", suffix: null }
  ],
  keep_proxy: false,
  privacy: null,
  visibility: null,
  name_privacy: null,
  description_privacy: null,
  birthday_privacy: null,
  pronoun_privacy: null,
  avatar_privacy: null,
  metadata_privacy: null,
  created: "2020-10-12T20:22:29.817725Z",
  prefix: "Addie ",
  suffix: null
};

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
function toc(pkOutput) {
  //just test data for now.
  let member = { id: "123", display_name: null, name: "Addie" };

  let memberTemplate = `
    <a href="#${member.id}">${
    member.display_name === null ? member.name : member.display_name
  }</a>
  `;
  let contents = [];

  return memberTemplate;
}

function renderSite(pkSysID) {
  fetch("https://api.pluralkit.me/v1/s/" + pkSysID + "/members")
    .then(response => response.json())
    .then(data => {
      //build TOC - just iterate over each data[].id
      console.log(data);
     data.map(function(memberNum){
       console.log("data array looks like " data[memberNum])
       buildMemberDiv(data[memberNum])
     })
      console.log(members)
     //map function goes here
      //call template function
      //join array
      //input into members div
    });
}

//renderSite("ikgki");

document.body.innerHTML = buildMemberDiv(addie);
renderSite("ikgki")

//    return `
//    ${data.map(function(member){
//    `<p>Next up: ${member.id}</p>`
//}).join()};`

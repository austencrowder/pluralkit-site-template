var member = {
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

const memberDiv = `
<div id="${memberNumber.id}" class="row">
      <img
        src="${memberNumber.avatar_url}"
        alt="${memberNumber.name}"
        class="avatar"
      />

      <h2>${memberNumber.display_name === null ? memberNumber.name : memberNumber.display_name}</h2>

      ${
        memberNumber.pronouns === null
          ? ""
          : `<h3>
        Pronouns
      </h3>
      <p>
        ${memberNumber.pronouns}
      </p>`
      }
     
     ${
       memberNumber.description === null
         ? ""
         : `<h3>
                Description
      </h3>
      <p>
        ${memberNumber.description}
      </p>`
     }
      <a href="#contents">Back</a>
    </div>
    `;

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
    
    
    return `
      ${data.map(function(member){
        <p>Next up: ${</p>`
      }).join()};
    });
}

document.body.innerHTML = toc(alter) + renderSite("ikgki") + alterDiv;

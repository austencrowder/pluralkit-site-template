var alter = {
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

const alterDiv = `
<div id="${alter.id}" class="row">
      <img
        src="${alter.avatar_url}"
        alt="${alter.name}"
        class="avatar"
      />

      <h2>${alter.display_name === null ? alter.name : alter.display_name}</h2>

      ${
        alter.pronouns === null
          ? ""
          : `<h3>
        Pronouns
      </h3>
      <p>
        ${alter.pronouns}
      </p>`
      }
     
     ${
       alter.description === null
         ? ""
         : `<h3>
                Description
      </h3>
      <p>
        ${alter.description}
      </p>`
     }
      <a href="#contents">Back</a>
    </div>
    `;



//Builds toc

function toc(pkOutput) {
  let template 
}

function renderSite() {}
document.body.innerHTML = alterDiv;

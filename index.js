var menus = [
  {
    titre: "Inscription",
    lien: "index.html",
  },
  {
    titre: "Liste Participant",
    lien: "affichage.html",
  },
];

var select = 0;
// console.log(select);

var ul = document.getElementById("ul");
var sidebar = document.getElementById("sidebar");
var myTable = document.getElementById("myTable");
var nom = document.getElementById("nom");
var prenom = document.getElementById("prenom");
var mail = document.getElementById("mail");
var telephone = document.getElementById("telephone");
var span = document.getElementById("span");

function maFonction(index) {
  select = index;
  console.log(select);
}

function maFonction2(k) {
  menus.map((menu, index) => {
    k.innerHTML += `<a class="${
      select == index ? "nav-link ac" : "nav-link"
    }" href=${menu.lien} onclick="maFonction(${index})">${menu.titre}</a>`;
  });
}

maFonction2(sidebar);
maFonction2(nav);

// var datas = {
//   nom: nom.value,
//   prenom: prenom.value,
//   telephone: telephone.value,
//   mail: mail.value,
// };

var datas = new FormData();
datas.append("nom", nom.value);
datas.append("prenom", prenom.value);
datas.append("telephone", telephone.value);
datas.append("mail", mail.value);

var t;

function enregistrement() {
  var datas = new FormData();
  datas.append("nom", nom.value);
  datas.append("prenom", prenom.value);
  datas.append("telephone", telephone.value);
  datas.append("mail", mail.value);
  axios
    .post("http://localhost/api/inserer_participant.php", datas)
    .then(function (response) {
      console.log(response.data.message);
      console.log(nom.value);
      console.log(prenom.value);
      console.log(telephone.value);
      console.log(mail.value);

      t = response.data.message;
      nom.value = null;
      prenom.value = null;
      mail.value = null;
      telephone.value = null;
      // Traitements de la réponse réussie
    })
    .catch(function (error) {
      console.error(error);
      // Traitements de l'erreur
    });
}

(() => {
  "use strict";

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  const forms = document.querySelectorAll(".needs-validation");

  // Loop over them and prevent submission
  Array.from(forms).forEach((form) => {
    form.addEventListener(
      "submit",
      (event) => {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        } else {
          enregistrement();
        }

        form.classList.add("was-validated");
      },
      false
    );
  });
})();

// menus.map((menu, index) => {
//   ul.innerHTML += `<li onclick="maFonction(${index})"><a class="${
//     select == index ? "nav-link ac" : "nav-link"
//   }" href=${menu.lien}>${menu.titre}</a></li>`;
// });

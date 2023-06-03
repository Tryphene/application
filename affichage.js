function addRow() {
  var table = document.getElementById("myTable");
  var newRow = table.insertRow();

  var cell1 = newRow.insertCell();
  var cell2 = newRow.insertCell();

  cell1.innerHTML = "Donnée 1";
  cell2.innerHTML = "Donnée 2";
}

axios
  .get("http://localhost/api/affichage_participant.php")
  .then(function (response) {
    const responseData = response.data;
    datas = responseData.results.participant;
    // console.log(datas);
    datas.map((data) => {
      myTable.innerHTML += `<tr>
      <td>${data.id}</td>
      <td>${data.nom}</td>
      <td>${data.prenom}</td>
      <td>${data.telephone}</td>
      <td>${data.mail}</td>
      </tr>`;
    });
  })
  .catch(function (error) {
    // Traitement de l'erreur
    console.error(error);
  });

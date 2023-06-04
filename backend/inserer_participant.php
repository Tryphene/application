<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST');
header('Access-Control-Allow-Headers: Content-Type');
include 'header.php';

if (isset($_POST["nom"]) && isset($_POST["prenom"]) && isset($_POST["telephone"]) && isset($_POST["mail"])) {
    $req = $bdd->prepare("INSERT INTO participant(`nom`, `prenom`, `telephone`, `mail`) VALUES(?, ?, ?, ?)");
    $req->execute([$_POST["nom"], $_POST["prenom"],  $_POST["telephone"], $_POST["mail"]]);

    $retour["success"] = true;
    $retour["message"] = "Participant ajouté !";
    $retour["results"] = array();
} else {
    echo $_POST["nom"];
    echo $_POST["prenom"];
    echo $_POST["telephone"];
    echo $_POST["mail"];
    $retour["success"] = false;
    $retour["message"] = "Veuillez remplir tous les champs SVP !";
    $retour["results"] = array();
}


// if (!empty($_POST["nom"]) and !empty($_POST["prenom"]) and !empty($_POST["mail"]) and !empty($_POST["telephone"])) {

//     $req = $bdd->prepare("INSERT INTO participant(`nom`, `prenom`, `mail`, `telephone`) VALUES(?, ?, ?, ?)");
//     $req->execute([$_POST["nom"], $_POST["prenom"],  $_POST["mail"], $_POST["telephone"]]);

//     $retour["success"] = true;
//     $retour["message"] = "Participant ajouté !";
//     $retour["results"] = array();
// } else {
//     $retour["success"] = false;
//     $retour["message"] = "Veuillez remplir tous les champs SVP !";
// }


echo json_encode($retour);

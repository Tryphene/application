<?php
header('Access-Control-Allow-Origin: *');
include 'header.php';

//  if(!empty($_POST["dteCourse"])){
// 	$req = $bdd->prepare("SELECT * FROM `course` WHERE `dteCourse` LIKE :dte");
// 	$req->bindParam(':dte', $_POST["dteCourse"]);
//     $req->execute();
// } else {
// 	$req = $bdd->prepare("SELECT * FROM `course` ORDER BY `id` DESC");
//     $req->execute();
// }
$req = $bdd->prepare("SELECT * FROM `participant` ORDER BY `id` DESC");
$req->execute();

$res = $req->fetchAll();

$retour["success"] = true;
$retour["message"] = "Liste des participants";
$retour["results"]["nbParticipant"] = count($res);

$retour["results"]["participant"] = $res;


echo json_encode($retour);

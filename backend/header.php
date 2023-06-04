<?php
ini_set('display_errors', 1);
header("Content-Type: application/json");

try {
    $bdd = new PDO('mysql:host=localhost;dbname=db;charset=utf8', 'root', '');
    $bdd->setAttribute(PDO::ATTR_DEFAULT_FETCH_MODE, PDO::FETCH_ASSOC);
    $retour["success"] = true;
    $retour["message"] = "Connexion reussie";
} catch (Exception $e) {
    $retour["success"] = false;
    $retour["message"] = "Connexion impossible";
}

// echo json_encode($retour);

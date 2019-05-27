<?php
    require './bddConnect.php';
    require './headerSetting.php';
  
    if (isset($_GET['filmId']) && isset($_GET['title']) && isset($_GET['comment'])){
        $req = $pdo -> prepare ('INSERT INTO `userRate` (idFilm, titleCom, userCom) VALUES (:idFilm, :titleCom, :userCom)');
        $req -> execute ([
            ':idFilm' => htmlspecialchars($_GET['filmId']),
            ':titleCom' => htmlspecialchars($_GET['title']),
            ':userCom' => htmlspecialchars($_GET['comment']),
        ]);
        if(!$req){
            print json_encode($pdo->errorInfo());
        }else{
            print json_encode($_GET);  
        }
    }else{
        print json_encode('{status: 403, message: "Cant get all params"}');     
    }
?>
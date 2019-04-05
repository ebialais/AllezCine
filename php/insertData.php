<?php
    require './bddConnect.php';
    require './headerSetting.php';

    if (isset($_GET['idFilm']) && isset($_GET['titleCom']) && isset($_GET['userCom'])){
        $req = $pdo -> prepare ('INSERT INTO `userRate` (idFilm, commentTitre, comment) VALUES (:idFilm, :commentTitre, :comment)');
        $req -> execute ([
            ':idFilm' => htmlspecialchars($_GET['idFilm']),
            ':commentTitre' => htmlspecialchars($_GET['titleCom']),
            ':comment' => htmlspecialchars($_GET['userCom']),
        ]);
    }
    print json_encode($_GET);
    
?>
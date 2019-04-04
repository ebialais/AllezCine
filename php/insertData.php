<?php
    require './ddbConnect2.php';
    require './headerSettings.php';

    if (isset($_GET['idFilm']) && isset($_GET['commentTitre']) && isset($_GET['comment'])){
        $req = $pdo -> prepare ('INSERT INTO `userRate` (idFilm, commentTitre, comment) VALUES (:idFilm, :commentTitre, :comment)');
        $req -> execute ([
            ':idFilm' => htmlspecialchars($_GET['idFilm']),
            ':commentTitre' => htmlspecialchars($_GET['commentTitre']),
            ':comment' => htmlspecialchars($_GET['comment']),
            // ':like' => htmlspecialchars(0)
        ]);
    }
    print json_encode($_GET);
    
?>
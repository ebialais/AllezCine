<?php
    require './ddbConnect2.php';
    require './headerSettings.php';

    if (isset($_GET['idFilm'])){
        $req = $pdo -> prepare ('SELECT * FROM `userRate` WHERE idFilm=:idFilm');
        $req -> execute ([':idFilm' => htmlspecialchars($_GET['idFilm'])]);
    }
    $rows = array();
     while($r = $req->fetch(PDO::FETCH_ASSOC)) {
         array_push($rows, $r);
    }
   print json_encode($rows);

?>
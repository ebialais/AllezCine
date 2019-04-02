<?php
    require './ddbConnect2.php';
    require './headerSettings.php';

    $sql = "SELECT * FROM userRate";
    $result = $pdo->query($sql);
    $rows = array();

    while($r = $result->fetch(PDO::FETCH_ASSOC)){
        array_push($rows, $r);
    }

    print json_encode($rows);

?>
<?php
    require './ddbConnect2.php';
    require './headerSettings.php';

    $stmt = $pdo->prepare("INSERT INTO userRate (userCom) VALUES (:userCom)");
    
    $userCom = $_GET['userCom'];
        
    $stmt->execute([
        'userCom' => $userCom,
    ]);

    print json_encode($_GET);
    
?>
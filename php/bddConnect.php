<?php

try
{
    $pdo = new PDO('mysql:host=10.20.0.163;dbname=commentsDb;charset=utf8', 'allezcine', 'userPassword');
}
catch(Exception $e)
{
        die('Erreur : '.$e->getMessage());
};

?>
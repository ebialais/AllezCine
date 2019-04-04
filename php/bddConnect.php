<?php

try
{
    $pdo = new PDO('mysql:host=127.0.0.1;dbname=commentsDb;charset=utf8', 'allezcine', 'userPassword');
}
catch(Exception $e)
{
        die('Erreur : '.$e->getMessage());
};

?>
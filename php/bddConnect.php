<?php

try
{
    $pdo = new PDO('mysql:host=localhost;dbname=commentsDb;charset=utf8', 'allezcine', 'userPassword');
}
catch(Exception $e)
{
        die('Erreur : '.$e->getMessage());
};

?>
<?php

$con = new mysqli("localhost", "root", "", "tabela_periodica");

if ($con->connect_error) {
    die("Erro na conexão: " . $con->connect_error);
}

$con->set_charset("utf8mb4");

?>
<?php
include("conexao.php");

$id = $_GET['id'];

$sql = "SELECT * FROM Elementos WHERE numero_atomico = $id";

$result = mysqli_query($con, $sql);

$dados = mysqli_fetch_assoc($result);

echo json_encode($dados);
?>
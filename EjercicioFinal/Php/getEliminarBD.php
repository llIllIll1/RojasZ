<?php
    
$idCliente = $_POST['paridCliente'];
$hostname='localhost';
$database='L19100249';
$username='root';
$password='';
$port='3306';

    try {
        $con = new PDO("mysql:host=$hostname;dbname=$database;port=$port",$username,$password);
    } catch (PDOException $e) {
        echo "Error de conexion";
        echo $e->getMessage();
        exit();
    }
    try {
        $consultaSQL = "delete from `usuario` where `usuario`.`idCliente` = ".$idCliente;
        $consulta = $con -> prepare($consultaSQL);
        $consulta -> execute();
        $resultado = $consulta -> fetch(PDO::FETCH_ASSOC);
        $consulta -> closeCursor();
    } catch (PDOException $e) {
        echo "Error de consulta a la base de datos";
        echo $e -> getMessage();
    }
    echo json_encode($resultado);
?>
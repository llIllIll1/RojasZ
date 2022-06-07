<?php

$hostname='localhost';
$database='L19100249';
$username='root';
$password='';
$port='3306';

$idCliente = $_POST['paridCliente'];
$nom = $_POST['parNom'];
$telDireccion = $_POST['partelDireccion'];
$telCliente = $_POST['partelCliente'];
$nomEquipoCliente = $_POST['parnomEquipoCliente'];
$detalleCliente = $_POST['pardetalleCliente'];

try {
    $con = new PDO("mysql:host=$hostname;dbname=$database;port=$port",$username,$password);
} catch(PDOException $e) {
    echo "Error de conexion a la base de datos";
    echo $e->getMessage();
    exit();
}
    try {
        $consultaSQL = "update `usuario` set `nom`='$nom',`telDireccion`='$telDireccion',`telCliente`='$telCliente'
        ,`nomEquipoCliente`='$nomEquipoCliente',`detalleCliente`='$detalleCliente' where idCliente =".$idCliente;
        $consulta = $con -> prepare($consultaSQL);
        $consulta -> execute();
        $resultado = $consulta -> fetch(PDO::FETCH_ASSOC);
        $consulta -> closeCursor();
    } catch (PDOException $e) {
        echo "Error al modificar en la base de datos";
        echo $e -> getMessage();
    }
    echo json_encode($resultado);
?>
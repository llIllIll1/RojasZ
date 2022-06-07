<?php
 

 $hostname='localhost';
 $database='L19100249';
 $username='root';
 $password='';
 $port='3306';

    //traer Io que me da eI post a unas variabIes en php
    $idCliente = $_POST['paridCliente'];
    $nom = $_POST['parNom'];
    $telDireccion = $_POST['partelDireccion'];
    $telCliente = $_POST['partelCliente'];
    $nomEquipoCliente = $_POST['parnomEquipoCliente'];
    $detalleCliente = $_POST['pardetalleCliente'];
    $tipo = $_POST['partipo'];
    $marcaEquipo = $_POST['parmarcaEquipo'];

    try {
        $con = new PDO("mysql:host=$hostname;dbname=$database;port=$port",$username,$password);
    } catch (PDOException $e) {
    echo "Error de conexion";
    echo $e->getMessage();
    exit();
    }

    try {
        $consultaSQL = "INSERT INTO `usuario`(`idCliente`, `nom`, `telDireccion`, `telCliente`, `nomEquipoCliente`, 
        `detalleCliente`,`tipoEquipo`, `marcaEquipo`) 
        VALUES ('$idCliente','$nom','$telDireccion','$telCliente','$nomEquipoCliente','$detalleCliente','$tipo','$marcaEquipo')";
        $consulta = $con -> prepare($consultaSQL);
        $consulta -> execute();
        //$resultado = $consulta -> fetch(PDO::FETCH_ASSOC);
        $consulta -> closeCursor();
    } catch (PDOException $e) {
        echo "Error al agregar el registro a la base de datos";
        echo $e -> getMessage();
    }
?>
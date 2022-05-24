$(document).ready(function () {
    $("#botonAjax").click(presionBoton);
    function presionBoton() {
        var parnum = $("#num").val();
        $.get("./Php/Final.php", { num: parnum }, llegadaDatos);
    }

    function llegadaDatos(datos) {
        $('#resultado').html('<h2>Esto es una peticion Ajax' + '</h2>');
    }

    $('#btnjson').click(function () {
        $.post('./Php/Final.php', {}, function (data) {

            console.log(data);
            $('#idCliente').val(data.idCliente);
            $('#nom').val(data.nom);
            $('#telDireccion').val(data.telDireccion);
            $('#telCliente').val(data.telCliente);
            $('#nomEquipoCliente').val(data.nomEquipoCliente);
            $('#detalleCliente').val(data.detalleCliente);

        }, 'json');
    });

    $("#btnCambiaHeaderP").click(function () {

        /*let promesa = new Promise (function(resolve, reject){
            var solicitud = new XMLHttpRequest();
            solicitud.onreadystatechange = function() {
                if(solicitud.readyState == 4 && solicitud.status == 200) {
                    resolve(solicitud.responseText);
                }}
                solicitud.open("GET","getHeader.txt", true);
                solicitud.send();
        });
        promesa.then(function(value) {document.getElementById("enca").innerHTML = value;});*/

        new Promise(function (resolve, reject) {
            var solicitud = new XMLHttpRequest();
            solicitud.onreadystatechange = function () {
                if (solicitud.readyState == 4 && solicitud.status == 200) {
                    resolve(solicitud.responseText);
                }
            };
            solicitud.open("GET", "getHeader.txt", true);
            solicitud.send();
        }).then(value => document.getElementById("enca").innerHTML = value);
    });

    // Obtenemos un registro json del la Base de datos
    // usando el metodo $.post() de Jquery
    // $.post(URL,parametros,funciondeRetorno(),dato)
    $('#btnConsultaBD').click(function () {
        let parid = prompt("Teclee el ID a consultar");

        $.post('./Php/getRegistroBD.php', { par1: parid }, function (data) {
            refrescar(data);
        }, 'json');
    });

    function refrescar(objeto) {
        console.log(objeto);
        $('#idCliente').val(objeto.idCliente);
        $('#nom').val(objeto.nom);
        $('#telDireccion').val(objeto.telDireccion);
        $('#telCliente').val(objeto.telCliente);
        $('#nomEquipoCliente').val(objeto.nomEquipoCliente);
        $('#detalleCliente').val(objeto.detalleCliente);
    }

    document.getElementById("btnObtieneJsonFetch").addEventListener("click", function () {

        let promesa = fetch('./Php/Final.php');

        //Funcion cuadrado declarando la funcion
        //promesa.then(function (respuesta) {
        //    console.log(respuesta); console.log(respuesta.json());
        //});


        //Funcion Flecha
        //promesa.then( (respuesta) => respuesta.json());
        //});


        //Encadenamiento de promesas
        promesa.then(respuesta => respuesta.json())
            .then(datos => console.log(datos));
    });

    //
    fetch('./Php/Final.php')
        .then(respuesta => respuesta.json())
        .then(datos => console.log(datos));
})
//});
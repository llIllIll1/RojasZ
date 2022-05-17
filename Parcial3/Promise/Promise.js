$(document).ready(function () {
    $("#botonAjax").click(presionBoton);
    function presionBoton() {
        var parnum = $("#num").val();
        $.get("Promise.php", { num: parnum }, llegadaDatos);
    }

    function llegadaDatos(datos) {
        $('#resultado').html('<h2>Esto es una peticion Ajax' + '</h2>');
    }

    $('#btnjson').click(function () {
        $.post('Promise.php', {}, function (data) {

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
});
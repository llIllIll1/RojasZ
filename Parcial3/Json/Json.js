$(document).ready(function () {
    $("#botonAjax").click(presionBoton);
    function presionBoton() {
        var parnum = $("#num").val();
        $.get("Json.php", { num: parnum }, llegadaDatos);
    }

    function llegadaDatos(datos) {
        $('#resultado').html('<h2>Esto es una peticion Ajax' + '</h2>');
    }

    $('#btnjson').click(function () {
        $.post('Json.php', {}, function (data) {

            console.log(data);
            $('#idCliente').val(data.idCliente);
            $('#nom').val(data.nom);
            $('#telDireccion').val(data.telDireccion);
            $('#telCliente').val(data.telCliente);
            $('#nomEquipoCliente').val(data.nomEquipoCliente);
            $('#detalleCliente').val(data.detalleCliente);

        }, 'json');
    });
});
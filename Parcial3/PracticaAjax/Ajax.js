$(document).ready(function () {
    $("#botonAjax").click(presionBoton);
    function presionBoton() {
        var parnum = $("#num").val();
        $.get("Ajax.php", { num: parnum }, llegadaDatos);
    }

    function llegadaDatos(datos) {
        $('#resultado').html('<h2>Esto es una peticion Ajax' + '</h2>');
    }
});
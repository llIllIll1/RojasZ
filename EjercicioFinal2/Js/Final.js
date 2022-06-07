$(document).ready(function () {
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

    $('#btnAgregarBD').click(function() {
        try {
            let idCliente = document.getElementById("idCliente").value;
            let nom = document.getElementById("nom").value;
            let telDireccion = document.getElementById("telDireccion").value;
            let telCliente = document.getElementById("telCliente").value;
            let nomEquipoCliente = document.getElementById("nomEquipoCliente").value;
            let detalleCliente = document.getElementById("detalleCliente").value;
            let marcaEquipo = document.getElementById("marcaEquipo").value;
            //Raddio button
            //let pie;
            //f (document.getElementById('derecho').checked == true) {
            //    pie = "Derecho";
            //}
            //if (document.getElementById('zurdo').checked == true) {
            //    pie = "Zurdo";
            //}
            if (idCliente == "" || nom == "" || telDireccion == "" || telCliente == "" || nomEquipoCliente == "" || detalleCliente == "") {
                swal("Error", "Revise que no tenga campos vacios", "error");
            } else {
                $.post('Php/getAgregarBD.php',{paridCliente:idCliente, parNom:nom, partelDireccion:telDireccion, partelCliente:telCliente, 
                    parnomEquipoCliente:nomEquipoCliente, pardetalleCliente:detalleCliente},
                {},'json');
                swal("Agregando un Cliente","Se ha agregado un cliente correctamente","success");
            }
        } catch (exception) {
            swal("Error","Ha ocurrido un error","error");
        }
    });

    $('#btnEditarBD').click(function() {
        try {
            let idCliente = document.getElementById("idCliente").value;
            let nom = document.getElementById("nom").value;
            let telDireccion = document.getElementById("telDireccion").value;
            let telCliente = document.getElementById("telCliente").value;
            let nomEquipoCliente = document.getElementById("nomEquipoCliente").value;
            let detalleCliente = document.getElementById("detalleCliente").value;
            let pie;
            //Raddio button
            //let pie;
            //f (document.getElementById('derecho').checked == true) {
            //    pie = "Derecho";
            //}
            //if (document.getElementById('zurdo').checked == true) {
            //    pie = "Zurdo";
            //}
            if (idCliente == "" || nom == "" || telDireccion == "" || telCliente == "" || nomEquipoCliente == "" || detalleCliente == "") {
                swal("Error", "Revise que no tenga campos vacios", "error");
            } else {
                $.post('Php/getEditarBD.php',{paridCliente:idCliente, parNom:nom, partelDireccion:telDireccion, partelCliente:telCliente, 
                    parnomEquipoCliente:nomEquipoCliente, pardetalleCliente:detalleCliente},
                {},'json');
                swal("Modificar Cliente","Se ha modificado el cliente correctamente","success");
            }
        } catch (exception) {
            swal("Error","Ha ocurrido un error","error");
        }
    });

    $('#btnEliminarBD').click(function() {
        try {
            let idCliente = document.getElementById("idCliente").value;
            $.post('Php/getEliminarBD.php',{paridCliente:idCliente},function(data){
                swal("Borrar cliente", "Se ha borrado el cliente", "success");
            },'json');
        } catch (error) {
            swal("Error", "Ha ocurrido un error", "error");
        }
    });

})
//});
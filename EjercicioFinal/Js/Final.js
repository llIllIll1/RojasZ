$(document).ready(function () {
    // Obtenemos un registro json del la Base de datos
    // usando el metodo $.post() de Jquery
    // $.post(URL,parametros,funciondeRetorno(),dato)
    $('#btnConsultaBD').click(function () {
        swal("Ingresa el ID del usuario a consultar:", {
            content: "input",
          }).then((parid) => {
            try {    
                  $.post('./Php/getRegistroBD.php',{par1:parid},function(data){      
                    refrescar(data);                
                  },'json');
              } catch (exception) {
                    swal("Error", "Ha ocurrido un error", "error");
              }
          });    
    });

    function refrescar(objeto) {
        console.log(objeto);
        $('#idCliente').val(objeto.idCliente);
        $('#nom').val(objeto.nom);
        $('#telDireccion').val(objeto.telDireccion);
        $('#telCliente').val(objeto.telCliente);
        $('#nomEquipoCliente').val(objeto.nomEquipoCliente);
        $('#detalleCliente').val(objeto.detalleCliente);
        $('#marcaEquipo').val(objeto.marcaEquipo);
            if (objeto.tipoEquipo == "Gabinete" ) {
                document.getElementById('gabinete').checked = true;
            }
            if (objeto.tipoEquipo == "Laptop") {
                document.getElementById('laptop').checked = true;
            }
    }

    $('#btnAgregarBD').click(function() {
        try {
            let idCliente = document.getElementById("idCliente").value;
            let nom = document.getElementById("nom").value;
            let telDireccion = document.getElementById("telDireccion").value;
            let telCliente = document.getElementById("telCliente").value;
            let nomEquipoCliente = document.getElementById("nomEquipoCliente").value;
            let detalleCliente = document.getElementById("detalleCliente").value;
            //Combo
            let marcaEquipo = document.getElementById("marcaEquipo").value;
            //Raddio button
            let tipo;
            if (document.getElementById('gabinete').checked == true) {
                tipo = "Gabinete";
            }
            if (document.getElementById('laptop').checked == true) {
                tipo = "Laptop";
            }
            if (idCliente == "" || nom == "" || telDireccion == "" || telCliente == "" || 
            nomEquipoCliente == "" || detalleCliente == "" || marcaEquipo == "") {
                swal("Error", "Revise que no tenga campos vacios", "error");
            } else {
                $.post('Php/getAgregarBD.php',{paridCliente:idCliente, parNom:nom, partelDireccion:telDireccion, partelCliente:telCliente, 
                    parnomEquipoCliente:nomEquipoCliente, pardetalleCliente:detalleCliente, parmarcaEquipo:marcaEquipo, partipo:tipo},
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
            //Combo
            let marcaEquipo = document.getElementById("marcaEquipo").value;
            //Raddio button
            let tipo;
            if (document.getElementById('gabinete').checked == true) {
                tipo = "Gabinete";
            }
            if (document.getElementById('laptop').checked == true) {
                tipo = "Laptop";
            }
            if (idCliente == "" || nom == "" || telDireccion == "" || telCliente == "" || 
            nomEquipoCliente == "" || detalleCliente == "" || marcaEquipo == "") {
                swal("Error", "Revise que no tenga campos vacios", "error");
            } else {
                $.post('Php/getEditarBD.php',{paridCliente:idCliente, parNom:nom, partelDireccion:telDireccion, partelCliente:telCliente, 
                    parnomEquipoCliente:nomEquipoCliente, pardetalleCliente:detalleCliente, parmarcaEquipo:marcaEquipo, partipo:tipo},
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
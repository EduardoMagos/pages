'use strict';

$( document ).ready(function() {

    $('#tab_autos').load('views/autos.html');
    $('#sec_modal_producto').load('views/modal.html');

});

function verProducto(id, tipo, imagenes){

    let titulo = $('#nombre_' + id).html();
    let descripcion = $('#detalle_' + id).html();
    let precio = $('#precio_' + id).html();
    let imagen = $('#imagen_' + id).prop('src');

    $('#modal_titulo').html(titulo);
    $('#modal_descripcion').html(descripcion);
    $('#modal_precio').html(precio);
    $('#modal_imagen').attr('src', imagen);

    $('#modal_producto').modal('show');
}
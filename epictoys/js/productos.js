'use strict';

$( document ).ready(function() {

    $(".portfolio-link").click(function(){

        let id = $(this).data("id-producto");
        let titulo = $('#nombre_' + id).html();
        let descripcion = $('#detalle_' + id).html();
        let precio = $('#precio_' + id).html();
        let imagen = $('#imagen_' + id).prop('src');
        $('#modal_titulo').html(titulo);
        $('#modal_descripcion').html(descripcion);
        $('#modal_precio').html(precio);
        $('#modal_imagen').attr('src', imagen);

        $('#modal_producto').modal('show');

	});

});
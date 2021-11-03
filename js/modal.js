$(document).ready(function(){
	$('.imagen-proyecto').on('click', function(){
		var rutaImagen = $(this).attr('src');
		var modal = '<div class="modal" id="modal"><img src="' + rutaImagen + '" alt="Proyecto" class="imagen-proyecto"><div class="btn-cerrar" id="btnCerrar"><i class="fa fa-times" aria-hidden="true"></i></div></div>';

		$('#proyectos').after(modal);
		$('#btnCerrar').on('click', function(){
			$('#modal').remove();
		})
	})
//el 27 es el equivalente a la tecla esc en ascii
	$(document).on('keyup', function(e){
		if (e.which==27) {
			$('#modal').remove();
		}
	}) 
});


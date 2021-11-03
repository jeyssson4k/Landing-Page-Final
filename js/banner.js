$(document).ready(function(){
	var banner = $('#banner');
	//funcion para mantener una altura dinamica en el banner
	function alturaBanner(){
		var vpaltura = $(window).height();
		banner.css('height', vpaltura);
	}
	alturaBanner();
	//recalcular automaticamente la altura cada vez que se mueva
	$(window).resize(alturaBanner);
});


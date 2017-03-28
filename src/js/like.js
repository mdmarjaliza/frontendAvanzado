var $ = require("jquery");

$(document).ready(function(){
	for (var i = 0; i < localStorage.length; i++) {
		var clave = localStorage.key(i);
		var elem = '.articulo[data-id="' + clave + '"] .like-icon';
		$(elem).toggleClass('like-50').toggleClass('like-50-f');
	}
});


$(".like-icon").on('click', function(){
	articleId = $(this).parents("article").data("id");

	// si el id existe en el local storage no hacemos nada, si existe lo guardamos
	var encontrado = false;
	for (var i = 0; i < localStorage.length; i++) {
		storedId = JSON.parse(localStorage.key(i));
		if (storedId == articleId) {
			encontrado = true;
			break;
		}
	}
	if (encontrado == false) {
		localStorage.setItem(JSON.stringify(articleId), JSON.stringify(articleId));
		$(this).toggleClass('like-50').toggleClass('like-50-f');
	}
});
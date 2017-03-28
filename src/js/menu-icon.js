var $ = require("jquery");

var articulos = $(".container")[0];
var categorias = $(".nav-bar")[0];
var comentarios = $(".comments-list")[0];
var formulario = $(".comments-form")[0];
var pie = $(".footer")[0];

$(".menu").on('click', function(){
	this.classList.toggle("change");
	articulos.classList.toggle("ui-element");
	categorias.classList.toggle("ui-element");
	if ($(".comments-list").length) {
		comentarios.classList.toggle("ui-element");
	}
	if ($(".comments-form").length) {
		formulario.classList.toggle("ui-element");
	}
	pie.classList.toggle("ui-element");
});
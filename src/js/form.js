var $ = require('jquery');
var apiClient = require('./api-client');
var commentListManager = require('./comment-list-manager');

var newCommmentButton = $('.comments-form button');
var inputs = $(".comments-form input, .comments-form textarea");

function setLoading() {
	$(inputs).attr("disabled", true);
	newCommmentButton.text("Enviando comentario...").attr("disabled", true);
}

function unsetLoading() {
	$(inputs).attr("disabled", false);
	newCommmentButton.text("Enviar comentario").attr("disabled", false);
}


var avisoPalabras = $("#aviso");


//Control de maximo de palabras del comentario
$('#comment').on('input', function(){
	var wordLen = 120;
	var len = this.value.split(/[\s]+/); 
    if(len.length > wordLen){
    	avisoPalabras.css("display", "block");
    	newCommmentButton.text("Abrevie su comentario").attr("disabled", true);
    } else {
    	avisoPalabras.css("display", "none");
    	newCommmentButton.text("Enviar comentario").attr("disabled", false);
    }
});

// Al enviar formulario enviamos peticion AJAX para almacenar el comentario
$('.comments-form').on('submit', function(){
	//	Validacion de inputs
	var inputs = $("input");
	for (var i = 0; i < inputs.length; i++) {
		var input = inputs[i];
		if (input.checkValidity() == false){
			alert(input.validationMessage);
			input.focus();
			return false;
		}
	}
	
	// comentario que quiero guardar
	var commentary = {
		name: $('#name').val(),
		lastName: $('#apellidos').val(),
		email: $('#mail').val(),
		text: $('#comment').val()
	};

	setLoading(); // deshabilito el formulario
	
	apiClient.save(commentary, function(response){
		$("form")[0].reset();  // borramos los campos del formulario
		$("#name").focus();  // pongo el foco en el campo nomber
		$(".comment-zone-title").text('CARGANDO COMENTARIOS...');
		commentListManager.load();
		unsetLoading();
	}, function(response){
		console.error('ERROR', response);
		unsetLoading();
	});

	return false;  // e.preventDefault();
});
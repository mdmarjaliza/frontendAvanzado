var $ = require("jquery");
var timeElapsed = require("./time-elapsed.js");

var fechas = $('time');  // Lo dejamos fuera del bucle porque al ser estática la pagina no habra articulos nuevos

$(document).ready(function(){
    setInterval(function(){
       for (var i = 0; i < fechas.length; i++) {
       		var fechaPost = $(fechas[i]).attr('datetime');
       		$(fechas[i]).html("");
       		$(fechas[i]).html(timeElapsed.calcularTiempo(fechaPost));
       }
    }, 1000); 
});



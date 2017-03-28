var $ = require("jquery");

module.exports = {
	calcularTiempo: function(fechaPost){
		
		var resultado;

		post = new Date(fechaPost);
		miliPost = post.getTime();

		actual = new Date();
		miliActual = actual.getTime();

		elapsed = (miliActual - miliPost);

		// Al introducir la fecha de creacion del post nos aseguraremos de que no pueda ser un día
		// posterior a hoy, de manera que no hace falta comprobar que el valor elapsed sea negativo

		days = elapsed / 86400000;

		if (days >= 7){

			var month = post.getMonth();
			switch (month) {
			    case 0:
			        month = "Enero";
			        break;
			    case 1:
			        month = "Febrero";
			        break;
			    case 2:
			        month = "Marzo";
			        break;
			    case 3:
			        month = "Abril";
			        break;
			    case 4:
			        month = "Mayo";
			        break;
			    case 5:
			        month = "Junio";
			        break;
			    case 6:
			        month = "Julio";
			        break;
			    case 7:
			        month = "Agosto";
			        break;
			    case 8:
			        month = "Septiembre";
			        break;
			    case 9:
			        month = "Octubre";
			        break;
			    case 10:
			        month = "Noviembre";
			        break;
			    case 11:
			        month = "Diciembre";
			}

			minutos = post.getMinutes();
			if (minutos < 10) {
				resultado = post.getDate() + ' de ' + month + ' de ' + post.getFullYear() + ' a las ' + post.getHours() + ':0' + post.getMinutes();
			} else {
				resultado = post.getDate() + ' de ' + month + ' de ' + post.getFullYear() + ' a las ' + post.getHours() + ':' + post.getMinutes();
			}
			

		} else if (days >= 1 && days < 7) {

			switch (post.getDay()) {
			    case 0:
			        resultado = "el domingo";
			        break;
			    case 1:
			        resultado = "el lunes";
			        break;
			    case 2:
			        resultado = "el martes";
			        break;
			    case 3:
			        resultado = "el miércoles";
			        break;
			    case 4:
			        resultado = "el jueves";
			        break;
			    case 5:
			        resultado = "el viernes";
			        break;
			    case 6:
			        resultado = "el sábado";
			}
			
		} else if (days < 1) {

			hours = elapsed / 3600000;
			if (hours >= 1) {
				
				if (Math.floor(hours) == 1) {
					resultado = 'hace ' + Math.floor(hours) + ' hora'; 
				} else {
					resultado = 'hace ' + Math.floor(hours) + ' horas'; 
				}

			} else {

				minutes = elapsed / 60000;
				if (minutes >= 1) {

					if (Math.floor(minutes) == 1) {
						resultado = 'hace ' + Math.floor(minutes) + ' minuto'; 
					} else {
						resultado = 'hace ' + Math.floor(minutes) + ' minutos';
					}

				} else {
					seconds = elapsed / 1000;
					if (Math.floor(seconds) == 1) {
						resultado = 'hace ' + Math.floor(seconds) + ' segundo'; 
					} else {
						resultado = 'hace ' + Math.floor(seconds) + ' segundos';
					}
				}
			}
		}
		return resultado;
	}
}
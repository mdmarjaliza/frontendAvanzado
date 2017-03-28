var $ = require("jquery");

// Seleccionamos los elementos que no tienen imagen de usuario definida
// y le ponemos la imagen de placeholder en su lugar
var missingAvatars = $(".author-img[src='']");

for (var i = 0; i < missingAvatars.length; i++) {
	var imgAvatar = missingAvatars[i];
	$(imgAvatar).attr("src", "images/avatar.png");
}
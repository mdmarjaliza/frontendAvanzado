var $ = require('jquery');
var apiClient = require('./api-client');
var utils = require('./utils.js');

module.exports = {
	load: function() {
		apiClient.list(function(response){
			$('.comments-div').html('');
			var numComments = response.length;
			if (numComments == 0) {
				$(".comment-zone-title").text('NO EXISTEN COMENTARIOS PUBLICADOS');
				$(".link-comentarios").text('Sin comentarios');  // Lo mismo para todos los articulos, se cambiara cuando se publiquen articulos y cada uno tenga 1 id
				return false;
			} else if (numComments == 1) {
				$(".comment-zone-title").text('1    COMENTARIO');
				$(".link-comentarios").text('1 comentario');   
			} else {
				var howManyComments = numComments + '    COMENTARIOS';
				$(".comment-zone-title").text(howManyComments);
				$(".link-comentarios").text(numComments + ' comentarios');
			}
			for (var i in response) {
				var comment = response[i];

				var id = comment.id || "";

				var name = comment.name || "";
				var lastName = comment.lastName || "";
				var email = comment.email || "";
				var text = comment.text || "";

				var html = '<article class="comment" data-id="' + id + '">';
				html += '<span class="comment-user">' + utils.escapeHTML(comment.name) + " " + utils.escapeHTML(comment.lastName) + '</span>';
				html += '<p class="comment-text">' + utils.escapeHTML(comment.text) + '</p>';
				html += '</article>';
				$('.comments-div').append(html);
			}
		}, function(response){
			$(".comment-zone-title").text('ERROR AL CARGAR LOS COMENTARIOS');
		})
	},
}
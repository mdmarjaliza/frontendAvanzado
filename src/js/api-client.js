var $ = require('jquery');

module.exports = {
	
	save: function(commentary, successCallback, errorCallback) {

		var formData = new FormData();
		formData.append("name", commentary.name);
        formData.append("lastName", commentary.lastName);
        formData.append("email", commentary.email);
        formData.append("text", commentary.text);

		$.ajax({
			url: '/api/comments/',
			method: 'post',
			data: formData,
			processData: false,
			contentType: false,
			success: successCallback,
			error: errorCallback
		}).fail( function( jqXHR, textStatus, errorThrown ) {
			console.log(jqXHR, textStatus, errorThrown);
			if (jqXHR.status === 0) {
				alert('Not connect: Verify Network.');
			} else if (jqXHR.status == 404) {
			    alert('Requested page not found [404]');
			} else if (jqXHR.status == 500) {
			    alert('Internal Server Error [500].');
			} else if (textStatus === 'parsererror') {
			    alert('Requested JSON parse failed.');
			} else if (textStatus === 'timeout') {
			    alert('Time out error.');
			} else if (textStatus === 'abort') {
			    alert('Ajax request aborted.');
			} else {
			    alert('Uncaught Error: ' + jqXHR.responseText);
			}
		});
	},

	// Posible delete para el futuro
	// delete: function(, successCallback, errorCallback) {
	// 	$.ajax({
    //      url: ,
	// 		method: 'delete',
	// 		success: successCallback,
	// 		error: errorCallback
	// 	});
	// },

	list: function(successCallback, errorCallback) {
		$.ajax({
			url: '/api/comments/',
			method: 'get',
			success: successCallback,
			error: errorCallback
		}).fail( function( jqXHR, textStatus, errorThrown ) {
			console.log(jqXHR, textStatus, errorThrown);
			if (jqXHR.status === 0) {
				alert('Not connect: Verify Network.');
			} else if (jqXHR.status == 404) {
			    alert('Requested page not found [404]');
			} else if (jqXHR.status == 500) {
			    alert('Internal Server Error [500].');
			} else if (textStatus === 'parsererror') {
			    alert('Requested JSON parse failed.');
			} else if (textStatus === 'timeout') {
			    alert('Time out error.');
			} else if (textStatus === 'abort') {
			    alert('Ajax request aborted.');
			} else {
			    alert('Uncaught Error: ' + jqXHR.responseText);
			}
		});
	}
};
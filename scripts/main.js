;(function(){

	var userName = prompt('Кто пришёл?');

	if (userName == 'Admin') {

		var pass = prompt('Пароль?', '');

		if (pass == 'Чёрный Властелин') {
			console.log( 'Добро пожаловать!' );

		} else if (pass == null) { 

			console.log( 'Вход отменён' );

		} else {
			console.log( 'Пароль неверен' );
		}

	} else if (userName == null) { 
		console.log( 'Вход отменён' );

	} else {

		console.log( 'Я вас не знаю' );

	}
	
})();
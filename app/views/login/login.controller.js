(function () {
	'use strict';

	angular
		.module('st')
		.controller('LoginController', LoginController);

	/* @ngInject */
	function LoginController(AuthService, $state) {
		var vm = this;

		vm.signIn = signIn;
		vm.signOut = signOut;


		init();

		function init() {
			if (!firebase.apps.length) {
				var config = {
					apiKey: 'AIzaSyDpYQAnJfFD1TNXa1NvSVAs7lYwpCPU2yI',
					authDomain: 'fs-systrans.firebaseapp.com',
					databaseURL: 'https://fs-systrans.firebaseio.com',
					storageBucket: 'fs-systrans.appspot.com',
					messagingSenderId: '115216480927'
				};
				firebase.initializeApp(config);
			}
		}

		function signIn() {
			AuthService.signIn(vm.usuario, vm.senha)
				.then(function (firebaseUser) {
					if (firebaseUser.email) {
						console.log('Logado com sucesso: ' + firebaseUser);
						$state.go('dashboard');
					}
				})
				.catch(function (error) {
					return error.code + ': ' + error.message;
				});
		}

		function signOut() {
			AuthService.signOut();
		}

	}
})();
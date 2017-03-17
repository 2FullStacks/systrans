(function () {

	'use strict';

	angular
		.module('st')
		.service('AuthService', AuthService);

	/* @ngInject */
	function AuthService(FsStorageService) {

		var self = this;

		self.criarUsuario = criarUsuario;
		self.signIn = signIn;
		self.signOut = signOut;
		self.isUsuarioLogado = isUsuarioLogado;
		self.verificarToken = verificarToken;
		self.firebaseIsInitialized = firebaseIsInitialized;

		function firebaseIsInitialized() {
			if (!firebase.apps.length) {
				conectaFirebase();
			}
		}

		function conectaFirebase() {
			var config = {
				apiKey: 'AIzaSyDpYQAnJfFD1TNXa1NvSVAs7lYwpCPU2yI',
				authDomain: 'fs-systrans.firebaseapp.com',
				databaseURL: 'https://fs-systrans.firebaseio.com',
				storageBucket: 'fs-systrans.appspot.com',
				messagingSenderId: '115216480927'
			};
			firebase.initializeApp(config);
		}

		function criarUsuario(email, senha) {
			firebaseIsInitialized();
			firebase.auth().createUserWithEmailAndPassword(email, senha).catch(function (error) {
				return error.code + ': ' + error.message;
			});
		}

		function signIn(email, senha) {
			firebaseIsInitialized();
			return firebase.auth().signInWithEmailAndPassword(email, senha)
				.then(function (firebaseUser) {
					FsStorageService.set('usuarioLogado', firebaseUser);
					console.log('Logado com sucesso: ' + firebaseUser);
					return firebaseUser;
				})
				.catch(function (error) {
					console.log(error.code + ': ' + error.message);
					return false;
				});
		}

		function signOut() {
			firebaseIsInitialized();
			return firebase.auth().signOut()
				.then(function () {
					console.log('Sessão finalizada com sucesso');
					FsStorageService.remover('usuarioLogado');
					return true;
				}, function (error) {
					return error;
				});
		}

		function isUsuarioLogado() {
			return !!FsStorageService.get('usuarioLogado');
		}

		function verificarToken() {
			firebaseIsInitialized();
			firebase.auth().currentUser.getToken(/* forceRefresh */ true).then(function (idToken) {
				console.log(idToken);
			}).catch(function (error) {
				console.log('Erro ao verificarToken');
			});
		}

	}
})();


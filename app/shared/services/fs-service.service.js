(function () {
	'use strict';

	angular.module('st')
		.service('FsService', FsService);

	function FsService($http, FsAlertService) {
		return function () {
			var self = this;

			self.entidade = {};
			self.listaEnditade = [];
			self.provider = [];

			self.salvar = salvar;
			self.eliminar = eliminar;
			self.limpar = limpar;
			self.listar = listar;
			self.editar = editar;
			self.switchCard = switchCard;

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

			function salvar() {
				if (self.entidade.key) {
					return firebase.database()
						.ref()
						.child(self.entidadeFirebase + '/' + self.entidade.key)
						.set(self.entidade)
						.then(success);
				} else {
					return firebase.database()
						.ref()
						.child(self.entidadeFirebase)
						.push(self.entidade)
						.then(success);
				}

				function success(result) {
					FsAlertService.showSuccess('Registro salvo com sucesso!');
					limpar();
					listar();
					self.postSalvar();
					return !!result.key;
				}
			}

			function eliminar(key) {
				return firebase.database()
					.ref(self.entidadeFirebase)
					.child(key)
					.remove()
					.then(function () {
						listar();
						if (Object.keys(self.listaEnditade).length <= 1) {
							self.switchCard();
						}
						FsAlertService.showSuccess('Registro eliminado !');
						return true;
					});
			}

			function listar() {
				return firebase.database()
					.ref()
					.child(self.entidadeFirebase)
					.once('value')
					.then(function (response) {
						self.listaEnditade = response.val();
					});
			}

			function editar(key) {
				self.entidade = self.listaEnditade[key];
				self.entidade.key = key;
				self.switchCard();
			}

			function limpar() {
				self.entidade = {};
			}

			function switchCard() {
				self.cardReveal = $('.card-reveal .card-title') ? $('.card-reveal .card-title') : $('.card .activator');
				self.cardReveal.click();
			}

		};
	}
})();
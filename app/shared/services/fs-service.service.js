(function () {
	'use strict';

	angular.module('st')
		.service('FsService', FsService);

	function FsService($http) {
		return function (controller) {
			var self = this;

			self.controller = controller;

			self.entidade = {};
			self.listaEnditade = [];
			self.provider = [];

			self.metodoSalvar = 'salvar';
			self.metodoExcluir = 'excluir';
			self.metodoPesquisar = 'pesquisar';

			self.salvar = salvar;
			self.excluir = excluir;
			self.limpar = limpar;
			self.pesquisar = pesquisar;
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
						.then(function () {
							return true;
						});
				} else {
					return firebase.database()
						.ref()
						.child(self.entidadeFirebase)
						.push(self.entidade)
						.then(function (result) {
							return !!result.key;
						});
				}
				// return $http.post('rest/' + self.controller + '/' +
				// 	self.metodoSalvar, self.entidade)
				// 	.then(salvarResult);
				//
				// function salvarResult(response) {
				// 	self.entidade = response.data;
				//
				// 	StAlertService.showSuccess('Registro salvo com sucesso!');
				//
				// 	return response.data;
				// }
			}

			function excluir() {
				return $http.delete('rest/' + self.controller + '/' + self.metodoExcluir + '/' + self.entidade.id)
					.then(excluirResult);

				function excluirResult(response) {
					StAlertService.showSuccess('Registro excluido com sucesso!');

					limpar();

					return response.data;
				}
			}

			function limpar() {
				self.entidade = {};
			}

			function pesquisar() {
				return $http.post('rest/' + self.controller + '/' + self.metodoPesquisar, self.entidade)
					.then(pesquisarResult);

				function pesquisarResult(response) {
					self.provider = response.data;

					return response.data;
				}
			}

			function switchCard() {
				self.cardReveal = $('.card-reveal .card-title') ? $('.card-reveal .card-title') : $('.card .activator');
				self.cardReveal.click();
			}

		};
	}
})();
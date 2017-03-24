(function () {
	'use strict';

	angular.module('st')
		.service('FsService', FsService);

	function FsService(FsAlertService, $firebaseArray) {
		return function () {
			var self = this;

			self.entidade = {};
			self.listaEntidade = [];
			self.provider = [];

			self.initRef = initRef;
			self.salvar = salvar;
			self.eliminar = eliminar;
			self.limpar = limpar;
			self.listar = listar;
			self.editar = editar;
			self.switchCard = switchCard;

			function initRef() {
				self.fbRef = $firebaseArray(firebase.database().ref(self.entidadeFirebase));
			}

			function salvar() {
				debugger;
				if (self.entidade.$id) {
					self.fbRef.$save(self.entidade).then(function (response) {
						FsAlertService.showSuccess('Registro atualizado com sucesso');
						limpar();
						return response;
					}, function (error) {
						console.log(error)
					});
				} else {
					self.fbRef.$add(self.entidade).then(function (response) {
						FsAlertService.showSuccess('Novo registro salvo com sucesso');
						limpar();
						return response;
					});
				}
			}

			function eliminar(key) {
				self.fbRef.$remove(self.fbRef[key])
					.then(function (response) {
						FsAlertService.showSuccess('Registro eliminado com sucesso');
						if (self.fbRef.length == 0) {
							switchCard();
						}
						return response;
					}, function (error) {
						console.log(error)
					});
			}

			function listar() {
				return self.listaEntidade = $firebaseArray(firebase.database().ref(self.entidadeFirebase));
			}

			function editar(key) {
				self.entidade = self.fbRef[key];
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
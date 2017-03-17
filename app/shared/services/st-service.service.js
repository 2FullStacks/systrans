(function () {
	'use strict';

	angular.module('st')
		.service('StService', StService);

	function StService($http, StAlertService) {
		return function (controller) {
			var self = this;

			self.controller = controller;

			self.entidade = {};
			self.provider = [];

			self.metodoSalvar = 'salvar';
			self.metodoExcluir = 'excluir';
			self.metodoPesquisar = 'pesquisar';

			self.salvar = salvar;
			self.excluir = excluir;
			self.limpar = limpar;
			self.pesquisar = pesquisar;

			function salvar() {
				return $http.post('rest/' + self.controller + '/' +
					self.metodoSalvar, self.entidade)
					.then(salvarResult);

				function salvarResult(response) {
					self.entidade = response.data;

					StAlertService.showSuccess('Registro salvo com sucesso!');

					return response.data;
				}
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
		};
	}
})();
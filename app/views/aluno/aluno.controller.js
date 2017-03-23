(function () {
	'use strict';

	angular
		.module('st')
		.controller('AlunoController', AlunoController);

	/* @ngInject */
	function AlunoController(AlunoService, $scope, InstituicaoService) {
		var vm = this;

		vm.alunoService = AlunoService.getFsService();
		vm.instituicaoService = InstituicaoService.getFsService();

		vm.alunoService.reload = reload;
		vm.alunoService.postModificar = postModificar;

		init();

		function init() {
			listarWithInstituicoes();
		}

		function reload() {
			$scope.$applyAsync();
		}

		function postModificar() {
			listarWithInstituicoes();
		}

		function listarWithInstituicoes() {
			vm.alunoService.listarWithInstituicoes()
				.then(function (lista) {
					vm.alunoService.listaEntidade = lista;
					vm.alunoService.listaEnditadeCarregada = true;
					reload();
				});
		}
	}

})();


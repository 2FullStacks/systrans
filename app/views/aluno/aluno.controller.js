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

		init();

		function init() {
			vm.alunoService.listar();
		}

		function reload() {
			$scope.$applyAsync();
		}
	}

})();


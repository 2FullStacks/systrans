(function () {
	'use strict';

	angular
		.module('st')
		.controller('AlunoController', AlunoController);

	/* @ngInject */
	function AlunoController(AlunoService, $scope) {
		var vm = this;

		vm.fsService = AlunoService.getFsService();

		vm.fsService.postSalvar = postSalvar;

		init();

		function init() {
			vm.fsService.listar();
		}

		function postSalvar() {
			$scope.$applyAsync();
		}
	}

})();


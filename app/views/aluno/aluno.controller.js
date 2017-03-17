(function () {
	'use strict';

	angular
		.module('st')
		.controller('AlunoController', AlunoController);

	/* @ngInject */
	function AlunoController(AlunoService, $scope) {
		var vm = this;

		vm.fsService = AlunoService.getFsService();

		vm.fsService.reload = reload;

		init();

		function init() {
			vm.fsService.listar();
		}

		function reload() {
			$scope.$applyAsync();
		}
	}

})();


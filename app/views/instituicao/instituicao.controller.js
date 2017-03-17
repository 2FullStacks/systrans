(function () {
	'use strict';

	angular
		.module('st')
		.controller('InstituicaoController', InstituicaoController);

	/* @ngInject */
	function InstituicaoController(InstituicaoService, $scope) {
		var vm = this;

		vm.fsService = InstituicaoService.getFsService();

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


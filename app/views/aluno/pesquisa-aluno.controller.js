(function () {
	'use strict';

	angular
		.module('st')
		.controller('PesquisaAlunoController', PesquisaAlunoController);

	/* @ngInject */
	function PesquisaAlunoController(AlunoService) {
		var vm = this;

		vm.fsService = AlunoService.getFsService();

		init();

		vm.gridOptions = {
			data: vm.fsService.entidades
		};

		function init() {
			vm.fsService.listar();
		}
	}

})();


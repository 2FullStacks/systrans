(function () {
	'use strict';

	angular
		.module('st')
		.controller('PesquisaAlunoController', PesquisaAlunoController);

	/* @ngInject */
	function PesquisaAlunoController(AlunoService) {
		var vm = this;

		vm.stService = AlunoService.getStService();

		init();

		vm.gridOptions = {
			data: vm.stService.entidades
		};

		function init() {
			vm.stService.listar();
		}
	}

})();


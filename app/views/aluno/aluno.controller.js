(function () {
	'use strict';

	angular
		.module('st')
		.controller('AlunoController', AlunoController);

	/* @ngInject */
	function AlunoController(AlunoService, InstituicaoService) {
		var vm = this;

		vm.alunoService = AlunoService.getFsService();
		vm.instituicaoService = InstituicaoService.getFsService();

		init();

		function init() {
			vm.alunoService.initRef();
			vm.alunoService.listar();
			vm.instituicaoService.initRef();
			vm.instituicaoService.listar();
		}

	}

})();


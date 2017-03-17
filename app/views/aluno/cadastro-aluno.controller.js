(function () {
	'use strict';

	angular
		.module('st')
		.controller('CadastroAlunoController', CadastroAlunoController);

	/* @ngInject */
	function CadastroAlunoController(AlunoService) {
		var vm = this;

		vm.fsService = AlunoService.getFsService();

		vm.fsService.preSalvar = preSalvar;
		vm.fsService.postSalvar = postSalvar;

		function preSalvar() {
			console.log('Faz alguma coisa antes de salvar')
		}

		function postSalvar() {
			console.log('Faz alguma coisa depois de salvar');
		}
	}

})();


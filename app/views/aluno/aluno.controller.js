(function () {
	'use strict';

	angular
		.module('st')
		.controller('AlunoController', AlunoController);

	/* @ngInject */
	function AlunoController(AlunoService) {
		var vm = this;

		vm.fsService = AlunoService.getFsService();

		vm.fsService.preSalvar = preSalvar;
		vm.fsService.postSalvar = postSalvar;

		vm.fsService.entidadeFirebase = 'alunos';

		function preSalvar() {
			console.log('Faz alguma coisa antes de salvar')
		}

		function postSalvar() {
			console.log('Faz alguma coisa depois de salvar');
		}
	}

})();


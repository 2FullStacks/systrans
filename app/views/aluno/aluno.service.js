(function () {
	'use strict';

	angular
		.module('st')
		.service('AlunoService', AlunoService);

	/* @ngInject */
	function AlunoService(StService) {
		this.getStService = getStService;

		function getStService() {
			var ps = new StService('CadastroAlunoController');
			ps.tituloPaginaCadastro = 'Cadastro de aluno';
			ps.tituloPaginaPesquisa = 'Pesquisa de aluno';
			ps.nomeKey = 'aluno';
			return ps;
		}


	}

})();


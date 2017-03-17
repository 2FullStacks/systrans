(function () {
	'use strict';

	angular
		.module('st')
		.service('AlunoService', AlunoService);

	/* @ngInject */
	function AlunoService(FsService) {
		this.getFsService = getFsService;

		function getFsService() {
			var ps = new FsService('CadastroAlunoController');
			ps.tituloPaginaCadastro = 'Cadastro de aluno';
			ps.tituloPaginaPesquisa = 'Pesquisa de aluno';
			ps.nomeKey = 'aluno';
			return ps;
		}


	}

})();


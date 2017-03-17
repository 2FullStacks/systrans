(function () {
	'use strict';

	angular
		.module('st')
		.service('AlunoService', AlunoService);

	/* @ngInject */
	function AlunoService(FsService) {
		this.getFsService = getFsService;

		function getFsService() {
			var fs = new FsService();
			fs.tituloPaginaCadastro = 'Cadastro de aluno';
			fs.tituloPaginaPesquisa = 'Pesquisa de aluno';
			fs.entidadeFirebase = 'alunos';

			return fs;
		}


	}

})();


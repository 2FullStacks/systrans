(function () {
	'use strict';

	angular
		.module('st')
		.service('InstituicaoService', InstituicaoService);

	/* @ngInject */
	function InstituicaoService(FsService) {
		this.getFsService = getFsService;


		function getFsService() {
			var fs = new FsService();
			fs.tituloPaginaCadastro = 'Cadastro de instituição';
			fs.tituloPaginaPesquisa = 'Pesquisa de instituição';
			fs.entidadeFirebase = 'instituicoes';

			return fs;
		}


	}

})();


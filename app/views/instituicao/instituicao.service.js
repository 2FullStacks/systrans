(function () {
	'use strict';

	angular
		.module('stApp')
		.service('InstituicaoService', InstituicaoService);

	/* @ngInject */
	function InstituicaoService(FsService) {
		this.getFsService = getFsService;

		function getFsService() {
			var ps = new FsService('CadastroInstituicaoController');
			ps.tituloPaginaCadastro = "Cadastro de instituição";
			ps.tituloPaginaPesquisa = "Pesquisa de instituição";
			ps.nomeKey = 'instituicao';
			return ps;
		}
	}
})();
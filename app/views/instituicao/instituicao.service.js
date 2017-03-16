(function () {
	'use strict';

	angular
		.module('stApp')
		.service('InstituicaoService', InstituicaoService);

	/* @ngInject */
	function InstituicaoService(StService) {
		this.getStService = getStService;

		function getStService() {
			var ps = new StService('CadastroInstituicaoController');
			ps.tituloPaginaCadastro = "Cadastro de instituição";
			ps.tituloPaginaPesquisa = "Pesquisa de instituição";
			ps.nomeKey = 'instituicao';
			return ps;
		}
	}
})();
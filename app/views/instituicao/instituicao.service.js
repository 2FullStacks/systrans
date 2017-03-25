(function () {
	'use strict';

	angular
		.module('st')
		.service('InstituicaoService', InstituicaoService);

	/* @ngInject */
	function InstituicaoService(FsService, $firebaseArray) {

		this.getFsService = getFsService;

		function getFsService() {
			var fs = new FsService();
			fs.tituloPaginaCadastro = 'Cadastro de instituição';
			fs.tituloPaginaPesquisa = 'Pesquisa de instituição';
			fs.entidadeFirebase = 'instituicoes';
			fs.listaEntidade = $firebaseArray(firebase.database().ref().child(fs.entidadeFirebase));
			return fs;
		}
	}
})();
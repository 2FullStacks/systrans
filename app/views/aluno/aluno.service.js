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
			fs.listarWithInstituicoes = listarWithInstituicoes;

			return fs;
		}

		function listarWithInstituicoes() {
			var promises = [];
			var instituicoes = {};
			var alunos = [];

			return firebase.database()
				.ref()
				.child('instituicoes')
				.once('value')
				.then(function (response) {

					instituicoes = response.val();

					var promise = firebase.database()
						.ref()
						.child('alunos')
						.once('value')
						.then(function (response) {
							var listaObjetos = response.val();
							for (var key in listaObjetos) {
								listaObjetos[key].key = key;
								alunos.push(listaObjetos[key]);
							}
							alunos.forEach(function (aluno) {
								var instituicao = instituicoes[aluno.instituicao.key];
								instituicao.key = aluno.instituicao.key;
								aluno.instituicao = instituicao;
							});
						});
					promises.push(promise);

					return Promise.all(promises).then(function () {
						return alunos;
					});

				});
		}
	}
})();


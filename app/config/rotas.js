(function () {
	'use strict';

	angular
		.module('st')
		.config(config);

	/* @ngInject */
	function config($stateProvider) {

		const dashboard = {
			name: 'dashboard',
			url: '/dashboard',
			templateUrl: 'views/dashboard/dashboard.html',
			controller: 'DashboardController',
			controllerAs: 'vm'
		};

		const aluno = {
			name: 'aluno',
			url: '/aluno',
			templateUrl: 'views/aluno/aluno.html',
			controller: 'AlunoController',
			controllerAs: 'vm'
		};

		const cadastroInstituicao = {
			name: 'cadastroInstituicao',
			url: '/cadastro-instituicao',
			templateUrl: 'views/instituicao/cadastro-instituicao.html',
			controller: 'CadastroInstituicaoController',
			controllerAs: 'vm'
		};

		const pesquisaInstituicao = {
			name: 'pesquisaInstituicao',
			url: '/pesquisa-instituicao',
			templateUrl: 'views/instituicao/pesquisa-instituicao.html',
			controller: 'PesquisaInstituicaoController',
			controllerAs: 'vm'
		};

		$stateProvider
			.state('dashboard', dashboard)
			.state('aluno', aluno)
			.state('cadastroInstituicao', cadastroInstituicao)
			.state('pesquisaInstituicao', pesquisaInstituicao);

	}

})();
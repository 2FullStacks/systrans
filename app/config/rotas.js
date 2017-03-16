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

		const cadastroAluno = {
			name: 'cadastroAluno',
			url: '/cadastro-aluno',
			templateUrl: 'views/aluno/cadastro-aluno.html',
			controller: 'CadastroAlunoController',
			controllerAs: 'vm'
		};

		const pesquisaAluno = {
			name: 'pesquisaAluno',
			url: '/pesquisa-aluno',
			templateUrl: 'views/aluno/pesquisa-aluno.html',
			controller: 'PesquisaAlunoController',
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
			.state('cadastroAluno', cadastroAluno)
			.state('pesquisaAluno', pesquisaAluno)
			.state('cadastroInstituicao', cadastroInstituicao)
			.state('pesquisaInstituicao', pesquisaInstituicao);

	}

})();
(function () {
	'use strict';

	angular
		.module('st')
		.config(config);

	/* @ngInject */
	function config($stateProvider) {

		const login = {
			name: 'login',
			url: '/login',
			templateUrl: 'views/login/login.html',
			controller: 'LoginController',
			controllerAs: 'vm'
		};

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

		const instituicao = {
			name: 'instituicao',
			url: '/instituicao-instituicao',
			templateUrl: 'views/instituicao/instituicao.html',
			controller: 'InstituicaoController',
			controllerAs: 'vm'
		};

		$stateProvider
			.state('login', login)
			.state('dashboard', dashboard)
			.state('aluno', aluno)
			.state('instituicao', instituicao);

	}

})();
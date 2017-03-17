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

		const instituicao = {
			name: 'instituicao',
			url: '/instituicao-instituicao',
			templateUrl: 'views/instituicao/instituicao.html',
			controller: 'InstituicaoController',
			controllerAs: 'vm'
		};

		$stateProvider
			.state('dashboard', dashboard)
			.state('aluno', aluno)
			.state('instituicao', instituicao);

	}

})();
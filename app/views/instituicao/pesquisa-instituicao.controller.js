(function () {
	'use strict';

	angular
		.module('stApp')
		.controller('PesquisaInstituicaoController', PesquisaInstituicaoController);

	/* @ngInject */
	function PesquisaInstituicaoController(InstituicaoService) {
		var vm = this;

		vm.titulo = "Pesquisa de instituição";

		vm.stService = InstituicaoService.getStService();

		init();

		vm.gridOptions = {
			data: vm.stService.entidades
		};

		function init() {
			vm.stService.listar();
		}
	}
})();
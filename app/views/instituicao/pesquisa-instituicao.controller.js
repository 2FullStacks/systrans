(function () {
	'use strict';

	angular
		.module('stApp')
		.controller('PesquisaInstituicaoController', PesquisaInstituicaoController);

	/* @ngInject */
	function PesquisaInstituicaoController(InstituicaoService) {
		var vm = this;

		vm.titulo = "Pesquisa de instituição";

		vm.fsService = InstituicaoService.getFsService();

		init();

		vm.gridOptions = {
			data: vm.fsService.entidades
		};

		function init() {
			vm.fsService.listar();
		}
	}
})();
(function () {
	'use strict';

	angular
		.module('st')
		.controller('InstituicaoController', InstituicaoController);

	/* @ngInject */
	function InstituicaoController(InstituicaoService) {
		var vm = this;

		vm.fsService = InstituicaoService.getFsService();

	}

})();
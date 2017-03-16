(function () {
	'use strict';

	angular
		.module('stApp')
		.controller('CadastroInstituicaoController', CadastroInstituicaoController);

	/* @ngInject */
	function CadastroInstituicaoController($scope,InstituicaoService,$firebaseObject) {
		var vm = this;
		vm.stService = InstituicaoService.getStService();

        var ref = firebase.database().ref();
        // download the data into a local object
        $scope.data = $firebaseObject(ref);
	}
})();
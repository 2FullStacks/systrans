(function () {
	'use strict';

	angular
		.module('st')
		.directive('fsInputText', fsInputText);

	/* @ngInject */
	function fsInputText() {
		var directive = {
			restrict: 'E',
			require: '^form',
			link: link,
			scope: {
				label: '@',

				largura: '@',
				icone: '@',
				tamanho: '@',
				tipo: '@',
				ngModel: '=',
				ngRequired: '='
			},
			templateUrl: 'shared/directives/fs-input-text/fs-input-text.template.html'
		};
		return directive;

		function link($scope, element, attrs, formCtrl) {
			$scope.formCtrl = formCtrl;
			$scope.inputName = 'fsInputText' + $scope.$id;
			$scope.tipo = $scope.tipo ? $scope.tipo : 'text';
		}
	}

})();
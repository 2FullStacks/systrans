(function () {
	'use strict';

	angular
		.module('st')
		.directive('stInputText', stInputText);

	/* @ngInject */
	function stInputText() {
		var directive = {
			restrict: 'E',
			require: '^form',
			templateUrl: 'shared/directives/stInputText/st-input-text.template.html',
			link: link,
			scope: {
				label: '@',
				largura: '@',
				icone: '@',
				tamanho: '@',
				tipo: '@',
				ngModel: '=',
				ngRequired: '='
			}
		};
		return directive;

		function link($scope, element, attrs, formCtrl) {
			$scope.formCtrl = formCtrl;
			$scope.inputName = 'stInputText' + $scope.$id;
			$scope.tipo = $scope.tipo ? $scope.tipo : 'text';
		}
	}

})();
(function () {
	'use strict';

	angular.module('st')
		.directive('fsCrud', fsCrud);

	function fsCrud($log) {
		return {
			restrict: 'E',
			scope: {
				classIcone: '@',
				service: '='
			},
			transclude: {
				'header': '?fsCrudHeader',
				'body': 'fsCrudBody',
				'footer': '?fsCrudFooter',
				'list': '?fsList'
			},
			templateUrl: 'shared/directives/fs-crud/fs-crud.html',
			link: link
		};
		function link(scope) {
			iniciar();
			function iniciar() {
				definirValoresDefault();
			}

			function definirValoresDefault() {
				scope.classIcone = scope.classIcone || 'dashboard';
			}
		}
	}
})();
(function () {
	'use strict';

	angular.module('st')
		.directive('fsCrud', fsCrud);

	function fsCrud($log) {
		return {
			restrict: 'E',
			scope: {
				classIcone: '@',
				titulo: '=',
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
				verificarParametrosNaoInformado();
				definirValoresDefault();
			}

			function verificarParametrosNaoInformado() {
				if (!scope.titulo) {
					$log.error('Atenção: Não foi informado o título do crud');
				}
			}

			function definirValoresDefault() {
				scope.formName = 'fsForm' + scope.$id;
				scope.classIcone = scope.classIcone || 'fa fa-edit';
			}
		}
	}
})();
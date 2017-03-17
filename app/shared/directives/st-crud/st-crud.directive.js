(function () {
	'use strict';

	angular.module('st')
		.directive('stCrud', stCrud);

	function stCrud($log) {
		return {
			restrict: 'E',
			scope: {
				classIcone: '@',
				titulo: '=',
				service: '='
			},
			transclude: {
				'header': '?stCrudHeader',
				'body': 'stCrudBody',
				'footer': '?stCrudFooter'
			},
			templateUrl: 'shared/directives/st-crud/st-crud.html',
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
				scope.formName = 'stForm' + scope.$id;
				scope.classIcone = scope.classIcone || 'fa fa-edit';
			}
		}
	}
})();
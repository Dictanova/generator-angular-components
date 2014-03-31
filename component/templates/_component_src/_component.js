
/**
 * 
 * @name <%= componentModuleName %>
 *
 * @description
 * Describe the <%= componentName %> component here.
 */

angular.module('<%= componentModuleName %>', [])

.constant('<%= camelizedName %>Config', {
  configVar: true
})

.controller('<%= classedName %>Controller', function <%= classedName %>Controller($scope,  $attrs, <%= camelizedName %>Config) {
  this.componentName = '<%= componentName %>';
  this.configVar = angular.isDefined($attrs.configVar) ? $scope.$parent.$eval($attrs.configVar) : <%= camelizedName %>Config.configVar;
})

.directive('<%= camelizedName %>', function() {
  return {
    restrict: 'EA',
    scope: true,
    controller: '<%= classedName %>Controller',
    templateUrl: 'template/<%= componentId %>/<%= componentId %>.html',
    replace: true,
    link: function(scope, element, attrs, ctrl) {
      var <%= camelizedName %>Ctrl = ctrl;
      scope.configVar = ctrl.configVar;
      scope.componentName = ctrl.componentName;
    }
  };
})

;

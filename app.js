( function (){
  angular.module("convertapp",[])
  .controller("appcontroller",appcontroller)
  appcontroller.$inject=($scope,$filter)
function appcontroller($scope,$filter){
  $scope.name="amal"


$scope.message=function (){
  var msg="amal is a good boy"
  var output=$filter("uppercase")(msg)
  return output;
}};







})();

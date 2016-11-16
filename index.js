angular.module('ToDo', []).
   controller('todocontroller', ['$scope', function($scope){
      //scoped variables
      $scope.currenttodos = [
         {'title':'{{list.title}}','item':'first grocery item','done':false}
      ];
      $scope.lists = [
         {'title':'first list name','done':false}
      ];
      //value for form boxes
      $scope.newlist = "Click here to add a new list.";
      $scope.newtodo = "Click here to add a new item.";
      // functions
      $scope.addList = function(){
         $scope.lists.push({'title':$scope.newlist, 'item':'','done':false});
         $scope.newlist = '';
      };
      $scope.addtodo = function(){
         $scope.currenttodos.push({'title':$scope.newtodo, 'done':false});
         $scope.newtodo = '';

      };
      $scope.clearCompleted = function(){
         $scope.todos = $scope.todos.filter(function(item){
            return !item.done;
         });

      };
      $scope.deletetodo = function(){
         $scope.currenttodos.pull({'title':$scope.newtodo, 'done':false})
      };
   }]);

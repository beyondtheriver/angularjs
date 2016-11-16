angular.module('ToDo', []).
   controller('todoCtrl', ['$scope', function($scope){
      //scoped variables
      $scope.master_lists = [
         {'title':"First List!",'done':false}
      ];
      $scope.current_lists = [
         {'title':'name of list','todo_item':'first item here','done':false}
      ];
      //value for form boxes
      $scope.newlist = "Click here to add a new list.";
      $scope.newtodo = "Click here to add a new item.";
      //functions
      $scope.addList = function(){
         $scope.master_lists.push({'title':$scope.newlist,'item':'','done':false});
         $scope.newlist = '';
      }
      $scope.addItem = function(){
         $scope.current_lists.push({'title':'{{current_list.title}}','todo_item':$scope.newtodo,'done':false});
         $scope.newtodo = '';
      }

   }])

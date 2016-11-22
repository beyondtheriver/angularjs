angular.module('ToDo', []).
   controller('todoCtrl', ['$scope', function($scope){
      //scoped variables
      $scope.master_lists = [
         {
            'title':'Grocery List',
            'todo_items':[
               {'item':'lettuce','done':false},
               {'item':'spinach','done':false},
               {'item':'cheese','done':false}
            ]
         },
         {'title':'Monday Schedule','todo_items':[]},
         {'title':'Tuesday Schedule','todo_items':[]},
         {'title':'Wednesday Schedule','todo_items':[]}
      ];
      $scope.current_list = $scope.master_lists[0];
      //value for form boxes
      $scope.newlist = "Click here to add a new list.";
      $scope.newtodo = "Click here to add a new item.";
      // $scope.currentitem = current_list.todo_items[index];
      //functions
      $scope.addList = function(){
         $scope.master_lists.push({'title':$scope.newlist,'todo_items':[],'done':false});
         $scope.newlist = '';
      }
      $scope.selectList = function(master_list){
         $scope.current_list = master_list;
      }
      $scope.deleteList = function(index){
         $scope.master_lists.splice(index, 1);
      }
      $scope.addItem = function(){
         $scope.current_list.todo_items.push({'item':$scope.newtodo,'done':false});
         $scope.newtodo = '';
      }
      $scope.deleteToDo = function(index){
         $scope.current_list.todo_items.splice(index, 1);
      }
   }])

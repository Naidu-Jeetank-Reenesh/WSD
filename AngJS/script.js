var app = angular.module('myApp',[]);
app.controller('customersCtrl',function($scope, $http)
{
    $http.get("https://naidu-jeetank-reenesh.github.io/WSD/JSON/staff.json")
    .then(function(response)
    {
        $scope.myData = response.data.staff;
        $scope.rowlimit = response.data.length();
        // $scope.orderByMe = function(x) 
        // {
        //     $scope.myOrderBy = x;
        // }
    });

    $scope.orderByMe = function(x) {
        $scope.myOrderBy = x;
      }
    
});

app.filter("myfilter",function()
{
    return function(input)
    {
        return input.substring(0,1).toUpperCase() + input.substring(1);
    }
});



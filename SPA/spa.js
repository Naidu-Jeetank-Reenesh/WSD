angular.module('myapp',['ngRoute'])
.config(function($routeProvider)
{
    $routeProvider.when('/home',
    {
        templateUrl:'home.html',
        controller:'homecntrl'}).when('/home/:first/:last',
        {
            templateUrl:'home.html',
            controller:'homecntrl'
        }).when('/about',
        {
            templateUrl:'about.html',
            controller:'aboutcntrl'
        }).when('/staff',
        {
            templateUrl:'staff.html',
            controller:'staffcntrl'
        })
})
.controller('mycntrl',function()
{

})
.controller("homecntrl",function($scope,$routeParams)
{
    $scope.message="Hello users!!!"
    if($routeParams.first&&$routeParams.last){
        $scope.person={
            first:$routeParams.first,
            last:$routeParams.last
        };
    }

})
.controller("aboutcntrl",function($scope)
{
    $scope.about=["This is the about page for the staff website.The owner of the website is jeetank naidu!!!"];
})
.controller("staffcntrl",function($scope,$http)
{
    $http.get('staff.json')
    .success(function(response)
    {
        $scope.r_ctrl=response.staff;
    });
});
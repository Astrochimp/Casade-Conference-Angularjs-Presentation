
function Intro($scope) {
    $scope.welcome = "Hello there.";
}

function menuCtrl($scope, $http, $routeParams) {
    $http.get('/menu.json')
        .success(function(data) {
            console.log(data.fooditems);
            $scope.fooditems = data.fooditems;
        })
        .error(function(data){
            console.log("Error getting menu items");
        });

    $scope.total = function() {
        var t = 0;
        angular.forEach($scope.fooditems, function(s){
            if(s.selected) {
                t+=s.price;
            }
        });
        return t;
    };

}


function contactUs ($scope, $http, $routeParams) {
    console.log("Contact Us");
}


function blogCtrl ($scope, $http, $routeParams) {

    var blogpath = "/blog/"+$routeParams.blogpath;
    console.log(blogpath);
    $http.get('/blogpost.json')
        .success(function(data) {
            console.log(data.blogposts);
            angular.forEach(data.blogposts, function(value, key){
                if (value.path == blogpath) {
                    $scope.bloginfo = value;
                }
            });
        })
        .error(function(data){
            console.log("Error getting blog post");
        });
}

function blogList ($scope, $http, $routeParams) {
    $scope.layout = 'grid';
    $http.get('/blogpost.json').success(function(data) {
        console.log(data.blogposts);
        $scope.bloglist = data.blogposts;
    }).error(function(data){
        console.log("Error getting blog post");
    });
}

function locationList($scope, $http,$routeParams) {

    $scope.layout = 'grid';
    $http.get('/locations.json').success(function(data) {
        locationdata = data.locations;
        console.log("locationlist loaded");
        console.log(locationdata);
        $scope.locationlist = locationdata;
    }).error(function(data){
            $scope.errormsg = "nothing";
            console.log("Error getting location data ");
    });
}
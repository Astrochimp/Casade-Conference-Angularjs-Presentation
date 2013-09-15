/**
 * Created with JetBrains WebStorm.
 * User: celloadmin
 * Date: 8/21/13
 * Time: 10:47 AM
 * To change this template use File | Settings | File Templates.
 */

function Intro($scope) {

    $scope.welcome = "Hello there.";

}

function menuCtrl($scope) {

    $scope.fooditems=[
        { food: 'espresso', price: 3.00},
        { food: 'cappuccino', price: 3.95},
        { food: 'macchiato', price: 2.50},
        { food: 'americano', price: 2.50},
        { food: 'mocha', price: 4.00},
        { food: 'latte', price: 3.50},
        { food: 'double frap mocha latte with soy', price: 6.00},
        { food: 'scone' , price: 4.50}
    ];

}


function locationList($scope, $http,$routeParams) {

    $http.get('/angular-site/locations.json').success(function(data) {

        jdata = data;
        $scope.locationlist = jdata;

        console.log("locationlist loaded");
        console.log(jdata);

    }).error(function(data){

            $scope.errormsg = "nothing";

            console.log("Error getting location data ");

    });


}
angular
    .module('blogs', ['xml'])
    .config(function ($httpProvider) {
        $httpProvider.responseInterceptors.push('xmlHttpInterceptor');
    });

function BlogsCtrl ($scope, $http) {
    $scope.menus = [];

    $http.get('/js/menu.xml').then(function (response) {
        var menus = [],
            menu,
            i;

        var callingpage = response.xml.find('calling-page');
        var callingpagevar = angular.element(callingpage).find("menuitem");

        console.log(callingpagevar);


        var menuname = "";
        var menuprice = "";

        for (i = 0; i < callingpagevar.length; i += 1) {

            menu = angular.element(callingpagevar[i]);


            menuname = angular.element(menu[0]).find("name");
            menuprice = angular.element(menu[0]).find("price");

            console.log(menuprice[0].textContent);

            menus.push({
                name: menuname[0].textContent,
                price: menuprice[0].textContent
            });
        }


        $scope.menus = menus;

    });
}
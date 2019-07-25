
app.controller("aCtrl", aCtrl)

// DI dependency injection - IOC
function aCtrl($scope, serviceService, valueService, $http, $q) {

    $scope.score = valueService
   
    $scope.generateNumbers = function () {
        serviceService.startGame()
        $scope.numbers = valueService['numbersToClient']
    }
    $scope.click1 = function (n) {
        serviceService.clickedNumber(n)
    }
}




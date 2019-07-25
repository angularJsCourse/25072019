
app.controller("parentCtrl", ParentCtrl)

// DI dependency injection - IOC
function ParentCtrl($scope, serviceService, valueService, $http, $q) {

    $scope.numbers = valueService['numbersToClient']
    $scope.len = valueService.len
    $scope.leng

    $scope.generateNumbers = function () {

        if ($scope.leng % 2 == 0)
            valueService.len = $scope.leng
        else
            valueService.len = $scope.leng + 1
        serviceService.startGame()
        $scope.numbers = valueService['numbersToClient']
    }
    $scope.click1 = function (n) {
        serviceService.clickedNumber(n)
    }
}




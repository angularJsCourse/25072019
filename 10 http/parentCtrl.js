
app.controller("parentCtrl", ParentCtrl)

// DI dependency injection - IOC
function ParentCtrl($scope, serviceService,valueService, $http, $q) {

    $scope.todos = []
    $scope.resData = valueService.data
    $scope.idToReq = valueService.perfId
    $scope.vs = valueService


    $scope.getUrlById = function (){
        
        valueService['perfId'] = $scope.idToReq
        console.log('prefctrl ' + valueService['perfId'])
        serviceService.httpGet()
        //$scope.resData = valueService.data
    }

    
    $scope.checkError = function (){
        return valueService['error'] 
    }

}




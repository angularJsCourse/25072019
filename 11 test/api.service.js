    
module.factory("apiService", function(globalConst) {
    const result = {}

    result.specialItems = ['a','b','c']

    result.getPower2 = function (x) {
        return x * x
    }

    return result
})
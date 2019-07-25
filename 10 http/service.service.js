app.service("serviceService", function (valueService, globalConst, $http) {

    this.getAArray = function () {
        let fullA = []
        for (i = 1; i <= valueService['a']; i++) {
            fullA.push(i)
        }
     //   valueService['aFull']=fullA
        console.log(fullA)
        return fullA
    }


    this.httpGet = function () {
        console.log('prefserv ----------------' + valueService['prefId'])
        let p = $http.get(globalConst['url'] + '/' + valueService['perfId'])
        p.then( (resp) => {
            valueService['error'] = false
            valueService['data'] = resp.data
    
        }, (err) => {
            valueService['data'] = err
            valueService['error'] = true
            console.log(`ERROR === ${err}`)   
        }
        )     
    }

})
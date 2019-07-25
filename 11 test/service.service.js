app.service("serviceService", function (valueService, globalConst ) {

    this.startGame = function () {
        this.hardReset()
        for (i = 0; i < valueService['len']; i++) {
            let num = Math.floor((Math.random() * 10) + 1)
            
            valueService['numbers'].push(num)
            valueService['numbers'].push(num)
            valueService['numbersToClient'].push(globalConst['hidden'])
        }
       this.shuff()
    }

    this.clickedNumber = async function (num) {
        //  valueService['numbers'].push(Math.floor((Math.random() * 10) + 1))
        if (valueService['numbersToClient'][num] != globalConst.ok) {
            valueService['numbersToClient'][num] = valueService['numbers'][num]
            if (!valueService.oneClicked) {
                valueService.oneClicked = true
                valueService['first'] = num
            }
            else {
                valueService['second'] = num
                await sleep(2)
                this.checkResult()
            }
        }
    }

    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
      }

    this.checkResult = function () {
        if (valueService.first != valueService.second) {
            if (valueService['numbers'][valueService.first] == valueService['numbers'][valueService.second]) {
                valueService['numbersToClient'][valueService.first] = globalConst.ok
                valueService['numbersToClient'][valueService.second] = globalConst.ok
                valueService.tries++
                valueService.guessses++
            }
            else {
                valueService['numbersToClient'][valueService.first] = globalConst['hidden']
                valueService['numbersToClient'][valueService.second] = globalConst['hidden']
                valueService.tries++
            }
        }
        else{
            valueService['numbersToClient'][valueService.first] = globalConst['hidden']
            valueService.tries++
        }
        this.softReset()

    }


    this.hardReset = function () {
        valueService['numbers'] = []
        valueService['numbersToClient'] = []
        valueService.tries = 0
        valueService.guessses = 0
        this.softReset()
    }

    this.softReset = function () {
        valueService.first = -1
        valueService.second = -1
        valueService.oneClicked = false

    }

    this.shuff = function() {
        valueService['numbers']
        var ctr = valueService.len, temp, index;
    
    // While there are elements in the array
        while (ctr > 0) {
    // Pick a random index
            index = Math.floor(Math.random() * ctr);
    // Decrease ctr by 1
            ctr--;
    // And swap the last element with it
            temp = valueService['numbers'][ctr];
            valueService['numbers'][ctr] = valueService['numbers'][index];
            valueService['numbers'][index] = temp;
        }
      //  return arra1;
    }
})
function findMean(array) {
    let mean = array.reduce((acc, currentValue,index, array) => (acc + currentValue), 0)
    mean /= array.length
    return subtractFromMean(array, mean)
    
}

function subtractFromMean(array, mean) {
    let arrForSubtracted = []
    array.map(num => {
        let subtractMeanValue = num - mean
        arrForSubtracted.push(subtractMeanValue)
    })
    return squareOfEachSubtractedValue(arrForSubtracted) 
}

function squareOfEachSubtractedValue(arrForSubtracted){
    let arrForSquared = []
    arrForSubtracted.map(num => {
        let squareOfSubtracted = num*num
        arrForSquared.push(squareOfSubtracted)
    })

    let variance = getVariance(arrForSquared)
    return getStandardDeviation(variance)
}

function getVariance(arrForSquare) {
    
     variance =  arrForSquare.reduce((acc, currentValue, index, array) => {
        return acc + currentValue
    })

    return variance/arrForSquare.length
}

function getStandardDeviation(variance) {
    return Math.sqrt(variance).toFixed(2)
}


console.log(findMean([85, 86, 100, 76, 81, 93, 84, 99, 71, 69, 93, 85, 81, 87, 89]));
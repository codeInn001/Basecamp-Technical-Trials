 function sumEvenAndOddNumbers(array){
    let evenNumber = 0;
    let oddNumber = 0;
    let result = [];

    for(let i = 0; i < array.length; i++ ) {
        if(array[i] < 0) {
            continue;
        }
        else if(array[i] % 2 === 0) {
            evenNumber+=array[i]
        }

        else {
            oddNumber += array[i]
        }
    }
    //  result.push(evenNumber, oddNumber)
     result = [...result, evenNumber,oddNumber]
     return result;
}


console.log(sumEvenAndOddNumbers([2,5,6,8,4,7,2,1]))

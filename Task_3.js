function checkPrimeNumber(number) {
    if(number == 1) {
        return false
    }

    else{

        for(let i = 2; i < number; i++) {
            if(number % i === 0) {
                return false
            }
    
    }
}
return true

}

function checkArrayforPrime(array) {
    let prime = []
    array.forEach(number => {
       let isPrime = checkPrimeNumber(number)
       if(isPrime) {
           prime.push(number)
       }
    })
    return prime;
}

console.log(checkArrayforPrime([3,4,5,7,8,21,45,1,2,10]))
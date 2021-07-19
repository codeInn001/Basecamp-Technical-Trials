function checkPrimeNumber(number) {
        if(number == 1) {
        return 'one(1) is not a prime number'
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

console.log(checkPrimeNumber(21))
console.log(checkPrimeNumber(101))
console.log(checkPrimeNumber(1))

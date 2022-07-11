/*
    Sum All Primes
*/

function sumPrimes(num) {
    let result = 0;
    // this loop for count from two to num, because (0 and 1 is not prime) 
    for (let i = 2; i <= num; i++) {
        let flag = true;
        // this for check the number with all numbers befor this number.
        for (let j = 2; j < i; j++) {
            if (i % j === 0) {
                flag = false;
                break;
            }
        }
        // if the flag : true it will print just number (true) but if false it will ignore 
        if (flag) {
            console.log("this is prime: " + i);
            result = result + i;
        }
    }
    console.log("this is the total of sum: " + result);
}

sumPrimes(10);
console.log("===============================");
sumPrimes(977);
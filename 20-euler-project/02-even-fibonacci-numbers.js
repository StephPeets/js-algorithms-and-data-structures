/*
Problem 2: Even Fibonacci Numbers

Each new term in the Fibonacci sequence is generated by adding the previous two terms. By starting with 1 and 2, 
the first 10 terms will be:

1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...

By considering the terms in the Fibonacci sequence whose values do not exceed n, find the sum of the even-valued terms.

*/

// write function that outputs fibonacci numbers

function fib(n) {
    if (n <= 2) {
        return 1;
    }
    // add previous 2 numbers of n
    return fib(n - 1) + fib(n - 2);
}

function fiboEvenSum(n) {
    let output = 0;
    // loop through fib numbers up through n
    for (let i = 1; fib(i) <= n; i++) {
        // filter out odd numbers
        if (fib(i) % 2 === 0) {
            output += fib(i);
        }
        
    }
    return output;
  }

console.log(fiboEvenSum(10));  // should return 10.

console.log(fiboEvenSum(34));  // should return 44.

console.log(fiboEvenSum(60));  // should return 44.

console.log(fiboEvenSum(1000));  // should return 798.

console.log(fiboEvenSum(100000));  // should return 60696.

console.log(fiboEvenSum(4000000));  // should return 4613732.
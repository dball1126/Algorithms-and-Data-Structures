function factorial(n){
    if(n === 1) return 1

   return n * factorial(n-1)
}
console.log(factorial(4))

function fib(n){
    if(n === 1 ) return 1
    if(n === 2 ) return 1

   return fib(n-1) + fib(n - 2)
}
console.log(fib(7))
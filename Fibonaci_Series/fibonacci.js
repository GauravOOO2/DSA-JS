function fibonacciPrint(x){
    const fibo = [0,1]
    var sum = 0;
    for(let i = 2; i<=x; i++){
        fibo[i] = fibo[i-1] + fibo[i-2]
    }
    return fibo

}


console.log(fibonacciPrint(5))
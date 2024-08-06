function factorial(x){
    var sum = 1; 
    for(var i = 1; i<=x ; i++ ){
        sum = sum*i;
    }
    return sum
}

console.log(factorial(10))
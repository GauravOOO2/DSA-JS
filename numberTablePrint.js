function printTable(n){
    var sum = 0;
    for(var i = 1; i<=n; i++){
        sum = n*i;
        console.log(n,"*",i,"=",sum)
    }
}


printTable(10)
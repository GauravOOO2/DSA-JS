function Steps(n){

    let numberOfWays = [1,2]

    for(let i = 2; i<=n; i++){
        numberOfWays[i]= numberOfWays[i-1] + numberOfWays[i-2]
    }

    return numberOfWays[n-1]

}



console.log(Steps(1))
console.log(Steps(2))
console.log(Steps(3))
console.log(Steps(4))
console.log(Steps(5))
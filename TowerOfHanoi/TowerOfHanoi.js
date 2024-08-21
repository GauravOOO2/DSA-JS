function TowerProblem(n, fromRod, toRod, usingRod){

    if(n === 1){
        console.log(`Move disk 1 from ${fromRod} to ${toRod}`)
        return
    }

    TowerProblem(n-1, fromRod, usingRod, toRod)
    console.log(`Move Disk ${n} from ${fromRod} to  ${toRod}`)
    TowerProblem(n-1, usingRod, toRod, fromRod )


}


TowerProblem(2,'A','C','B')


// big-O = 2^n 
function linearSearchAlgo(arr, target){
    for(var i = 0; i<arr.length; i++){
        if(arr[i] === target) return  arr[i];
    }

    return -1;
}


console.log(linearSearchAlgo([1,2,4,6,-10], 6))
console.log(linearSearchAlgo([1,2,4,6,-10], 10))
console.log(linearSearchAlgo([1,2,4,6,-10], 0))


// big-O == 0(n)
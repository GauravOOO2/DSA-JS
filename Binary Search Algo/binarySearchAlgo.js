function BinarySearchalgo(arr, target){

    let LeftIndex = 0;
    let RightIndex = arr.length - 1;
    while(LeftIndex<=RightIndex){
        let MidIndex = Math.floor((LeftIndex + RightIndex) / 2 )
    if(target===arr[MidIndex]){
        return MidIndex;
    }
    if(target<arr[MidIndex]){
        RightIndex =  MidIndex -1 
    }else{
        LeftIndex = MidIndex + 1
    }
}
return -1;
}

console.log(BinarySearchalgo([-4,-1,1,3,6,8,9,], -4))
function BinarySearchAlgo(arr, target){

let LeftPointer = 0;
let RightPointer = arr.length - 1

while(LeftPointer<=RightPointer){
    let MidIndex = Math.floor((LeftPointer + RightPointer)/2)
    if(target === arr[MidIndex] ) return MidIndex

   
    target < arr[MidIndex] ? RightPointer = MidIndex - 1 : LeftPointer = MidIndex + 1
}
return -1
}
console.log(BinarySearchAlgo([-4,-1,1,3,6,8,9,], 8))
// let LeftPointer = 0;
// let RightPointer = arr.length - 1;

// while(LeftPointer<=RightPointer){
//     let MidValue = Math.floor((LeftPointer + RightPointer)/2)

//     if(target === arr[MidValue]){
//         return MidValue
//     }

//     if(target < arr[MidValue]){
//         RightPointer = MidValue - 1
//     }else{
//         LeftPointer = MidValue + 1
//     }
// }
// return -1;
// }

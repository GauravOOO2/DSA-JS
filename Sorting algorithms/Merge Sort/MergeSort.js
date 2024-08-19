function MergeSort(arr){

    if(arr.length < 2) return arr

    const MidIndex = Math.floor(arr.length/2)
    const LeftArr = arr.slice(0,MidIndex);
    const RightArr = arr.slice(MidIndex)
    return Mergefun(MergeSort(LeftArr), MergeSort(RightArr))
}

function Mergefun(LeftArr,RightArr){
    const SortedArr = [];
    while(LeftArr.length && RightArr.length){
        if(LeftArr[0]<RightArr[0]){
            SortedArr.push(LeftArr.shift())
        }else{
            SortedArr.push(RightArr.shift())
        }
    }
    return [...SortedArr, ...LeftArr, ...RightArr]
}



const arr = [2,3,1,0,9,5,4]
console.log(MergeSort(arr))
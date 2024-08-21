function QuickSort(arr){

    if(arr.length<2) return arr

    let pivot = arr[arr.length-1];
    let LeftArray = []
    let RigtArray = []

    for(let i = 0 ; i<arr.length-1; i++){

        arr[i]<pivot ? LeftArray.push(arr[i]) : RigtArray.push(arr[i])

    }

    return [...QuickSort(LeftArray), pivot, ...QuickSort(RigtArray)]

}


const arr = [1,3,0,9,5,2]
console.log(QuickSort(arr))

// worts case - O(n^2)
// average case - O(nlogn)


















// if(arr.length<2) return arr

//     let pivot = arr[arr.length - 1];
//     let LeftArr = [];
//     let RightArr = [];

//     for(let i = 0; i<arr.length - 1; i++){

        

//         if(arr[i]<pivot){
//             LeftArr.push(arr[i])
//         }else{
//             RightArr.push(arr[i])
//         }

//     }
//     return [...QuickSort(LeftArr), pivot, ...QuickSort(RightArr)]
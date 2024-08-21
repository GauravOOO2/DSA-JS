// function BubbleSort(arr){
// let swapped 

//     do{
//         swapped = false
//         for(let i = 0; i<arr.length - 1; i++){
//             if(arr[i] > arr[i+1] ){
//                 let temp = arr[i];
//                 arr[i] = arr[i+1]
//                 arr[i+1] = temp
//                 swapped = true
//             }
//         }
//     }while(swapped)

// }
// const arr = [1,2,4,-2,-1,9,22]
// BubbleSort(arr)
// console.log(arr)


// bit-O = O(n^2)


function bubbleSort2(arr){


    let swapped 

    do{
        swapped = false
        for(let i = 0; i<arr.length-1; i++){
            if(arr[i]>arr[i+1]){
                let temp = arr[i];
                arr[i] = arr[i+1];
                arr[i+1] = temp;
                swapped = true;
            }
            
        }
        

    }while(swapped)


}


const arr = [1,2,4,-2,-1,9,22]
bubbleSort2(arr)
console.log(arr)
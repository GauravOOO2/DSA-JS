// function InsertionSort(arr){

//     for(let i = 0; i<arr.length; i++){

//         let ElementToInsert = arr[i]
//         let j = i - 1
//         while(j>=0 &&  arr[j]>ElementToInsert){
//             arr[j+1] = arr[j]
//             j = j - 1
//         }

//         arr[j+1] = ElementToInsert;

//     }

// }

const arr = [1,3,5,2,0]
InsertionSort(arr)
console.log(arr)



function InsertionSort(arr){
    
    for(let i = 0; i<arr.length; i++){
        
        let elementToInsert = arr[i]
        let j = i-1;
        while(j>=0 && arr[j]>elementToInsert){
            arr[j+1] = arr[j]
            j = j -1;
        }
        arr[j+1] = elementToInsert

    }

}












// for(let i = 0; i<arr.length; i++){
    //     let InsertElement = arr[i]
    //     let j = i-1
    //     while(j>=0 && arr[j]>InsertElement){
    //         arr[j+1] = arr[j]
    //         j = j - 1
    //     }
    //     arr[j+1] = InsertElement
    // }
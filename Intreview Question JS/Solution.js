// 1. Promis 

let myPromis = ()=>{
    return new Promise((resolve,reject)=>{

        setTimeout(() => {
            resolve("message Print successful after 3 seconds")
        }, 3000);

    })
}
myPromis()
        .then((message)=>console.log(message))
        .catch((error)=>console.log(error))


// 2. console log an apis data and interate throught one of its key value pair 


let fetchAPI = async()=>{
    const fetchdata = await fetch(`https://jsonplaceholder.typicode.com/posts`);
    const data = await fetchdata.json()

    // this block of forEach iterates throught the object the api is giving and returns title key value
    data.forEach((item)=>(
        console.log(item.title)
    ))

    // console.log(data)
}

fetchAPI()

// 3. flatten a nested array [22,2[12,6,7[22,4,1[1,8,6]]]]

const myArray = [22, 2, [12, 6, 7, [22, 4, 1, [1, 8, 6, ]]]]; //Make sure you give gaps like this if not then it wont work  

const flatternedArray = myArray.flat(Infinity);
console.log(flatternedArray)

const nestedArray = [22, 2, [12, 6, 7, [22, 4, 1, [1, 8, 6]]]];
const flatArray = nestedArray.flat(Infinity);
console.log(flatArray); // Output: [22, 2, 12, 6, 7, 22, 4, 1, 1, 8, 6]

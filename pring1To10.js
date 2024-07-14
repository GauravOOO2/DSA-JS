// var num = 10


// for(var i = 0; i<num ; i++){
//     console.log(i)
//     // console.log("hi")
// }



function reverseString(str) {
    // console.log(str)
    return str.split("").reverse().join("")
    
}

console.log(reverseString("hello")); // should return "olleh"

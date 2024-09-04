const obj = {
    name: "chad",
    age: 25,
    yourMom: "sus",
    "Key-n": true,
    bestMovie: function(){
        console.log(this.age)
    }
}
obj.hobby = "football"
delete obj.hobby
console.log(obj)
console.log(obj["age"])
console.log(obj["Key-n"])
obj.bestMovie()


// learn object.keys() .values() .entries()
const mySet = new Set([1,2,3,5])
mySet.add(6)
console.log(mySet.has(1))
mySet.delete(5)
console.log(mySet.size)
mySet.clear()

for(const i of mySet){
    console.log(i)
}
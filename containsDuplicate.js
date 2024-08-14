var containsDuplicate = function(nums) {
    const map = new Map()
    for(const n of nums){
        if(map.has(n)){
            return true
        }
        map.set(n)
    }
    return false
};


console.log(containsDuplicate([1,2,3,4,4]))
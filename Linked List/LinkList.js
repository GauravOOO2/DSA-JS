// class Node{
//     constructor(value){
//         this.value = value
//         this.next = null
//     }
// }

// class LinkedList{
//     constructor(){
//         this.head = null
//         this.size = 0
//     }

//     isEmpty(){
//         return this.size === 0
//     }

//     isSize(){
//         return this.size
//     }
// }


// const list1 = new LinkedList()

// console.log("list is empty",list1.isEmpty())
// console.log("size of the list is", list1.isSize())



class Node{
    constructor(){
        then.value = value
        this.next = null
    }
}

class LinkedList{
    constructor(){
        this.head = null
        this.size = 0
    }

    isEmpty(){
        return this.size === 0
    }

    isSize(){
        return this.size
    }

    perpend(value){
        const node = new Node(value)
        if(this.isEmpty()){
            this.head = node
        } else{
            node.next = this.head
            this.head = node
        }
        this.size++
    }

}



const list = new LinkedList()

list.perpend(10)
list.perpend(20)
list.perpend(30)
// class Queue {
//     constructor(){
//         this.item = {}
//         this.rear = 0;
//         this.front = 0;
//     }

//     enqueue(element){
//         this.item[this.rear] = element
//         this.rear++
//     }

// }




class Queue2{
    constructor(){
        this.items = {}
        this.rear = 0
        this.front = 0
    }

    enqueue(ele){
        this.items[this.rear] = ele
        this.rear++
        // console.log(this.list)
    }






    print(){
        console.log(this.items)
    }
}

const queue2 = new Queue2()

queue2.enqueue(4)
queue2.enqueue(2)
queue2.enqueue(5)
queue2.print()
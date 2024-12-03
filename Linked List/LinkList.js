class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}

class LinkedList {
    constructor() {
        this.head = null
        this.tail = null
        this.size = 0
    }

    isEmpty() {
        return this.size === 0
    }

    getSize() {
        return this.size
    }

    isPresent(value){
        if(this.isEmpty()){
            return false
        }
        let current = this.head
        while(current){
            
        }
    }

    prepend(value) {
        const node = new Node(value)
        if (this.isEmpty()) {
            this.head = node
            this.tail = node
        } else {
            node.next = this.head
            this.head = node
        }
        this.size++
    }

    append(value) {
        const node = new Node(value)
        if (this.isEmpty()) {
            this.head = node
            this.tail = node
        } else {
            this.tail.next = node
            this.tail = node
        }
        this.size++
    }

    insert(value, index) {
        if (index < 0 || index > this.size) {
            return false
        }
        if (index === 0) {
            this.prepend(value)
        } else if (index === this.size) {
            this.append(value)
        } else {
            const node = new Node(value)
            let prev = this.head
            for (let i = 0; i < index - 1; i++) {
                prev = prev.next
            }
            node.next = prev.next
            prev.next = node
            this.size++
        }
        return true
    }

    removeFromFront() {
        if (this.isEmpty()) {
            return null
        }
        const value = this.head.value
        this.head = this.head.next
        this.size--
        if (this.isEmpty()) {
            this.tail = null
        }
        return value
    }

    removeFromEnd() {
        if (this.isEmpty()) {
            return null
        }
        const value = this.tail.value
        if (this.size === 1) {
            this.head = null
            this.tail = null
        } else {
            let prev = this.head
            while (prev.next !== this.tail) {
                prev = prev.next
            }
            prev.next = null
            this.tail = prev
        }
        this.size--
        return value
    }

    removeAt(index) {
        if (index < 0 || index >= this.size) {
            return null
        }
        let removedNode
        if (index === 0) {
            removedNode = this.head
            this.head = this.head.next
        } else {
            let prev = this.head
            for (let i = 0; i < index - 1; i++) {
                prev = prev.next
            }
            removedNode = prev.next
            prev.next = removedNode.next
        }
        this.size--
        if (this.isEmpty()) {
            this.tail = null
        }
        return removedNode.value
    }

    removeValue(value) {
        if (this.isEmpty()) {
            return false
        }
        if (this.head.value === value) {
            this.head = this.head.next
            this.size--
            if (this.isEmpty()) {
                this.tail = null
            }
            return true
        }
        let prev = this.head
        while (prev.next && prev.next.value !== value) {
            prev = prev.next
        }
        if (prev.next) {
            const removedNode = prev.next
            prev.next = removedNode.next
            if (!prev.next) {
                this.tail = prev
            }
            this.size--
            return true
        }
        return false
    }

    search(value) {
        if (this.isEmpty()) {
            return -1
        }
        let i = 0
        let current = this.head
        while (current) {
            if (current.value === value) {
                return i
            }
            current = current.next
            i++
        }
        return -1
    }

    reverse() {
        let prev = null
        let current = this.head
        this.tail = current
        while (current) {
            let next = current.next
            current.next = prev
            prev = current
            current = next
        }
        this.head = prev
    }

    print() {
        if (this.isEmpty()) {
            console.log("The list is empty")
        } else {
            let current = this.head
            let listValues = ""
            while (current) {
                listValues += `${current.value} `
                current = current.next
            }
            console.log(listValues.trim())
        }
    }
}

// Example usage
const list = new LinkedList()
console.log("Is empty:", list.isEmpty())
console.log("List size:", list.getSize())
list.print()

list.append(10)
list.append(20)
list.prepend(30)
list.insert(40, 1)
list.print()

console.log("Removed from front:", list.removeFromFront())
console.log("Removed from end:", list.removeFromEnd())
console.log("Removed at index 1:", list.removeAt(1))
list.print()

list.append(50)
list.append(60)
list.print()

console.log("Search for 50:", list.search(50))
console.log("Remove value 50:", list.removeValue(50))
list.print()

list.reverse()
console.log("Reversed list:")
list.print()
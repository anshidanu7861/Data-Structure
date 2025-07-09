class Node{
    constructor(data) {
        this.data = data
        this.next = null
    }
}

class queue {
    constructor() {
        this.first = null  
        this.last = null
        this.size = 0
    }

    enqueue(data) {
        let newNode = new Node(data)

        if(!this.first) {
            this.first = newNode
            this.last = newNode
        }else{
            this.last.next = newNode
            this.last = newNode
        }
        this.size++
    }

    dequeue() {
        if(!this.first) return null

        if(this.first == this.last) {
            this.last = null
        }

        this.first = this.first.next
        this.size--
    }
}

let x = new queue()
x.enqueue('anshid')
x.enqueue('mattara')

x.dequeue()

console.log(x);                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      
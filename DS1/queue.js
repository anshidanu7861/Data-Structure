class queue{
    constructor() {
        this.item = []
    }
    
    enqueue(data) {
        this.item.push(data)
    }

    dequeue() {
        this.item.shift()
    }
}

let x = new queue()
x.enqueue(11)
x.enqueue(22)
x.enqueue(33)
x.enqueue(44)
x.enqueue(55)
x.dequeue()

console.log(x);
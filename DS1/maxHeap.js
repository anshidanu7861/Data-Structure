class heap {
    constructor() {
        this.heap = []
    }
    parentNode(index) {
        return Math.floor((index - 1) / 2)
    }
    leftNode(index) {
        return (2 * index + 1)
    }
    rightNode(index) {
        return (2 * index + 2)
    }
    swap(a, b) {
        let temp = this.heap[a]
        this.heap[a] = this.heap[b]
        this.heap[b] = temp
    }
    insertion(item) {
        this.heap.push(item) 
        let index = this.heap.length-1
        let parent = this.parentNode(index)

        while(this.heap[parent] && this.heap[parent] < this.heap[index]) {
            this.swap(parent, index)
            index = this.parentNode(index)
            parent = this.parentNode(index)
        }
    }
}

let x = new heap()
x.insertion(6)
x.insertion(2)
x.insertion(5)
x.insertion(13)
x.insertion(1)
console.log(x);
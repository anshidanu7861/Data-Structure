class Node{
    constructor(data) {
        this.data = data
        this.next = null
    }
}
class stack{
    constructor() {
        this.first = null
        this.last = null
        this.size = 0
    }
    push(data) {
        let newNode = new Node(data)

        if(!this.first) {
            this.first = newNode
            this.last = newNode
        }else{
            let temp = this.first
            this.first = newNode
            this.first.next = temp
        }
        this.size++
    }

    pop() {
        if(!this.first) return null

        if(this.first == this.last) {
            this.last = null
        }
        this.first = this.first.next
        this.size--
    }
}

let x = new stack()
x.push('anshid')
x.push('mattara')
x.pop()

console.log(x);
    

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

    insert(data) {
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

    deletion() {
        if(!this.first) return null

        if(this.first) {
            this.first = this.first.next
            this.size--
        }
    }
}

let x = new stack()
x.insert(11)
x.insert(22)
x.insert(33)
x.deletion()
console.log(x);
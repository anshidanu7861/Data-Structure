class stack {
    constructor() {
        this.item = []
    }

    push(element) {
        this.item.push(element)
    }

    pop() {
        if(this.item.length == 0) {
            return 'undifined'
        }
        return this.item.pop()
    }
}

let x = new stack()

x.push('anshid')
x.push('mattara')
x.pop()

console.log(x);
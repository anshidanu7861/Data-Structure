class stack{
    constructor() {
        this.item = []
    }
    insert(items) {
        this.item.push(items)
    }
    delete() {
        this.item.pop()
    }
}

let x = new stack()
x.insert(11)
x.insert(22)
x.insert(33)
x.insert(44)
x.insert(55)
x.delete()
console.log(x);
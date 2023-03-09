class que{
    constructor() {
        this.item = []
    }

    insert(data) {
        this.item.push(data)
    }


    delete() {
        if(!this.item) return null
        this.item.shift()
    }
}

let x = new que()
x.insert(11)
x.insert(22)
x.insert(33)
x.insert(44)

x.delete()

console.log(x);
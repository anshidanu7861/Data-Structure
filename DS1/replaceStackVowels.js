class stack{
    constructor() {
        this.item = []
    }

    insert(data) {
        let vowels = new Set('aeiou')
        for(let char of data) {
            if(vowels.has(char)) {
                this.item.push(0)
            }else{
                this.item.push(char)
            }
        }
    }
}

let x = new stack()
x.insert('anshid')
console.log(x);
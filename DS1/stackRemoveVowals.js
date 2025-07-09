class stack{
    constructor() {
        this.item = []
    }

    push(data) {
        let arr = data.split("")
        let vowal = ['a', 'e', 'i', 'o', 'u']
        
        arr.forEach(element => {
            if(vowal.includes(element)){
                let index = arr.indexOf(element)
                arr.splice(index,1)
            }
        });
        console.log(arr);
        return arr
    }
}

let x = new stack()
x.push('anshid')
x.push('anshidmattara')



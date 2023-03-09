class stack{
    constructor(){
        this.item = []
    }

    push(data) {
        let vowel = new Set('aeiou')
        let arr = []
        for(let char of data) {
            if(vowel.has(char)){
                arr.push(0)
            }else{
                arr.push(char)
            }
            console.log(arr);
        }
    }
}

let x = new stack() 
x.push('anshidmattaraudarampoyil')
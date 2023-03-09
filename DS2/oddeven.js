let odd = []
let even = []

function seperate(arr) {
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] % 2) {
            even.push(arr[i])
        }else{
            odd.push(arr[i])
        }
    }
    console.log('even', even);
    console.log('odd', odd);
}

let arr= [1,2,3,4,5,6,7,8]
console.log(seperate(arr));
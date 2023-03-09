function quick(arr) {
    if(arr.length <= 1) return arr

    let pivot = arr[0]
    let left = []
    let right = []

    for(let i = 1; i < arr.length; i++) {
        if(arr[i] < pivot) {
            left.push(arr[i])
        }else{
            right.push(arr[i])
        }
    }

    return [...quick(left), pivot, ...quick(right)]
}

let x = quick([4,3,2,1])

console.log(x);
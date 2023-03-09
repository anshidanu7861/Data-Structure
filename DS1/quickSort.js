function quickSort(arr) {
    if(arr.length <= 1) return arr

    let pivote = arr[0]
    let left = []
    let right = []

    for(let i = 1; i < arr.length; i++) {
        if(pivote > arr[i]) {
            left.push(arr[i])
        }else{
            right.push(arr[i])
        }
    }
    return [...quickSort(left), pivote, ...quickSort(right)]
}

console.log(quickSort([5,66,4,3,2,8,1,9]));
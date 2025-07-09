function mergeSort(arr) {
    if(arr.length <= 1) return arr

    let mid = Math.floor(arr.length / 2)
    let left = mergeSort(arr.slice(0, mid))
    let right = mergeSort(arr.slice(mid))

    return merge(left, right)
 }

 function merge(left, right) {
    let array = []
    while(left.length && right.length) {
        if(left[0] < right[0]) {
            array.push(left.shift())
        }else{
            array.push(right.shift())
        }
    }
    return [...array, ...left, ...right]
 }

 function remove(arr) {
    let length = arr.length
    let arrays = []
for(let i = 0; i <= length; i++) {
    if(arr[i]%2==0) {
        arr[i] = arr[i+1]
    }else{
        arrays.push(arr[i])
    }

    length--

}
    return arrays
}

let a = remove([4,5,3,1,2,8])
console.log( mergeSort(a));


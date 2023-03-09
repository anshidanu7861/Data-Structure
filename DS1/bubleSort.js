function bubleSort(arr) {
    for(let i = 0; i < arr.length; i++) {
        for(let j = 0; j < arr.length; j++) {
            if(arr[i] < arr[j]) {
                let temp = arr[i]
                arr[i] = arr[j]
                arr[j] = temp
            }
        }
    }
    return arr
}

console.log(bubleSort([6,7,5,4,3,2,8,1]));
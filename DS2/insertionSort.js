function insertion(arr) {
    for(let i = 0; i < arr.length; i++) {
        let currValue = arr[i]

        let j

        for(j = i-1; j >= 0 && arr[j] > currValue; j--) {
            arr[j+1] = arr[j]
        }

        arr[j+1] = currValue
    }

    return arr
}

console.log(insertion([4,3,2,1]));
class hashtable{
    constructor(size) {
        this.table = new Array(size)
        this.length = size
    }
    _hash(key) {
        let total = 0
        for(let i = 0; i < key.length; i++) {
            total += key.charCodeAt(i)
        }
        return total % this.length
    }

    set(key, value) {
        let index = this._hash(key)
        let bucket = this.table[index]
        if(!bucket) {
            this.table[index] = [[key, value]]
        }else{
            let sameKey = bucket.find(item => item[0] == key)
            if(sameKey) {
                sameKey[1] = value
            }else{
                bucket.push([key, value])
            }
        }
    }

    get(key) {
        let index = this._hash(key)
        let bucket = this.table[index]
        if(bucket) {
            let samekey = bucket.find(item => item[0] == key)
            return samekey[1]
        }
        return undefined
    }
    print() {
        for(let i = 0; i < this.table.length; i++) {
            if( this.table[i]) {
                console.log(i, this.table[i] );
            }
        }
    }
}

let x = new hashtable(10)
x.set('a' , 19)
x.set('b' , 22)
x.get('a', 19)
console.log(x);
x.print()
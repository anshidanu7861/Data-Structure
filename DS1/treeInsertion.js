class Node{
    constructor(data) {
        this.data = data
        this.left = null
        this.right = null
    }
}
class tree {
     constructor() {
        this.root = null
     }
     insert(data) {
        let newNode = new Node(data)
        if(!this.root) {
            this.root = newNode
        }
        let curr = this.root
        while(true) {
            if(data == curr.data) {
                return undefined
            }
            if(data < curr.data) {
                if(!curr.left) {
                    curr.left = newNode
                    return this
                }
                curr = curr.left
            }else{
                if(!curr.right) {
                    curr.right = newNode
                    return this
                }
                curr = curr.right
            }
        }
     }
    
}

let x = new tree()
x.insert(19)
x.insert(22)
x.insert(10)
x.insert(1)
x.insert(4)
x.insert(15)
x.insert(13)
x.insert(23)
x.insert(6)
x.insert(8)
console.log(x);


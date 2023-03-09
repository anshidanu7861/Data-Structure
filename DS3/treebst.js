class Node{
    constructor(data) {
        this.data = data
        this.left = null
        this.right = null
    }
}
class tree{
    constructor() {
        this.root = null
    }
    insert(node) {
        let newNode = new Node(node)
        if(!this.root) {
            this.root = newNode
        }
        let curr = this.root
        while(true) {
            if(node == curr.data){
                return undefined
            }
            if(node < curr.data) {
                if(!curr.left) {
                    curr.left = newNode
                    return this
                }
                curr = curr.left
            }else{
                if( !curr.right ) {
                    curr.right = newNode
                    return this
                }
                curr = curr.right
            }
        }
    }

    inorder(node) {
        if(node.left){
            this.inorder(node.left)
        }
        console.log(node.data);

        if(node.right) {
            this.inorder(node.right)
        }
    }

    preOrder(node) {
        console.log(node.data);
        if(node.left) {
            this.preOrder(node.left)
        }
        if(node.right) {
            this.preOrder(node.right)
        }
    }

    postOrder(node) {
        if(node.left) {
            this.postOrder(node.left)
        }
        if(node.right) {
            this.postOrder(node.right)
        }
        console.log(node.data);
    }

    find(node) {
        let curr = this.root
        while(curr != null) {
            if(node < curr.data) {
                curr = curr.left
            }else if(node > curr.data) {
                curr = curr.right
            }else{
                return true
            }
        }
        return false
    }

}

let x = new tree()
x.insert(20)
x.insert(21)
x.insert(22)
x.insert(18)
x.insert(17)
x.insert(15)


console.log('inoder');
x.inorder(x.root)

console.log('preOrder');
x.preOrder(x.root)

console.log('postOrder');
x.postOrder(x.root)

console.log(x.find(1));
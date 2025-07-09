class graph{
    constructor() {
        this.element = {}
    }
    addVertex(vertex) {
        if(!this.element[vertex]) {
            this.element[vertex] = new Set()
        }
    }
    addEdge(vertex1, vertex2) {
        if(!this.element[vertex1]) {
            this.element[vertex1]
        }
        if(!this.element[vertex2]) {
            this.element[vertex2]
        }
        this.element[vertex1].add(vertex2)
        this.element[vertex2].add(vertex1)
    }
    display(){
        for(let vertex in this.element) {
            console.log(vertex+" "+ [...this.element[vertex]]);
        }
    }
}

let x = new graph()
x.addVertex('a')
x.addVertex('c')
x.addVertex('b')
x.addEdge('a','b')
x.addEdge('b','c')
x.display()
console.log(x);
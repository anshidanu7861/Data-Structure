class Node{
    constructor() {
        this.children = new Map();
        this.end = false;
    }
}

class trie{
    constructor() {
        this.root = new Node()
    }
    insert(word) {
        let node = this.root

        for(let char of word) {
            if(!node.children.has(char)) {
                node.children.set(char, new Node())
            }
            node = node.children.get(char)
        }
        node.end = true
    }
    search(word) {
        let node = this.root

        for(let letter of word) {
                if(!node.children.has(letter)) return false
                node = node.children.get(letter)
        }
        return node.end
    }
    startsWith(prefix) {
        let node = this.root
        for(let letter of prefix) {
            if(!node.children.has(letter)) return false
            node = node.children.get(letter)
        }
        return true
    }
    autoSuggest(prefix) {
        let node = this.root
        for(let letter of prefix) {
            if(node.children.has(letter)){
                node = node.children.get(letter)
            }else{
                return []
            }
        }

        return this.traverse(node, prefix)
    }

    traverse(node, prefix) {
        let results = []
        if(node.end) {
            results.push(prefix)
        }
        for(let [letter, child] of node.children) {
            console.log('ll', letter);
            console.log('child', child);

            let word = prefix + letter
            results.push(...this.traverse(child, word))
        }
        return results;
    }
}

let x = new trie()
x.insert('anshid')
x.insert('manna')
console.log(x.search('anshid'));
console.log(x.startsWith('a'));
console.log(x.autoSuggest('an'))
console.log(x);


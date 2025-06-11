class Node{
    constructor(value){
        this.value = this.value
        this.left = null
        this.right = null
    }
}

class BinarySearchTree{
    #root
    #_size
    constructor(){
        this.#_size = 0
        this.#root = null
    }

    get size(){
    return this.#_size 
    }

    #_insert(node, value){
        if(node == null) return new Node(value)
        if(value < node.value) node.left = this.#_insert(node.left, value)
        else if(value > node.value) node.left = this.#_insert(node.right, value)
        return node
    }

    insert(value){
        this.#root = this.#_insert(this.#root, value)
        ++this.#_size
    }

}
class Node{
    constructor(value){
        this.value = value
        this.next = null
    }
}

class LinkedList{
    #_size
    #head
    constructor(){
        this.#_size = 0
        this.#head = null
    }
    get size(){
        return this.#_size
    }

    push_front(value){
        let tmp = new Node(value)
        tmp.next = this.#head
        this.#head = tmp
        ++this.#_size
    }

    push_back(value){
        if(this.#_size === 0){
            this.#head = new Node(value)
        }
        else{
            let tmp = this.#head
            while(tmp.next != null){
                tmp = tmp.next
            }
            tmp.next = new Node(value)
        }
        ++this.#_size
    }

    pop_front(){
        if(this.#_size === 0) return
        this.#head = this.#head.next
        --this.#_size
    }
}

let list = new LinkedList()
list.push_back(5)
list.push_front(8)
list.pop_front()
console.log(list.size)
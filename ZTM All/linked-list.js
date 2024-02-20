class Node {
    constructor(value){
        this.value = value,
        this.next = null
    }
}

class LienkedList {
    constructor(value){
        this.head = {
            value: value,
            next: null
        }
        this.tail = this.head;
        this.length = 1
    }

    append(value){
        const newNode = new Node(value);
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++
    }
    prepend(value){
        const newNode = new Node(value);
        newNode.next = this.head;
        this.head = newNode
        this.length++
    }
    printList(){
        const arr = []
        let current = this.head;

        while(current){
            arr.push(current.value)
            current = current.next;
        }
        return console.log(arr)
    }
    insert(index, value){
        if(index===0) this.prepend(value)
        else if(index===this.length) this.append(value)
        else if(index > this.length || index < 0) return null;
        else {
            const newNode = new Node(value)
            let aux = this.findTheNode(index)
            let current = aux.next;
            newNode.next = current;
            aux.next = newNode;
            this.length++
            }
        }
    findTheNode(index){
        let current = this.head.next;
        let aux = this.head;
        let counter = 1
        while(index !== counter){
                counter++
                aux = current;
                current = current.next;
        }
        return aux;
    }
}

const myList = new LienkedList(10);
myList.append(5)
myList.append(16)
myList.append(17)
myList.append(18)
myList.prepend(1)
console.log(myList.insert(6,111))

myList.printList()
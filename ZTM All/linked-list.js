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

    print(){
        const arr = []
        let current = this.head;

        while(current){
            arr.push(current.value)
            current = current.next;
        }
        return arr;
    }

    findElementToRemove(index){
        let prev = this.head;
        let current = this.head.next;
        let counter = 1;
        while(index !== counter){
            prev = current;
            current = current.next;
            counter++
        }
        prev.next = current.next;
        return current.value;
    }

    remove(index){
        let removedElement = this.head.value;
        if(index===0) {
            this.head = this.head.next
        } else if (index>=this.length){
            return null;
        } else {
            removedElement = this.findElementToRemove(index);
        }
        this.length--;
        return removedElement;
    }
}

class DoubleNode {
    constructor(value){
        this.value = value;
        this.prev = null;
        this.next = null;
    }
}

class DoubleLinkedList {
    constructor(value){
        this.head = {
            value: value,
            next: null,
            prev: null,
        };
        this.next = null;
        this.prev = this.head;
        this.tail = this.head;
        this.length = 1;
    }

    print(){
        const arr = []
        let current = this.head;

        while(current){
            arr.push(current.value)
            current = current.next;
        }
        return arr;
    }

    append(value){
        const newNode = new DoubleNode(value);
        newNode.prev = this.tail;
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
    }

    prepend(value){
        const newNode = new DoubleNode(value);
        newNode.prev = this.head;
        this.head = newNode;
        newNode.next = this.prev;
        this.length++;
    }

    traversLinkedList(index){
        let prev = this.head;
        let current = this.head.next;
        let counter = 1;

        while(index !== counter){
            counter++;
            prev = current;
            current = current.next;
        }
        return prev;
    }

    insert(index,value){
        
        if(index===0) this.prepend(value);
        else if(index>=this.length) this.append(value);
        else {
            const newNode = new DoubleNode(value);
            let prev = this.traversLinkedList(index);
    
            newNode.next = prev.next;
            newNode.prev = prev;
            prev.next = newNode
            this.length++
        }
    }

    remove(index) {
        let removedElement = this.head.value;
        if(index===0){
            this.head = this.head.next;
        } else {
            let prev = this.traversLinkedList(index);
            removedElement = prev.next.value;
            prev.next = prev.next.next;
            prev.prev = prev;
        }
        this.length--;
        return removedElement;
    }
}

const myDoubleLinkedList = new DoubleLinkedList(30)
myDoubleLinkedList.append(2)
myDoubleLinkedList.append(4)
 myDoubleLinkedList.prepend(6)
myDoubleLinkedList.insert(2,8)
console.log(myDoubleLinkedList.remove(4))
console.log(myDoubleLinkedList)
console.log(myDoubleLinkedList.print());
//console.log(myDoubleLinkedList)

// const myList = new LienkedList(10);
// myList.append(5)
// myList.append(16)
// myList.append(18)
// myList.append(19)
// myList.append(20)
// myList.prepend(1)
// console.log(myList.remove(0))

// console.log(myList.print());
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

    reverse() {
        let prev = null;
        let current = this.head;
        while (current !== null) {
            const next = current.next; // Store next node
            current.next = prev; // Reverse current node's pointer
            prev = current; // Move prev to current node
            current = next; // Move current to next node
        }
        this.head = prev; // Set the new head of the list
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
            prev: null
        }
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
        const newNode = new DoubleNode(value)
        newNode.prev = this.tail;
        this.tail.next = newNode
        this.tail = newNode;
        this.length++;
        return this;
    }

    prepend(value){
        const newNode = new DoubleNode(value)
        newNode.next = this.head;
        this.head.prev = newNode;
        this.head = newNode;
        this.length++
        return this;
    }

    traverseToIndex(index){
        let prev = this.head;
        let counter = 1

        while(index !== counter){
            prev = prev.next;
            counter++;
        }
        return prev;
    }

    insert(index, value){
        if(index===0){
            return this.prepend(value);
        } else if(index===this.length){
            return this.append(value);
        }
        const newNode = new DoubleNode(value)
        let prevNode = this.traverseToIndex(index)
        newNode.prev = prevNode;
        newNode.next = prevNode.next;
        prevNode.next = newNode;
        newNode.next.prev = newNode; 

        this.length++;
        return this.head.next.prev;
    }

    remove(index){
        if(index<=0){
            const elementToBeRemoved = this.head.value;
            this.head.next.prev = this.head;
            this.head = this.head.next;
            return elementToBeRemoved
        } else if(index>=this.length-1) {
            const elementToBeRemoved = this.tail.value;
            this.tail = this.tail.prev;
            this.tail.next = null;
            return elementToBeRemoved
        }
        const prevNode = this.traverseToIndex(index);
        const elementToBeRemoved = prevNode.next.value;
        prevNode.next = prevNode.next.next;
        prevNode.next.prev = prevNode;
        return elementToBeRemoved;
    }
}


const myList = new LienkedList(10);
console.log(myList.append(5))
console.log(myList.append(15))
console.log(myList.append(16))
console.log(myList.append(17))
console.log(myList.append(18))
console.log(myList.append(20))
console.log(myList.insert(1,3))
console.log(myList.remove(6))
console.log(myList.prepend(1))
console.log(myList.reverse())
// myList.append(16)
// myList.append(18)
// myList.append(19)
// myList.append(20)
// console.log(myList.remove(0))

console.log(myList.print());
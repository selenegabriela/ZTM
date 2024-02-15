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

const myList = new LienkedList(10);
myList.append(5)
myList.append(16)
myList.append(18)
myList.append(19)
myList.append(20)
myList.prepend(1)
console.log(myList.remove(0))

console.log(myList.print());
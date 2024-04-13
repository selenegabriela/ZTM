class Node {
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree{
    constructor(){
        this.root = null;
    }

    insert(value){
        const newNode = new Node(value)

        this.insertNode(newNode, this.root)

    }

    insertNode(newNode, currentNode){
        if(!currentNode){
            this.root = newNode
        } else if(newNode.value >= currentNode.value){
            if(!currentNode.right){
                currentNode.right = newNode;
            } else {
                this.insertNode(newNode, currentNode.right)
            }
        } else {
            if(!currentNode.left){
                currentNode.left = newNode;
            } else {
                this.insertNode(newNode, currentNode.left)
            }
        }
    }

    lookup(value){
        return this.searchNode(value, this.root)
    }

    searchNode(value,currentNode){
        if(currentNode){

            if(value === currentNode.value){
                return true;
            } else if(value > currentNode.value){
                return this.searchNode(value, currentNode.right)
            } else if(value < currentNode.value){
                return this.searchNode(value, currentNode.left)
            } 
        }
        return false

    }


}

const tree = new BinarySearchTree()
tree.insert(38)
tree.insert(40)
tree.insert(20)
console.log(tree.lookup(20))
console.log(tree.lookup(10))
console.log(tree);
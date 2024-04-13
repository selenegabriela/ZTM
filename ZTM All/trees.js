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
// LOOPS =P
class BinarySearchTree2{
    constructor(){
        this.root = null;
    }

    insert(value){
        const newNode = new Node(value)
        if(!this.root) return this.root = newNode;

        let current = this.root;
        while(true){
            if(value > current.value){
                if(!current.right){
                    return current.right = newNode;
                } else {
                    current = current.right;
                }
            } else {
                if(!current.left){
                    return current.left = newNode;
                } else {
                    current = current.left;
                }
            }
            
        }
    }

    lookup(value){
        if(!this.root) return false;
        if(this.root.value===value) return true;

        let current = this.root;

        while(true){
            if(value > current.value){
                if(!current.right) return false
                else if(current.right.value===value) return true;
                else current = current.right
            } else {
                if(!current.left) return false
                else if(current.left.value===value) return true;
                else current = current.left

            }
        }

    }

    remove(value){
        
    }
    traverse(node){
        const tree = {value: node.value}
        tree.left = !tree.left ? null : this.traverse(node.left)
        tree.right = !tree.right ? null : this.traverse(node.right)
        return tree;
    }


}

const tree = new BinarySearchTree2()
tree.insert(38)
tree.insert(40)
tree.insert(20)
console.log(tree.lookup(20))
console.log(tree.lookup(10))
console.log(tree);
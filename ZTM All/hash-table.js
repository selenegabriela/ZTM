class HashTable {
    constructor(size){
      this.data = new Array(size);
      this.keys = [];
    }
  
    // O(1)
    _hash(key) {
      let hash = 0;
      for (let i =0; i < key.length; i++){
          hash = (hash + key.charCodeAt(i) * i) % this.data.length
      }
      return hash;
    }
    // O(1)
    set(key,value){
        if(!this.data[this._hash(key)]){
          this.data[this._hash(key)] = []
        }
        this.data[this._hash(key)].push([key,value])
        this.keys.push(key);
    }

    // O(1) - with collisions -> O(n)
    get(key){
      
      const bucket = this.data[this._hash(key)]

      if(bucket){
        const found = bucket.find(arr => arr[0]===key)
        if (found) return found[1]
      }
      return null
    }

    get_keys(){
      for(let i = 0; i <= this.keys.length; i++){
        console.log(this.keys[i])
      }
    }
  }
  
  const myHashTable = new HashTable(50);
  myHashTable.set('grapes', 10000)
  console.log(myHashTable.get('jeje'))
  myHashTable.set('apples', 9)
  myHashTable.get_keys()
  //console.log(myHashTable.get('apples'))



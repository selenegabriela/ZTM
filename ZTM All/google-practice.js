// Input - array [1,2,3,5] [1,2,3,5]
// Input - number (sum) 8

// Output - boolean( ture or false)

// nested loops O(n*m)

const sumOfTwoNumbers = (array, sum) => {
    // set -> [7, 6, 5, 3]
    const mySet = new Set()
    
    for(let item of array){
        if(mySet.has(item)){
            return true;
        } else {
            mySet.add(sum-item);
        }
    }

    return false;
}


// O(n)

console.log(sumOfTwoNumbers([1,2,3,10], 8));
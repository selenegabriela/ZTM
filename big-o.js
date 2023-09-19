let nemo = ["nemo"]
let larger = Array(1000).fill("nemo");
const findNemo = (array) => {
    let t0 = performance.now()
    for(let i = 0; i < array.length; i++){
        if(array[i] === "nemo"){
            console.log("Found NEMO!")
        }
    }
    let t1 = performance.now()
    console.log('call to find Nemo took ' + (t1-t0) + " milliseconds.")
}

//findNemo(larger) // O(n) ---> Linear time (it takes linear time complexity finding Nemo)

const funChallenge = input => {
    let a = 10; // O(1)
    a = 50 + 3; // O(1)
    
    for(let i = 0; i < input.length; i++){ // O(n)
        //anotherFunction(); // O(n)
        let stranger = true; // O(n)
        a++; // O(n)
    }
    return a; // O(1)
}

// BIG O(3 + 4n)

// ---------------------------------------------------------

function anotherFunChallenge(input) {
  let a = 5; // O(1)
  let b = 10; // O(1)
  let c = 50; // O(1)
  for (let i = 0; i < input; i++) { // O(n)
    let x = i + 1; // O(n)
    let y = i + 2; // O(n)
    let z = i + 3; // O(n)

  }
  for (let j = 0; j < input; j++) { // O(n)
    let p = j * 2; // O(n)
    let q = j * 2; // O(n)
  }
  let whoAmI = "I don't know"; // O(1)
}

// BIG O(4 + 7n) ---> O(n)

const twoDifferentInputs = (boxes, boxes2) => {
    boxes.forEach(box => {
        console.log(box)
    });
    boxes2.forEach(box => {
        console.log(box)
    })
}

//twoDifferentInputs([1,2,3,4], [1,2]) // O(n + m)

const printAll = numbers => {
    console.log('numbers');
    numbers.forEach(n => console.log(n))
    
    numbers.forEach(n => {
        numbers.forEach(m => console.log(n+m))
    })
}

printAll([1,2,3,4,5,6,7,8]) // Drop the nos dominants ---> O(1 + n + n^2) ---> O(n^2)



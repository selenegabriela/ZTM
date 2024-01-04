const twoSum = (nums, target) => {
    const indexes = []
    const neededNumbers = new Map()

    for(let i = 0; i < nums.length; i++){
        if(neededNumbers.has(nums[i])){
            indexes.push(neededNumbers.get(target-nums[i]), i)
        } else {
            neededNumbers.set(target-nums[i], i)
        }
    }
    return indexes;
}

twoSum([3,2,4], 6)

const twoSum2 = (arr, target) => {

    const neededNumbers = new Map() // {1:0, 3:1, 6:2, }

    // [7,5,2,1] target = 8-7 
    for(let i = 0; i < arr.length; i++){
        const numberWeNeed = target-arr[i] // 1 - 3 - 6 - 7
        if(neededNumbers.has(arr[i])){
            return [i,neededNumbers.get(arr[i])]
        } else {
            neededNumbers.set(numberWeNeed,i)
        }
    }
    return [];


}

// [4,-5,2,7,-10,7]
const maxSubArray2Loops = (nums) => { //O(n2)
    let largestSum = nums[0];
    for(let i = 0; i < nums.length; i++){
        let sum = nums[i]
        for(let j = i+1; j < nums.length; j++){
            sum+=nums[j];
            if(sum<0) sum = 0;
            largestSum = Math.max(largestSum, sum)
        }
    }
    return largestSum;
}

// [4,-1,2,7,-10,7]
const maxSubArray = (nums) => { // O(n)
    let maxSum = nums[0];
    for(let i = 1; i < nums.length; i++){
        nums[i] = Math.max(0, nums[i-1]) + nums[i]; // cuando el número anterior es menor a 0, se reinicia la suma
 
        if(nums[i] > maxSum) maxSum = nums[i]
    }
    return maxSum
};

//console.log(maxSubArray([-10,-3,-2]));

const maxSumArray3 = (nums) => {
    let sum = 0
    let max = nums[0]

    for(let number of nums){
        sum+=number
        max = Math.max(max, sum)

        if(sum < 0) sum=0
    }
    return max;
}

const minCostClimbingStairs = (cost) => {
    const n = cost.length;
    const dp = new Array(n + 1).fill(0);

    for (let i = 2; i <= n; i++) {
        dp[i] = Math.min(dp[i - 1] + cost[i - 1], dp[i - 2] + cost[i - 2]);
    }

    return dp[n];
};

//console.log(minCostClimbingStairs([10,15,20]));

// moving zeroes to the end

var moveZeroes = function(nums) { // O(n^2)
    for(let i = 0; i < nums.length; i++){
        for(let j = i+1; j < nums.length; j++){
            if(nums[i]===0 && nums[j]!==0){
                [nums[i], nums[j]] = [nums[j], nums[i]]
            }
        }
    }

    return nums;
};

//
var moveZeroesOn = function(nums) { // O(n)
    //low = 2
    //high = 4
    //[0,1,0,3,12] -> [1,0,0,3,12] -> [1,3,0,0,12]
    let low = 0
    for(let high=low+1; high<nums.length;high++){
        if (nums[low] !== 0){
            low++
        } else {
            if (nums[high]!==0){
                [nums[low], nums[high]] = [nums[high],nums[low]]
                low++
            }
        }
    }

    return nums;
};

//var moveZeroesOnWrong = function(nums) { // O(n)
//    // i = 2
//    //low = 2
//    //high = 5
//    //[1,3,0,0,12]
//
//    let low = 0
//    let high = low+1
//    for(let i=0; i<nums.length; i++){
//        if (nums[low] !== 0){
//            low++
//        } else {
//            if (nums[high]!==0){
//                [nums[low], nums[high]] = [nums[high],nums[low]]
//                low++
//            }
//            high++
//        }
//    }
//
//    return nums;
//};

// 

//console.log(moveZeroesOnWrong([0,1,0,3,12])); 

const containDuplicates = (nums) => { // O(n)
    const duplicate = new Set()

    for(let number of nums){
        if(duplicate.has(number)){
            return true;
        }
        duplicate.add(number)
    }

    return false;
}

const containDuplicates2 = (nums) => { // O(n)
    const duplicate = new Set(nums)
    return duplicate.size!==nums.size
}

const rotate = (nums, k) => {
    const numbersEnd = []
    const numbersStart = []


    for(let i=0; i < nums.length; i++){
        if(i<=k){
            numbersEnd.push(nums[i])
        } else {
            numbersStart.push(nums[i])
        }
    }

    return [...numbersStart, ...numbersEnd];
}


const rotate2 = (nums, k) => {
    const n = nums.length;
    k %= n;
    if (k === 0 || n === 0 || n === k) {
        return;
    }
    
    //[3,2,1,4,1,6,7]
    let count = 0; // 1
    let start = 0; //
    let current = start; // 2 -> 4
    let prev = nums[start]; // 1
    // n=7
    //k=2
    //temp = 3 -> 5
    
    while (count < n) {
        current = (current + k) % n;
        const temp = nums[current];
        nums[current] = prev;
        prev = temp;
        count++;
    
        if (current === start) {
        start++;
        current = start;
        prev = nums[start];
        }
    }
    
}

console.log(rotate2([1,2,3,4,5,6,7],2)); // []
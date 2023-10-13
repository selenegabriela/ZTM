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

console.log(maxSubArray([-10,-3,-2]));

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


var isPalindrome = function(x) {
    const intoStr = "" + x;

    for(let i = 0; i<Math.floor(intoStr.length/2); i++){
        console.log(intoStr[i], "-", intoStr[intoStr.length-1-i])
        if(!(intoStr[i]===intoStr[intoStr.length-1-i])) return false
    }

    return true
};

isPalindrome(-121);

console.log("========================================")

var romanToInt = function(s) {
    const I = 1
    const V = 5
    const X = 10
    const L = 50
    const C = 100
    const D = 500
    const M = 1000
    let arabicNumber = 0

    for(let i = s.length-1; i >=0 ; i--){
        if(s[i]==="I") {
            if(s[i+1] && (s[i+1]==="V" || s[i+1]==="X")){
                arabicNumber-=I
            } else {
                arabicNumber+=I
            }
        } else if(s[i]==="V") {
            arabicNumber+=V
        } else if(s[i]==="X") {
            if(s[i+1] && (s[i+1]==="L" || s[i+1]==="C")){
                arabicNumber-=X
            } else {
                arabicNumber+=X
            }
        } else if(s[i]==="L") {
            arabicNumber+=L
        } else if(s[i]==="C") {
            if(s[i+1] && (s[i+1]==="D" || s[i+1]==="M")){
                arabicNumber-=C
            } else {
                arabicNumber+=C
            }
        } else if(s[i]==="D") {
            arabicNumber+=D
        } else if(s[i]==="M") {
            arabicNumber+=M
        }
    }
    return arabicNumber;
};

const romanToInt2 = (str) => {
    const romanNumbers = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000,
    }

    let arabicNumber = 0

    for(let i = str.length - 1; i >=0; i--){
        const currentValue = romanNumbers[str[i]];

        if(i < str.length - 1 && currentValue < romanNumbers[str[i+1]]){
            arabicNumber-=romanNumbers[str[i]]
        } else {
            arabicNumber+=romanNumbers[str[i]]
        }
    }

    return arabicNumber
}

console.log(romanToInt2("IX"));

var longestCommonPrefix1 = function(strs) {
    let finalPrefix = strs[0]
    for(let i = 1; i < strs.length; i++){
        let j = 0;
        let prefix = ''
        
       while(strs[i-1][j] && strs[i][j] && strs[i-1][j] === strs[i][j]){
        let first = strs[i-1][j]
        let second = strs[i][j]
        if(first === second){
            prefix+=first
        }
        j++
       }
        if (prefix.length < finalPrefix.length){
            finalPrefix = prefix
        }
    }
    return finalPrefix
};

var longestCommonPrefix = function(strs) {

    let pref = strs[0];
    let prevLength = strs[0].length;

    for(let i = 1; i < strs.length; i++){
        let current = strs[i]
        while(pref.substring(0,prevLength) !== current.substring(0,prevLength)){
            prevLength--;
        }

        pref=current.substring(0,prevLength)
    }

    return pref;
};

var longestCommonPrefix2 = function(strs) {

    strs.sort()
    let prefix = ""
    for(let i=0; i < strs[0].length; i++){
        if(strs[0][i] === strs[strs.length-1][i]) {
            prefix += strs[0][i] 
        } else {
            break;
        }
    }
    return prefix;
};

console.log('=====================================')
console.log(longestCommonPrefix2(["flow","flower","flew"]))

var isValid = function(s) {
    const openSymbols = {
        '(': '()',
        '[': '[]',
        '{': '{}',
    }
    const clossedSymbols = {
        ']': '[]',
        '}': '{}',
        ')': '()',
    }
    const arr = []
    let valid = true;

    for(let i = 0; i < s.length; i++){

        if(openSymbols[s[i]] && s[i]===openSymbols[s[i]][0]){
            arr.push(openSymbols[s[i]][1])
        } else if(clossedSymbols[s[i]] && s[i]===clossedSymbols[s[i]][1]){
            if (arr.pop() !== s[i]) valid = false;
        }
    }

    if(arr.length) valid = false;

    return valid;
};

const isValid2 = (s) => {
    const stack = []

    for(let i = 0; i < s.length; i++){
        const c = s[i]
        switch(c){
            case '(': stack.push(')'); break;
            case '[': stack.push(']'); break;
            case '{': stack.push('}'); break;
            default: 
                if(c !== stack.pop()) return false;
        }
    }

    return stack.length === 0;
}

const isValid3 = (s) => {
    const stack = []
    for(let c of s){

        if(c==='(' || c==='[' || c==='{'){
            stack.push(c)
        } else {
            if(stack.length===0){
                return false
            } else {
                if(c===')' && '(' !== stack.pop() || c===']' && '[' !== stack.pop() || c==='}' && '{' !== stack.pop()){
                    return false;
                }
            }
        }
    }

    return stack.length===0
}

console.log('=====================================')
console.log(isValid3('({})'));

class ListNode {
    constructor(val, next){
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
}

var mergeTwoLists = function(list1, list2) {
    const newNode = new ListNode(0,null)
    let current = newNode
    let flag = true

    while((list1 || list2) && flag){
        if(list1 && list2){
            if(list1.val <= list2.val){
                current.next = new ListNode(list1.val, null)
                current = current.next
                list1 = list1.next;
            } else {
                current.next = new ListNode(list2.val, null)
                current = current.next
                list2 = list2.next;
            }
        } else if(list1 && !list2){
            current.next = list1
            flag = false
        } else if(!list1 && list2){
            current.next = list2
            flag = false
        }
    }
    return newNode.next;

};


var mergeTwoLists2 = function(list1, list2) {

    const newNode = new ListNode(0,null);
    let current = newNode;

    while(list1 && list2){
        if(list1.val < list2.val){
            current.next = list1
            list1 = list1.next
        } else {
            current.next = list2
            list2 = list2.next
        }
        current = current.next;
    }

    current.next = list1 || list2;

    return newNode.next

};

var mergeTwoLists3 = function(list1, list2) {

    if(!list1 || !list2) return list1 || list2

    let head

    if(list1.val < list2.val){
        head = list1
        head.next = mergeTwoLists3(list1.next, list2)
    } else {
        head = list2
        head.next = mergeTwoLists3(list1, list2.next)
    }

    return head;

};

const list1 = {
    val: -9,
    next: {
        val: 3,
        next: null
    }
}

const list2 = {
    val: 5,
    next: {
        val: 7,
        next: null
    }
}

console.log(mergeTwoLists3(list1,list2))

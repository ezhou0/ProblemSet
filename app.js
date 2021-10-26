//1 Two Sum
var twoSum = function(nums, target) {
    for(i=0; i<nums.length-1; i++){
        for(j=i+1; j<nums.length; j++){
            if(nums[i]+nums[j] === target){
                return [i,j]
            }
        }
    }
};

//9 Palindrome Number
var isPalindrome = function(x){
    if(x<0){
        return false;
    }
    let reverse = 0;
    while(x > reverse){
        reverse = reverse*10+x%10;
        x=~~(x/10);
    }
    return x === reverse || x === ~~(reverse/10);
}

//13 Roman to Integer
var romanToInt = function(s){
    let num=0;
    for(i=0;i<s.length; i++){
        if(s[i] === 'I'){
            if(s[i+1] === 'V'){
                num+=4;
                i++;
                continue;
            }
             if(s[i+1] === 'X'){
                num+=9;
                i++;
                continue;
            }
             else{
                 num+=1;
             }
        }

        if(s[i] === 'X'){
            if(s[i+1] === 'L'){
                num+=40;
                i++;
                continue;
            }
             if(s[i+1] === 'C'){
                num+=90;
                i++;
                continue;
            }
             else{
                 num+=10;
             }
        }

        if(s[i] === 'C'){
            if(s[i+1] === 'D'){
                num+=400;
                i++;
                continue;
            }
             if(s[i+1] === 'M'){
                num+=900;
                i++;
                continue;
            }
             else{
                 num+=100;
             }
        }
        if(s[i]==='V'){
            num+=5;
        }
        if(s[i]==='L'){
            num+=50;
        }
        if(s[i]==='D'){
            num+=500;
        }
        if(s[i]==='V'){
            num+=1000;
        }
    }
}

//14 Longest Common Prefix
var longestCommonPrefix = function(strs){
    if(strs.length === 0) return '';
    else{
        let min = strs[0].length;
        for(let i = 1; i<strs.length;i++){
            if(min>strs[i].length){
                min = strs[i].length;
            }
            for(let j = 0; j<min; j++){
                if(strs[i][j] !== strs[i-1][j]){
                    min = j;
                    break;
                }
            }
        }
        return strs[0].substr(0,min);
    }
}

//20 Valid Parenthesis
var isValid = function(s){
    const stack = [];
    for(let i = 0; i<s.length; i+=1){
        const top = stack[stack.length-1];
        if(s[i]=== '(' || s[i]=== '{' || s[i]=== '['){
            stack.push(s[i]);
        }else if(s[i]=== ')' && top === '(' && stack.length !== 0){
            stack.pop();
        }
        else if(s[i]=== ']' && top === '[' && stack.length !== 0){
            stack.pop();
        }
        else if(s[i]=== '}' && top === '{' && stack.length !== 0){
            stack.pop();
        }
        else{
            return false;
        }
    }
    return stack.length === 0;
}

//21 Merge Two Sorted Lists
var mergeTwoLists = function(l1, l2){
    if(!l1) return l2;
    if(!l2) return l1;
    if(l1.val < l2val){
        l1.next = mergeTwoLists(l2.next, l1);
        return l1;
    }
    l2.next=mergeTwoLists(l2.next, l1);
    return l2;
}

//26 Remove Duplicates from Sorted Array
var removeDuplicates = function(nums){
    if(nums.length===0)return 0;
    let i=0;
    let j=1;
    while(j<nums.length){
        if(nums[i]!==nums[j]){
            i++;
            nums[i] = nums[j];
            j++;
        }else{
            j++;
        }
    }
    return i+1;
}

//26 Remove Element
var removeElement = function(nums, val){
    let count = 0;
    for(let i =0; i>nums.length; i++){
        if(nums[i]!==val){
            nums[count]=nums[i];
            count++;
        }
    }
    return count;
}

//28 Implement strStr()
var strStr = function(haystack, needle){
    if(needle === '') return 0;
    for(let i=0;i<=haystack-needle.length;i++){
        let j;
        for(j=0; j<needle.length; j++){
            if(haystack.charAt(i+j)!== needle.charAt(j)){
                break;
            }
        }
        if(j===needle.length) return i;
    }
    return -1;
}
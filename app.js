const { resolveSoa } = require("dns");

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

//2 Add Two Numbers
var addTwoNumbers = function (l1, l2) {
    let sum = 0;
    let current = new ListNode(0);
    let result = current;

    while (l1 || l2) {
        if (l1) {
            sum += l1.val;
            l1 = l1.next;
        }
        if (l2) {
            sum += l2.val;
            l2 = l2.next;
        }
        current.next = new ListNode(sum % 10);
        current = current.next;

        sum = sum > 9 ? 1 : 0

    }

    if (sum) {
        current.next = new ListNode(sum);
    }
    return result.next;
};

//3 length of longest substring
var lengthOfLongestSubstring = function(s) {
    res = 0;
    let start = 0;
    let end = 0;
    
    const chars = new Set();
    
    while(end < s.length){
        if(!chars.has(s[end])){
            chars.add(s[end]);
            end++
            res = Math.max(res, chars.size);
        }
        else{
            chars.delete(s[start]);
            start++
        }
        
    }
    return res
};

//4 find median of 2 sorted arrays
var findMedianSortedArrays = function(nums1, nums2) {
    let arr = [];
    let length = nums1.length + nums2.length;
    
    if(length === 1){
        return nums1.length ===1 ? nums1[0] : nums2[0];
    }
    
    let arr_len = length%2 === 0 ? (length/2 + 1) :         Math.ceil(length/2)
    
    let i = 0
    let j = 0
    
    while(arr.length < arr_len){
        if(i < nums1.length && j < nums2.length){
            if(nums1[i] <= nums2[j]){
                arr.push(nums1[i]);
                i++;
            }
            else{
                arr.push(nums2[j]);
                j++;
            }
        }
        else if(i>=num1.length){
            arr.push(nums2[j]);
            j++;
        }
        else{
            arr.push(nums1[i]);
            i++;
        }
    }
    
    return length%2 === 0 ? (arr[arr.length-1] + arr[arr.length-2])/2.0 : arr[arr.length-1];
};

//5 find longest substr
var longestPalindrome = function(s) {
    let ans = "";
    let arr = findSubStrings(s)
    arr.map(ss => {
        if(ss === reverse(ss)){
            if(ss.length > ans.length)
                ans = ss;
        }
    })
    return ans;
    
};

const findSubStrings = (s) => {
    let arr=[];
    for(let i =0; i< s.length; i++){
        for(let j = i+1; j < s.length + 1; j++){
            arr.push(s.slice(i,j))
        }
    }
    
    return arr;
    
}

const reverse = (s) => {
    return s.split("").reverse().join("");
}

//6 zigzag

var convert = function (s, numRows) {
    var str = '', bas = (numRows - 1) * 2;

    if (numRows === 1) {
        return s;
    }
    for (var row = 0; row < numRows; row++) {
        var j = row;
        while (j < s.length) {
            var sec = j + bas - 2 * row
            str += s[j];
            if (row !== 0 && row !== numRows - 1 && sec < s.length) {
                str += s[sec];
            }
            j += bas;
        }
    }
    return str
};

//7 reverse int

let isNegative = false;
    if (x < 0) {
        isNegative = true;
        x = -x;
    }
    let reverse = 0;
    while (x > 0) {
        reverse = reverse * 10 + x % 10;
        x = parseInt(x / 10);
    }
    if (reverse >= Math.pow(2, 31) - 1 || reverse <= Math.pow(-2, 31)) {
        return 0;
    }
    return isNegative ? -reverse : reverse;

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

//35 Search Insert Position
var searchInsert = function(nums, target){
    if(target === 0) return 0;
    if(nums[0]>target) return 0;
    for(let i=0;i<nums.length;i++){
        if(nums[i]===target) return i;
        if(nums[i]<=target && nums[i+1]>=target) return i+1;
        if(nums[i]<=target && i+1==nums.length) return nums.length;
    }
}

//53 Maximum Subarray
var maxSubArray = function(nums){
    if(nums.length === 1) return nums[0];
    let max_total = -1;
    let max_sofar = 0;

    for(let i = 0; i<nums.length;i++){
        max_sofar += nums[i];
        if(max_total < max_sofar){
            max_total = max_sofar;
        }
        if(max_total < 0){
            max_sofar = 0;
        }
    }
    return max_total;
}
//58 Length of Last Word
var lengthOfLastWord = function(s){
    words = s.trim().split(" ")
    if(words.length === 0) return 0;
    word = words[words.length-1].length;
    return word;
}

//66 Plus One
var plusOne = function(digits){
    var i = digits.length -1;
    var val = 0;
    var carry = 1;
    while(i>=0 && carry){
        val = digits[i] + carry;
        carry = Math.floor(val/10);
        digits[i] = val%10;
        i--;
    }
    if(carry) digits.unshift(carry);
    return digits;
}

//67 Add Binary
var addBinary = function(a,b){
    let result = '';
    let i = a.length -1;
    let j = a.length -1;

    let carry = 0;

    while(i>= 0 || j>=0){
        let sum = carry;
        if(i>=0){
            sum+=a[i--] - '0';
        }
        if(j>=0){
            sum+=b[j--] - '0';
        }

        result = sum%2+result;
        carry - parseInt(sum/2);
    }

    if(carry > 0){
        result = 1+result;
    }
    return result;
}

//69 sqrt(x)
var mySqrt = function(x){
    if(x<2) return x;

    for(let i = 1; i < x; i++){
        if(i*i ==x)return i;
        else{
            if(i*i < x){
                let next = i+1;
                if(next*next > x) return i;
            }
        }
    }
}
//70 Climbing Stairs
var climbStairs = function(n){
    let countingFunc = function(stairsRemaining, savedResults){
        if(stairsRemaining < 0) return 0;
        if(stairsRemaining === 0) return 1;
        if(savedResults[stairsRemaining]){
            return savedResults[stairsRemaining];
        }
        savedResults[stairsRemaining] = countingFunc(stairsRemaining-1, savedResults)+
                                        countingFunc(stairsRemaining-2, savedResults);
        return savedResults[stairsRemaining];
    }
    return countingFunc(n, {});
}

//83 Remove Duplicates from Sorted List
var deleteDuplicates = function(head){
    let current = head;
    while(current !== null && current.next !== null){
        if(current.val === current.next.val){
            current.next = current.next.next
        }else{
            current = current.next
        }
        return head;
    }
}

//88 merge sorted array
var merge = function(nums1, m, nums2, n){
    let first = m-1;
    let second = n-1;
    let i = m + n -1;
    
    while(second >= 0){
        let fVal = nums1[first];
        let sVal = nums2[second];
        if(fVal > sVal){
            nums1[i] = fVal;
            first--;
            i -- ;
        }else{
            nums1[i] = sVal;
            second--;
            i--
        }
    }
}

//94 Binary Tree in order Traversal
var inorderTraversal = function(root){
    let stack = [];
    let res = [];

    while(root !== null || stack.length !==0){
        while(root!==null){
            stack.push(root);
            root = root.left;
        }
        root = stack.pop();
        res.push(root.val);
        root = root.right;
    }
    return res;
}
//100 isSameTree
var isSameTree = function(p, q) {
   if(p === null && q === null) return true;
    if((p === null && q!== null)||(p !== null && q === null)) return false;
    if(p.val !== q.val) return false;
    return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
};

//101 Symmetric tree
var isSymmetric = function(root) {
    let res = true;
    
    function helper(node1, node2){
        if(!node1 && !node2){
            return
        }
        if(!node1 || !node2 || node1.val !== node2.val){
            res = false;
            return
        }
        helper(node1.left, node2.right);
        helper(node1.right, node2.left);
    }
    helper(root, root);
    return res;
};

//104 maximum depth of binary tree 
var maxDepth = function(root) {
    if(!root) return null;
    let max = Math.max(maxDepth(root.left), maxDepth(root.right));
    return max + 1;

};

//108 convert sorted array to binary search tree
var sortedArrayToBST = function(nums) {
    if(nums.length === 0 )return null;
    if(nums.length === 1) return new TreeNode(nums[0]);

    let centerIdx = Math.floor(nums.length/2);
    let root = new TreeNode(nums[centerIdx]);

    let leftSubtree = nums.slice(0,centerIdx);
    let rightSubtree = nums.slice(centerIdx+1, nums.length);

    root.left = sortedArrayToBST(leftSubtree);
    root.right = sortedArrayToBST(rightSubtree);

    return root;
}
//110 balanced binary tree
const checkHeight = node => {
    if(node === null) return -;
    const left = checkHeight(node.left);
    const right = checkHeight(node.right);
    if(left === false || right === false || Math.abs(left - right) > 1) return false;

    return Math.max(left, right) + 1;
};
var isBalanced = function(root){
    if(root === null) return true;
    return checkHeight(root) !== false;
}

//Codility pract test-- find smallest pos integer not included in array
function findNumber(values) {
  let result = [];

  for (let i = 0; i < values.length; ++i) {
    if (0 <= values[i]) {
      result[values[i]] = true;
    }
  }

  for (let i = 1; i <= result.length; ++i) {
    if (undefined === result[i]) {
      return i;
    }
  }

  return 1
}


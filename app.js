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
//12 integer to roman
var intToRoman = function(num) {
    
    var lookup = {M:1000,CM:900,D:500,CD:400,C:100,XC:90,L:50,XL:40,X:10,IX:9,V:5,IV:4,I:1}
    var roman = ''
    var i;
  for ( i in lookup ) {
    while ( num >= lookup[i] ) {
      roman += i;
      num -= lookup[i];
    }
  }
  return roman;
    
};

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

//15 3sum
var threeSum = function(nums) {
   nums = nums.sort((a,b) => a - b);
    const triplets = [];

    for(let i=0; i < nums.length - 2; i++){
        if(nums[i] != nums[i-1]){ // making sure our solution set does not contain duplicate triplets
            let left = i + 1;
          let right = nums.length - 1;

            while (left < right){
                const currentSum = nums[i] + nums[left] + nums[right];
                if (currentSum === 0){
                    triplets.push([nums[i], nums[left], nums[right]]);
                    while(nums[left] == nums[left + 1]) left ++
                    while(nums[right] == nums[right - 1]) right -- // making sure our solution set does not contain duplicate triplets
                    left ++;
                    right --;
                } else if(currentSum < 0) {
                    left ++
                } else if(currentSum > 0){
                    right --
                }
            }
        }
    }
    return triplets
};

//16 3sumclosest
var threeSumClosest = function(nums, target) {
    let closestSum = Number.MAX_VALUE;
 
    // Run three nested loops each loop
    // for each element of triplet
    for(let i = 0; i < nums.length ; i++)
    {
        for(let j = i + 1; j < nums.length; j++)
        {
            for(let k =j + 1; k < nums.length; k++)
            {
                 
                // Update the closestSum
                if (Math.abs(target - closestSum) >
                    Math.abs(target - (nums[i] + nums[j] + nums[k])))
                    closestSum = (nums[i] + nums[j] + nums[k]);
            }
        }
    }
     
    // Return the closest sum found
    return closestSum;
    
};

//17 phone number
var letterCombinations = function(digits) {
    const L = {"2": "abc", "3":"def", "4":"ghi", "5":"jkl", "6":"mno", "7":"pqrs", "8":"tuv", "9":"wxyz"}
    
   let len = digits.length, ans = []
    if (!len) return []
    
    const bfs = (pos, str) => {
        if (pos === len) ans.push(str)
        else {
            let letters = L[digits[pos]]
            for (let i = 0; i < letters.length; i++)
                bfs(pos+1,str+letters[i])
        }
    }
    bfs(0,"")
    return ans

};

//18 4sum
var fourSum = function(nums, target) {
  if (nums.length < 4) return [];

  var len = nums.length;
  var res = [];
  var l = 0;
  var r = 0;
  var sum = 0;

  nums.sort((a, b) => (a - b));

  for (var i = 0; i < len - 3; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) continue;
    if (nums[i] + nums[i + 1] + nums[i + 2] + nums[i + 3] > target) break;
    if (nums[i] + nums[len - 1] + nums[len - 2] + nums[len - 3] < target) continue;

    for (var j = i + 1; j < len - 2; j++) {
      if (j > i + 1 && nums[j] === nums[j - 1]) continue;
      if (nums[i] + nums[j] + nums[j + 1] + nums[j + 2] > target) break;
      if (nums[i] + nums[j] + nums[len - 1] + nums[len - 2] < target) continue;

      l = j + 1;
      r = len - 1;

      while (l < r) {
        sum = nums[i] + nums[j] + nums[l] + nums[r];

        if (sum < target) {
          l++;
        } else if (sum > target) {
          r--;
        } else {
          res.push([nums[i], nums[j], nums[l], nums[r]]);
          while (l < r && nums[l] === nums[l + 1]) l++;
          while (l < r && nums[r] === nums[r - 1]) r--;
          l++;
          r--;
        }
      }
    }
  }

  return res;
};

//19 remove nth node from the end
var removeNthFromEnd = function(head, n) {
    dummy = new ListNode(0);
    dummy.next = head;
    left = dummy;
    right = head;
    
    while(n > 0 && right){ //puts right in corrent spot n spaces away from end
        right = right.next;
        n-=1;
    }
    while(right){   //shifts both so left is right spot
        right = right.next;
        left = left.next;
    }
    left.next = left.next.next;
    return dummy.next;
    
};

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

//22 generate parenthesis

var generateParenthesis = function(n) {
    
    let solution = [];
    const generateCombo = (leftPcount, rightPcount, partial) =>{
        if(leftPcount > rightPcount) return;
        if(!leftPcount && !rightPcount) solution.push(partial);
        
        if(leftPcount > 0) generateCombo(leftPcount-1, rightPcount, partial + '(')
        if(rightPcount > 0) generateCombo(leftPcount, rightPcount-1, partial + ')')
        
    }
    generateCombo(n,n,"")
    return solution
};

//24 swap node in pairs
var swapPairs = function(head) {
     let dummyList = new ListNode(null, head);

    // Create a copy of the dummy list which we can traverse with
    let current = dummyList;

    // While there are 2 additional elements remaining
    while (current.next && current.next.next) {
        // Obtain the nodes to be swapped
        const first = current.next;
        const second = current.next.next;

        // Swap the nodes
        first.next = second.next;
        second.next = first;
        current.next = second;

        // Move forward by 2 elements
        current = current.next.next;
    }

    // Return the swapped LinkedList, removing the dummy head
    return dummyList.next;
};

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

//29 divide two integers
var divide = function(dividend, divisor) {
    var did = Math.abs(dividend);
  var dis = Math.abs(divisor);
  var sign = (divisor > 0 && dividend > 0) || (divisor < 0 && dividend < 0);
  var res = 0;
  var arr = [dis];

  if (dividend === 0 || did < dis) return 0;
  if (divisor === -1 && dividend === -2147483648) return 2147483647;
  if (dis === 1) return divisor > 0 ? dividend : -dividend;

  while (arr[arr.length - 1] < did) arr.push(arr[arr.length - 1] + arr[arr.length - 1]);

  for (var i = arr.length - 1; i >= 0; i--) {
    if (did >= arr[i]) {
      did -= arr[i];
      res += i === 0 ? 1 : 2 << (i - 1);
    }
  }

  return sign ? res : -res;
};

//33 search in a rotated sorted array
     if(nums.length == 0 || nums == null) return -1;

    let left = 0;
    let right = nums.length-1;

    while(left < right){
        let mid = Math.floor((left+right)/2);
        if(nums[mid]>nums[right]){
            left = mid+1;
        }else{
            right = mid;
        }
    }

    let pivot = left;
    left = 0;
    right = nums.length-1;

    if(nums[pivot]<=target && target <= nums[right]){
        left = pivot;
    }else{
        right = pivot;
    }

    while(left<=right){
        let mid = Math.floor((left+right)/2);
        //console.log(mid , nums[mid] , target);
        if(nums[mid] == target){
            return mid;
        }
        if(nums[mid]<target){
            left = mid+1;
        }else{
            right = mid-1;
        }
    }
    return -1;

//34 find first and last position of element in sorted array
var searchRange = function(nums, target) {
    const find = (target, arr, left=0, right=arr.length) => {
        while (left <= right) {
            let mid = left + right >> 1
            if (arr[mid] < target) left = mid + 1
            else right = mid - 1
        }
        return left
    } 
    let Tleft = find(target, nums)
    if (nums[Tleft] !== target) return [-1,-1]
    return [Tleft, find(target+1, nums, Tleft) - 1]
};


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

//38 count and say
var countAndSay = function(n) {
    let s = '1';

  while (n > 1) {
    let count = 0;
    let next = '';

    for (let i = 0; i <= s.length; i++) {
      if (i === s.length || (i > 0 && s[i] !== s[i - 1])) {
        next += count + s[i - 1]; // Say
        count = 0;
      }

      count++; // Count
    }

    s = next;
    n--;
  }

  return s;
};

//39 combination sum
var combinationSum = function(candidates, target) {
    const result = [];
    function permute(arr = [], sum=0, idx = 0 ){
        if(sum > target) return;
        if(sum === target) result.push(arr);
        
        for(let i = idx; i < candidates.length; i++){
            permute([...arr, candidates[i]], sum+candidates[i], i);
        }
    }
    permute();
    return result;
};
//40 combination sum ii
var combinationSum2 = function(candidates, target) {
     var res = [];
      var len = candidates.length;
      candidates.sort((a, b) => (a - b));
      dfs(res, [], 0, len, candidates, target);
      return res;
};
var dfs = function (res, stack, index, len, candidates, target) {
  var tmp = null;
  if (target < 0) return;
  if (target === 0) return res.push(stack);
  for (var i = index; i < len; i++) {
    if (candidates[i] > target) break;
    if (i > index && candidates[i] === candidates[i - 1]) continue;
    tmp = Array.from(stack);
    tmp.push(candidates[i]);
    dfs(res, tmp, i + 1, len, candidates, target - candidates[i]);
  }
};

//45 jump game ii
var jump = function(nums) {
    let newMax = 0;
    let jump = 0;
    let oldMax = 0;
    for (let i=0;i<nums.length-1;i++) {
        // Keep track of the farthest jump
        newMax = Math.max(newMax, i+nums[i]);
        // When we get to the index where we had our previous farthest jump, we increase our jump count by 1
        if (i == oldMax) {
            jump++;
            oldMax = newMax;
        }
    }
    return jump;
};

//46 permutations
var permute = function(nums) {
    var res = [];
    dfs(res, [], nums);
    return res;
};

var dfs = function(res, arr, nums){
    let len = nums.length;
    let tmp1 = null;
    let tmp2 = null;
    
    if(!len) return res.push(arr);
    
    for(let i = 0; i < len; i++){
        tmp1 = Array.from(arr);
        tmp1.push(nums[i]);
        
        tmp2 = Array.from(nums);
        tmp2.splice(i, 1);
        
        dfs(res, tmp1, tmp2)
    }
};

//47 permutations ii (backtracking)
var permuteUnique = function(nums) {
    let res = [];
    backtrack(nums, res);
    return res;
};

function backtrack(nums, res, acc=[]){
    if(nums.length ===0){
        res.push(acc.slice());
        return;
    }
    let prev;
    for(let i = 0; i < nums.length; i++){
        if(prev === nums[i]){
            continue
        };
        prev = nums[i];
        
        const curr = nums.splice(i,1)[0];
        acc.push(curr);
        backtrack(nums, res, acc);
        acc.pop();
        nums.splice(i,0,curr)
    }
}

//48 rotate image
var rotate = function(matrix) {
    let n = matrix.length;
    let n2 = Math.floor(n/2);
   
    for(let i = 0; i < 2; i++){
        for(let j = 0; j < n; j++){
            swap(matrix, i, j , n-1-i, j)
        }
    }
    
    for(let i = 0; i< n; i++){
        for(let j = i+1; j < n; j++){
            swap(matrix, i, j , j ,i)
        }
    }
};

var swap = function(matrix, x1, y1, x2, y2){
    let tmp = matrix[x1][y1];
    matrix[x1][y1] = matrix[x2][y2];
    matrix[x2][y2] = tmp
}

//49 group anagrams
var groupAnagrams = function(strs) {
    let hash = {};
    strs.forEach(str => {
        let letters = str.split("").sort();
        hash[letters]  ? hash[letters].push(str) : hash[letters] = [str];
    })
    let keys = Object.keys(hash);
    let values = keys.map(function(v) { return hash[v];})
    return values;
    
};

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

//226 invert binary tree
var invertTree = function(root) {
    if(!root) return null;
    let tmp = new TreeNode();
    
    tmp.val = root.val;
    tmp.left = invertTree(root.right);
    tmp.right = invertTree(root.left);
    return tmp
    
};

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


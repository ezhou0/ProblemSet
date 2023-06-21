//1. two sum

var twoSum = function(nums, target){
    const map = {}
    for(let i=0; i<nums.length; i++){
        const complement = target - nums[i];
        if (complement in map){
            return [map[complement], i];
        }
        map[nums[i]] = i;
    }
    return null;
}

//2. add two numbers
var addTwoNumbers = function(l1, l2){
    var List = new ListNode(0);
    var head = List;

    var sum = 0;
    var carry = 0;

    while(l1 != null || l2 != null || sum>0){
        if(l1 != null){
            sum = sum +l1.val;
            l1 = l1.next;
        }
        if(l2 != null){
            sum = sum+l2.val;
            l2 = l2.next;
        }
        if(sum > 9){
            sum = sum -10;
            carry = 1;
        }

        var next = new ListNode(sum);
        head.next = next;
        head = head.next;

        sum = carry;
        carry = 0;
    }

    return List;
}

//200 number of islands

const numIslands = (grid) =>{
    let countIslands = 0;

    for(let rowIndex in grid){
        for(let colIndex in grid[rowIndex]){
            if(grid[rowIndex][colIndex] === '1'){
                countIslands++;
                teraform(parseInt(rowIndex),parseInt(colIndex),grid);
            }
        }
    }
}

const teraform = (rowIn,colIn,grid)=>{
    if(grid[rowIn] === undefined || grid[colIn] === undefined) return;

    grid[rowIn][colIn] === '0';
    teraform(rowIn+1, colIn, grid)
    teraform(rowIn-1, colIn, grid)
    teraform(rowIn, colIn+1, grid)
    teraform(rowIn, colIn-1, grid)
}

//7 reverse an integer
var reverse = function(x){
    if(x<0) return -1*reverse(-x);
    const solution = (x+"").split('').reverse().join();
    return (solution>2**31-1) ? 0 : solution;
};

//22 generate parentheses
var generateParenthesis = function (n){
    const solution = [];

    const generateCombo = (leftPCount, rightPCount, partial) =>{
        if(leftPCount > rightPCount) return;
        if(!leftPCount && !rightPCount) solution.push(partial);
        if(leftPCount > 0) generateCombo(leftPCount-1,rightPCount, partial+'(')
        if(rightPCount > 0) generateCombo(leftPCount,rightPCount-1, partial+')')

    }

    generateCombo(n,n,'');
    return solution;
}

//2 add two numbers

    //non empty linked list
    //two non-negative integers

var addTwoNumbers = function(l1, l2){
    let p1 = l1;
    let p2 = l2;
    let num1 = 0;
    let num2 = 0;
    let carry = 0;
    let solution = new ListNode(0);
    let current = solution;

    while(p1 || p2){
        num1 = (p1) ? p1.val : 0;
        num2 = (p2) ? p2.val : 0;
        if(num1 + num2 + carry > 9){
            carry = 1;
            current.next = new ListNode(num1+num2+carry-10);
            current = current.next;
        } else{
            carry = 0;
            current.next = new ListNode(num1+num2);
            current = current.next;
        }
        if(p1) p1=p1.next;
        if(p2) p2=p2.next;
    }

    if(carry) current.next = new ListNode(carry);
    return solution.next;

}

//394 decode string

    //k = how many times we need to repeat
    //[ start storing what i need to repeat
    //] start repeating

const decodeString = (s) => {
    let multiply = [];
    let tempMult = "";
    let repeatStr = [];
    let solution = '';

    for(let char of s){
        if(!isNaN(char)){
            tempMult = `${tempMult}${char}`
        }else if (char === '['){
            multiply.push(tempMult);
            tempMult = '';
            repeatStr.push(solution);
            solution = '';
        }else if(char === ']'){
            solution = repeatStr.pop() + solution.repeat(multiplay.pop());
        }else{
            solution += char;
        }
    }

    return solution;
}

//15 3sum
var threeSum = function(nums){
    let [solution, left, right] = [[], 0 ,nums.length-1];
    if(nums.length < 3) return solution;
    nums.sort((a,b)=>{
        return a-b});

    for(let [index, number] of nums.entries()){
        if(number > 0) return solution;
        if(number === nums[index-1]) continue;

        left = index+1
        right = nums.length-1;

        let temp = 0;

        while(left < right){
            temp = number + nums[left] + nums[right];
            if(temp === 0){
                solution.push([number, nums[left], nums[right]])
                left++;
                right--;
                 while(left < right && nums[left] == nums[left-1]){
                    left++
                 }
                  while(left < right && nums[right] == nums[right+1]){
                    right--
                 }
            }else if(temp > 0){
                left++
            }else if(temp < 0){
                right--
            }
        }
    }
    return solution;
}

//5 Longest Palindromic Substring

const longestPalindrome = (s) => {
    if(s.length< 1) return s;

    const newString = getModifiedString(s);
    let P = new Array(newString.length).fill(0);
    let center = 0;
    let rightBoundary = 0;

    for(let i=0; i<newString.length; i++){
        let indexMirror = center - (i-center);
        if(i < rightBoundary){
            P[i] = Math.min(rightBoundary-i, P[indexMirror]);
        }
        let right = i+(P[i] + 1);
        let left = i-(P[i]+1);

            while(right < newString.length && left >=0 && newString[left] === newString[right]){
                P[i]++;
                right++;
                left--;
            }

            if(i + P[i] > rightBoundary){
                center = i;
                rightBoundary = i+P[i];
            }
    }
    let leng = Math.max(...P);
    let index = P.indexOf(leng);

    return newString.substring(index-leng+1, index+leng);
}

const getModifiedString = (word) => {
    let newHashWord = '#';
    for(let char of word){
        newHashWord += char;
        newHashWord += '#';
    }
    return newHashWord;
}

//455 assign cookies
var findContentChildren = function(g,s){ //sort kids by greed and size factor
    let solution = 0; //how many kids fed
    let greedIndex = 0;
    g.sort((a,b) => {a-b})//increasing order
    s.sort((a,b)=>{a-b});

    for(let cookieSize of s){
        if (cookieSize >= g[greedIndex]){
            solution++;
            greedIndex++;
        }
    }
    return solution;

}

//104 maximumm depth of a binary tree
var maxDepth = function(root){
    
}
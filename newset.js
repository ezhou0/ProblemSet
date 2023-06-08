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


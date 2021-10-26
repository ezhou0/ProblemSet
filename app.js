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

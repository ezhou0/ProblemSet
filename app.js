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

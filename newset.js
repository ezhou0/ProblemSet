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
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
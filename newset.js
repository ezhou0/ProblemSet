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

4. 
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

5.
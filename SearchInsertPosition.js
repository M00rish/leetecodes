// https://leetcode.com/problems/search-insert-position/

var searchInsert = function(nums, target) {
    
    let left = 0;
    let right = nums.length - 1;
    
    while(left <= right){
        
        let pivot = left + Math.floor((right - left) / 2);
        
        if (nums[pivot] == target) return pivot;
        
        else if(nums[pivot] > target)
            right = pivot - 1;
        
        else left = pivot + 1;
        
    }
    
    return left;
    
};
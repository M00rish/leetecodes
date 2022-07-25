
// https://leetcode.com/problems/binary-search

// Itertative Solution 

let Binarysearch1 = function(nums, target) {

    let left = 0;
    let right = nums.length - 1;
    let pivot;
    
    while(left <= right) {

        // Define the middle of the array 
        pivot = left + Math.floor(right - left / 2);

        // Check if the target is found 
        if( nums[pivot] == target) return pivot;

        // if the target is bigger than the current middle, search at the right half of the array
        if (nums[pivot] < target)  left = pivot + 1;

        // if not search at the left half of it
        else right = pivot - 1;
    }

    // if no target found in the array print -1
    return -1
};



// Recursive Solution  

let Binarysearch2 = function(nums, left, right, target){

    if(left <= right){

        // Define the middle
        let pivot = left + Math.floor((right - left) / 2);

        // check if target found
        if(nums[pivot] == target ) return pivot;

        // if target smaller than current middle, check the left subbarray
        if(nums[pivot] > target) return Binarysearch2(nums, left, pivot - 1 ,target);

        // if not, check the right subarray
        else return Binarysearch2(nums, pivot + 1, right, target );
    }

    // target not found.
    return -1;
}


var arr = [0,3,5,7,8,9,12];

console.log(Binarysearch1(arr, 12));
console.log(Binarysearch2(arr, 0, 6, 9));



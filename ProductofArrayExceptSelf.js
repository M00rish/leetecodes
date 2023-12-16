/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    const n = nums.length;
 
     // Initialize arrays to store the products to the left and right of each element
     const leftProducts = new Array(n).fill(1);
     const rightProducts = new Array(n).fill(1);
 
     // Compute the products to the left of each element
     let leftProduct = 1;
     for (let i = 1; i < n; i++) {
         leftProduct *= nums[i - 1];
         leftProducts[i] = leftProduct;
     }
 
     // Compute the products to the right of each element
     let rightProduct = 1;
     for (let i = n - 2; i >= 0; i--) {
         rightProduct *= nums[i + 1];
         rightProducts[i] = rightProduct;
     }
 
     // Compute the final result by multiplying left and right products
     const result = new Array(n);
     for (let i = 0; i < n; i++) {
         result[i] = leftProducts[i] * rightProducts[i];
     }
 
     return result;
 };

 const arr = [1,2,3,4];
 console.log(productExceptSelf(arr));

//  first loop
//  i = 1 -> leftProduct = 1 * 1 = 1 -> leftProducts[1] = 1 
//  i = 2 -> leftProduct = 1 * 2 = 2 -> leftProducts[2] = 2
//  i = 3 -> leftProduct = 2 * 3 = 6 -> leftProducts[3] = 6
// leftProducts = [1,1,2,6]

// second loop
// i = 2 -> rightProduct = 1 * 4 = 4 -> rightProducts[2] = 4
// i = 1 -> rightProduct = 4 * 3 = 12 -> rightProducts[1] = 12
// i = 0 -> rightProduct = 12 * 2 = 24 -> rightProducts[0] = 24;
// rightProduct = [24,12,4,1]

//Last loop 
//result = [24,12,8,6]
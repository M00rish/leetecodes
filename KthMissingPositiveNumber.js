var findKthPositive = function(arr, k) {
    let left = 0;
    let right = arr.length;

    while (left <= right) {
        let pivot = left + (right - left) / 2;

        if (arr[pivot] - pivot - 1) {
            left = pivot + 1;
        } else {
            right = pivot - 1;
        }
    }
    return left + k;
};

let arr = [2,3,4,7,11];
const k = 5;

console.log(findKthPositive(arr,k));

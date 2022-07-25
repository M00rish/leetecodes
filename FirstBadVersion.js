
// https://leetcode.com/problems/first-bad-version/


let isBadVersion = function(bool){
    return bool
}


var solution = function(isBadVersion) {
    

     let arr = [false,false,false,true,true,true, true];
     let n = arr.length;

    return function(n) {
            
        //initializes the boundaries
        let left = 1,right = n;
        
        
        while(left <= right){

            // set the middle index
            let pivot = left + Math.floor((right - left) / 2 );
            
            // if version is bad search in the left half of the array
            if(isBadVersion(pivot)) right = pivot;
            
            // if not search on the right
            else left = pivot + 1;
            
        }
        
            return left;
    };     
        
};

console.log(solution(isBadVersion,arr));
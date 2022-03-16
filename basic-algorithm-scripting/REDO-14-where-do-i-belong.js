/* 

Where do I Belong

Return the lowest index at which a value (second argument) should be inserted into an array (first argument) once it has been sorted. 

The returned value should be a number.


For example, getIndexToIns([1,2,3,4], 1.5) should return 1 because it is greater than 1 (index 0), but less than 2 (index 1).

Likewise, getIndexToIns([20,3,5], 19) should return 2 because once the array has been sorted it will look like [3,5,20] and 19 is 
less than 20 (index 2) and greater than 5 (index 1).

https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-algorithm-scripting/where-do-i-belong

*/


function getIndexToIns(arr, num) {
    arr.push(num)
  
    // TODO: REMEMBER THIS SORT METHOD
    arr = arr.sort((a, b) => a - b);
    
    console.log(arr)
    return arr.indexOf(num);
  }
  
  console.log(getIndexToIns([3, 10, 5], 3),
  getIndexToIns([5, 3, 20, 3], 5),
  getIndexToIns([2, 20, 10], 19),
  getIndexToIns([2, 5, 10], 15));
  
  // 0 2 2 3
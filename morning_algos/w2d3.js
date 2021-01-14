/**
 * Creates an array of elements that ONLY show up in one of the input arrays.
 * 
 * @param {number[]} arr1 an UNSORTED array of numbers
 * @param {number[]} arr2 an UNSORTED array of numbers
 * @returns {number[]} a new UNSORTED array with elements that are only in one of the inputs
 * BONUS: allow it to take in a 2D array
 */

// AKA symmetric difference

function disjunctiveUnion(arr1, arr2) {
    let retArr = [];
    
    for(let i = 0; i<arr1.length; i++) {
      if(!arr2.includes(arr1[i])) {
        retArr.push(arr1[i]);
      }
    }
  
    for(let j = 0; j<arr2.length; j++) {
      if(!arr1.includes(arr2[j])) {
        retArr.push(arr2[j]);
      }
    }
    
    return retArr;
  }
  
  console.log(disjunctiveUnion([1, 2], [2, 1]));
  // should log [] since 1 and 2 are in both
  
  console.log(disjunctiveUnion([1, 2, 3], [1, 2]));
  // should log [3]
  
  
  /**
   * BONUS: Creates an array of elements that ONLY show up in one of the nested arrays.
   * 
   * @param {Array<Array<number>>} arr a nested array of UNSORTED numbers
   * @returns {number[]} a new array with elements that are only in one of the inner arrays
   */
  
  function disjunctiveUnionBonus(arr) {
    let retArr = [];
    let numObj = {};
    
    for (let i = 0 ; i < arr.length ; i++) {
      for (let j = 0 ; j < arr[i].length ; j++) {
        if (arr[i][j] in numObj) {
          numObj[arr[i][j]] += 1;
        }
        else {
          numObj[arr[i][j]] = 1;
        }
      }
    }
  
    for (var key in numObj) {
      if (numObj[key]===1) {
        retArr.push(Number(key));
      }
    }
  
  
    return retArr;
  }
  
  console.log(disjunctiveUnionBonus([
    [1, 2, 3],
    [4, 5, 6],
    [1, 2, 5, 6]
  ]));
  // should log [3, 4] or [4, 3]
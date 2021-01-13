/**
 * Creates an intersection (elements in both) of two sorted arrays.
 * 
 * @param {number[]} arr1 a sorted array of numbers
 * @param {number[]} arr2 a sorted array of numbers
 * @returns {number[]} a NEW SORTED array of the shared elements
 */

function intersectSortedArrays(arr1, arr2) {
    // your code here
    //go through arr1, arr2 find shared elements
    //push in newarr 
    let i1 = 0;
    let i2 = 0;
    let newArr = [];
    while(i1 < arr1.length && i2 < arr2.length){
      if(arr1[i1] === arr2[i2]){
        newArr.push(arr1[i1])
        i1++;
        i2++;
      } else{
        i1++;
        i2++;
      }
    }
    return newArr;
  }
  console.log(intersectSortedArrays([1, 2, 2, 3], [2, 2, 4]));
  // should log [2, 2]
  
  /**
   * BONUS: ensure that each element in the returned array is unique
   * 
   * @param {number[]} arr1 a sorted array of numbers
   * @param {number[]} arr2 a sorted array of numbers
   * @returns {number[]} a NEW SORTED array of the shared elements
   */
  
  function intersectSortedArraysDedupe(arr1, arr2) {
    // your code here
    let i1 = 0;
    let i2 = 0;
    let newArr = [];
    while(i1 < arr1.length && i2 < arr2.length){
      if(arr1[i1] === arr2[i2]){
        newArr.push(arr1[i1])
        i1++;
        i2++;
      } else{
        i1++;
      }
    }
    return newArr;
  }
  console.log(intersectSortedArrays([1, 2, 2, 3], [2, 2, 4]));
  }
  
  console.log(intersectSortedArraysDedupe([1, 2, 2, 3], [2, 2, 4]));
  // should log [2]
  
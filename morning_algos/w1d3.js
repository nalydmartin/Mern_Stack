/**
 * Creates a new sorted array from two sorted arrays.
 * 
 * @param {number[]} arr1 a sorted array of numbers
 * @param {number[]} arr2 a sorted array of numbers
 * @returns {number[]} a sorted array with all elements from both input arrays
 */

function combineSortedArrays(arr1, arr2) {
    // your code here
  }
  
  console.log(combineSortedArrays([2, 4, 6], [1, 3, 5]));
  // should log [1, 2, 3, 4, 5, 6]
  console.log(combineSortedArrays([1], [3])); // should log [1, 3]
  console.log(combineSortedArrays([1], [])); // should log [1]
  
  
  /**
   * Sorts an array with a "divide and conquer" approach.
   * Uses combineSortedArrays internally.
   * 
   * @param {number[]} arr an UNSORTED array of numbers
   * @returns {number[]} the new sorted array
   */
  
  function mergeSort(arr) {
    // your code here

    if (arr.length <= 1) {
        return arr;
    }

    let lhalf = mergeSort(arr.slice(0, arr.length/2));
    let rhalf = mergeSort(arr.slice(arr.length/2));
    return combineSortedArrays(lhalf, rhalf);
  }
  
  [1, 2, 3, 4, 5].slice(); // returns [1, 2, 3, 4, 5]
  [1, 2, 3, 4, 5].slice(2); // returns [3, 4, 5]
  [1, 2, 3, 4, 5].slice(2, 4); // returns [3, 4]
  
  console.log(mergeSort([1, 5, 2, 8, 3, 4]));
  // should log [1, 2, 3, 4, 5, 8]


// ---------------------------------------------------------- //


  //number one
//Combine the pre-sorted arrays into a single sorted array
// function combineSortedArrays(arr1, arr2) {
//     let newArray = arr1.concat(arr2);
//     console.log(newArray);

//     for (let i = 0; i < arr.length; i++) {
        
//     }
// }

// console.log(combineSortedArrays([1,3,8], [2,6,7]))

function combineSortedArrays(arr1, arr2) {
    let newArray = [];
    let index1=0;
    let index2=0;
    for (let i=0; i<arr1.length+arr2.length; i++) {
        let temp1=arr1[index1];
        let temp2=arr2[index2];
        if (temp1 == undefined) {
            newArray.push(temp2);
            index2++
        } else if (temp2 == undefined) {
            newArray.push(temp1);
            index1++;
        }else if (temp1 < temp2) {
            newArray.push(temp1);
            index1++;
        } else {
            newArray.push(temp2);
            index2++;
        }
    }
    return newArray;
}

console.log(combineSortedArrays([0,4,5,8,11], [2,3,9]))

//number two
//Deconstruct the array into individual arrays and then reconstruct it using combineSortedArrays
function mergeSort(arr) {

    const tempArr = arr.slice(arr.length/2);
    while (arr.length > 2) {
        arr.slice(arr.length-2);
        
    }
} 
  [1, 2, 3, 4, 5].slice(); // returns [1, 2, 3, 4, 5]
  [1, 2, 3, 4, 5].slice(2); // returns [3, 4, 5]
  [1, 2, 3, 4, 5].slice(2, 4); // returns [3, 4]

console.log(mergeSort([2,10,4,8,11,19]))
//slice
[2,10,4][8,11,19]
//slice
[2][4,10][8][11,19]
//combineSortedArrays
[2,4,10][8,11,19]
//combineSortedArrays
[2,4,8,10,11,19]

[2,10,4,8][11,19]
[2,10][4,8][11,19]

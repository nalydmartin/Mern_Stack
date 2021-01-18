/**
 * Finds the indices of the values that add up to the sum.
 * 
 * @param {number[]} arr an array of integers
 * @returns {number[]} the TWO INDICES of the elements that add up to the sum
 * Assume there is only one solution.
 * Numbers can only be used once.
 */

function sumTwo(arr, sum) {
    // your code here

    let newSum = sum;

    for(let i =0; i<arr.length; i++) {
        for(let j = 1; j < arr.length; j++){
            if(arr[i] + arr[j] === newSum){
                return [i, j];
            }
        }
    }
    }

  console.log(sumTwo([1, 0, 8, 9], 9)); // should log [0, 1]

  /**
   * Finds the most frequent values in an array.
   * 
   * @param {number[]} arr an array of integers
   * @param {number} k the number of frequents to find
   * @returns {number[]} the "k" most frequent values in the input array
   * the input array WON'T NECESSARILY BE IN ORDER
   * the output array NEED NOT BE ORDERED
   * you can assume there's always a valid answer
   */
  
  function kMostFrequent(arr, k) {
    // your code here
    
    let tempArr = [];
    let freqDict = {};
    let max = 0;

    for (let i = 0; i<arr.length; i++) {

        if( freqDict.hasOwnProperty(arr[i]) ) {
            freqDict[arr[i]] + 1;
        } else {
            freqDict[arr[i]] = 1;
        }
    }
    
    for (let j in freqDict) {
        max = (max < parseFloat(j) ? parseFloat(j) : max);
    }
    console.log(freqDict[max]);
    }
//   var dict_Numbers = {
//     "96": "0",
//     "97": "1",
//     "98": "2",
//     "99": "3",
//     "100": "4",
//     "101": "5"
//   };
  
//   var max = 0;
  
//   for (var property in dict_Numbers) {
//     max = (max < parseFloat(property)) ? parseFloat(property) : max;
//   }
  
//   console.log(max);
  console.log(kMostFrequent([1, 1, 1, 2, 2, 3], 2));
  // should log [1, 2] or [2, 1]
  
  console.log(kMostFrequent([0, 0, 0, 2, 2, 3], 1));
  // should log [0]
  
  console.log(kMostFrequent([1, 3, 2, 2, 1, 3], 3));
  // should log [1, 2, 3] in any order
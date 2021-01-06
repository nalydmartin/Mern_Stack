// Grab each number individually and pull it out and compare to the numbers in front of it
// If the next number is smaller than the previous, then swap the places of the numbers 
// Continue moving the smaller number forward until it is at the front of the array, then move forward in the sort 

/**
 * Sorts an array by traversing backwards to find each value's correct position.
 * 
 * @param {number[]} arr an UNSORTED array of numbers
 * @returns {number[]} the INPUT array (ie. sorts "in place")
 */

function insertionSort(arr) {
    // your code here
    if (arr.length < 2) {
        return arr;
    }
    for (let i = 1; i < arr.length; i++) {

        let temp = arr[i];
        let j = i - 1;
        while (temp < arr[j]) {
            arr[j+1] = arr[j];
            j--;
        }
        arr[j+1] = temp;
    }


  }
  
  console.log(insertionSort([1, 5, 2, 8, 3, 4]));
  // should log [1, 2, 3, 4, 5, 8]
  
  
  /**
   * Sorts an array of objects according to an array of keys.
   * 
   * @param {Object[]} arr an UNSORTED array of objects
   * @param {string[]} keys an array of keys to sort by
   * 
   * Use any of the sorting algos we've covered thus far.
   */
  
  function multiKeySort(arr, keys) {
    // your code here
  }
  
  console.log(multiKeySort([
    {
      firstName: 'Lee',
      lastName: 'Babba'
    },
    {
      firstName: 'Lee',
      lastName: 'Abba'
    },
    {
      firstName: 'Adam',
      lastName: 'Smith'
    }
  ], ['firstName', 'lastName']));
  
  // should log [
  //   {
  //     firstName: 'Adam',
  //     lastName: 'Smith'
  //   },
  //   {
  //     firstName: 'Lee',
  //     lastName: 'Abba' },
  //   {
  //     firstName: 'Lee',
  //     lastName: 'Babba'
  //   }
  // ]
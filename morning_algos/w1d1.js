/**
 * Sorts an array by comparing adjacent values and swapping.
 * 
 * @param {number[]} arr an UNSORTED array of numbers
 * @returns {number[]} the INPUT array (ie. sorts "in place")
 * BONUS: fast exit if portion already sorted
 */

function bubbleSort(array) {
  let temp = 0;
  for (let i = 0; i<array.length-1; i++){
    for(let j = 0; j<array.length-i-1; j++){
      if( array[j] > array[j+1]){
        temp = array[j+1];
        array[j+1]=array[j];
        array[j]=temp;        
      }
    }
  }
  return array;
  }
  
  console.log(bubbleSort([1, 5, 2, 8, 3, 4]));
  // should log [1, 2, 3, 4, 5, 8]
  

  
  /**
   * Sorts an array by cycling through and selecting the minimum value.
   * 
   * @param {number[]} arr an UNSORTED array of numbers
   * @returns {number[]} the INPUT array (ie. sorts "in place")
   */
  
  function selectionSort(arr) {
    let temp = 0;
    let min = arr[0];
    for(let i = 0; i < arr.length-1; i++) {
        for (let j = 0; arr.length-1; i++) {
            if(arr[j]< min){
              min = arr[j];
              console.log(min);
              
            }
        
        }
        if(arr[i] > arr[i+1]) {
            temp = arr[i + 1];
            arr[i + 1] = arr[i];
            arr[i+1] = temp;
    }
    }
    return arr;
  }
  
  console.log(selectionSort([1, 5, 2, 8, 3, 4]));
  // should log [1, 2, 3, 4, 5, 8]

  function selectionSort(arr) {
    for(let i = 0; i < arr.length; i++) {
    let minIndex = i, temp;
      for(let j = i+1; j < arr.length; j++) {
        if(arr[j] < arr[minIndex]) {
          minIndex = j;
        }
      }
      if(minIndex != i) {
        temp = arr[i];
        arr[i] = arr[minIndex];
        arr[minIndex] = temp;
      }
    }
    return arr;
  }
  
  console.log(selectionSort([1, 5, 2, 8, 3, 4]));

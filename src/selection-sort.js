import { endLog, startLog } from "./utils";

export const selectionSort = (arr) => {
  startLog('Selection sort');

  let iterations = 0, comparisons = 0, writes = 0;

  for(let i = 0; i < arr.length - 1; i++) {

    iterations++;

    let min_index = i;
    
    for(let j = i + 1; j < arr.length; j++) {

      iterations++;
      comparisons++;

      if(arr[j] < arr[min_index]) {
        min_index = j;
      }
    }

    comparisons++;

    if(min_index != i) {

      writes++;

      [arr[i], arr[min_index]] = [arr[min_index], arr[i]];
    }
  }

  endLog(iterations, comparisons, writes);
}
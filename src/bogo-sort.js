import { endLog, startLog } from "./utils";

export const bogoSort = (arr) => {
  startLog('Bogo sort');

  let iterations = 0, comparisons = 0, writes = 0;

  const isSorted = (checkArray) => {
    for(let i = 0; i < checkArray.length - 1; i++) {

      iterations++; comparisons++;

      if(checkArray[i] > checkArray[i + 1]) {
        return false;
      }
    }
    return true;
  }

  while(!isSorted(arr)) {
    let buffer = [], start;

    for(let i = arr.length; i >= arr.length && i > 0; i--) {

      iterations++;

        start = Math.floor(Math.random() * arr.length);
        buffer.push(arr.splice(start, 1)[0])
    };

    writes++;

    arr = buffer;
  }

  endLog(iterations, comparisons, writes);
}
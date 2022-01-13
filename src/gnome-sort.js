import { endLog, startLog } from "./utils"

export const gnomeSort = (arr) => {
  startLog('Gnome sort');

  let iterations = 0, comparisons = 0, writes = 0;

  for(let i = 1; i < arr.length; i++) {

    iterations++; comparisons++;

    if(arr[i] < arr[i - 1]) {
      let j = i;

      comparisons++;

      while(j > 0 && arr[j] < arr[j - 1]) {

        iterations++; writes++;

        [arr[j - 1], arr[j]] = [arr[j], arr[j - 1]];
        j--;
      }
    }
  }

  endLog(iterations, comparisons, writes);
}
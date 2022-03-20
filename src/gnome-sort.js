import { endLog, startLog } from "./utils"

export const gnomeSort = (arr) => {
  startLog('Gnome sort');

  let iterations = 0, comparisons = 0, writes = 0;

  //начинает проход с 1 индекса по массиву
  for(let i = 1; i < arr.length; i++) {

    iterations++; comparisons++;

    //если предыдущий больше текущего
    if(arr[i] < arr[i - 1]) {
      let j = i;

      comparisons++;
      //начинаем цикл в обратном порядке начиная с текущего
      while(j > 0 && arr[j] < arr[j - 1]) {

        iterations++; writes++;
        //меняем местами
        [arr[j - 1], arr[j]] = [arr[j], arr[j - 1]];
        j--;
      }
    }
  }

  endLog(iterations, comparisons, writes);
}
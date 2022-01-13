/*

Сортировка вставками — алгоритм сортировки, в котором элементы входной последовательности просматриваются по одному, 
и каждый новый поступивший элемент размещается в подходящее место среди ранее упорядоченных элементов.

*/

import { endLog, startLog } from "./utils";

export const insertionSort = (arr) => {
  startLog('Insertion sort');

  let iterations = 0, comparisons = 0, writes = 0;

  for(let i = 0; i < arr.length; i++) {

    iterations++;
    
    let current = arr[i];
    let j = i - 1;

    comparisons++;

    while(j >= 0 && arr[j] > current) {

      iterations++; writes++;

      arr[j + 1] = arr[j];
      j--;
    }

    writes++;

    arr[j + 1] = current;
  }

  endLog(iterations, comparisons, writes);
}
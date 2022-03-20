/*

Сортировка вставками — алгоритм сортировки, в котором элементы входной последовательности просматриваются по одному, 
и каждый новый поступивший элемент размещается в подходящее место среди ранее упорядоченных элементов.

*/

import { endLog, startLog } from "./utils";

export const insertionSort = (arr) => {
  startLog('Insertion sort');

  let iterations = 0, comparisons = 0, writes = 0;

  //стартуем цикл по массиву
  for(let i = 0; i < arr.length; i++) {

    iterations++;
    
    let j = i - 1;

    //идем в обратном порядке от текущего пока предыдыдущий больше текущего
    while(j >= 0 && arr[j] > arr[j + 1]) {

      iterations++; writes++; comparisons++;

      //сдвигаем массив вперед
      [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      j--;
    }
  }

  endLog(iterations, comparisons, writes);
}
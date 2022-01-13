/*

Сортировка чёт-нечет

Этот относительно простой алгоритм сортировки, разработанный для использования на параллельных процессорах, 
является модификацией пузырьковой сортировки. Суть модификации в том, чтобы сравнивать элементы массива под 
чётными и нечётными индексами с последующими элементами независимо.

Заводится флаг, определяющий отсортирован ли массив. В начале итерации ставится в состояние «истина», далее 
каждый нечётный элемент сверяется с последующим и если они стоят в неправильном порядке (предыдущий больше 
  следующего), то они меняются местами, и флаг ставится в состояние «ложь». То же самое делается с чётными 
  элементами. Алгоритм не прекращает работу, пока флаг не останется в состоянии «истина».

*/

import { endLog, startLog } from "./utils";

export const oddEvenSort = (arr) => {
  startLog('Odd even sort');

  let iterations = 0, comparisons = 0, writes = 0;

  for(let i = 0; i < arr.length; i++) {

    iterations++;

    // (i % 2) ? 0 : 1 возвращает 1, если i четное, 0, если i не четное
    for(let j = (i % 2) ? 0 : 1; j + 1 < arr.length; j += 2) {

      iterations++; comparisons++;

      if(arr[j] > arr[j + 1]) {

        writes++;

        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  
  endLog(iterations, comparisons, writes);
}
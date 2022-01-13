/*

Сортировка перемешиванием, или Шейкерная сортировка, или двунаправленная (англ. Cocktail sort) — разновидность 
пузырьковой сортировки. Анализируя метод пузырьковой сортировки, можно отметить два обстоятельства.

Во-первых, если при движении по части массива перестановки не происходят, то эта часть массива уже отсортирована 
и, следовательно, её можно исключить из рассмотрения.

Во-вторых, при движении от конца массива к началу минимальный элемент «всплывает» на первую позицию, а максимальный 
элемент сдвигается только на одну позицию вправо.

Эти две идеи приводят к следующим модификациям в методе пузырьковой сортировки. Границы рабочей части массива (то 
  есть части массива, где происходит движение) устанавливаются в месте последнего обмена на каждой итерации. Массив 
  просматривается поочередно справа налево и слева направо.

*/

import { endLog, startLog } from "./utils";

export const shakerSort = (arr) => {
  startLog('Shaker sort');

  let iterations = 0, comparisons = 0, writes = 0;

  let control = arr.length - 1;
  let left = 0;
  let right = arr.length - 1;

  do {

    iterations++;

    for(let i = left; i < right; i++) {

      iterations++; comparisons++;

      if(arr[i] > arr[i + 1]) {

        writes++;

        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
        control = i;
      }
    }
    right = control;
    for(let i = right; i > left; i--) {

      iterations++; comparisons++;

      if(arr[i] < arr[i - 1]) {

        writes++;

        [arr[i - 1], arr[i]] = [arr[i], arr[i - 1]];
        control = i;
      }
    }
    left = control;

    comparisons++;

  } while (left < right)

  endLog(iterations, comparisons, writes);
}
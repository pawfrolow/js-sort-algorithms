import { endLog, startLog } from "./utils";

export const selectionSort = (arr) => {
  startLog('Selection sort');

  let iterations = 0, comparisons = 0, writes = 0;

  //идем по массиву с первого до предпоследнего
  for(let i = 0; i < arr.length - 1; i++) {

    iterations++;

    //первоначально задаем минимальный индекс текущему элементу
    let min_index = i;
    //запускаем второй цикл с i+1 до конца массива
    for(let j = i + 1; j < arr.length; j++) {

      iterations++;
      comparisons++;
      //сравниваем каждый из второго цикла с элементом текущей итерации
      if(arr[j] < arr[min_index]) {
        //если найден меньше текущего, то запоминаем индекс
        min_index = j;
      }
    }

    comparisons++;
    //если минимальный индекс поменялся
    if(min_index != i) {

      writes++;
      //меняем местами из текущей итерации и найденный минимальный
      [arr[i], arr[min_index]] = [arr[min_index], arr[i]];
    }
  }

  endLog(iterations, comparisons, writes);
}
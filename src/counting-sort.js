import { endLog, startLog } from "./utils";

export const countingSort = arr => {
  startLog('Counting sort');

  let iterations = 0, comparisons = 0, writes = 0;

  //массив для хранения количества сколько раз повторяется элемент по индексу
  let countingArray = [];
  //проход по массиву
  for(let i = 0; i < arr.length; i++) {

    iterations++; comparisons++;

    //если еще не записывали, записываем 1 повторение по индексу элемента
    if(countingArray[arr[i]] === undefined) {
      writes++;
      countingArray[arr[i]] = 1;
    }
    //если записывали, инкрементируем повторение
    else {
      writes++;
      countingArray[arr[i]]++;
    }
  }

  //обнуляем массив
  arr = [];
  //проходим по массиву с повторениями
  countingArray.forEach((item, index) => {
    iterations++; comparisons++;
    if(item !== undefined) {
      //запускаем подцикл по кол-ву повторений
      for(let i = 0; i < item; i++) {
        iterations++; writes++;
        //записываем элемент столько раз сколько повторений
        arr.push(index);
      }
    }
  })

  endLog(iterations, comparisons, writes);
}
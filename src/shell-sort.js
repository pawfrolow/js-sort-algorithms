import { endLog, startLog } from "./utils"

export const shellSort = arr => {
  startLog('Shell sort');

  let iterations = 0, comparisons = 0, writes = 0;

  //запускаем цикл, в котором d сначала равен половине массива, затем уменьшается вдвое
  for(let d = arr.length / 2; d >= 1; d /= 2) {
    iterations++;

    //округляем, т к по индекс к дробному не получится обратиться
    let step = Math.floor(d);

    //запускаем подцикл, где проходим по массиву с нашим шагом из внешнего цикла
    for(let i = 0; i < arr.length; i += step) {
      iterations++;

      let j = i - step;
      //сдвигаем элементы на указанный шаг, пока не дойдем до меньшего
      while(j >= 0 && arr[j] > arr[j + step]) {
        iterations++; writes++; comparisons++;

        [arr[j], arr[j + step]] = [arr[j + step], arr[j]];
        j -= step;
      }
    }
  }

  endLog(iterations, comparisons, writes);
}
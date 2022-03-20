import { shakerSort } from './shaker-sort';
import { bubbleSort } from './bubble-sort';
import { oddEvenSort } from './odd-even-sort';
import { insertionSort } from './insertion-sort';
import { bozoSort } from './bozo-sort';
import { selectionSort } from './selection-sort';
import { copy } from './utils';
import { gnomeSort } from './gnome-sort';
import { combSort } from './comb-sort';
import { shellSort } from './shell-sort';
import { countingSort } from './counting-sort';

const arraySize = 20000;
const arrayValueMax = 20;

const array = [...Array(arraySize)].map(() => Math.floor(Math.random() * arrayValueMax));

console.log(array);

//-------обменные-------

//пузырьковая и модификации
/* bubbleSort(copy(array));
combSort(copy(array));
shakerSort(copy(array));


oddEvenSort(copy(array));
gnomeSort(copy(array));

//-------вставками-------
insertionSort(copy(array));
shellSort(copy(array));

//-------выборка---------

selectionSort(copy(array)); */

//-------слияние---------

//-------без сравнений---

countingSort(copy(array));

//-------непрактичные----

//bozoSort(copy(array))
import { shakerSort } from './shaker-sort';
import { bubbleSort } from './bubble-sort';
import { oddEvenSort } from './odd-even-sort';
import { insertionSort } from './insertion-sort';
import { bogoSort } from './bogo-sort';
import { selectionSort } from './selection-sort';
import { copy } from './utils';
import { gnomeSort } from './gnome-sort';

const arraySize = 50000;
const arrayValueMax = 50000;

const array = [...Array(arraySize)].map(() => Math.floor(Math.random() * arrayValueMax));

//console.log(array);

//обменные

bubbleSort(copy(array));
shakerSort(copy(array));
oddEvenSort(copy(array));
gnomeSort(copy(array));

//вставками

insertionSort(copy(array));

//выборка

selectionSort(copy(array));

//ебаные

//bogoSort(copy(array))
// console.log(t1);
// console.log(t2);
// console.log(t3);
// console.log(t4);
// console.log(t5);
// console.log(t6);
// console.log(t71, t72, t73);
// console.log(t8);
// console.log(t91, t92);
// console.log(t101, t102, t103);

///////////////////////Задание 1//////////////////////////////////////
const fill = (arraySize: number, value: string) => {
  return new Array(arraySize).fill(value);
};

const data1 = 3;
const valueToFill = "a";
export const t1 = fill(data1, valueToFill);

///////////////////////Задание 2//////////////////////////////////////
const reverse = (array: number[]) => {
  const reversed: number[] = [];

  for (let i = array.length - 1; i >= 0; i--) {
    reversed.push(array[i]);
  }
  return reversed;
};

const data2 = [1, 2, 3];
export const t2 = reverse(data2);

///////////////////////Задание 3//////////////////////////////////////
const data3 = [0, 1, false, 2, undefined, "", 3, null];

const compact = (array) => array.filter((el) => el);
export const t3 = compact(data3);

///////////////////////Задание 4//////////////////////////////////////
const fromPairs = (array) =>
  array.reduce((acc, value) => {
    if (Array.isArray(value)) {
      acc[value[0]] = value[1];
    }
    return acc;
  }, {});

const data4 = [
  ["a", 1],
  ["b", 2]
];
export const t4 = fromPairs(data4);

///////////////////////Задание 5//////////////////////////////////////
const without = (array, ...args) => {
  let filteredArray = [...array];

  for (let i = 0; i < args.length; i += 1) {
    filteredArray = filteredArray.filter((el) => el !== args[i]);
  }

  return filteredArray;
};

const data5 = [1, 2, 3, 1, 2];
export const t5 = without(data5, 1, 2);

///////////////////////Задание 6//////////////////////////////////////
const unique = (array) => {
  return Array.from(new Set(array));
};

const data6 = [1, 2, 1, 2, 3];
export const t6 = unique(data6);

///////////////////////Задание 7//////////////////////////////////////
const isEqual = (firstArray, secondArray) => {
  if (firstArray.length !== secondArray.length) {
    return false;
  }
  return firstArray.every((value, index) => value === secondArray[index]);
};

const arr71 = [1, 2, 3, 4];
const arr72 = [1, 2, 3, 4];
const arr73 = [1, 2, 3, 5];
const arr74 = [1, 2, 3, 4, 5];
export const t71 = isEqual(arr71, arr72); // true
export const t72 = isEqual(arr71, arr73); // false
export const t73 = isEqual(arr71, arr74); // false

///////////////////////Задание 8//////////////////////////////////////
const flatten = (array) =>
  array.reduce((acc, val) => acc.concat(Array.isArray(val) ? flatten(val) : val), []);

const data8 = [1, 2, [3, 4, [5]]];
export const t8 = flatten(data8);

///////////////////////Задание 9//////////////////////////////////////
const chunk = (array, size) => {
  const result: number[] = [];
  let index = 0;

  while (index < array.length) {
    result.push(array.slice(index, size + index));
    index += size;
  }

  return result;
};

const data = [1, 2, 3, 4, 5, 6, 7];
export const t91 = chunk(data, 2); // [[1, 2], [3, 4], [5, 6], [7]]
export const t92 = chunk(data, 3); // [[1, 2, 3], [4, 5, 6], [7]]

///////////////////////Задание 10//////////////////////////////////////
const intersection = (...arrays) => {
  const result: Set<string | number> = new Set();

  for (let i = 0; i < arrays[0].length; i++) {
    let bool = true;
    for (let j = 0; j < arrays.length; j++) {
      if (!arrays[j].includes(arrays[0][i])) {
        bool = false;
        break;
      }
    }
    if (bool) result.add(arrays[0][i]);
  }

  return Array.from(result);
};

const arr101 = [1, 2];
const arr102 = [2, 3];
const arr103 = ["a", "b"];
const arr104 = ["b", "c"];
const arr105 = ["b", "e", "c"];
const arr106 = ["b", "b", "e"];
const arr107 = ["b", "c", "e"];
const arr108 = ["b", "e", "c"];
export const t101 = intersection(arr101, arr102);
export const t102 = intersection(arr103, arr104, arr105);
export const t103 = intersection(arr106, arr107, arr108);

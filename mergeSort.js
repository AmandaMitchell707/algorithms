
const mergeSort = (array) => {
  if (array.length <= 1) return array;

  const mid = Math.floor(array.length / 2);
  console.log(mid)
  const left = mergeSort(array.slice(0, mid));
  const right = mergeSort(array.slice(mid));

  return merge(left, right);
}

const merge = (left, right) => {
  const sortedArray = [];

  while (left.length && right.length) {
    if (left[0] < right[0]) {
      sortedArray.push(left.shift());
    } else {
      sortedArray.push(right.shift());
    }
  }

  return [...sortedArray, ...left, ...right];
}

const testArray = [4, 2, 2, 8, 5, 9, 1, 0, 2, 7];
console.log(mergeSort(testArray));

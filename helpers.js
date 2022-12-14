function mergeSort(array) {
  if (!Array.isArray(array)) return;

  const n = array.length;

  if (n < 2) {
    return array;
  }

  const firstHalf = array.slice(0, n / 2);
  const secondHalf = array.slice(n / 2);

  mergeSort(firstHalf);
  mergeSort(secondHalf);
  merge(array, firstHalf, secondHalf);
}

function merge(array, firstHalf, secondHalf) {
  let leftIndex = 0;
  let rightIndex = 0;
  let arrayIndex = 0;

  while (leftIndex < firstHalf.length && rightIndex < secondHalf.length) {
    if (firstHalf[leftIndex] < secondHalf[rightIndex]) {
      array[arrayIndex] = firstHalf[leftIndex];
      leftIndex++;
    } else {
      array[arrayIndex] = secondHalf[rightIndex];
      rightIndex++;
    }
    arrayIndex++;
  }

  while (leftIndex < firstHalf.length) {
    array[arrayIndex] = firstHalf[leftIndex];
    leftIndex++;
    arrayIndex++;
  }

  while (rightIndex < secondHalf.length) {
    array[arrayIndex] = secondHalf[rightIndex];
    rightIndex++;
    arrayIndex++;
  }
}

const removeDuplicates = (array) => {
  return Array.from(new Set(array));
};

module.exports = {
  removeDuplicates,
  mergeSort,
};

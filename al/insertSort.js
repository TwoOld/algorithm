function insertSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  for (let i = 1; i < arr.length; i++) {
    const curr = arr[i];
    let j = i - 1;

    while (j >= 0 && arr[j] > curr) {
      arr[j + 1] = arr[j];
      j--;
    }

    arr[j + 1] = curr;
  }

  return arr;
}

let arr = [3, 5, 1, 2, 2];
arr = insertSort(arr);

console.log(arr);

// BFPRT - 线性时间选择

function swap(A, i, j) {
  if (i == j) return;
  const temp = A[i];
  A[i] = A[j];
  A[j] = temp;
}

// 使用插入排序返回至多五个元素中中位数的坐标
function partition5(A, left, right) {
  let i = left + 1;
  while (i <= right) {
    let j = i;
    while (j > left && A[j - 1] > A[j]) {
      swap(A, j - 1, j);
      j--;
    }
    i++;
  }
  return Math.ceil((left + right) / 2);
}

// 计算 A 数组中的 Median of Medians 的坐标
function medianOfMedians(A, left, right) {
  // 如果数组长度不超过 5，直接返回中位数坐标
  if (right - left < 5) {
    return partition5(A, left, right);
  }
  // 将原数组每 5 个划分为一组，将每组的中位数交换至原数组前 n/5 位
  for (let i = left; i <= right; i += 5) {
    let subRight = i + 4;
    if (subRight > right) {
      subRight = right;
    }
    const median5 = partition5(A, i, subRight);
    swap(A, median5, left + Math.ceil((i - left) / 5));
  }
  // 计算 median of medians
  // left + ((right - left) / 5) / 2 + 1
  const mid = Math.ceil((right - left) / 10) + left + 1;
  return select(A, left, left + Math.ceil((right - left) / 5), mid);
}

// 根据主元划分数组
function partition(A, left, right, pivotIndex, k) {
  const pivotValue = A[pivotIndex];
  swap(A, pivotIndex, right); // 将主元交换至数组末端
  // storeIndex 左侧的元素均小于主元
  let storeIndex = left;
  for (let i = left; i < right; i++) {
    if (A[i] < pivotValue) {
      swap(A, storeIndex, i);
      storeIndex++;
    }
  }
  // storeIndex至storeIndexEq间的元素均等于主元
  let storeIndexEq = storeIndex;
  for (let i = storeIndex; i < right; i++) {
    if (A[i] == pivotValue) {
      swap(A, storeIndexEq, i);
      storeIndexEq++;
    }
  }
  // 将主元换回正确位置
  swap(A, right, storeIndexEq);
  // if (k - 1 < storeIndex) {
  //   return storeIndex;
  // }
  // if (k - 1 <= storeIndexEq) {
  //   return k - 1;
  // }
  return storeIndexEq;
}

// 线性时间的 Select-K
function select(A, left, right, k) {
  const n = A.length;
  while (left < right) {
    let pivotIndex = medianOfMedians(A, left, right);
    // let pivotIndex = Math.floor(Math.random() * (right - left + 1)) + left;
    pivotIndex = partition(A, left, right, pivotIndex, k);
    // if (pivotIndex == n - k) {
    //   return pivotIndex;
    // } else if (n - k < pivotIndex) {
    //   right = pivotIndex - 1;
    // } else {
    //   left = pivotIndex + 1;
    // }
  }
  return left;
}

// 1 - 25 乱序
const A = [
  1,
  14,
  4,
  18,
  25,
  6,
  17,
  9,
  3,
  5,
  10,
  16,
  12,
  23,
  19,
  13,
  20,
  8,
  15,
  24,
  7,
  21,
  22,
  2,
  11,
];
// for (let i = 1; i <= 25; i++) {
//   // 第 i 小元素为 i
//   console.log(select(A, 0, A.length - 1, i));
// }
select(A, 0, A.length - 1);
console.log(A);

function quickSortHelp(nums, left, right) {
    //判断是不是结束
    if (left >= right) {
        return;
    }
    //1.选取基准值
    let key = nums[left];
    let i = left;
    let j = right;
    let emptyIndex = i;
    //2.左右分割
    while (i < j) {
        //从右往左找，小于基准的的元素
        while (i < j && nums[j] >= key) {
            j--;
        }
        if (i < j) {
            nums[emptyIndex] = nums[j];
            emptyIndex = j;
        }
        //从左往右找，大于基准的元素
        while (i < j && nums[i] <= key) {
            i++;
        }
        if (i < j) {
            nums[emptyIndex] = nums[i];
            emptyIndex = i;
        }
    }
    //左右分割完成
    nums[emptyIndex] = key;
    //第三步
    //左侧排序
    quickSortHelp(nums, left, i - 1);
    //右侧排序
    quickSortHelp(nums, i + 1, right);
}

function quickSort(nums) {
    quickSortHelp(nums, 0, nums.length)
}
const arr = [3, 2, 6, 7, 1]
quickSort(arr)
console.log('123');
function quickSort(nums, left, right) {
    if (left >= right) return

    const key = nums[left]
    let i = left,
        j = right,
        keyIndex = left

    const keepRunning = () => i < j
    while (keepRunning()) {
        while (keepRunning() && nums[j] >= key) {
            j--
        }
        if (keepRunning()) {
            nums[keyIndex] = nums[j]
            keyIndex = j
        }

        while (keepRunning() && num <= key) {
            i++
        }
        if (keepRunning()) {
            nums[keyIndex] = nums[i]
            keyIndex = i
        }
    }

    nums[keyIndex] = key

    quickSort(nums, left, i - 1)
    quickSort(nums, i + 1, right)
}
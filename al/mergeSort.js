function mergeSort(arr) {
    const n = arr.length
    if (n <= 1) return arr

    const mid = Math.ceil(n / 2)

    const left = mergeSort(arr.slice(0, mid))
    const right = mergeSort(arr.slice(mid, n))

    return merge(left, right)
}

function merge(left, right) {
    const len = left.length + right.length
    const ret = []
    let i = 0
    let j = 0

    for (let k = 0; k < len; k++) {
        const l = left[i]
        const r = right[j]
        if (isNaN(l)) {
            ret[k] = r
            j++
        } else if (isNaN(r)) {
            ret[k] = l
            i++
        } else if (l < r) {
            ret[k] = l
            i++
        } else {
            ret[k] = r
            j++
        }
    }

    return ret
}

let arr = [3, 5, 1, 2, 2, -1, 0]
arr = mergeSort(arr)

console.log(arr)

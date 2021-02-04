function LinkedList() {
    let size = 0
    let first = null
    const ELEMENT_NOT_FOUND = -1

    function Node({
        next = null,
        element = null
    }) {
        this.next = next
        this.element = element
    }

    function isEmpty() {
        return size === 0
    }

    function indexOf(element) {
        let curr = first
        for (let i = 0; i < size; i++) {
            if (curr.element === element) {
                return i
            }
            curr = curr.next
        }

        return ELEMENT_NOT_FOUND
    }

    function contains(element) {
        return indexOf(element) !== ELEMENT_NOT_FOUND
    }

    const checkIndex = function (index) {
        if (index < 0 || index >= size) {
            throw new Error(`索引越界,允许范围 size: 0 - ${size-1} 当前索引: ${index}`)
        }
    }

    const findNode = function (index) {
        let curr = first
        for (let i = 0; i < index; i++) {
            curr = curr.next
        }

        return curr
    }

    function get(index) {
        checkIndex(index)

        return findNode(index).element
    }

    function set(index, element) {
        checkIndex(index)

        const curr = findNode(index)
        const old = curr.element
        curr.element = element

        return old
    }

    function clear() {
        size = 0
        first = null
    }

    function length() {
        return size
    }

    function add(...values) {
        if (values.length > 1) {
            const [index, element] = values
            if (index < 0 || index > size) {
                throw new Error(`索引越界,允许范围 size: 0 - ${size} 当前索引: ${index}`)
            }

            if (index === 0) {
                first = new Node({
                    next: first,
                    element
                })
            } else {
                const pre = findNode(index - 1)
                const next = pre.next
                const curr = new Node({
                    next,
                    element
                })
                pre.next = curr
            }

            size++
        } else {
            add(size, values[0])
        }
    }

    function remove(index) {
        checkIndex(index)

        let old = null
        if (index === 0) {
            old = first
            first = old.next
        } else {
            const pre = findNode(index - 1)
            old = pre.next
            pre.next = old.next
        }
        size--

        return old.element
    }

    function toString() {
        let str = 'size:' + size + ' => ['
        let curr = first
        for (let i = 0; i < size; i++) {
            if (i !== 0) {
                str += ' ,'
            }
            str += curr.element
            curr = curr.next
        }

        str += ']'

        return str
    }

    return {
        isEmpty,
        contains,
        indexOf,
        get,
        set,
        clear,
        length,
        add,
        remove,
        toString
    }
}

const arr = new LinkedList()

arr.add(11)
arr.add(22)
arr.add(33)
console.log(arr.toString());

arr.add(0, 44)
console.log(arr.toString());

arr.remove(2)
console.log(arr.toString());
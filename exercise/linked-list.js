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
            if (curr.element === element) return i
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

    const checkAddIndex = function (index) {
        // index === size 相当于在末尾添加新节点
        if (index < 0 || index > size) {
            throw new Error(`索引越界,允许范围 size: 0 - ${size} 当前索引: ${index}`)
        }
    }

    function add(...values) {
        if (values.length > 1) {
            const [index, element] = values
            checkAddIndex(index)

            if (index === 0) {
                // 创建node && next指向当前first节点
                // 新node 成为 新first节点
                first = new Node({
                    next: first,
                    element
                })
            } else {
                // 找到上一个节点
                const pre = findNode(index - 1)
                // 找到下一个节点
                const next = pre.next
                // 创建node && next指向下一个节点
                const curr = new Node({
                    next,
                    element
                })
                // 上一个节点next指向新node
                pre.next = curr
            }

            size++
        } else {
            add(size, values[0])
        }
    }

    function remove(index) {
        checkIndex(index)

        let curr = null
        if (index === 0) {
            curr = first
            // 当前first节点next 为 新first节点
            first = first.next
        } else {
            // 找到上一个
            const pre = findNode(index - 1)
            // 找到当前节点
            curr = pre.next
            // 上一个节点next 指向当前节点next
            pre.next = curr.next
        }

        size--

        return curr
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
        indexOf,
        contains,
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

arr.remove(1)
console.log(arr.toString());
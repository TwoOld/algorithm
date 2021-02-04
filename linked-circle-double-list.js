function LinkedDoubleList() {
    let size = 0
    let first = null
    let last = null
    const ELEMENT_NOT_FOUND = -1

    function Node({
        pre = null,
        next = null,
        element = null
    }) {
        this.pre = pre
        this.next = next
        this.element = element

        this.toString = function () {
            let str = ''
            if (this.pre) {
                str += this.pre.element
            } else {
                str += 'null'
            }
            str += `<-${this.element}->`
            if (this.next) {
                str += this.next.element
            } else {
                str += 'null'
            }

            return str
        }
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
        let curr = null
        if (index < size >> 1) {
            curr = first
            for (let i = 0; i < index; i++) {
                curr = curr.next
            }
        } else {
            curr = last
            for (let i = size - 1; i > index; i--) {
                curr = curr.pre
            }
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
        last = null
    }

    function length() {
        return size
    }

    const checkAddIndex = function (index) {
        if (index < 0 || index > size) {
            throw new Error(`索引越界,允许范围 size: 0 - ${size} 当前索引: ${index}`)
        }
    }

    function add(...values) {
        if (values.length > 1) {
            const [index, element] = values
            checkAddIndex(index)

            if (index === size) {
                const oldLast = last
                last = new Node({
                    pre: oldLast,
                    next: first,
                    element
                })
                // size === 0?
                if (oldLast === null) {
                    first = last
                    first.next = last
                    first.pre = last
                } else {
                    oldLast.next = last
                    first.pre = last
                }
            } else {
                const next = findNode(index)
                const pre = next.pre
                const curr = new Node({
                    pre,
                    next,
                    element
                })
                next.pre = curr
                pre.next = curr
                if (index === 0) {
                    first = curr
                }
            }


            size++
        } else {
            add(size, values[0])
        }
    }

    function remove(index) {
        checkIndex(index)

        let old = findNode(index)
        if (size === 1) {
            first = null
            last = null
        } else {
            const pre = old.pre
            const next = old.next

            pre.next = next
            next.pre = pre
            if (index === 0) {
                first = next
            }
            if (index === size - 1) {
                last = pre
            }
        }

        size--

        return old.element
    }

    function toString() {
        let str = 'size:' + size + ' => ['
        let curr = first
        for (let i = 0; i < size; i++) {
            if (i !== 0) {
                str += ', '
            }
            str += curr.toString()
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

const arr = new LinkedDoubleList()

arr.add(11)
arr.add(22)
arr.add(33)
console.log(arr.toString());

arr.add(0, 44)
console.log(arr.toString());

arr.remove(2)
console.log(arr.toString());
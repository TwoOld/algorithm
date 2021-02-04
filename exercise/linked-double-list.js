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
        if (index > size >> 1) {
            curr = last
            for (let i = size - 1; i > index; i--) {
                curr = curr.pre
            }
        } else {
            curr = first
            for (let i = 0; i < index; i++) {
                curr = curr.next
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

            let curr = null,
                pre = null,
                next = null

            const isEnd = index === size
            // 找到下一个节点next
            // 找到上一个节点pre
            // 如果是末尾, next为null, pre为原last
            // 以pre,next创建新节点curr
            next = isEnd ? null : findNode(index)
            pre = isEnd ? last : next.pre
            curr = new Node({
                pre,
                next,
                element
            })

            // 处理下一个节点：
            // next === null 说明curr为新的last节点, last=curr;
            // 否则next.pre指向curr
            if (next === null) {
                last = curr
            } else {
                next.pre = curr
            }

            // 处理上一个节点: 
            // pre === null 说明curr为新的first节点, first=curr;
            // 否则pre.next指向curr
            if (pre === null) {
                first = curr
            } else {
                pre.next = curr
            }

            size++
        } else {
            add(size, values[0])
        }
    }

    function remove(index) {
        checkIndex(index)

        const curr = findNode(index)
        const pre = curr.pre
        const next = curr.next

        if (pre === null) {
            first = next
        } else {
            pre.next = next
        }
        if (next === null) {
            last = pre
        } else {
            next.pre = pre
        }

        size--

        return curr.element
    }

    function toString() {
        let str = 'size:' + size + ' => ['
        let curr = first
        for (let i = 0; i < size; i++) {
            if (i !== 0) {
                str += ' ,'
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
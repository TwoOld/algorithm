function ArrayStack(capacity) {
    let size = 0
    let elements = []
    const DEFAULT_CAPACITY = 10
    const ELEMENT_NOT_FOUND = -1

    if (!capacity || capacity < 10) {
        elements = new Array(DEFAULT_CAPACITY)
    } else {
        elements = new Array(capacity)
    }

    function isEmpty() {
        return size === 0
    }

    function contains(element) {
        return indexOf(element) !== ELEMENT_NOT_FOUND
    }

    function indexOf(element) {
        for (let i = 0; i < array.length; i++) {
            if (elements[i] === element) {
                return i
            }
        }

        return ELEMENT_NOT_FOUND
    }

    const checkIndex = function (index) {
        if (index < 0 || index >= size) {
            throw new Error(`索引越界,允许范围 size: 0 - ${size-1} 当前索引: ${index}`)
        }
    }

    function get(index) {
        checkIndex(index)

        return elements[index]
    }

    function set(index, element) {
        checkIndex(index)

        const old = elements[index]
        elements[index] = element

        return old
    }

    function clear() {
        for (let i = 0; i < array.length; i++) {
            elements[i] = undefined
        }
        size = 0
    }

    function length() {
        return size
    }

    const ensureCapacity = function (capacity) {
        if (elements.length >= capacity) {
            return
        }

        console.log('开始扩容');

        const newElements = new Array(elements.length + (elements.length >> 1))

        for (let i = 0; i < size; i++) {
            newElements[i] = elements[i]
        }

        elements = newElements
    }

    function add(...values) {
        if (values.length > 1) {
            const [index, element] = values
            if (index < 0 || index > size) {
                throw new Error(`索引越界,允许范围 size: 0 - ${size-1} 当前索引: ${index}`)
            }
            ensureCapacity(size + 1)
            for (let i = size; i < index; i--) {
                elements[i] = elements[i - 1]
            }
            elements[size] = element
            size++
        } else {
            add(size, values[0])
        }
    }

    function remove(index) {
        checkIndex(index)
        const old = elements[index]
        for (let i = index; i < size; i++) {
            elements[i] = elements[i + 1]
        }
        size--
        elements[size] = null

        if (size === elements.length >> 1) {
            console.log('开始缩容');
            ensureCapacity(elements.length >> 1)
        }

        return old
    }

    function push(element) {
        add(element)
    }

    function pop() {
        return remove(size - 1)
    }

    function top() {
        return get(size - 1)
    }

    function toString() {
        let str = 'size:' + size + ' => ['
        for (let i = 0; i < size; i++) {
            if (i !== 0) {
                str += ' ,'
            }
            str += elements[i]
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
        push,
        pop,
        top,
        toString
    }
}

const stack = new ArrayStack()

stack.push(99)
stack.push(88)
stack.push(77)
stack.push(66)

while (!stack.isEmpty()) {
    console.log('出栈：', stack.pop());
}
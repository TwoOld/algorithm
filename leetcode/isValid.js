/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    const maps = {
        ')': '(',
        '}': '{',
        ']': '[',
    }
    const isEnd = v => !!maps[v]
    if (!s || s.length < 2 || isEnd(s[0])) return false
    const stack = []
    for (let i = 0; i < s.length; i++) {
        const curr = s[i];
        if (!isEnd(curr)) {
            stack.push(curr)
        } else {
            const start = stack.pop()
            if (maps[curr] !== start) {
                return false
            }
        }
    }

    return stack.length === 0
};
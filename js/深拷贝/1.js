// 深拷贝
function deepClone(o) {
    let obj = {}
    for (let k in o) {
        if (typeof o[k] !== 'object') {
            obj[k] = o[k]
        } else {
            obj[k] = deepClone(o[k])
        }
    }

    return obj
}
/* 判断是否为对象
 *
 * @param obj
 * @returns {boolean}
 */
const isObject = obj => {
    const isObject = Object.prototype.toString.call(obj) === '[object Object]'
    if (isObject) {
        return Object.keys(obj).length > 0
    }

    return isObject
}

/**
 * 判断是否为数组
 * @param arr
 * @returns {boolean}
 */
const isArray = arr => {
    const isArray = Object.prototype.toString.call(arr) === '[object Array]'
    if (isArray) {
        return arr.length > 0
    }

    return isArray
}

/**
 * 转换一下日期
 * @param dateStr
 *
 * @returns 月-日
 */
const getMonthDate = dateStr => {
    // 转换为年月日，2023-02-10
    const d = new Date(dateStr)

    let month = d.getMonth() + 1
    if (month < 10) {
        month = `0${month}`
    }
    const date = d.getDate()

    return `${month}-${date}`
}

export { isArray, isObject, getMonthDate }
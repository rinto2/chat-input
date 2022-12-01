/**
 * 获取元素对象
 * @param {String} id 
 * @returns element
 */
function getElement(id) {
    const el = document.querySelector(id)
    return el
}

export default getElement
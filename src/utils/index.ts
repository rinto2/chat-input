/**
 * 工具集 
 */

// 是否为Ie
// export const isIE = (): boolean => {
//     const y = !!window.ActiveXObject || 'ActiveXObject' in window
//     return y
// }

// 获取元素
export const getElement = (id: string): any => {
    const el = document.querySelector(id)
    return el
}

// 判断元素是否存在
export const checkElements = (id: string): boolean => {
    const el = getElement(id)
    if(!el) return false
    return true
}
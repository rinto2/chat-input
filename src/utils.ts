/**
 * 工具集 
 */

import { charts } from './lib/conts'

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

// 将字符串转换为html
export const paseDom = (htmlStr: string): Element | any => {
    const el = document.createElement('div')
    el.innerHTML = htmlStr
    return el.childNodes[0]
}

// blob转URL
export const blobToURL = (file: Blob): Promise<string | ArrayBuffer | null> => {
    return new Promise((resolve, reject) => {
        const reader = new FileReader()
        reader.readAsDataURL(file)
        reader.onload = () => {
            resolve(reader.result)
        }
    })
}

// 生成uuid
// export const uuid = (len: number, radix: number): string => {
//     const arr: Array<string> = charts.split('')
//     const uid = [], i
//     radix = radix || charts.length
    

// }
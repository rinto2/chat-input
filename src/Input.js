import Cursor from './lib/cursor'
import RowNode from './lib/row-node'


let input = null
let isEmpty = true

// 获取插入的行对象
function getRow(type, content) {
    const rowNode = new RowNode(type, content)
    return rowNode.row
}

// 设置
export const setInput = el => input = el

// 清空
export const reset = () => {
    input.innerHTML = ''
    insertEmpty()
}

// 插入空内容
export const insertEmpty = () => {

}

// 插入文本
export const insertText = text => {
    const cursor = Cursor()
    const rowNode = getRow('text', text)
    if(isEmpty) {
        input.innerHTML = ''
        input.appendChild(rowNode)
        rowNode.focus()
        cursor.setRangeToEnd(rowNode)
    } else {

    }

    isEmpty = false
}
// 插入图片
export const insertImage = src => {
    const cursor = Cursor()
    const rowNode = getRow('img', src)
    if(isEmpty) {
        input.innerHTML = ''
    }
}

// 插入节点
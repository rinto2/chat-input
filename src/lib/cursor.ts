/**
 * 光标操作
 */

class Cursor {
    element: Element | any
    selection: any
    range: any
    constructor(el: Element) {
        this.element = el
        this.selection = null
        this.range = this.getRange()
    }

    // 获取光标对象
    getRange() {
        this.selection = document.getSelection()
        return document.createRange()
    }
}

export default Cursor
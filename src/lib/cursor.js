// 光标方法

class Cursor {
    constructor(el) {
        this.el = el
        this.selection = null
        this.range = this.getRange()
    }

    // 获取光标
    getRange() {
        this.selection = document.getSelection()
        return document.createRange()
    }
}

export default Cursor
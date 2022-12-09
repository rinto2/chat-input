// 光标方法

class Cursor {
    constructor() {
        this.selection = null
        this.range = this.getRange()
    }

    // 获取光标
    getRange() {
        this.selection = document.getSelection()
        if(document.selection && document.selection.createRange) {
            return document.selection.createRange()
        } else if(window.getSelection) {
            return window.getSelection()
        }
    }
    // 光标插入到最后
    setRangeToEnd(el) {
        if(document.selection) {
            this.range.moveToElementText(el)
            this.range.collapse(false)
            this.range.select()
        } else if(window.getSelection) {
            if(window.selectAllChildren) {
                this.range = window.getSelection()
            }
            this.range.selectAllChildren(el)
            this.range.collapseToEnd()
        }

        this.getRange()
    }
}

export default () => new Cursor()
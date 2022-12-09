
import parseNode from '../utils/parseNode'

// 空行内容
const emptyNode = '<p data-row=""><br></p>'

/**
 * 创建插入行内容
 */
class RowNode {
    constructor(type, content) {
        this.type = type
        this.content = content
        this.row = this.createNode()
    }
    createNode() {
        const el = parseNode(emptyNode)
        if(this.type === 'text') {
            el.innerText = this.content
        }

        return el
    }
}

export default RowNode
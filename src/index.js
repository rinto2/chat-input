
import DefaultConfig from './lib/defaultConfig'
import getElement from './utils/getElement.js'
import { setInput ,insertText, insertEmpty } from './Input'

// event-emitter

class ChatInput {
    constructor(options) {
        this._config = this.#config(options)
        this.#instance()
    }
    // 合并用户配置
    #config(options) {
        if(typeof options === 'object') {
            return Object.assign(DefaultConfig, options)
        } else {
            return DefaultConfig
        }
    }
    // 创建实例
    #instance() {
        const { id, content } = this._config
        const el = getElement(id)
        if(!el) throw Error('请设置id')
        el.setAttribute('contenteditable', true)
        el.focus()
        // 保存输入框对象
        setInput(el)
        // 初始化插入内容
        if(content) {
            insertText(content)
        } else {
            insertEmpty()
        }
    }
}

export default options => new ChatInput(options)

import DefaultConfig from './lib/defaultConfig'
import getElement from './utils/getElement.js'
import Cursor from './lib/cursor'

// class ChatInput {
//     constructor(options) {
//         this.cursor = {}
//         this.config = Config(options)
//         this.instance()
//     }
//     // 创建实例
//     instance() {
//         const { id, content } = this.config
//         const el = getElement(id)
//         el.setAttribute('contenteditable', true)
//         el.focus()
//         this.cursor = new Cursor(el)
//         // this.insert({type: 'text'})
//     }
// }

// export default ChatInput

// event-emitter


class ChatInput {
    constructor(options) {
        this._config = this.#config(options)
        this.#instance()
        this.cursor = null
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
        if(el) {
            el.setAttribute('contenteditable', true)
            el.focus()
            this.cursor = new Cursor(el)
        }
    }
}

export default options => new ChatInput(options)
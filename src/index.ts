
import { Options, Insert } from './types/types'
import { Config } from './lib/config'
import { getElement } from './utils/index'
import Cursor from './lib/cursor'

class ChatInput {
    config: Options
    cursor: object
    constructor(options: Options) {
        this.cursor = {}
        this.config = Config(options)
        this.instance()
    }
    // 创建实例
    instance() {
        const { id, content } = this.config
        const el = getElement(id)
        el.setAttribute('contenteditable', true)
        el.focus()
        this.cursor = new Cursor(el)
        // this.insert({type: 'text'})
    }
}

export default ChatInput

// event-emitter
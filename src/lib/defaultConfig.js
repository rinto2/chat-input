
const atList = [
    {
        label: '所有人',
        type: 'all'
    }
]

export default {
    id: '$ChatInput',
    at: false, // 开启@
    atList: atList, // @列表
    insertImage: true, // 插入图片
    insertText: true, // 插入文字
    content: '', // 默认内容（暂时只能是文本）
    regx: '', // 正则
    regxColor: 'FF0000', // 正则color
}

function insertText() {
    console.log('text')
}


const fn = {
    'text': insertText
}

/**
 * 
 * @param {Element} el 插入内容的元素
 * @param {String} type 插入内容类别
 * @param {String} content 插入内容
 */

// text
// image
// empty
// node

export default function(el, type, content) {
    fn[type](el, content)
}
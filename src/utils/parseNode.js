// 将字符串html转为实体节点
export default function(htmlStr) {
    const el = document.createElement('div')
    el.innerHTML = htmlStr
    return el.childNodes[0]
}
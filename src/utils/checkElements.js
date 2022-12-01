
import getElement from './getElement'
function checkElements(id) {
    const el = getElement(id)
    if(!el) return false
    return true
}

export default checkElements
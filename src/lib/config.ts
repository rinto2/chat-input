/**
 * 配置
*/

import { Options } from '../types/types'
import { checkElements } from '../utils/index'

export const Config  = (args: Options) => {
    if(!args.id) throw('缺少根Id')
    if(!checkElements(args.id))throw('未查到相应的元素')
    return args
}
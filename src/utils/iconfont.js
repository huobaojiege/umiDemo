/*
 * @Author: your name
 * @Date: 2021-09-13 15:02:02
 * @LastEditTime: 2021-09-28 10:15:31
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \umiProject\src\utils\iconfont.js
 */
import { createFromIconfontCN } from '@ant-design/icons';
import iconfont from '@/iconfont/iconfont.js';

const Iconfont = createFromIconfontCN({
  scriptUrl: iconfont, // ε¨ iconfont.cn δΈηζ
});

export default Iconfont;

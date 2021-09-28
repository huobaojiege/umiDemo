/*
 * @Author: your name
 * @Date: 2021-09-03 15:20:57
 * @LastEditTime: 2021-09-14 10:51:29
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \umiProject\src\utils\constant.js
 */

const constant: any = {
  dev: {
    //统一接口请求地址
    requestUrl: 'http://192.168.6.48:8888',
  },
  test: {
    //统一接口请求地址
    requestUrl: 'https://building-lease-test.app.zqtong.com',
  },
  prod: {
    //统一接口请求地址
    requestUrl: 'https://api.eazylink.cn',
  },
};

export default constant[process.env.ENV];

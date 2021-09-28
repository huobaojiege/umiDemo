/**
 * request 网络请求工具
 * 更详细的 api 文档: https://github.com/umijs/umi-request
 */
import requestUmi, { extend } from 'umi-request';
import { notification, Modal } from 'antd';
import constant from './constant';

const codeMessage = {
  200: '服务器成功返回请求的数据。',
  201: '新建或修改数据成功。',
  202: '一个请求已经进入后台排队（异步任务）。',
  204: '删除数据成功。',
  400: '发出的请求有错误，服务器没有进行新建或修改数据的操作。',
  401: '用户没有权限（令牌、用户名、密码错误）。',
  403: '用户得到授权，但是访问是被禁止的。',
  404: '发出的请求针对的是不存在的记录，服务器没有进行操作。',
  406: '请求的格式不可得。',
  410: '请求的资源被永久删除，且不会再得到的。',
  422: '当创建一个对象时，发生一个验证错误。',
  500: '服务器发生错误，请检查服务器。',
  502: '网关错误。',
  503: '服务不可用，服务器暂时过载或维护。',
  504: '网关超时。',
};
/**
 * 异常处理程序
 */

const errorHandler = (error) => {
  const { response } = error;
  if (response && response.status) {
    if (response.status === 500) {
      Modal.error({
        title: '登录已过期',
        content: '很抱歉，登录已过期，请重新登录',
        okText: '重新登录',
        onOk: () => {
          sessionStorage.clear();
          localStorage.clear();
          window.location.reload();
        },
      });
    } else {
      const errorText = codeMessage[response.status] || response.statusText;
      const { status, url } = response;
      notification.error({
        message: errorText,
      });
    }
  } else if (!response) {
    notification.error({
      description: '您的网络发生异常，无法连接服务器',
      message: '网络异常',
    });
  }

  return response;
};

const errorDataHandler = (error) => {
  const response = error;
  if (response) {
    if (
      response.message == 'Token失效，请重新登录' ||
      response.msg == 'Token失效，请重新登录'
    ) {
      Modal.error({
        title: '登录已过期',
        content: '很抱歉，登录已过期，请重新登录',
        okText: '重新登录',
        onOk: () => {
          sessionStorage.clear();
          localStorage.clear();
          window.location.reload();
        },
      });
    } else {
      notification.error({
        message: response.msg,
      });
    }
  } else if (!response) {
    notification.error({
      description: '您的网络发生异常，无法连接服务器',
      message: '网络异常',
    });
  }
  return response.msg;
};
/**
 * 配置request请求时的默认参数
 */

// const request = extend({
//   errorHandler,
//   // 默认错误处理
//   credentials: 'include', // 默认请求是否带上cookie
// });

// function request(url, params) {
//   requestUmi(url, { ...params })
//     .then(function(response) {
//       return response;
//     })
//     .catch(function(error) {
//       return errorHandler(error);
//     });
// }

function request(url, params) {
  let requsetUrl = '';
  if (url.indexOf('http') === -1 && url.indexOf('https') === -1) {
    requsetUrl = `${constant.requestUrl}${url}`;
  } else {
    requsetUrl = `${url}`;
  }
  let reqOptions = {
    getResponse: true,
    headers: {},
  };

  return new Promise((resolve, reject) => {
    requestUmi(url, { ...reqOptions, ...params })
      .then(function (response) {
        if (response.response.status == 200) {
          if (response.data.status == 200 || response.data.code == 0) {
            resolve(response.data);
          } else {
            reject(errorDataHandler(response.data));
          }
        } else {
          throw response;
        }
      })
      .catch(function (error) {
        reject(errorHandler(error));
      });
  });
}

export default request;

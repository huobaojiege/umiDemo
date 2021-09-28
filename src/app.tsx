/*
 * @Author: your name
 * @Date: 2021-09-03 14:36:11
 * @LastEditTime: 2021-09-27 15:06:57
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \umiProject\src\app.tsx
 */

import React from 'react';
import {
  BasicLayoutProps,
  Settings as LayoutSettings,
} from '@ant-design/pro-layout';


export async function getInitialState() {
  return {
    ddddddddddd: 'ddddddddddd',
  };
}
export const layout = ({
  initialState,
}: {
  initialState: { settings?: LayoutSettings };
}): BasicLayoutProps => {
  return {
    // rightContentRender: () => <RightContent />,
    // footerRender: () => <Footer />,
    onPageChange: () => {
      //   const { currentUser } = initialState;
      //   const { location } = history;
      //   // 如果没有登录，重定向到 login
      //   if (!currentUser && location.pathname !== '/user/login') {
      //     history.push('/user/login');
      //   }
    },
    menuHeaderRender: false,
    ...initialState?.settings,
    menu: {
      // params: {
      //   userId:  initialState?.currentUser?.userid,
      // },
      // 每当 initialState?.currentUser?.userid 发生修改时重新执行 request 动态获取路由
      request: async (params, defaultMenuData) => {
        // console.log('>>>>>>>>>>++', params, defaultMenuData);
        return defaultMenuData;
        // initialState.currentUser 中包含了所有用户信息
      },
    },
  };
};

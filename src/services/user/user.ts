/*
 * @Author: your name
 * @Date: 2021-09-13 15:34:42
 * @LastEditTime: 2021-09-16 14:17:34
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \umiProject\src\api\user.ts
 */
import constant from '@/utils/constant';
// @ts-ignore
import request from '@/utils/request';
// @ts-ignore
import qs from 'qs';

/**
 * @description:登录
 * @param {any} data
 * @return {*}
 */

export const loginSystem = (data: any) => {
  return request<any>(`/sys/loginSystem`, {
    data,
    method: 'post',
  });
};

/**
 * @description:// 首页-获取企业列表
 * @param {any} data
 * @return {*}
 */

export const bindCompany = (params: any) => {
  return request<any>(
    `/api/systemSetting/tBuildingUserInvite/bindCompany?${qs.stringify(
      params,
    )}`,
    {
      method: 'get',
    },
  );
};

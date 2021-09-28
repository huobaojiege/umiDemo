/*
 * @Author: your name
 * @Date: 2021-09-24 13:39:43
 * @LastEditTime: 2021-09-24 14:06:56
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \umiProject\src\services\contract\lease.ts
 */
// @ts-ignore
import request from '@/utils/request';
// @ts-ignore
import qs from 'qs';

/**
 * @description:租赁合同获取列表
 * @param {any} data
 * @return {*}
 */

// export const loginSystem = (data: any) => {
//   return request<any>(`/sys/loginSystem`, {
//     data,
//     method: 'post',
//   });
// };

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
  
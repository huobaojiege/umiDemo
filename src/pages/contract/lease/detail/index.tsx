/*
 * @Author: your name
 * @Date: 2021-09-13 13:49:15
 * @LastEditTime: 2021-10-15 14:29:19
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \umiProject\src\pages\contract\lease\index.tsx
 */
import React, { FC } from 'react';

import { Table, Tag, Space } from 'antd';
import { history } from 'umi';

import styles from './index.less';
type LeasePageProps = {
  // user: IndexModelState;
  // dispatch: Dispatch;
  // onparantClick?: () => void;
};
const LeaseContract: FC<LeasePageProps> = (props) => {
  const aClick = () => {
    212;
  };
  return (
    <div className={styles.lease_div}>
      <h1>合同详情</h1>

      <a onClick={() => aClick()}>跳转详情</a>
    </div>
  );
};
export default LeaseContract;

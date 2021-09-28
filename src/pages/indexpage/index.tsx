/*
 * @Author: your name
 * @Date: 2021-09-03 13:58:00
 * @LastEditTime: 2021-09-14 10:30:33
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \umiProject\src\pages\index.tsx
 */
import React, { FC } from 'react';
import styles from './index.less';
import { Button } from 'antd';
import { IndexModelState, ConnectProps, Loading, connect, Dispatch } from 'umi';
import IndexBut from './block/indexBut';

interface PageProps extends ConnectProps {
  user: IndexModelState;
  dispatch: Dispatch;
}

const IndexPage: FC<PageProps> = (props) => {
  function onparantClick() {
    console.log('??????+++');
  }
  return (
    <div>
      <h1 className={styles.title}>首页</h1>
      <IndexBut/>
    </div>
  );
};

export default connect(({ user }: { user: IndexModelState }) => ({
  user,
}))(IndexPage);

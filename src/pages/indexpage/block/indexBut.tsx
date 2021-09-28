/*
 * @Author: your name
 * @Date: 2021-09-09 19:29:30
 * @LastEditTime: 2021-09-15 09:03:19
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \umiProject\src\pages\indexpage\block\indexBut.tsx
 */
import React from 'react';
import styles from './indexBut.less';
import { Button } from 'antd';
import { IndexModelState, connect, Dispatch } from 'umi';

export type IndexButProps = {
  user: IndexModelState;
  dispatch: Dispatch;
  onparantClick?: () => void;
};

const IndexBut: React.FC<IndexButProps> = (props) => {
  const promaryClick = () => {
    // props.onparantClick?.()
    props?.onparantClick?.();
    // props.onparantClick!()
    // props!.onparantClick();
    // props.onparantClick && props.onparantClick();
  };
  function consoleBUt() {}
  return (
    <div>
      <h1 className={styles.title}>组件</h1>
      <Button
        type="primary"
        onClick={() => {
          promaryClick();
        }}
      >
        点击1
      </Button>
      <Button
        onClick={() => {
          props?.onparantClick?.();
        }}
      >
        注册2
      </Button>
    </div>
  );
};

IndexBut.defaultProps = {
  onparantClick: () => {},
};

export default connect(({ user }: { user: IndexModelState }) => ({
  user,
}))(IndexBut);

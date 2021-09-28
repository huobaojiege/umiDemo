/*
 * @Author: your name
 * @Date: 2021-09-03 13:58:00
 * @LastEditTime: 2021-09-27 14:29:50
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \umiProject\src\pages\index.tsx
 */
import { useState, useEffect } from 'react';
import styles from './index.less';
import { Button } from 'antd';
// import Iconfont from '@/utils/iconfont';
import { useToggle, useMount } from 'ahooks';

export default function IndexPage() {
  const [nlist, setNlist] = useState<any[]>();
  useMount(() => {
    // 初始化
    console.log('>>>>>组件初始化');
  });
  useEffect(() => {
    console.log('>>>>>组件2222222初始化222222222');
  }, [nlist]);
  console.log('>>>>>>>+++pppppppp', nlist);
  const consoleBUt = () => {
    let ko = [{ ddwd: 'qwwq' }];
    setNlist(ko);
  };
  return (
    <div>
      <h1 className={styles.title}>
        个人ooiorpr中心1
        <Button onClick={() => consoleBUt()}>点击</Button>
      </h1>
    </div>
  );
}

/*
 * @Author: your name
 * @Date: 2021-09-03 13:58:00
 * @LastEditTime: 2021-10-22 14:00:20
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \umiProject\src\pages\index.tsx
 */
import { useState, useEffect } from 'react';
import styles from './index.less';
import { Button } from 'antd';
import { history } from 'umi';
// import Iconfont from '@/utils/iconfont';
import { useToggle, useMount } from 'ahooks';
let ass = [
  { name: '1231', age: 12 },
  {
    name: '12dsd31',
    age: 125,
  },
];

export default function IndexPage() {
  const [nlist, setNlist] = useState<any[]>();
  useMount(() => {
    // 初始化
  });
  useEffect(() => {}, [nlist]);
  const consoleBUt = () => {
    let ko = [{ ddwd: 'qwwq' }];
    setNlist(ko);
  };
  const aClick = () => {
    history.push('/contract/leaseContract/detail');
  };
  const returnListView = () => {
    let viewList: any[] = [];
    ass.map((item, index) => {
      viewList.push(
        <div>
          <span>{item.name}</span>
        </div>,
      );
    });
    return viewList;
  };
  return (
    <div>
      <h1 className={styles.title}>
        个人ooiorpr中心1
        <Button onClick={() => consoleBUt()}>点击</Button>
        <a onClick={() => aClick()}>跳转详情</a>
        {/* {returnListView()} */}
        {ass.map((item, index) => (
          <div>
            <span>{item.name}</span>
          </div>
        ))}
      </h1>
    </div>
  );
}

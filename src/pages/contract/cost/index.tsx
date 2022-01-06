import React, { FC } from 'react';
import { useRequest } from 'ahooks';
import { List, Pagination } from 'antd';
import Mock from 'mockjs';

type CostPageProps = {
  // user: IndexModelState;
  // dispatch: Dispatch;
  // onparantClick?: () => void;
};
type UserListItem = {
  id: string;
  name: string;
  gender: 'male' | 'female';
  email: string;
  disabled: boolean;
};
const userList = (current: number, pageSize: number) =>
  Mock.mock({
    total: 55,
    [`list|${pageSize}`]: [
      {
        id: '@guid',
        name: '@cname',
        'gender|1': ['male', 'female'],
        email: '@email',
        disabled: false,
      },
    ],
  });

async function getUserList(params: {
  current: number;
  pageSize: number;
  gender?: string;
}): Promise<{ total: number; list: UserListItem[] }> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(userList(params.current, params.pageSize));
    }, 1000);
  });
}

const LeaseContract: FC<CostPageProps> = (props) => {
  const { data, loading, pagination } = useRequest(
    ({ current, pageSize }) => getUserList({ current, pageSize }),
    {
      paginated: true,
    },
  );
  return (
    <div>
      <h1>成本1同</h1>
      <div>
        {loading ? (
          <p>loading</p>
        ) : (
          <ul>
            {data?.list?.map((item) => (
              <li key={item.email}>
                {item.name} - {item.email}
              </li>
            ))}
          </ul>
        )}
        <Pagination
          {...(pagination as any)}
          showQuickJumper
          showSizeChanger
          onShowSizeChange={pagination.onChange}
          style={{ marginTop: 16, textAlign: 'right' }}
        />
      </div>
    </div>
  );
};
export default LeaseContract;

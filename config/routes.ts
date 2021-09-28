/*
 * @Author: your name
 * @Date: 2021-09-03 14:11:41
 * @LastEditTime: 2021-09-14 11:54:10
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \umiProject\config\router.ts
 */
export default [
  //用户模板
  {
    path: '/user',
    layout: false,
    routes: [
      { path: '/user', redirect: '/user/login' },
      {
        path: '/user/login',
        component: '@/pages/user/login/index',
      },
      {
        component: './404',
      },
    ],
  },
  //
  {
    path: '/',
    redirect: '/indexpage',
  },
  { path: '/indexpage', name: '首页', component: '@/pages/indexpage/index' },
  { path: '/personal', name: '个人中心', component: '@/pages/personal/index' },
  {
    path: '/contract',
    name: '合同',
    routes: [
      { path: '/contract', redirect: '/contract/leaseContract' },
      {
        path: '/contract/leaseContract',
        name: '租赁合同',
        component: '@/pages/contract/lease/index',
      },
      {
        path: '/contract/costContract',
        name: '成本合同',
        component: '@/pages/contract/cost/index',
      },
    ],
  },
  {
    component: './404',
  },
  // { path: '/test', name: '测试', component: '@/pages/test/index' },
];

/*
 * @Author: your name
 * @Date: 2021-09-03 14:17:07
 * @LastEditTime: 2021-09-27 14:52:40
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \umiProject\config\config.ts
 */
import { defineConfig } from 'umi';
import routes from './routes';
import defaultSettings from './defaultSettings';
import proxy from './proxy';

export default defineConfig({
  devServer: {
    port: 9000,
  },

  // dynamicImport: {
  //   // loading: '@/Loading',
  // },
  // 配置 @ant-design/pro-layout
  layout: {
    // 支持任何不需要 dom 的
    // https://procomponents.ant.design/components/layout#prolayout
    locale: true,
    siderWidth: 208,
    ...defaultSettings,
  },
  routes: routes,
  define: {
    // 添加这个自定义的环境变量
    'process.env.ENV': process.env.ENV, // * 本地开发环境：dev，测试服：test，正式服：pro
  },
  nodeModulesTransform: {
    type: 'none',
  },
  targets: {
    ie: 11,
  },
  hash: true,
  history: {
    type: 'browser',
  },
  fastRefresh: {},

  //服务代理
  // proxy: proxy[process.env.ENV || 'dev'],
  // mfsu: { production: { output: '.mfsu-production' } },

  // 部署
  // exportStatic: {
  //   htmlSuffix: true,
  //   dynamicRoot: true,
  // },
  ssr: {},
});

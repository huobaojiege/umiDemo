/*
 * @Author: your name
 * @Date: 2021-09-09 18:48:41
 * @LastEditTime: 2021-10-20 09:25:36
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \umiProject\src\pages\models\user.ts
 */
import { Effect, ImmerReducer, Reducer, Subscription } from 'umi';

export interface IndexModelState {
  name: string;
}

export interface IndexModelType {
  namespace: 'user';
  state: IndexModelState;
  effects: {
    query: Effect;
  };
  reducers: {
    save: Reducer<IndexModelState>;
    // 启用 immer 之后
    // save: ImmerReducer<IndexModelState>;
  };
  subscriptions: { setup: Subscription };
}

const IndexModel: IndexModelType = {
  namespace: 'user',

  state: {
    name: '77777777777',
  },

  effects: {
    *query({ payload = {} }, { call, put, select }) {},
  },
  reducers: {
    save(state, action) {
      return {
        ...state,
        ...action.payload,
      };
    },
    // 启用 immer 之后
    // save(state, action) {
    //   state.name = action.payload;
    // },
  },
  subscriptions: {
    setup({ dispatch, history }) {
      return history.listen(({ pathname }) => {
        // debugger
        // if (pathname === '/') {
        //   dispatch({
        //     type: 'query',
        //   });
        // }
      });
    },
  },
};

export default IndexModel;

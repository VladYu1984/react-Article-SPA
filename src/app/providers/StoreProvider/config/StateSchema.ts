import { CounterSchema } from 'entities/Counter';
import { UserSchema } from 'entities/User';
import { LoginSchema } from 'features/AuthByUsername';
import {
    AnyAction,
    EnhancedStore,
    Reducer,
    ReducersMapObject,
} from '@reduxjs/toolkit';
import { CombinedState } from 'redux';

import { AxiosInstance } from 'axios';
import { ArticleDetailsSchema } from 'entities/Article';
import {
    ArticleDetailsPageSchema,
} from 'pages/ArticleDetailsPage';
import { AddCommentFormSchema } from 'features/AddCommentForm';
import { articlesPageSchema } from 'pages/ArticlesPage/model/types/articlesPageSchema';
import { UISchema } from 'features/UI';
import { rtkApi } from 'shared/api/rtkApi';
import { ProfileSchema } from 'features/editableProfileCard';

export interface StateSchema {
  counter: CounterSchema;
  user: UserSchema;
  ui: UISchema;
  [rtkApi.reducerPath]: ReturnType<typeof rtkApi.reducer>;

  // Async reducers
  loginForm?: LoginSchema;
  profile?: ProfileSchema;
  articleDetails?: ArticleDetailsSchema;
  articleDetailsPage?: ArticleDetailsPageSchema;
  addCommentForm?: AddCommentFormSchema;
  articlesPage?: articlesPageSchema;
}

export type StateSchemaKey = keyof StateSchema;
export type MountedReducers = OptionalRecord<StateSchemaKey, boolean>;

export interface ReducerManager {
  getReducerMap: () => ReducersMapObject<StateSchema>;
  reduce: (state: StateSchema, action: AnyAction) => CombinedState<StateSchema>;
  add: (key: StateSchemaKey, reducer: Reducer) => void;
  remove: (key: StateSchemaKey) => void;
  getMountedReducers: () => MountedReducers;
}

export interface ReduxStoreWithManager extends EnhancedStore<StateSchema> {
  reducerManager: ReducerManager;
}

export interface ThunkExtraArg {
  api: AxiosInstance;
}

export interface ThunkConfig<T> {
  rejectValue: T;
  extra: ThunkExtraArg;
  state: StateSchema;
}

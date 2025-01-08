import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { ArticleSortField, ArticleType } from 'entities/Article';
import { SortOrder } from 'shared/types';
import {
    getArticlesPageInited,
    getArticlesPageSearch,
} from '../../selectors/articlesPageSelectors';
import { articlesPageAction } from '../../slice/articlesPageSlice';
import { fetchArticlesList } from '../fetchArticlesList/fetchArticlesList';

export const initArticlesPage = createAsyncThunk<
  void,
  URLSearchParams,
  ThunkConfig<string>
>('articlesPage/initArticlesPage', async (searchParams, thunkApi) => {
    const { getState, dispatch } = thunkApi;
    const inited = getArticlesPageInited(getState());

    if (!inited) {
        const searchFromURL = searchParams.get('search');
        const sortFromURL = searchParams.get('sort') as ArticleSortField;
        const orderFromURL = searchParams.get('order') as SortOrder;
        const typeFromURL = searchParams.get('type') as ArticleType;

        if (orderFromURL) {
            dispatch(articlesPageAction.setOrder(orderFromURL));
        }

        if (sortFromURL) {
            dispatch(articlesPageAction.setSort(sortFromURL));
        }

        if (searchFromURL) {
            dispatch(articlesPageAction.setSearch(searchFromURL));
        }

        if (typeFromURL) {
            dispatch(articlesPageAction.setType(typeFromURL));
        }

        dispatch(articlesPageAction.initState());
        dispatch(fetchArticlesList({}));
    }
});

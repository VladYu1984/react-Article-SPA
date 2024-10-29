import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { User, userActions } from 'entities/User';
import { USER_LOCALSTORAGE_KEY } from 'shared/const/localStorage';
import { ThunkConfig } from 'app/providers/StoreProvider';

interface LoginByUsernameProps {
    username: string;
    password: string;
}

export const loginByUsername = createAsyncThunk<
    User,
    LoginByUsernameProps,
    ThunkConfig<string>
>(
    'login/loginByUsername',
    async (authData, thunkApi) => {
        const { extra, dispatch, rejectWithValue } = thunkApi;

        try {
            const res = await extra.api.post<User>('/login', authData);

            if (!res.data) {
                throw new Error();
            }

            localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(res.data));
            dispatch(userActions.setAuthData(res.data));
            return res.data;
        } catch (e) {
            return rejectWithValue('error');
        }
    },
);

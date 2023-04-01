import axios from 'axios';
import { UserActions } from 'entities/User';
import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk';
import { LoginByUsername } from './LoginByUsername';

jest.mock('axios');
const mockedAxios = jest.mocked(axios, true);

describe('LoginByUsername', () => {
    test('success login', async () => {
        const userValue = { id: 1, username: '123' };
        mockedAxios.post.mockReturnValue(Promise.resolve({ data: userValue }));
        const thunk = new TestAsyncThunk(LoginByUsername);
        const result = await thunk.call({ username: 'admin', password: '123' });

        expect(thunk.dispatch).toHaveBeenCalledWith(UserActions.setAuthData(userValue));
        expect(thunk.dispatch).toHaveBeenCalledTimes(3);
        expect(mockedAxios.post).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('fulfilled');
        expect(result.payload).toEqual(userValue);
    });

    test('bad login', async () => {
        mockedAxios.post.mockReturnValue(Promise.resolve({ status: 403 }));
        const thunk = new TestAsyncThunk(LoginByUsername);
        const result = await thunk.call({ username: 'admin', password: '123' });

        expect(mockedAxios.post).toHaveBeenCalled();
        expect(thunk.dispatch).toHaveBeenCalledTimes(2);
        expect(result.meta.requestStatus).toBe('rejected');
        expect(result.payload).toBe('Auth error');
    });
});

import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import { getLoginError } from './getLoginError';

const errorValue = 'this is error';

describe('getLoginError', () => {
    test(`Getter returns correct value: ${errorValue}`, () => {
        const state: DeepPartial<StateSchema> = {
            loginForm: {
                error: errorValue,
            },
        };
        expect(getLoginError(state as StateSchema)).toEqual(errorValue);
    });
    test('Should work without initial value', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getLoginError(state as StateSchema)).toEqual(undefined);
    });
});

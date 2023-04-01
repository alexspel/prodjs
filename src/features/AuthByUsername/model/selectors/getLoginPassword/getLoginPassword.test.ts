import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import { getLoginPassword } from './getLoginPassword';

const someValue = Date.now().toString();
describe('getLoginPassword', () => {
    test(`Getter returns correct value: ${someValue}`, () => {
        const state: DeepPartial<StateSchema> = {
            loginForm: {
                password: someValue,
            },
        };
        expect(getLoginPassword(state as StateSchema)).toEqual(someValue);
    });
    test('Should work without initial value', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getLoginPassword(state as StateSchema)).toEqual('');
    });
});

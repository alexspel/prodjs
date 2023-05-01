import { StateSchema } from 'app/providers/StoreProvider';
import { getLoginUsername } from './getLoginUsername';

const someValue = Date.now().toString();

describe('getLoginUsername', () => {
    test(`Getter returns correct value: ${someValue}`, () => {
        const state: DeepPartial<StateSchema> = {
            loginForm: {
                username: someValue,
            },
        };
        expect(getLoginUsername(state as StateSchema)).toEqual(someValue);
    });
    test('Should work without initial value', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getLoginUsername(state as StateSchema)).toEqual('');
    });
});

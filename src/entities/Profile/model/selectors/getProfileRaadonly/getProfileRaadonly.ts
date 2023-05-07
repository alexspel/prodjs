import { StateSchema } from 'app/providers/StoreProvider';

export const getProfileRaadonly = (state: StateSchema) => state.profile?.readonly || false;

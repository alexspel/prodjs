import { DeepPartial } from '@reduxjs/toolkit';
import { ReactNode } from 'react';
import { Provider } from 'react-redux';
import { createAppStore, StateSchema } from '..';

interface StoreProviderProps {
    children?: ReactNode;
    initialState?: DeepPartial<StateSchema>;
}

const StoreProvider = (props: StoreProviderProps) => {
    const {
        children,
        initialState,
    } = props;

    const store = createAppStore(initialState as StateSchema);

    return (
        <Provider store={store}>{children}</Provider>
    );
};

export default StoreProvider;

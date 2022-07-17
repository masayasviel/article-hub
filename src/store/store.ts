import { configureStore, createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit'

import { snackbarType } from '@interfaces/global.interface';

/** スナックバーの状態 */
type SnackbarStateType = {
    isOpen: boolean;
    alertType: snackbarType;
    message?: string;
};

export interface RootStateType {
    snackbar: SnackbarStateType;
}

const initialState: SnackbarStateType = {
    isOpen: false,
    alertType: 'success',
};

export const snackbarSlice = createSlice({
    name: "snackbar",
    initialState,
    reducers: {
        open(state, action: PayloadAction<{ alertType: snackbarType, message?: string }>) {
            state.isOpen = true;
            state.alertType = action.payload.alertType;
            state.message = action.payload.message;
            setTimeout(() => {
                store.dispatch(snackbarSlice.actions.close());
            }, 1500);
        },
        close(state) {
            state.isOpen = false;
            state.message = undefined;
        }
    },
});

export const store = configureStore({
    reducer: {
        snackbar: snackbarSlice.reducer,
    },
});

import { snackbarType } from '@interfaces/global.interface';
import { store, snackbarSlice } from '@store/store';

export function openSnackbar(alertType: snackbarType, message?: string) {
    store.dispatch(snackbarSlice.actions.open({ alertType, message }));
}

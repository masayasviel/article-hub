import Alert from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';

/** propsの型 */
interface PropType {
    /** スナックバーを開くかどうか */
    open: boolean;
    /** アラートの種類 */
    alertType: 'error' | 'warning' | 'info' | 'success';
    /** スナックバーに表示するメッセージ */
    message?: string;
}

export const OpenSnackBar = ({ open, alertType, message }: PropType) => {
    return (
        <Snackbar
            anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'center',
            }}
            open={open}
            autoHideDuration={1}
            key="successSnackBar"
        >
            <Alert severity={alertType}>{ message ?? alertType }</Alert>
        </Snackbar>
    );
};


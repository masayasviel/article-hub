import { ReactElement } from 'react'
import { useSelector } from 'react-redux';
import Container from '@mui/material/Container';

import { OpenSnackBar } from '@atom/snackbar';
import { RootStateType } from '@store/store';

type LayoutProps = Required<{
    readonly children: ReactElement
}>

const Layout = ({ children }: LayoutProps) => {
    const selector = useSelector((state: RootStateType) => state.snackbar);
    return (
        <>
            <Container maxWidth="lg" component="main">
                {children}
            </Container>
            <OpenSnackBar
                open={selector.isOpen}
                alertType={selector.alertType}
                message={selector.message}
            ></OpenSnackBar>
        </>
    );
};

export default Layout;

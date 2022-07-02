import Link from 'next/link'
import {AppBar,Box,Toolbar,Typography,Button} from '@mui/material';

/**
 * @returns 共通ヘッダー
 */
const Header = () => {
    return (
        <Box sx={{flexGrow: 1}}>
            <AppBar position="static">
                <Toolbar>
                    {/* 見出し */}
                    <Typography variant="h4" component="div" sx={{flexGrow: 1}}>
                        article-hub
                    </Typography>
                    {/* ボタン */}
                    <Link href="http://localhost:3000/article/8" passHref>
                        <Button color="inherit">Logout</Button>
                    </Link>
                </Toolbar>
            </AppBar>
        </Box>
    );
};
export default Header;

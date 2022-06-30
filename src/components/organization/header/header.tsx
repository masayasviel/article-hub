import Link from 'next/link'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

/**
 * @returns 共通ヘッダー
 */
const Header = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    {/* 見出し */}
                    <Typography variant="h4" component="div" sx={{ flexGrow: 1 }}>
                    article-hub
                    </Typography>
                    {/* ボタン */}
                    <Link href="http://localhost:3000/article/create" passHref>
                        <Button color="inherit">Logout</Button>
                    </Link>
                </Toolbar>
            </AppBar>
        </Box>
    );
};
export default Header;

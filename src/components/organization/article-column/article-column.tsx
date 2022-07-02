import { Card, CardContent, Typography, Stack, Divider, CardActionArea } from '@mui/material';

interface ArticleColumnProps {
    title: string;
    author: string;
}

const ArticleColumn = ({ title, author }: ArticleColumnProps) => {
    return (

        <Card sx={{ minWidth: 275 }}>
            <CardActionArea>
                <Stack
                    direction="row"
                    divider={<Divider orientation="vertical" flexItem />}
                >
                    <CardContent>
                        <Typography variant="h5" component="div">
                            {title}
                        </Typography>
                        <Typography sx={{ mb: 1.5 }} color="text.secondary">
                            {author}
                        </Typography>
                    </CardContent>
                </Stack>
            </CardActionArea>
        </Card>

    )
}

export default ArticleColumn;


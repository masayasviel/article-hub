import { Card, CardContent, Typography, CardActions, Button, Stack, Divider } from "@mui/material";

interface ArticleColumnProps {
    title: string;
    author: string;
}

const ArticleColumn = ({title,author}: ArticleColumnProps) => {
    

    return (
        <>

            <Card sx={{ minWidth: 275 }}>
                <Stack
                    direction="row"
                    divider={<Divider orientation="vertical" flexItem />}
                    spacing={2}

                >
                    <CardActions>
                        <Button size="small">emoji</Button>
                    </CardActions>
                    <CardContent>
                        <Typography variant="h5" component="div">
                            {title}
                        </Typography>
                        <Stack direction="row">
                            <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                {author}
                            </Typography>
                        </Stack>
                    </CardContent>
                </Stack>
            </Card>



        </>
    )
}

export default ArticleColumn;


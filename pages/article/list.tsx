import type { NextPage } from 'next';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import ArticleColumn from '@organization/article-column/article-column';
import { Container } from '@mui/system';

const ArticleList: NextPage = () => {
    const testData = [
        { author: "yamada", title: "dockerについて" },
        { author: "hanako", title: "next.js+typesciptでいろいろ" },
        { author: "taroooou", title: "浮動小数点と固定小数点" }
    ]
    return (
        <Container maxWidth="lg">
            <h1>Article List</h1>
            <Stack direction="row" justifyContent="flex-end">
                <Button>記事作成</Button>
            </Stack>
            <Stack spacing={5} margin={3}>
                {testData.map((item, index) => {
                    return (
                        <ArticleColumn key={index} title={item.title} author={item.author} />
                    )
                })}
            </Stack>
        </Container>
    )
}

export default ArticleList;

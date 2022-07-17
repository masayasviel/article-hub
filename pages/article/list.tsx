import type { NextPage } from 'next';
import Link from 'next/link'
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

import ArticleColumn from '@organization/article-column/article-column';

const ArticleList: NextPage = () => {
    const testData = [
        { author: "yamada", title: "dockerについて" },
        { author: "hanako", title: "next.js+typesciptでいろいろ" },
        { author: "taroooou", title: "浮動小数点と固定小数点" }
    ]
    return (
        <>
            <h1>Article List</h1>
            <Stack direction="row" justifyContent="flex-end">
                <Link href="/article/create" passHref>
                    <Button>記事作成</Button>
                </Link>
            </Stack>
            <Stack spacing={5} margin={3}>
                {testData.map((item, index) => {
                    return (
                        <ArticleColumn key={index} title={item.title} author={item.author} />
                    )
                })}
            </Stack>
        </>
    )
}

export default ArticleList;

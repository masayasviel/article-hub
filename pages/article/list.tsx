import type { NextPage } from 'next';
import Link from 'next/link'
import MUiLink from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

import ArticleColumn from '@organization/article-column/article-column';
import { useEffect, useState } from 'react';
import { listRequest } from '@src/services/article.service';
import { ListArticleResponseType } from '@src/interfaces/article.interface';
import { openSnackbar } from '@src/services/global.service';
import { useRouter } from 'next/router';

const ArticleList: NextPage = () => {
    const [data, setData] = useState<ListArticleResponseType[]>([]);
    const router = useRouter();
    
    useEffect(() => {
        listRequest().then((res) => {
            setData(res.data);
        }).catch(() => {
            openSnackbar('error');
        });
    }, []);

    return (
        <>
            <h1>Article List</h1>
            <Stack direction="row" justifyContent="flex-end">
                <Link href="/article/create" passHref>
                    <Button>記事作成</Button>
                </Link>
            </Stack>
            <Stack spacing={5} margin={3}>
                {data.map((item, index) => {
                    return (
                        <MUiLink key={index} href={`/article/${item.id}`}>
                            <ArticleColumn
                                title={item.title}
                                author={item.user}
                            />
                        </MUiLink>
                    )
                })}
            </Stack>
        </>
    )
}

export default ArticleList;

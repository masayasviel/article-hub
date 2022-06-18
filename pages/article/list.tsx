import { useState } from 'react';
import type { NextPage } from 'next';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import ArticleColumn from '@organization/article-column/article-column';
import { Box, Container } from '@mui/system';


// style={{align-items:'flex-end', display:'flex', justify-content:'flex-end'}}
const ArticleList: NextPage = () => {
    const testData = [
        { author: "yamada", title: "dockerについて" },
        { author: "hanako", title: "next.js+typesciptでいろいろ" },
        { author: "taroooou", title: "浮動小数点と固定小数点" }
    ]
    const rightStyles ={
        display: 'flex',
        aliginItems: 'flex-end',
        justifyContent: 'flex-end'
    }
    return (
        <>
            <Container maxWidth="lg">
                <h1>Article List</h1>
                <Container style={rightStyles}>
                    <Button>記事作成</Button>
                </Container>
                <Stack spacing={5} margin={3}>
                    {testData.map((item, index) => {
                        return (
                            <ArticleColumn key={index} title={item.title} author={item.author} />
                        )
                    })}
                </Stack>
            </Container>
        </>
    )
}

export default ArticleList;

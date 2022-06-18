import { useState } from 'react';
import type { NextPage } from 'next';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import ArticleColumn from '@organization/article-column/article-column';

const testData = [
    {author:"いなくん",title:"dockerについて"},
    {author:"ぞのりょー",title:"next.js+typesciptでいろいろ"},
    {author:"masaya",title:"希望者がいればって感じです"}
]

const ArticleList: NextPage = () => {
    const [count, setCount] = useState(0)
    const handleChoice = () => {
        setCount(count + 1);
        incNumber();
    }

    return(
        <>
            <p>あーてぃくるりすと</p>
            <ArticleColumn  ArticleColumnProps={testData[]}/>
        

        </>
    )
}

export default ArticleList;

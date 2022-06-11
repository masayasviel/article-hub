import { useState } from 'react';
import type { NextPage } from 'next';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

import WritingForm from '@organization/writing-form/writing-form';
import { createRequest } from '@services/article-service';

/** 記事登録ページ */
const CreatePage: NextPage = () => {
    // --- state ---
    const [ inputValues, setInputValues ] = useState({ title: '', content: '' });
    const [ isValid, setIsValid ] = useState(false);

    // --- envent handler ---

    /** 記事登録 */
    const onClickRegisterButton = () => {
        const reqponse = createRequest(inputValues);
        console.log(reqponse);
    };

    /** 執筆キャンセル */
    const onClickCancelButton = () => {
        console.log('canceled');
    };

    return (
        <>
            <h2>記事執筆ページ</h2>
            <Stack spacing={2} direction="column" justifyContent="flex-start">
                <WritingForm setState={setInputValues} setValid={setIsValid}></WritingForm>
                <Stack spacing={2} direction="row" justifyContent="flex-end" alignItems="center">
                    <Button variant="outlined" onClick={onClickCancelButton}>キャンセル</Button>
                    <Button variant="contained" disabled={!isValid} onClick={onClickRegisterButton}>投稿</Button>
                </Stack>
            </Stack>
        </>
    );
}

export default CreatePage;

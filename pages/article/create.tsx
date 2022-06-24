import { useState } from 'react';
import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { Container } from '@mui/system';

import WritingForm from '@organization/writing-form/writing-form';
import { createRequest } from '@services/article.service';

/** 記事登録ページ */
const CreatePage: NextPage = () => {
    // --- state ---
    const [ inputValues, setInputValues ] = useState({ title: '', content: '' });
    const [ isValid, setIsValid ] = useState(false);
    const [ isSnackbarOpen, setIsSnackbarOpen ] = useState(false);
    const router = useRouter();

    // --- private method ---

    /** 一覧へ遷移 */
    const _navigateList = () => {
        setIsSnackbarOpen(true);
        router.push('/article/list');
    };

    // --- event handler ---

    /** 記事登録 */
    const onClickRegisterButton = () => {
        const reqponse = createRequest(inputValues);
        _navigateList();
    };

    /** 執筆キャンセル */
    const onClickCancelButton = () => {
        _navigateList();
    };

    return (
        <Container maxWidth="lg">
            <h2>記事執筆ページ</h2>
            <Stack spacing={2} direction="column" justifyContent="flex-start">
                <Stack spacing={2} direction="row" justifyContent="flex-end" alignItems="center">
                    <Button variant="outlined" onClick={onClickCancelButton}>キャンセル</Button>
                    <Button variant="contained" disabled={!isValid} onClick={onClickRegisterButton}>投稿</Button>
                </Stack>
                <WritingForm setState={setInputValues} setValid={setIsValid}></WritingForm>
            </Stack>
        </Container>
    );
}

export default CreatePage;

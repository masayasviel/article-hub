import { useState } from 'react';
import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

import WritingForm from '@organization/writing-form/writing-form';
import { createRequest } from '@services/article.service';
import {openSnackbar} from "@services/global.service";

/** 記事登録ページ */
const UpdatePage: NextPage = () => {
    // --- state ---
    const [ inputValues, setInputValues ] = useState({ title: '', content: '' });
    const [ isValid, setIsValid ] = useState(false);
    const router = useRouter();
    const { id } = router.query;

    // --- event handler ---

    /** 記事更新 */
    const onClickUpdateButton = () => {
        openSnackbar('success');
        router.push('/article/list').then();
    };

    /** 執筆キャンセル */
    const onClickCancelButton = () => {
        router.push(`/article/${id}`).then();
    };

    return (
        <>
            <h2>記事執筆ページ</h2>
            <Stack spacing={2} direction="column" justifyContent="flex-start">
                <Stack spacing={2} direction="row" justifyContent="flex-end" alignItems="center">
                    <Button variant="outlined" onClick={onClickCancelButton}>キャンセル</Button>
                    <Button variant="contained" disabled={!isValid} onClick={onClickUpdateButton}>更新</Button>
                </Stack>
                <WritingForm setState={setInputValues} setValid={setIsValid}></WritingForm>
            </Stack>
        </>
    );
}

export default UpdatePage;

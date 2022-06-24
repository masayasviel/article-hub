import { Dispatch, SetStateAction, useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';

import MultilineForm from '@atom/multiline-form';
import RequiredOneLineForm from '@atom/required-one-line-form/required-one-line-form';
import MarkdownDisplay from "@atom/markdown-display";

import styles from './writing-form.module.css';

/** propsの型 */
interface PropType {
    /** タイトル */
    propTitle?: string;
    /** 記事の中身 */
    propContent?: string;
    /** 親のディスパッチャー(state) */
    setState: Dispatch<SetStateAction<{
        title: string;
        content: string;
    }>>;
    /** 親のディスパッチャー(valid) */
    setValid: Dispatch<SetStateAction<boolean>>;
}

/** 執筆フォーム */
const WritingForm = ({ propTitle, propContent, setState, setValid }: PropType) => {
    // --- state ---
    const [inputTitle, setTitle] = useState({ input: propTitle, valid: false });
    const [inputContent, setContent] = useState(propContent);

    // --- effect ---
    useEffect(() => {
        setState({
            title: inputTitle.input ?? '',
            content: inputContent ?? ''
        });
        setValid(inputTitle.valid);
    }, [inputTitle, inputContent]);

    return (
        <Stack direction="column" spacing={2.5}>
            <Stack justifyContent="center" alignItems="center">
                <div className={styles.commonWidth}>
                    <RequiredOneLineForm initialValue={propTitle} setState={setTitle}></RequiredOneLineForm>
                </div>
            </Stack>
            <Box
                sx={{
                    width: '100%',
                    height: '100%',
                    maxHeight: 510,
                    display: 'flex',
                    alignItems: 'stretch',
                    justifyContent: 'space-around',
                }}
            >
                <Paper className={styles.commonWidth} elevation={3}>
                    <Stack className={styles.multilineForms}>
                        <MultilineForm
                            initialValue={propContent}
                            setState={setContent}
                        ></MultilineForm>
                    </Stack>
                </Paper>
                <Paper className={`${styles.commonWidth} ${styles.contentPaper}`} elevation={3}>
                    <MarkdownDisplay content={inputContent ?? ''}></MarkdownDisplay>
                </Paper>
            </Box>
        </Stack>
    );
};

export default WritingForm;

import { Dispatch, SetStateAction, useState, useEffect } from 'react';
import Stack from '@mui/material/Stack';

import MultilineForm from '@atom/multiline-form';
import RequiredOneLineForm from '@atom/required-one-line-form/required-one-line-form';
import markdownDisplay from "@atom/markdown-display";
import MarkdownDisplay from "@atom/markdown-display";

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
            <RequiredOneLineForm initialValue={propTitle} setState={setTitle}></RequiredOneLineForm>
            <MultilineForm initialValue={propContent} setState={setContent}></MultilineForm>
            <MarkdownDisplay content={inputContent ?? ''}></MarkdownDisplay>
        </Stack>
    );
};

export default WritingForm;

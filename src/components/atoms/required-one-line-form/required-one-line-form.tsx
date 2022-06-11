import { ChangeEvent, useState, Dispatch, SetStateAction } from 'react';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';

import { getInputForValue } from '@functions/formControl';

import style from './required-one-line-form.module.css';

/** propsの型 */
interface PropType {
    /** 初期値 */
    initialValue?: string;
    /** 親のディスパッチャー */
    setState: Dispatch<SetStateAction<{
        /** 入力値 */
        input: string | undefined;
        /** バリデーションに沿っているか */
        valid: boolean;
    }>>;
}

/** 入力必須単一入力フォーム */
const RequiredOneLineForm = ({ initialValue, setState }: PropType) => {
    // --- state ---

    /** 必須項目が未入力 */
    const [requiredValid, setRequiredValid] = useState(false);

    // --- event handler ---

    /** テキストフィールドに変化があったとき */
    const onChangeTextField = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
        const inputValue = getInputForValue(event);
        const isValid = Boolean(inputValue);
        setRequiredValid(isValid);
        setState({ input: inputValue, valid: isValid });
    };

    return (
        <Stack direction="column" spacing={0.2}>
            <TextField
                required
                error={!requiredValid}
                label="title"
                defaultValue={ initialValue ?? '' }
                variant="standard"
                onChange={onChangeTextField}
            />
            <div className={style.errorMessage}>{
                !requiredValid &&
                <Typography
                    component="span"
                    color="error"
                    sx={{ fontSize: 8 }}
                >required inputs.</Typography>
            }</div>
        </Stack>
    );
};

export default RequiredOneLineForm;

import { ChangeEvent, useState } from "react";
import Typography from '@mui/material/Typography';

import TextField from '@mui/material/TextField';

import style from './required-one-line-form.module.css';

/** propsの型 */
interface PropType {
    initialValue?: string;
}

/** フォームの入力値を取得*/
const getInputForValue = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): string => event.target.value;

/** 入力必須単一入力フォーム
 * @param initialValue 初期値
 */
const RequiredOneLineForm = ({ initialValue }: PropType) => {
    /** 必須項目が未入力 */
    const [requiredValid, setRequiredValid] = useState(false);
    /** テキストフィールドに変化があったとき */
    const onChangeTextField = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
        const inputValue = getInputForValue(event);
        setRequiredValid(!!inputValue);
    };

    return (
        <div className={style.container}>
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
        </div>
    );
};

export default RequiredOneLineForm;

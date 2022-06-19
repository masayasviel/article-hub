import { ChangeEvent, Dispatch, SetStateAction } from 'react';
import TextField from '@mui/material/TextField';

import { getInputForValue } from '@functions/formControl';

/** propsの型 */
interface PropType {
    initialValue?: string;
    /** 親のディスパッチャー */
    setState: Dispatch<SetStateAction<string | undefined>>;
}

/** 複数入力フォーム */
const MultilineForm = ({ initialValue, setState }: PropType) => {
    // --- event handler ---

    /** テキストフィールドに変化があったとき */
    const onChangeTextField = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
        setState(getInputForValue(event));
    };

    return (
        <TextField
            label="content"
            multiline
            rows={20}
            defaultValue={ initialValue ?? '' }
            onChange={onChangeTextField}
        />
    )
};

export default MultilineForm;

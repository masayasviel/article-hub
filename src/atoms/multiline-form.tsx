import TextField from '@mui/material/TextField';

/** propsの型 */
interface PropType {
    initialValue?: string;
}

/**
 * 複数入力フォーム
 * @param initialValue 初期値
 */
const MultilineForm = ({ initialValue }: PropType) => {
    return (
        <TextField
            label="Multiline"
            multiline
            rows={20}
            defaultValue={ initialValue ?? '' }
        />
    )
};

export default MultilineForm;

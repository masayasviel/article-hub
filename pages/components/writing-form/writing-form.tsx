import MultilineForm from '@atom/multiline-form';
import RequiredOneLineForm from "@atom/required-one-line-form/required-one-line-form";

import style from './writinf-form.module.css';

/** propsの型 */
interface PropType {
    /** タイトル */
    title?: string;
    /** 記事の中身 */
    content?: string;
}

/** 執筆フォーム */
const WritingForm = ({title, content}: PropType) => {
    return (
        <div className={style.container}>
            <RequiredOneLineForm initialValue={title}></RequiredOneLineForm>
            <MultilineForm initialValue={content}></MultilineForm>
        </div>
    );
};

export default WritingForm;

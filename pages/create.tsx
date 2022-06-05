import type { NextPage } from 'next';
import WritingForm from "@component/writing-form/writing-form";

/** 記事登録ページ */
const CreatePage: NextPage = () => {
    return (
        <>
            <h2>記事執筆ページ</h2>
            <WritingForm></WritingForm>
        </>
    );
}

export default CreatePage;

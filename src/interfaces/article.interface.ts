/** 記事作成リクエストタイプ */
export interface CreateArticleRequestType {
    title: string;
    content: string;
}

/** 記事一覧レスポンスタイプ */
export interface ListArticleResponseType {
    id: number;
    user: string;
    title: string;
}

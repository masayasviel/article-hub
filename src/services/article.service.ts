import { CreateArticleRequestType } from '@interfaces/article.interface';

// 外部リソースの読み込み
// もしapiができたら(axiosとか！)書く
// fetchでよくない？

/** 記事登録リクエスト */
export function createRequest(requestParam: CreateArticleRequestType): CreateArticleRequestType {
    return requestParam;
}

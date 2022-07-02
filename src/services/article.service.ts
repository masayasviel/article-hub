import { CreateArticleRequestType } from '@interfaces/article.interface';

/** 記事登録リクエスト */
export function createRequest(requestParam: CreateArticleRequestType): Promise<CreateArticleRequestType> {
    return new Promise((resolve, reject) => {
        resolve(requestParam);
    });
}

/** 記事更新リクエスト */
export function updateRequest(requestParam: CreateArticleRequestType): Promise<CreateArticleRequestType> {
    return new Promise((resolve, reject) => {
        resolve(requestParam);
    });
}


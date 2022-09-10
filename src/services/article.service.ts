import { ArticleDetailResponseType, CreateArticleRequestType, ListArticleResponseType } from '@interfaces/article.interface';
import { END_POINT } from '@src/endpoint';
import axios, { AxiosResponse } from 'axios';

export function listRequest(): Promise<AxiosResponse<ListArticleResponseType[]>> {
    return axios.get(END_POINT.article);
}

export function getRequest(contentId: number): Promise<AxiosResponse<ArticleDetailResponseType>> {
    return axios.get(`${END_POINT.article}/${contentId}`);
}

/** 記事登録リクエスト */
export function createRequest(requestParam: CreateArticleRequestType): Promise<AxiosResponse<{}>> {
    return axios.post(END_POINT.article, requestParam);
}

/** 記事更新リクエスト */
export function updateRequest(contentId: number, requestParam: CreateArticleRequestType): Promise<AxiosResponse<{}>> {
    return axios.patch(`${END_POINT.article}/${contentId}`, requestParam);
}

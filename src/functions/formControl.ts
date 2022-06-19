import { ChangeEvent } from 'react';

// 共通で使えるtsのコード

/** フォームの入力値を取得*/
export const getInputForValue = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): string => event.target.value;


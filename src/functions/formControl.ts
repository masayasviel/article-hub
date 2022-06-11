import { ChangeEvent } from 'react';

/** フォームの入力値を取得*/
export const getInputForValue = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): string => event.target.value;


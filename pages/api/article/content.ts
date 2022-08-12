// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';

import { NotFoundError } from "@controller/core/exception";
import { getArticle } from "@controller/article/content";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const { id } = req.query;
    switch (req.method) {
        case 'GET':
            try {
                await getArticle(Number(id));
                res.status(204).send({});
            } catch (e) {
                if (e instanceof NotFoundError) {
                    res.status(404).send({});
                } else {
                    res.status(500).send({});
                }
            }
            break;
        case 'POST':
            break;
        default:
            break;
    }
}

import type { NextApiRequest, NextApiResponse } from 'next';

import { update } from "@controller/article/update";
import { NotFoundError } from "@controller/core/exception";
import { getArticle } from '@src/controller/article/content';

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse,
) {
    const { id } = req.query;
    switch (req.method) {
        case 'GET':
            try{
                const response = await getArticle(Number(id));
                res.status(200).send(response);
            } catch (e) {
                if (e instanceof NotFoundError) {
                    res.status(404).send({});
                } else {
                    res.status(500).send({});
                }
            }
            break;
        case 'PATCH':
            try {
                await update(Number(id), req.body);
                res.status(204).send({});
            } catch (e) {
                if (e instanceof NotFoundError) {
                    res.status(404).send({});
                } else {
                    res.status(500).send({});
                }
            }
            break;
        default:
            break;
    }
}

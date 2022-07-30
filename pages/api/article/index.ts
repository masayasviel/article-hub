import type { NextApiRequest, NextApiResponse } from 'next'

import { list } from "@controller/article/list";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    switch (req.method) {
        case 'GET':
            try {
                const resList = await list();
                res.status(200).json(resList);
            } catch (error) {
                res.status(500).send({});
            }
            break;
        case 'POST':
            break;
        default:
            break;
    }
}

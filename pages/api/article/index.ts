import type { NextApiRequest, NextApiResponse } from 'next'

import { list } from "@controller/article/list";
import { create } from '@controller/article/create';

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
            try {
                await create(req.body);
                res.status(201).send({});
            } catch(error) {
                res.status(500).send({});
            }
            break;
        default:
            break;
    }
}

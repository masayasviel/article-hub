import { PrismaClient } from '@prisma/client'

import { CreateArticleRequestType } from "@interfaces/article.interface";
import { NotFoundError } from "@src/controller/core/exception";

/**
 * 記事更新
 * @param articleId 記事ID
 * @param requestParam 更新内容
 * @exception {NotFoundError} 記事が存在しない
 */
export async function update(
    articleId: number,
    requestParam: CreateArticleRequestType
): Promise<void> {
    const prisma = new PrismaClient();

    const target = await prisma.post.findUnique({
        where: {
            id: articleId,
        }
    });
    if (target === null) {
        throw new NotFoundError('post id');
    }

    await prisma.post.update({
        where: {
            id: articleId,
        },
        data: {
            title: requestParam.title,
            text: requestParam.content
        },
    });

    await prisma.$disconnect();
}

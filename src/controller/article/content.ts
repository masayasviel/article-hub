import { PrismaClient } from '@prisma/client'

import { NotFoundError } from "@src/controller/core/exception";

/**
 * 記事取得情報
 * @param articleId 記事ID
 * @exception {NotFoundError} 記事が存在しない
 */

//記事詳細を取得する
export async function getArticle(
    articleId: number,
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
    await prisma.$disconnect();
}

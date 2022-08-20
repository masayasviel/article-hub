import { PrismaClient } from '@prisma/client'

import { CreateArticleRequestType } from "@interfaces/article.interface";

/**
 * 記事登録
 * @param requestParam 登録内容
 */
export async function create(
    requestParam: CreateArticleRequestType
): Promise<void> {
    // prismaをインスタンス化
    const prisma = new PrismaClient();

    await prisma.post.create({
        data: {
            userid: 1,
            title: requestParam.title,
            text: requestParam.content,
        },
    });

    await prisma.$disconnect();
}

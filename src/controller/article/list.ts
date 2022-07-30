import { PrismaClient } from '@prisma/client'

import { ListArticleResponseType } from '@interfaces/article.interface';

export async function list(): Promise<ListArticleResponseType[]> {
    const prisma = new PrismaClient();
    const posts = await prisma.post.findMany({ include: { user: true } });

    await prisma.$disconnect();

    return posts.map((v) => {
        return {
            id: v.id,
            user: v.user.name,
            title: v.title,
        }
    })
}

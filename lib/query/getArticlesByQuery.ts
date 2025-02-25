import { prisma } from "../prisma"

export const getArticlesByQuery = async (searchText: string, skip:number, take:number) =>{

    const [articles, totalCount] = await prisma.$transaction([
        // for articles:
        prisma.articles.findMany({
            where:{
                OR:[
                    {title: {contains: searchText, mode: 'insensitive'}},
                    {category: {contains: searchText, mode:'insensitive'}}
                ]
            },
            include:{
                author:{
                    select: {
                        name:true,
                        email: true,
                        imageUrl: true,
                    }
                }
            },

            skip:skip,
            take:take,
        }),

        // for totalCount:
        prisma.articles.count({
            where:{
                OR:[
                    {title: {contains: searchText, mode: 'insensitive'}},
                    {category: {contains: searchText, mode:'insensitive'}}
                ]
            }
        })

    ]);

    return {articles, totalCount};

}
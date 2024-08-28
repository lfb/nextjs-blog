'use client'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

import { getArticleURL } from '@/lib/regular-url'
import articleListStyles from '@/assets/css/articles/article-list.module.css'

export default function ArticlesList({ articleList }) {
    const router = useRouter()

    const onArticle = article => {
        router.push(getArticleURL(article))
    }

    return (
        <>
            {articleList.map(article => {
                return (
                    <div key={article.id} className={articleListStyles.item} onClick={() => onArticle(article)}>
                        <div className="flex-1">
                            <h1>
                                <Link href={getArticleURL(article)} title={article.title} className={articleListStyles.title}>
                                    {article.title}
                                </Link>
                            </h1>
                            <div className="text-slate-500 text-sm my-2 leading-6">{article.description}</div>
                            <div className="text-slate-500 text-sm leading-6">{article.created_at}</div>
                        </div>
                        <div className={articleListStyles.image}>
                            <Link href={getArticleURL(article)} title={article.title}>
                                <Image
                                    src={article.img_url}
                                    width="0"
                                    height="0"
                                    sizes="100vw"
                                    className="w-28 h-auto rounded"
                                    title={article.title}
                                    alt={article.title}
                                />
                            </Link>
                        </div>
                    </div>
                )
            })}
        </>
    )
}

'use client'
import { useRouter } from 'next/navigation'

import Link from 'next/link'
import Image from 'next/image'

import { getArticleURL } from '@/lib/regular-url'

import '@/assets/css/articles/list.css'

export default function ArticlesList({ articleList }) {
    const router = useRouter()

    const onArticle = article => {
        router.push(getArticleURL(article))
    }

    return (
        <div>
            {articleList.map(article => {
                return (
                    <div key={article.id} className="article-list-item" onClick={() => onArticle(article)}>
                        <div className="article-list-content flex-1">
                            <h1>
                                <Link href={getArticleURL(article)} title={article.title} className="article-list-title">
                                    {article.title}
                                </Link>
                            </h1>
                            <div className="text-slate-500 text-base py-2 leading-6">{article.description}</div>
                            <div className="text-slate-500 text-sm line-clamp-2 leading-6">{article.created_at}</div>
                        </div>
                        <div className="article-list-image">
                            <Link href={getArticleURL(article)} title={article.title}>
                                <Image src={article.img_url} width="0" height="0" sizes="100vw" className="w-28 h-auto rounded" alt={article.title} />
                            </Link>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

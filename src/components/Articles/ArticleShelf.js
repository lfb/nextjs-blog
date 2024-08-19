import Link from 'next/link'

import { isArray, getMonthDate } from '@/lib/utils'
import { getArticleURL } from '@/lib/regular-url'

export default function ArticleShelf({ articleList }) {
    return (
        <>
            <div className="article-list text-3xl font-medium mb-8">文章</div>
            {Object.keys(articleList).map(year => {
                return (
                    <div className="article-item mb-8 flex" key={year}>
                        <div className="article-year inline-block h-8 font-medium text-2xl w-32	 sticky top-0">{year}</div>
                        <ul className="article-info flex-1">
                            {isArray(articleList[year]) &&
                                articleList[year].map(article => {
                                    return (
                                        <li key={article.id} className="flex items-center text-base mb-6">
                                            <span className="article-date mr-3 text-slate-400 text-sm">{getMonthDate(article.created_at)}</span>
                                            <h1>
                                                <Link className="hover:text-primary" href={getArticleURL(article)} title={article.title}>
                                                    {article.title}
                                                </Link>
                                            </h1>
                                        </li>
                                    )
                                })}
                        </ul>
                    </div>
                )
            })}
        </>
    )
}

import Link from 'next/link'

import { isArray, getMonthDate } from '@/lib/utils'
import { getArticleURL, getCategoryURL } from '@/lib/regular-url'
import '@/assets/css/articles/article-shelf.css'

export default function ArticleShelf({ keyword, articleList }) {
    return (
        <>
            {Object.keys(articleList).map(year => {
                return (
                    <div className="article-item mb-8 px-4" key={year}>
                        <div className="article-year inline-block pb-4 bg-white w-full font-medium text-2xl sticky top-0">{year}</div>
                        <ul className="article-info flex-1">
                            {isArray(articleList[year]) &&
                                articleList[year].map(article => {
                                    return (
                                        <li key={article.id} className="flex items-start text-base mb-6">
                                            <span className="article-date mr-3 text-slate-400 text-sm">{getMonthDate(article.created_at)}</span>
                                            <Link
                                                href={getCategoryURL(article.category_info)}
                                                title={article.category_info.name}
                                                className="article-date mr-3 text-slate-400 text-sm
                                                hover:text-primary
                                                hover:underline
                                                hover:underline-offset-4
                                                "
                                            >
                                                {article.category_info.name}
                                            </Link>
                                            <h1 className="flex-1">
                                                <Link
                                                    className="
                                                hover:text-primary
                                                hover:underline
                                                hover:underline-offset-4
                                                 line-clamp-1"
                                                    href={getArticleURL(article)}
                                                    title={article.title}
                                                >
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

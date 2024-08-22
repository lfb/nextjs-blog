import { ArticleJsonLd } from 'next-seo'

import { getArticleDetails } from '@/requests/api/articles'
import { isObject, getDate } from '@/lib/utils'

import '@/assets/css/common/highlight.css'
import articleDetailStyles from '@/assets/css/articles/article-detail.module.css'
import ArticleCopyright from '@/components/Articles/ArticleCopyright'
import { getArticleURL, getCategoryURL } from '@/lib/regular-url'

import BaseLayout from '@/components/Common/BaseLayout'
import { NAV_ENUM } from '@/lib/nav'
import Link from 'next/link'
export async function generateMetadata({ params, searchParams }, parent) {
    const { id, path } = params || {}

    let article = {}
    let [err, res] = await getArticleDetails({
        id,
        params: {
            is_meta: 1,
            is_markdown: 0
        }
    })

    if (!err && isObject(res)) {
        article = res.data
    }

    return {
        title: article.title,
        description: article.description,
        keywords: article.seo_keyword,
        alternates: {
            canonical: `https://www.boblog.com${getArticleURL(article)}`
        }
    }
}

export default async function ArticlesDetails({ params, query, searchParams }) {
    const { id, path } = params || {}

    let article = {}
    let [err, res] = await getArticleDetails({
        id,
        params: {
            is_markdown: 0
        }
    })

    if (!err && isObject(res)) {
        article = res.data
    }

    return (
        <BaseLayout activeNav={NAV_ENUM.ARTICLES_PAGE}>
            <div className={articleDetailStyles.box}>
                <h1 className={articleDetailStyles.title}>{article.title}</h1>
                <div className={articleDetailStyles.date}>
                    <span className="mr-2">分类:</span>
                    <Link href={getCategoryURL(article.category_info)} className="mr-4">
                        {article.category_info.name}
                    </Link>
                    <span className="mr-2">发布:</span>
                    <span>{article.created_at}</span>
                </div>
                <div className={articleDetailStyles.content} dangerouslySetInnerHTML={{ __html: article.content }}></div>

                <ArticleCopyright article={article} />
            </div>

            <ArticleJsonLd
                useAppDir={true}
                type="Article"
                url="https://schema.org/"
                title={article.title}
                description={article.description}
                authorName={{
                    name: 'BobbyLiang',
                    url: 'https://github.com/lfb'
                }}
                images={article.img_url}
                datePublished={article.created_at}
                dateModified={article.updated_at}
            />
        </BaseLayout>
    )
}

import { ArticleJsonLd } from 'next-seo'

import { getArticleDetails } from '@/requests/api/articles'
import { isObject } from '@/lib/utils'

import '@/assets/css/common/highlight.css'
import '@/assets/css/articles/articles.css'
import ArticleCopyright from '@/components/Articles/ArticleCopyright'
import BaseLayout from '@/components/Common/BaseLayout'
import { NAV_ENUM } from '@/lib/nav'

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
            canonical: `https://www.boblog.com/articles/${article.id}/${article.article_path}`
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
            <div className="article-details overflow-hidden mb-8">
                <h1 className="text-3xl font-medium mb-4">{article.title}</h1>
                <div className="article-details-intro text-slate-400 text-sm mb-8">{article.created_at}</div>
                <div className="article-details-content" dangerouslySetInnerHTML={{ __html: article.content }}></div>

                <ArticleCopyright id={article.id} path={article.article_path} />
            </div>

            <ArticleJsonLd
                useAppDir={true}
                type="Article"
                url="https://schema.org/"
                title={article.title}
                description={article.description}
                authorName="Bobby Liang"
                images={article.img_url}
                datePublished={article.created_at}
                dateModified={article.updated_at}
            />
        </BaseLayout>
    )
}

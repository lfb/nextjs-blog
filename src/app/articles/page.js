import ArticleShelf from '@/components/Articles/ArticleShelf'
import { getArticlesList } from '@/requests/api/articles'
import { isObject } from '@/lib/utils'
import BaseLayout from '@/components/Common/BaseLayout'
import { NAV_ENUM } from '@/lib/nav'
import ArticleEmptyList from '@/components/Common/ArticleEmptyList'
import { defaultMeta } from '@/lib/defaultMeta'

export const metadata = {
    title: '波波博客-文章列表-boblog.com',
    description: defaultMeta.description,
    keywords: defaultMeta.keywords
}

export default async function Articles({ searchParams }) {
    let params = {
        is_year_group: 1
    }
    let keyword = searchParams?.keyword || ''
    if (keyword) {
        params.keyword = keyword
    }
    let articleList = []
    let [err, res] = await getArticlesList({ params })

    if (!err && isObject(res) && isObject(res.data)) {
        articleList = res.data
    }

    return (
        <BaseLayout activeNav={NAV_ENUM.ARTICLES_PAGE}>
            {isObject(articleList) ? <ArticleShelf keyword={keyword} articleList={articleList} /> : <ArticleEmptyList />}
        </BaseLayout>
    )
}

import ArticlesList from '@/components/Articles/ArticlesList'

import BaseLayout from '@/components/Common/BaseLayout'

import { getArticlesList } from '@/requests/api/articles'
import { isArray, isObject } from '@/lib/utils'
import { NAV_ENUM } from '@/lib/nav'
import ArticleListObserver from '@/components/Articles/ArticleListObserver'
import { defaultMeta } from '@/lib/defaultMeta'
import ArticleEmptyList from '@/components/Common/ArticleEmptyList'

export const metadata = defaultMeta

export default async function Home({ searchParams }) {
    let articleList = []
    let isHasMore = false

    let [err, res] = await getArticlesList()

    if (!err && isObject(res)) {
        articleList = isArray(res.data.data) ? res.data.data : []
        isHasMore = isObject(res.data.meta) && res.data.meta.current_page < res.data.meta.total_pages
    }

    if (!isArray(articleList)) {
        return <ArticleEmptyList />
    }

    return (
        <BaseLayout activeNav={NAV_ENUM.HOME_PAGE}>
            <ArticlesList articleList={articleList} />

            {isHasMore && <ArticleListObserver hasMore={isHasMore} />}
        </BaseLayout>
    )
}

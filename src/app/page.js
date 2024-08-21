import ArticlesList from '@/components/Articles/ArticlesList'

import BaseLayout from '@/components/Common/BaseLayout'

import { getArticlesList } from '@/requests/api/articles'
import { isArray, isObject } from '@/lib/utils'
import { NAV_ENUM } from '@/lib/nav'
import ArticlePagination from '@/components/Common/ArticlePagination'

export default async function Home({ searchParams }) {
    let articleList = []
    let totalPages = 1
    let currentPage = searchParams?.page || 1

    let [err, res] = await getArticlesList({
        params: { page: currentPage }
    })

    if (!err && isObject(res)) {
        articleList = isArray(res.data.data) ? res.data.data : []

        if (isObject(res.data.meta)) {
            totalPages = res.data.meta.total_pages
            currentPage = res.data.meta.current_page
        }
    }

    // 监听滚动

    return (
        <BaseLayout activeNav={NAV_ENUM.HOME_PAGE}>
            <ArticlesList articleList={articleList} />
            <ArticlePagination currentPage={currentPage} totalPages={totalPages} />
        </BaseLayout>
    )
}

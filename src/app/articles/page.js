import ArticleShelf from '@/components/Articles/ArticleShelf'
import { getArticlesList } from '@/requests/api/articles'
import { isObject } from '@/lib/utils'
import BaseLayout from '@/components/Common/BaseLayout'
import { NAV_ENUM } from '@/lib/nav'

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
            {isObject(articleList) ? <ArticleShelf keyword={keyword} articleList={articleList} /> : <span className="py-8">无</span>}
        </BaseLayout>
    )
}

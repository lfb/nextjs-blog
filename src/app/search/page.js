import ArticlesList from '@/components/Articles/ArticlesList'
import { getArticlesList } from '@/requests/api/articles'
import { isArray, isObject } from '@/lib/utils'
import BaseLayout from '@/components/Common/BaseLayout'
import { NAV_ENUM } from '@/lib/nav'

export default async function SearchPage({ searchParams }) {
    let keyword = decodeURIComponent(searchParams?.keyword || '')
    let params = {
        keyword
    }

    let articleList = []
    let [err, res] = await getArticlesList({ params })

    if (!err && isObject(res) && isArray(res.data.data)) {
        articleList = res.data.data
    }
    return (
        <BaseLayout activeNav={NAV_ENUM.ARTICLES_PAGE}>
            <div className="pb-4 text-base text-slate-500">
                「{keyword}」相关文章: {articleList.length} 篇
            </div>
            {isArray(articleList) && <ArticlesList keyword={keyword} articleList={articleList} />}
        </BaseLayout>
    )
}

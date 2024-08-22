import ArticleShelf from '@/components/Articles/ArticleShelf'
import { getArticlesList } from '@/requests/api/articles'
import { isObject } from '@/lib/utils'
import BaseLayout from '@/components/Common/BaseLayout'
import { NAV_ENUM } from '@/lib/nav'

export const metadata = {
    title: '波波博客-文章列表-boblog.com',
    description: '前端工程师的技术与生活记录！',
    keywords: '波波博客,前端开发,前端工程师,JavaScript,nodejs,boblog.com'
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
            {isObject(articleList) ? <ArticleShelf keyword={keyword} articleList={articleList} /> : <span className="py-8">无</span>}
        </BaseLayout>
    )
}

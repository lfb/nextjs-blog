import ArticlesList from '@/components/Articles/ArticlesList'

import { getArticlesList } from '@/requests/api/articles'
import { getCategoryDetails } from '@/requests/api/category'
import { isArray, isObject } from '@/lib/utils'
import BaseLayout from '@/components/Common/BaseLayout'
import { NAV_ENUM } from '@/lib/nav'

export async function generateMetadata({ params, searchParams }, parent) {
    const { id, name } = params || {}

    let category = {}
    let [err, res] = await getCategoryDetails({
        id
    })

    if (!err && isObject(res)) {
        category = res.data
    }

    return {
        title: category.name,
        description: category.name,
        keywords: category.name,
        alternates: {
            canonical: `https://www.boblog.com/category/${category.id}/${category.category_key}`
        }
    }
}

export default async function CategoryArticle({ params }) {
    const { id, name } = params || {}

    let articleList = []
    let categoryName = ''
    let [err, res] = await getArticlesList({
        params: {
            category_id: id
        }
    })

    if (!err && isObject(res) && isArray(res.data.data)) {
        articleList = res.data.data
        categoryName = articleList[0].category_info.name
    }

    return (
        <BaseLayout activeNav={NAV_ENUM.CATEGORY_PAGE}>
            <div className="category-article text-3xl mb-12 font-medium">{categoryName || name}</div>

            {isArray(articleList) ? <ArticlesList articleList={articleList} /> : <div>文章: 0</div>}
        </BaseLayout>
    )
}
import ArticlesList from '@/components/Articles/ArticlesList'

import { getArticlesList } from '@/requests/api/articles'
import { getCategoryDetails } from '@/requests/api/category'
import { isArray, isObject } from '@/lib/utils'
import BaseLayout from '@/components/Common/BaseLayout'
import { NAV_ENUM } from '@/lib/nav'

import '@/assets/css/category/category.css'
import ArticleEmptyList from '@/components/Common/ArticleEmptyList'
import { getCategoryURL } from '@/lib/regular-url'

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
        title: `文章 - ${category.name} - boblog.com`,
        description: category.name,
        keywords: `波波博客,前端开发,前端工程师,${category.name}`,
        alternates: {
            canonical: `${process.env.NEXT_PUBLIC_DOMAIN}${getCategoryURL(category)}`
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
            {!isArray(articleList) && <ArticleEmptyList />}
            {isArray(articleList) && (
                <>
                    <div className="pb-4 text-base text-slate-500">
                        「{categoryName || name}」相关文章: {articleList.length} 篇
                    </div>
                    <ArticlesList articleList={articleList} />
                </>
            )}
        </BaseLayout>
    )
}

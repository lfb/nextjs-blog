import ArticlesList from '@/components/Articles/ArticlesList'

import BaseLayout from '@/components/Common/BaseLayout'

import { getArticlesList } from '@/requests/api/articles'
import { isArray, isObject } from '@/lib/utils'
import { NAV_ENUM } from '@/lib/nav'

export default async function Home() {
    let articleList = []
    let [err, res] = await getArticlesList()

    if (!err && isObject(res) && isArray(res.data.data)) {
        articleList = res.data.data
    }

    return (
        <BaseLayout activeNav={NAV_ENUM.HOME_PAGE}>
            <ArticlesList articleList={articleList} />
        </BaseLayout>
    )
}

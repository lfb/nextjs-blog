import ArticleShelf from '@/components/Articles/ArticleShelf';
import {getArticlesList} from '@/requests/api/articles';
import {isObject} from '@/lib/utils';
import BaseLayout from '@/components/Common/BaseLayout';
import {NAV_ENUM} from '@/lib/nav';

export default async function Articles() {
    let articleList = []
    let [err, res] = await getArticlesList({
        params: {
            is_year_group: 1
        }
    })

    if(!err && isObject(res) && isObject(res.data)) {
        articleList = res.data
    }

    return (
        <BaseLayout activeNav={NAV_ENUM.ARTICLES_PAGE}>
            <ArticleShelf articleList={articleList} />
        </BaseLayout>
    )
}

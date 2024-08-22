// 文章URL
export function getArticleURL(article) {
    const { id, article_path } = article || {}

    if (!id) return '/articles'

    return `/articles/${id}/${article_path}`
}

// 分类链接
export function getCategoryURL(category) {
    const { id, category_key } = category || {}

    if (!id) return '/'

    return `/category/${id}/${category_key}`
}

// 搜索URL
export function getSearchURL(keyword = '') {
    return `/search?keyword=${encodeURIComponent(keyword)}`
}

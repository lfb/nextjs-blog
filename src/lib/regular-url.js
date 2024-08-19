export function getArticleURL(article) {
    const { id, article_path } = article || {}

    return `/articles/${id}/${article_path}`
}

export function getCategoryURL(category) {
    const { id, category_key } = category || {}

    return `/category/${id}/${category_key}`
}

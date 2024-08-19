import request from '@/requests/request'
import articles from '@/requests/urls/articles'

// 获取文章列表
export function getArticlesList({ params = {}, ...opts } = {}) {
    return new Promise((resolve, reject) => {
        request
            .get(articles.list, {
                params,
                ...opts
            })
            .then(res => {
                resolve([null, res])
            })
            .catch(err => {
                reject([err, null])
            })
    })
}

// 获取文章详情
export function getArticleDetails({ id, params = {}, ...opts } = {}) {
    return new Promise((resolve, reject) => {
        request
            .get(`${articles.details}/${id}`, {
                params,
                ...opts
            })
            .then(res => {
                resolve([null, res])
            })
            .catch(err => {
                reject([err, null])
            })
    })
}

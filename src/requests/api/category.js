import request from '@/requests/request'
import category from '@/requests/urls/category'
import articles from '../urls/articles'

// 获取分类列表
export function getCategoryList({ params = {}, ...opts } = {}) {
    return new Promise((resolve, reject) => {
        request
            .get(category.list, {
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
// 获取分类详情
export function getCategoryDetails({ id, params = {}, ...opts } = {}) {
    return new Promise((resolve, reject) => {
        request
            .get(`${category.details}/${id}`, {
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

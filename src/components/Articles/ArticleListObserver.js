'use client'

import { useEffect, useRef, useState } from 'react'
import { getArticlesList } from '@/requests/api/articles'
import { isArray, isObject } from '@/lib/utils'

import ArticlesList from '@/components/Articles/ArticlesList'

/**
 * 无限滚动文章列表组件
 * @param hasMore
 * @returns {JSX.Element}
 * @constructor
 */
export default function ArticleListObserver(hasMore) {
    const [articleList, setArticleList] = useState([])
    const [page, setPage] = useState(2)
    const [isHasMore, setIsHasMore] = useState(hasMore)
    const [isLoading, setIsLoading] = useState(false)
    const loadingRef = useRef(null)

    useEffect(() => {
        // 当用户滚动到页面底部时，自动加载更多数据，以实现无限滚动效果。
        // 利用 IntersectionObserver API
        const observer = new IntersectionObserver(
            async entries => {
                if (entries[0].isIntersecting && !isLoading && isHasMore) {
                    setIsLoading(true)

                    const [err, res] = await getArticlesList({
                        params: { page }
                    })
                    setIsLoading(false)
                    if (!err && isObject(res)) {
                        setPage(page + 1)
                        if (isArray(res.data.data)) {
                            setArticleList([...articleList, ...res.data.data])
                        }
                        if (isObject(res.data.meta)) {
                            setIsHasMore(res.data.meta.current_page < res.data.meta.total_pages)
                        }
                    }
                }
            },
            {
                root: null,
                rootMargin: '0px',
                threshold: 0.5
            }
        )

        if (loadingRef?.current) {
            observer.observe(loadingRef.current)
        }

        return () => {
            if (loadingRef?.current) {
                observer.unobserve(loadingRef.current)
            }
        }
    }, [isHasMore, isLoading, articleList])

    return (
        <>
            <ArticlesList articleList={articleList} />
            {isHasMore && <div ref={loadingRef} className="py-2"></div>}
            {!isHasMore && <div className="py-4 text-xs text-slate-400 text-center">已经到底了~</div>}
            {isLoading && <div className="py-4 text-xs text-slate-400 text-center">加载中...</div>}
        </>
    )
}

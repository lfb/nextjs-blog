'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { isArray, throttle } from '@/lib/utils'

import contentsStyles from '@/assets/css/articles/article-contents.module.css'

function ArticleContents({ article }) {
    // 文章目录
    const [contents, setContents] = useState([])

    const [activeHash, setActiveHash] = useState('')

    // 生成目录
    useEffect(() => {
        const headers = document.querySelectorAll(`
            .article-details-container h1,
            .article-details-container h2, 
            .article-details-container h3, 
            .article-details-container h4, 
            .article-details-container h5, 
            .article-details-container h6
        `)
        if (headers && headers.length) {
            const contentsList = Array.from(headers).map((e, index) => {
                const tagNameIndex = e.tagName.substring(1)
                const paddingVal = `${(tagNameIndex / 2.048).toFixed(2)}rem`

                const hash = `heading-${index + 1}`
                e.setAttribute('id', hash)

                return {
                    title: e.innerHTML,
                    hash,
                    styles: { paddingLeft: paddingVal, paddingRight: paddingVal },
                    cls: `${hash} inline-block text-sm leading-8 hover:text-primary`
                }
            })
            setContents(contentsList)
        }
    }, [article])

    // 页面滚动 - 高亮目录
    useEffect(() => {
        // 是否存在目录
        const isContents = isArray(contents)

        const handleNav = () => {
            const headersDistance = contents.map(v => {
                const headerElement = document.querySelector(`#${v.hash}`)
                return headerElement ? headerElement.offsetTop : 0
            })

            // 如果没有目录，则不用处理了
            if (!isArray(headersDistance)) return

            const scrollTop = document.documentElement.scrollTop || window.scrollY
            const activeIndex = headersDistance.findIndex(v => v > scrollTop)

            if (activeIndex === -1) {
                setActiveHash(contents[contents.length - 1]?.hash)
            } else if (activeIndex > 0) {
                setActiveHash(contents[activeIndex - 1]?.hash)
            } else {
                setActiveHash(contents[0]?.hash)
            }
        }
        const handler = throttle(handleNav, 200)
        if (isContents) {
            window.addEventListener('scroll', handler)
        }

        return () => {
            if (isContents) {
                window.removeEventListener('scroll', handler)
            }
        }
    }, [contents])

    return (
        <>
            {isArray(contents) && (
                <div className={contentsStyles['article-details-contents']}>
                    <span className="text-xs text-slate-400 m-2">文章目录</span>
                    {contents.map(content => {
                        return (
                            <Link
                                key={content.hash}
                                className={activeHash === content.hash ? `${content.cls} text-primary` : `${content.cls} text-slate-600`}
                                style={content.styles}
                                title={`${article.title} - ${content.title}`}
                                href={`#${content.hash}`}
                            >
                                {content.title}
                            </Link>
                        )
                    })}
                </div>
            )}
        </>
    )
}

export default ArticleContents

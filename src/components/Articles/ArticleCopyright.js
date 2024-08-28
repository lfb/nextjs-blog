import Link from 'next/link'
import { getArticleURL } from '@/lib/regular-url'
import process from 'next/dist/build/webpack/loaders/resolve-url-loader/lib/postcss'

export default function ArticleCopyright({ article }) {
    const articleUrl = `https://www.boblog.com${getArticleURL(article)}`
    return (
        <>
            <div className="mt-8 text-xs leading-6 text-gray-800 rounded">
                欢迎使用 GitHub Issues 进行评论：
                <Link className="underline underline-offset-4" target={'_blank'} href={process.env.NEXT_PUBLIC_GITHUB_ISSUES}>
                    点击评论
                </Link>
            </div>

            <div className="text-xs leading-6 text-gray-400 rounded">
                <p>
                    本文原链接：
                    <Link title={article.title} target={'_blank'} href={articleUrl}>
                        {articleUrl}
                    </Link>
                </p>
                <p>
                    &copy;版权声明：本文为博主
                    <Link target={'_blank'} href={'https://github.com/lfb'}>
                        BobbyLiang
                    </Link>
                    原创文章，转载请附上原文出处链接和本声明，谢谢！
                </p>
            </div>
        </>
    )
}

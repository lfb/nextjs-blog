import Link from 'next/link'
import { getArticleURL } from '@/lib/regular-url'

export default function ArticleCopyright({ article }) {
    const articleUrl = `https://www.boblog.com${getArticleURL(article)}`
    return (
        <div className="my-4 text-xs leading-6 text-gray-400 rounded">
            <p>
                &copy;版权声明：本文为博主
                <Link className="underline underline-offset-4" target={'_blank'} href={'https://github.com/lfb'}>
                    BobbyLiang
                </Link>
                原创文章，转载请附上原文出处链接和本声明，谢谢！
            </p>
            <p>
                原文链接：
                <Link title={article.title} target={'_blank'} href={articleUrl}>
                    {articleUrl}
                </Link>
            </p>
        </div>
    )
}

import Link from 'next/link';

export default function ArticleCopyright({id, path}) {
    return (
        <div className="my-4 text-xs leading-6 text-gray-400 rounded">
            <p>版权声明：本文为博主
                <Link
                    className="underline underline-offset-4"
                    target={ '_blank' }
                    href={ 'https://github.com/lfb' }>
                     BobbyLiang
                </Link>
                原创文章，转载请附上原文出处链接和本声明，谢谢！
            </p>
            <p>原文链接：{ `https://www.boblog.com/articles/${ id }/${ path }` }</p>
        </div>
    )
}

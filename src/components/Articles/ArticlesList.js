import Link from 'next/link';
import Image from 'next/image';

export default function ArticlesList() {
    return (
        <div className="flex flex-col gap-4 article-list">
            {
                [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item,index) =>{
                    return (
                        <div key={index} className="article-item mb-16 flex">
                            <div className="article-content">
                                <h1>
                                    <Link href={`/articles/${index + 1}/consumption-request-apple/`}
                                        title={item.title || index}
                                        className="font-medium text-slate-950 text-xl block hover:text-primary ">
                                        处理苹果平台的 CONSUMPTION_REQUEST 消息
                                    </Link>
                                </h1>
                                <div className="text-slate-500 text-base py-3 leading-6">
                                    最近完善了一下产品的购买流程，其中的一项工作是处理来自苹果 App Store 平台的
                                    消息，在这儿记录一下要点。 消息说明 App 如果使用了苹果的内购...
                                </div>
                                <div className="text-slate-500 text-sm line-clamp-2 leading-6">
                                    2024-08-18
                                </div>
                            </div>
                            <div className="ml-4">
                                <Link href={`/articles/${index + 1}/consumption-request-apple/`}  title={item.title || index}>
                                    <Image
                                        src="/assets/banner.jpg"
                                        width={ 168 }
                                        height={ 168 }
                                        className="rounded-sm"
                                        alt={ 'bbb' } />
                                </Link>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

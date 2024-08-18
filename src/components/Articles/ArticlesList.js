import Link from 'next/link';
import Image from 'next/image';

import {getArticleURL} from '@/lib/regular-url';


export default function ArticlesList({articleList}) {
    return (
        <div className="article-list flex flex-col article-list">
            {
                articleList.map(article =>{
                    return (
                        <div key={article.id} className="article-list-item mb-12 flex">
                            <div className="article-list-content flex-1">
                                <h1>
                                    <Link href={getArticleURL(article)}
                                        title={article.title}
                                        className="font-medium text-xl block hover:text-primary ">
                                        { article.title}
                                    </Link>
                                </h1>
                                <div className="text-slate-500 text-base py-3 leading-6">
                                    { article.description }
                                </div>
                                <div className="text-slate-500 text-sm line-clamp-2 leading-6">
                                    { article.created_at }
                                </div>
                            </div>
                            <div className="ml-4">
                                <Link href={getArticleURL(article)}  title={article.title}>
                                    <Image
                                        src={ article.img_url }
                                        width={ 124 }
                                        height={ 124 }
                                        className="rounded-sm"
                                        alt={ article.title } />
                                </Link>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

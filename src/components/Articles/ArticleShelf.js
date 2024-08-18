import Link from 'next/link';

export default function ArticleShelf({ articles }) {

    return (
        <>
            <div className="article-list text-3xl font-medium mb-10">文章</div>
            {
                [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item, index) => {
                    return (
                        <div className="article-item mb-8 flex" key={index}>
                            <div className="article-year inline-block h-8 font-medium text-2xl w-32	 sticky top-0">
                                {2020 + index}
                            </div>
                            <ul className="article-info flex-1">
                                {
                                    ['css', 'js', 'react', 'vue', 'javascript', 'nodejs', 'typescript', 'webpack', 'babel', 'es6', 'es7', 'es8', 'es9', 'es10', 'es11', 'es12', 'es13', 'es14', 'es15', 'es16',
                                        'es17', 'es18', 'es19'].map((item, index) => {
                                        return (
                                            <li key={ index } className="flex items-center text-base mb-6">
                                                <span className="article-date mr-3 text-slate-400 text-sm">08/09</span>
                                                <h1>
                                                    <Link className="hover:text-primary"
                                                        href={`/articles/${index + 1}/consumption-request-apple/`}
                                                        title={item || index}>
                                                        处理苹果平台的 CONSUMPTION_REQUEST 消息
                                                    </Link>
                                                </h1>
                                            </li>
                                        )
                                    })
                                }
                            </ul>
                        </div>
                    )
                })
            }
        </>

    )
}

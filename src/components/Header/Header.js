import Link from 'next/link'
import Image from 'next/image'

import LogoImage from '../../assets/images/common/logo.png'
import Search from '@/components/Search/Search'

import { getCategoryList } from '@/requests/api/category'
import { isArray, isObject } from '@/lib/utils'
import { getCategoryURL } from '@/lib/regular-url'
import { getNavClass, NAV_ENUM } from '@/lib/nav'

export default async function BlogHeader({ activeNav }) {
    let categoryList = []
    let [err, res] = await getCategoryList()

    if (!err && isObject(res) && isArray(res.data.data)) {
        categoryList = res.data.data.map(category => {
            return {
                ...category,
                jump_url: getCategoryURL(category)
            }
        })
    }

    return (
        <header className="blog-header pt-10 pb-16 flex items-center justify-between">
            <Link href="/" title="波波博客 - www.boblog.com" className="block w-40">
                <Image className="w-full" src={LogoImage} width={646} alt="波波博客 - www.boblog.com" />
            </Link>

            <div className="flex items-center">
                <Link href="/" className={getNavClass(NAV_ENUM.HOME_PAGE, activeNav)}>
                    首页
                </Link>
                <Link href="/articles" className={getNavClass(NAV_ENUM.ARTICLES_PAGE, activeNav)}>
                    文章
                </Link>
                <div className="relative group text-base nav-links cursor-pointer">
                    <span className={getNavClass(NAV_ENUM.CATEGORY_PAGE, activeNav)}>分类</span>
                    <div className="category-box hidden group-hover:block absolute top-full left-0 py-2">
                        <div className="w-0 relative left-6 h-0 border-l-8 border-r-8 border-b-8 border-transparent border-b-slate-100"></div>
                        <div className="flex flex-col bg-white border border-slate-100 rounded">
                            {categoryList.map(item => {
                                return (
                                    <Link
                                        key={item.id}
                                        title={item.name}
                                        href={item.jump_url}
                                        className="text-xs hover:text-primary px-6 py-2 hover:bg-gray-50"
                                    >
                                        {item.name}
                                    </Link>
                                )
                            })}
                        </div>
                    </div>
                </div>
                <Link href="/about" className={`${getNavClass(NAV_ENUM.ABOUT_PAGE, activeNav)} pr-0`}>
                    关于
                </Link>
            </div>

            <Search />
        </header>
    )
}

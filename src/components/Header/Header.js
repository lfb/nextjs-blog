"use client"
import {usePathname} from 'next/navigation';

import Link from 'next/link';
import Image from 'next/image';

import LogoImage from '@/assets/images/common/logo.png'
import HeaderCss from '@/components/Header/Header.module.css'

import {navList, getNavActiveIndex, getNavClass} from '@/lib/nav';

export default function BlogHeader(context){
    let activeIndex = getNavActiveIndex(usePathname())

    return (
        <header className="blog-header pt-10 pb-16 flex items-center justify-between">
            <Link href="/" title="波波博客 - www.boblog.com" className={`block ${HeaderCss['logo']}`}>
                <Image className={HeaderCss['logo-image']} src={ LogoImage } width={ 148 } alt="波波博客 - www.boblog.com"/>
            </Link>
            <div className="flex items-center">
                {
                    navList.map((item, index) => {
                        return (
                            <Link
                                key={ item.href }
                                className={ getNavClass(index, activeIndex) }
                                href={ item.href }
                                title={item.title}
                            >
                                { item.title }
                            </Link>
                        )
                    })
                }
            </div>
        </header>
    )
}

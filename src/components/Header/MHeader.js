import Link from 'next/link'
import Image from 'next/image'

import LogoImage from '@/assets/images/common/logo.png'
import Search from '@/components/Search/Search'
import HeaderSidebar from '@/components/Header/HeaderSidebar'

async function MHeader({ activeNav, categoryList }) {
    const isM = 1

    return (
        <>
            <header className="blog-header pt-4 pb-6">
                <div className="flex items-center justify-between">
                    <HeaderSidebar categoryList={categoryList} />
                    <Link href="/" title="波波博客 - www.boblog.com" className="block w-32">
                        <Image src={LogoImage} width="0" height="0" sizes="100vw" className="w-full h-auto" alt="波波博客 - www.boblog.com" />
                    </Link>
                    <Search isM={isM} />
                </div>
            </header>
        </>
    )
}

export default MHeader

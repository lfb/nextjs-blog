import Link from 'next/link'
// import Image from 'next/image'

import '@/assets/css/about/about.css'
import BlogHeader from '@/components/Header/Header'
import { NAV_ENUM } from '@/lib/nav'

export const metadata = {
    title: '关于博客 - boblog.com',
    description: '前端工程师的技术与生活记录！',
    keywords: '波波博客,前端开发,前端工程师,JavaScript,nodejs,boblog.com'
}

export default function About() {
    return (
        <>
            <BlogHeader activeNav={NAV_ENUM.ABOUT_PAGE} />
            <div className="article-list text-3xl font-medium mb-8 px-4">关于</div>
            <div className="about px-4 flex">
                <div className="about-lef flex-1">
                    <p>你好！</p>
                    <p>我是 BOBO，也叫 Bobby，一名在二次元和代码世界中穿梭的程序员。</p>
                    <p>
                        我非常喜爱这个网站，因为它一个非常帅气的域名：
                        <Link className="text-primary hover:underline" href={'https://boblog.com'}>
                            BoBlog.com
                        </Link>
                        ， 还有一个极具美感的 Logo。
                    </p>
                    <p>我喜欢极简的风格，简单的生活，这也是这个网站设计干净、内容简洁的原因。</p>
                    <p>希望我的分享能对你有所帮助！</p>
                </div>
                {/*<div className="about-right ml-8">*/}
                {/*<Image src="/assets/banner.jpg" className="rounded" width={148} height={100} alt={'11'} />*/}
                {/*</div>*/}
            </div>
        </>
    )
}

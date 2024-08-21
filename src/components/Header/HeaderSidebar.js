'use client'
import { Drawer } from 'antd'
import MenuIcon from '@/components/Icon/MenuIcon'
import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import LogoImage from '../../assets/images/common/logo.png'
import { getNavClass, NAV_ENUM } from '../../lib/nav'

export default function HeaderSidebar({ activeNav, categoryList }) {
    const [isOpen, setIsOpen] = useState(false)
    const onShow = () => setIsOpen(true)
    const onClose = () => setIsOpen(false)

    return (
        <>
            <div className="pl-4" onClick={onShow}>
                <MenuIcon />
            </div>
            <Drawer
                autoFocus={false}
                styles={{ body: { padding: '1.5rem' } }}
                placement="left"
                open={isOpen}
                width={'60%'}
                closable={false}
                onClose={onClose}
                key="left"
            >
                <Link href="/" title="波波博客 - www.boblog.com" className="block w-36 mb-8">
                    <Image src={LogoImage} width="0" height="0" sizes="100vw" className="w-full h-auto" alt="波波博客 - www.boblog.com" />
                </Link>

                <div className="flex flex-col">
                    {categoryList.map(item => {
                        return (
                            <Link key={item.id} className="w-full text-base text-slate-800 py-2" title={item.name} href={item.jump_url}>
                                {item.name}
                            </Link>
                        )
                    })}

                    <Link href="/about" className="w-full text-base text-slate-800 py-2">
                        关于
                    </Link>
                </div>
            </Drawer>
        </>
    )
}

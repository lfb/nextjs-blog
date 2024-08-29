import { Inter } from 'next/font/google'
import '@/assets/css/common/globals.css'
import '@/assets/css/common/flexible.css'
const inter = Inter({ subsets: ['latin'] })
import { AntdRegistry } from '@ant-design/nextjs-registry'
import Copyright from '@/components/Common/Copyright'
import TopProgressBar from '@/components/Common/TopProgressBar'

export const viewport = {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
    minimumScale: 1,
    userScalable: 'no'
}

export const metadata = {
    icons: {
        icon: '/favicon.ico'
    }
}

export default function RootLayout({ children }) {
    return (
        <html lang="zh-CN">
            <body className={`${inter.className}`}>
                <AntdRegistry>
                    <>
                        <div className="max-w-3xl mx-auto main-min-height">{children}</div>
                        <Copyright />
                        <TopProgressBar />
                    </>
                </AntdRegistry>
            </body>
        </html>
    )
}

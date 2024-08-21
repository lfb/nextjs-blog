import { Inter } from 'next/font/google'
import '@/assets/css/common/globals.css'
import '@/assets/css/common/flexible.css'
const inter = Inter({ subsets: ['latin'] })
import { AntdRegistry } from '@ant-design/nextjs-registry'

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={`${inter.className} max-w-3xl mx-auto`}>
                <AntdRegistry>
                    {children}
                    <p className="pb-8 pt-2 text-xs text-gray-400">
                        <span className=" mr-4">Copyright © boblog.com</span>
                        <a href="https://beian.miit.gov.cn/" target={'_blank'}>
                            粤ICP备2024174519号-1
                        </a>
                    </p>
                </AntdRegistry>
            </body>
        </html>
    )
}

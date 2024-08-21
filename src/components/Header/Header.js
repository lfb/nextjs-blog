import { getCategoryList } from '@/requests/api/category'
import { isArray, isObject } from '@/lib/utils'
import { getCategoryURL } from '@/lib/regular-url'

import PCHeader from '@/components/Header/PCHeader'
import MHeader from '@/components/Header/MHeader'

import '@/assets/css/header/header.css'

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
        <div className="px-4">
            <div className="header-pc">
                <PCHeader categoryList={categoryList} activeNav={activeNav} />
            </div>
            <div className="header-mobile">
                <MHeader categoryList={categoryList} activeNav={activeNav} />
            </div>
        </div>
    )
}

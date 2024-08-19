import Link from 'next/link'

import { isArray } from '@/lib/utils'
import { getCategoryURL } from '@/lib/regular-url'

export default function CategoryList({ categoryList }) {
    return (
        <div className="category-list">
            <div className="text-3xl font-medium mb-8">分类</div>
            <div className="category-list">
                {isArray(categoryList) &&
                    categoryList.map((category, index) => {
                        return (
                            <Link
                                key={category.id}
                                className=" category-item inline-block px-2 py-1.5 mr-3 mb-3 border text-xs hover:text-primary hover:border-primary"
                                href={getCategoryURL(category)}
                            >
                                {category.name} <span className="text-slate-400">({index})</span>
                            </Link>
                        )
                    })}
            </div>
        </div>
    )
}

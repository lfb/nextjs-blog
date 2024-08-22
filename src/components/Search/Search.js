'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { getSearchURL } from '@/lib/regular-url'

function Search({ isM }) {
    const router = useRouter()
    const [keyword, setKeyword] = useState('')

    const handleSearchInputChange = e => {
        setKeyword(e.target.value)
    }

    const handleSearchKeyDown = e => {
        if (keyword && e.key === 'Enter') {
            router.push(getSearchURL(keyword))
            setKeyword('')
        }
    }

    return (
        <div className={isM ? 'flex-1 ml-4' : ''}>
            <input
                type="search"
                required={true}
                placeholder="搜索"
                className={`
                    search-input placeholder:text-sm placeholder:text-slate-400
                    focus:outline-none
                    focus:border-primary
                    focus:bg-white
                    focus:shadow
                     text-sm
                      border
                      border-slate-200
                     outline-0
                     text-slate-800
                     rounded-full
                     px-4
                     py-1.5
                     cursor-pointer
                     ${isM ? 'w-full' : 'w-64'}
                  `}
                onChange={handleSearchInputChange}
                onKeyDown={handleSearchKeyDown}
            />
        </div>
    )
}

export default Search

'use client'
import { useState } from 'react'

function Search() {
    const [keyword, setKeyword] = useState('')

    const handleSearchInputChange = e => {
        setKeyword(e.target.value)
    }

    const handleSearchKeyDown = e => {
        if (keyword && e.key === 'Enter') {
            setKeyword('')
            setTimeout(() => {
                window.location.href = `/articles?keyword=${encodeURIComponent(keyword)}`
            })
        }
    }

    return (
        <div className="relative search">
            <input
                type="text"
                required={true}
                placeholder="搜索"
                className="
                    search-input placeholder:text-xs placeholder:text-slate-400
                    focus:outline-none
                     text-sm
                     border
                     outline-0
                     border-slate-200
                     text-slate-800
                     rounded-full
                     px-4
                     py-1.5"
                onChange={handleSearchInputChange}
                onKeyDown={handleSearchKeyDown}
            />
        </div>
    )
}

export default Search
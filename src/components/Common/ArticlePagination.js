import Link from 'next/link'

export default function ArticlePagination({ totalPages, currentPage }) {
    return (
        totalPages > 1 && (
            <div className="p-4 text-sm text-slate-600">
                <span className="mr-4">页码:</span>
                {Array.from({ length: totalPages }, (v, k) => k + 1).map((page, index) => {
                    return (
                        <Link key={index} href={`/?page=${page}`} className={`p-3 py-1 rounded-md ${currentPage === page ? 'border' : ''}`}>
                            {page}
                        </Link>
                    )
                })}
            </div>
        )
    )
}

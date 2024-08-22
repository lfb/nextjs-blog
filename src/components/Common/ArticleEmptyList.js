import EmptyListIcon from '@/components/Icon/EmptyListIcon'

export default function ArticleEmptyList({ msg }) {
    return (
        <div className="article-empty-list flex flex-col justify-center items-center text-center my-16">
            <EmptyListIcon />
            <div className="py-2 text-sm text-slate-400 font-normal">{msg || '暂无数据哦~'}</div>
        </div>
    )
}

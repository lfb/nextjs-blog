import Empty404Icon from '@/components/Icon/Empty404Icon'

export default function ArticleEmptyDetail({ msg }) {
    return (
        <div className="article-empty-list flex flex-col justify-center items-center text-center mt-24">
            <Empty404Icon />
            <div className="py-4 text-sm text-slate-400 font-normal">{msg || '暂无数据哦~'}</div>
        </div>
    )
}


export default function CategoryArticles({ params, query, searchParams }) {
    const [id, name] = params.ids || []

    return (
        <div>
            <h1>CategoryArticles: { id }, {name}</h1>
        </div>
    )
}

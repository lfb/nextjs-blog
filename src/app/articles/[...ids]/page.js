
export default function ArticlesDetails({ params, query, searchParams }) {
    const [id, path] = params.ids || []

    return (
        <div>
            <h1>Articles Details: { id}, {path}</h1>
        </div>
    )
}

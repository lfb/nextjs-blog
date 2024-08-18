import Link from 'next/link';

export default function CategoryList() {
  return (
    <div className="category-list">
        <div className="text-2xl font-medium mb-6">分类</div>
        <div className="category-list">
            {
                [
                    'react', 'vue', 'node', 'webpack',
                    'git', 'css', 'html', 'css', 'javascript', 'react', 'vue'].map((c, i) => {
                    return (
                        <Link key={ c }
                            className="
                                        category-item inline-block px-2 py-1.5 mr-3 mb-3 border text-xs
                                         hover:text-primary hover:border-primary"
                            href={ `/category/${ i }/${ c }` }>
                            { c } <span className="text-slate-400">({ i })</span>
                        </Link>
                    )
                })
            }
        </div>
    </div>
  );
}

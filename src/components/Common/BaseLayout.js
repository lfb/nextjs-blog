import BlogHeader from '@/components/Header/Header'

export default function BaseLayout({ activeNav, children }) {
    return (
        <>
            <BlogHeader activeNav={activeNav} />
            {children}
        </>
    )
}

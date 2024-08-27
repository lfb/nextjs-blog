function Copyright() {
    return (
        <div className="h-10 flex items-center justify-center px-4 text-center bg-slate-50 text-xs text-gray-400">
            <span className=" mr-4">
                Copyright &copy; <a href={process.env.NEXT_PUBLIC_DOMAIN}>www.boblog.com</a>
            </span>
            <a href="https://beian.miit.gov.cn/" target={'_blank'}>
                粤ICP备2024174519号-1
            </a>
        </div>
    )
}

export default Copyright

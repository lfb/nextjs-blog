// 导航列表
export const navList = [
    {
        title: '首页',
        href: '/'
    },
    {
        title: '归档',
        href: '/articles'
    },
    {
        title: '关于',
        href: '/about'
    }
]

/**
 * 获取当前激活导航索引
 * @param pathName 当前路径
 * @returns {number}
 */
export function getNavActiveIndex(pathName) {
    let activeIndex = 0
    if(pathName !== '/') {
        activeIndex = navList.slice(1).findIndex(nav => pathName.indexOf(nav.href) > -1) + 1
    }

    return activeIndex
}

/**
 * 获取导航样式
 *
 * @param index 导航索引
 * @param activeIndex 当前激活导航索引
 * @returns {string}
 */
export function getNavClass(index, activeIndex) {
    let classNames = 'nav-links px-4 hover:text-primary hover:font-bold'
    if(index === activeIndex) {
        classNames += ' font-bold text-primary'
    }
    if(index === navList.length - 1) {
        classNames += ' pr-0'
    }

    return classNames
}

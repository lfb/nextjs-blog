export const NAV_ENUM = {
    HOME_PAGE: 'HOME_PAGE', // 首页
    ARTICLES_PAGE: 'ARTICLES_PAGE', // 文章
    CATEGORY_PAGE: 'CATEGORY_PAGE', // 分类
    ABOUT_PAGE: 'ABOUT_PAGE' // 关于
}

/**
 * 获取导航样式
 *
 * @param currentNav 导航索引
 * @param activeNav 当前激活导航索引
 * @returns {string}
 */
export function getNavClass(currentNav, activeNav) {
    let classNames = 'nav-links px-2 hover:text-primary hover:font-bold'
    if (currentNav === activeNav) {
        classNames += ' font-medium text-primary'
    }

    return classNames
}

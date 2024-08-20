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
 * @param isM 是否移动端
 * @returns {string}
 */
export function getNavClass(currentNav, activeNav, isM) {
    let classNames = 'inline-block nav-links hover:text-primary hover:font-bold'

    if (isM) {
        classNames += ' mr-4'
    } else {
        classNames += ' px-4'
    }
    if (currentNav === activeNav) {
        classNames += ' font-medium text-primary'
    }

    return classNames
}

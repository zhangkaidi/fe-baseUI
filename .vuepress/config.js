module.exports = {
    dest: './dist',    // 设置输出目录
    base: '/', // 设置站点根路径
    title: '基础业务研发部-前端基础框架',
    description: 'Just playing around',
    themeConfig: {
        displayAllHeaders: true // 默认值：false
    },
    themeConfig: {
        nav: [
            { text: '首页', link: '/' }
        ],
        sidebar: {
            '/': [
                '',
                '/guide/'
            ]
        }
    }
}
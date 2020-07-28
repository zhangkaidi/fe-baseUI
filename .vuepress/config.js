module.exports = {
    dest: './dist',    // 设置输出目录
    base: '/fe-baseUI/', // 设置站点根路径
    title: '基础业务研发部-前端基础框架',
    description: '开箱即用',
    themeConfig: {
        displayAllHeaders: true // 默认值：false
    },
    themeConfig: {
        nav: [
            { text: '首页', link: '/' }
        ],
        sidebar: {
            '/guide/': [
                '',
            ],
            '/': [
                '',
                'about'
            ]
        }
    }
}
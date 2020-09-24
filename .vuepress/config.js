module.exports = {
    dest: './dist',    // 设置输出目录
    base: '/fe-baseUI/', // 设置站点根路径
    title: '原型之家',
    description: '推动UI标准化',
    themeConfig: {
        displayAllHeaders: true // 默认值：false
    },
    themeConfig: {
        nav: [
            { text: '首页', link: '/' }
        ],
        sidebar: [{
            title: '组件指南【已发布】',
            collapsable: false,
            children: [
                ['/docs/Cartain/', '弹层组件'],
                ['/docs/Toast/', 'Toast组件'],
                ['/docs/Error/', '异常页面'],
                ['/docs/Tabs/','Tabs组件'],
                ['/docs/GoTop/','回到顶部'],
                ['/docs/Marquee/','新闻通知'],
            ]
        }, {
            title: '组件指南【待发布】',
            collapsable: true,
            children: [
                ['/docs/Feed/','Feed流'],
                ['/docs/LoadMore/','上拉加载'],
                ['/docs/Refresh/','下拉刷新'],
                ['/docs/FloatIcon/','右下角浮框']
            ]
        }]
    }
}
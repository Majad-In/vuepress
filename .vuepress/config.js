module.exports = {
    title: 'VueDocs',
    discription: 'I am learing it vuepress',
    themeConfig: {
        nav: [
            {text: 'Home', link: '/'},
            {text: 'Guide', link: '/guide'},
            {text: 'About me', link: 'about'},
        ],
        sidebar: {
            '/guide/': [
                '',
                'frontend',
                'backend'
            ]
        }
    }
}
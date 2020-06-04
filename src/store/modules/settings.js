export default {
  namespaced: true,
  state: {
    isMobile: false,
    theme: 'dark',
    layout: 'side',
    systemName: '东奥大数据平台',
    copyright: '2020 东奥教育集团-大数据组',
    footerLinks: [
      {link: 'https://www.dongao.com', name: '官网'},
      {link: 'https://passport.dongao.com/login?redirectUrl=https://www.dongao.com/', name: '登陆'},
      {link: 'https://ant.design', name: '学习中心'}
    ],
    multipage: true
  },
  mutations: {
    setDevice (state, isMobile) {
      state.isMobile = isMobile
    },
    setTheme (state, theme) {
      state.theme = theme
    },
    setLayout (state, layout) {
      state.layout = layout
    },
    setMultipage (state, multipage) {
      state.multipage = multipage
    }
  }
}

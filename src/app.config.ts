export default {
  pages: [
    'pages/index/index', // 首页
    'pages/personal/index', // 个人中心
    'pages/login/index'
  ],
  window: {
    backgroundTextStyle: 'light',      // 下拉 loading 的样式，仅支持 dark / light
    navigationBarBackgroundColor: '#fff', // 导航栏背景颜色
    navigationBarTitleText: 'WeChat',  // 导航栏标题文字内容
    navigationBarTextStyle: 'black',   // 导航栏标题颜色，仅支持 black / white
  },
  tabBar: {
    color: '#ccc',
    selectedColor: '#000',
    backgroundColor: '#fff',
    borderStyle: 'white',
    position: 'bottom',
    list: [
      {
        pagePath: 'pages/index/index',
        text: '首页'
      },
      {
        pagePath: 'pages/personal/index',
        text: '个人中心'
      }
    ]
  },
  debug: process.env.NODE_ENV === 'development' ? true : false,
  permission: {
    'scope.userLocation': {
      desc: '你的位置信息将用于小程序位置接口的效果展示'
    },
    'scope.userInfo': {
      desc: '你的信息将用于小程序展示使用'
    }
  },
}

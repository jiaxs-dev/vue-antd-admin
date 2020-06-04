import {getCookie, isNotBlank, removeCookie, setCookie} from "../../utils/commonFun";

const state = {
  user: {
    loginTime: '',
    userName: 'admin',
    token: '',
    menus: [],
    uris: [],
    avatar: "https://gw.alipayobjects.com/zos/rmsportal/BiazfanxmamNRoxxVxka.png"
  }
};

const getters = {
  userName: state => {
    return isNotBlank(state.user.userName) ? state.user.userName : getCookie("userName");
  },
  token: state => {
    return isNotBlank(state.user.token) ? state.user.token : getCookie("token");
  }
};

const mutations = {
  initMenus(state, menus) {

  },
  initUris() {

  },
  login(state, userInfo) {
    console.log("登陆开始存储用户名和token")
    console.log(userInfo)
    state.user.userName = userInfo.userName;
    state.user.token = userInfo.token;
    setCookie("userName", userInfo.userName, 30);
    setCookie("token", userInfo.token, 30);
  },
  logout(state) {
    state.user.userName = '';
    state.user.token = '';
    removeCookie("userName");
    removeCookie("token");
  }
};

const actions = {
  login(context, userInfo) {
    context.commit('login', userInfo);
  }
};

export default {
  namespaced: true,
  getters,
  state,
  mutations,
  actions
}

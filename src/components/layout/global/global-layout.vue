<template>
  <a-layout>
    <drawer v-if="isMobile" :openDrawer="collapsed" @change="onDrawerChange">
      <sider-menu :theme="theme" :menuData="menuData" :collapsed="false" :collapsible="false"
                  @menuSelect="onMenuSelect"/>
    </drawer>
    <Menu :theme="theme" v-else-if="layout === 'side'" :menuData="menuData" :collapsed="collapsed"
          :collapsible="true"/>
    <!--<drawer :open-drawer="showSetting" placement="right"  @change="onSettingDrawerChange">
      <div class="setting" slot="handler">
        <a-icon :type="showSetting ? 'close' : 'setting'" />
      </div>
      <setting />
    </drawer>-->
    <a-layout>
      <Header :menuData="menuData" :collapsed="collapsed" @toggleCollapse="toggleCollapse"/>
      <a-layout-content :style="{minHeight: minHeight, margin: '24px 24px 0'}">
        <slot></slot>
      </a-layout-content>
      <a-layout-footer style="padding: 0px">
        <Footer :link-list="linkList" :copyright="copyright"/>
      </a-layout-footer>
    </a-layout>
  </a-layout>
</template>

<script>
  import Header from '../../head/header'
  import Footer from '../../footer/footer'
  import Menu from '../../menu/menu'

  const minHeight = window.innerHeight - 64 - 24 - 122

  let menuData = []

  export default {
    name: 'GlobalLayout',
    components: {Footer, Header, Menu},
    data() {
      return {
        minHeight: minHeight + 'px',
        collapsed: false,
        menuData: menuData,
        showSetting: false
      }
    },
    computed: {
      isMobile() {
        return this.$store.state.settings.isMobile
      },
      theme() {
        return this.$store.state.settings.theme
      },
      layout() {
        return this.$store.state.settings.layout
      },
      linkList() {
        return this.$store.state.settings.footerLinks
      },
      copyright() {
        return this.$store.state.settings.copyright
      }
    },
    methods: {
      toggleCollapse() {
        this.collapsed = !this.collapsed
      },
      onDrawerChange(show) {
        this.collapsed = show
      },
      onMenuSelect() {
        this.toggleCollapse()
      },
      onSettingDrawerChange(val) {
        this.showSetting = val
      }
    },
    beforeCreate() {
      console.log(menuData)
      menuData = this.$router.options.routes.find((item) => item.path === '/').children
      console.log(menuData)
    }
  }
</script>

<style lang="less" scoped>

</style>

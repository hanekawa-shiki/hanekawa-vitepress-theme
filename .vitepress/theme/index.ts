// https://vitepress.dev/guide/custom-theme
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import type { EnhanceAppContext } from 'vitepress'
import TwoslashFloatingVue from '@shikijs/vitepress-twoslash/client'
import MyLayout from './components/MyLayout.vue'
// css
import './styles/index.less'

export default {
  extends: DefaultTheme,
  // 使用注入插槽的包装组件覆盖 Layout
  Layout: MyLayout,
  // 注册自定义全局组件
  enhanceApp({ app, router, siteData }: EnhanceAppContext) {
    app.use(TwoslashFloatingVue)
  }
} satisfies Theme

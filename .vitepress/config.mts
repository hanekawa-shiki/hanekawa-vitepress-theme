import { defineConfigWithTheme } from 'vitepress'
import { transformerTwoslash } from '@shikijs/vitepress-twoslash'
import type { DefaultTheme } from 'vitepress'
import type { ThemeConfig } from './theme/types/index'

// https://vitepress.dev/reference/site-config
export default defineConfigWithTheme<ThemeConfig | DefaultTheme.Config>({
  title: "vitepress theme",
  description: "A vitepress theme",
  themeConfig: {

    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  },
  markdown: {
    codeTransformers: [
      transformerTwoslash()
    ]
  }
})

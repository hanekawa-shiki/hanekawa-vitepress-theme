import type { DefaultTheme } from 'vitepress'

// logo ?: ThemeableImage
// logoLink ?: string | { link?: string; rel?: string; target?: string }
// siteTitle ?: string | false
// outline ?: Outline | Outline['level'] | false
// outlineTitle ?: string
// nav ?: NavItem[]
// sidebar ?: Sidebar
// aside ?: boolean | 'left'
// editLink ?: EditLink
// lastUpdatedText ?: string
// lastUpdated ?: LastUpdatedOptions
// docFooter ?: DocFooter
// socialLinks ?: SocialLink[]
// footer ?: Footer
// darkModeSwitchLabel ?: string
// lightModeSwitchTitle ?: string
// darkModeSwitchTitle ?: string
// sidebarMenuLabel ?: string
// returnToTopLabel ?: string
// langMenuLabel ?: string
// search ?:
//       | { provider: 'local'; options?: LocalSearchOptions }
//   | { provider: 'algolia'; options: AlgoliaSearchOptions }

// algolia ?: AlgoliaSearchOptions

// carbonAds ?: CarbonAdsOptions
// i18nRouting ?: boolean
// externalLinkIcon ?: boolean
// notFound ?: NotFoundOptions

// interface copyright {
//   url?: string
//   content: string
// }

export interface ThemeConfig extends DefaultTheme.Config {
  copyright?: string | {
    githubUrl?: string
    content: string
  }
}
<template>
  <!-- 
当 layout: 'doc' (默认) 在 frontmatter 中被启用时：
  doc-top
  doc-bottom
  doc-footer-before
  doc-before
  doc-after
  sidebar-nav-before
  sidebar-nav-after
  aside-top
  aside-bottom
  aside-outline-before
  aside-outline-after
  aside-ads-before
  aside-ads-after
当 layout: 'home' 在 frontmatter 中被启用时:
  home-hero-before
  home-hero-info-before
  home-hero-info
  home-hero-info-after
  home-hero-actions-after
  home-hero-image
  home-hero-after
  home-features-before
  home-features-after
当 layout: 'page' 在 frontmatter 中被启用时:
  page-top
  page-bottom
当未找到页面 (404) 时:
  not-found
总是启用:
  layout-top
  layout-bottom
  nav-bar-title-before
  nav-bar-title-after
  nav-bar-content-before
  nav-bar-content-after
  nav-screen-content-before
  nav-screen-content-after
-->
  <Layout> </Layout>
  <CopyWright />
</template>

<script setup>
import DefaultTheme from "vitepress/theme";
import CopyWright from './CopyWright.vue'

const { Layout } = DefaultTheme;
</script>

<style lang="less" scoped></style>

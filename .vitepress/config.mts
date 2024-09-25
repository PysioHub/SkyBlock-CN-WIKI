import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Hypixel Skyblock 中文文档",
  description: "暂时不知道写啥",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '主页', link: '/' }
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: '欢迎来到Skyblock', link: '/docs/index' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/PysioHub/SkyBlock-CN-WIKI' }
    ]
  }
})

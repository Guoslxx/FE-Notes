import { defineUserConfig } from "vuepress";
import type { DefaultThemeOptions } from "vuepress";

export default defineUserConfig<DefaultThemeOptions>({
  // 站点配置
  lang: "en-US",
  title: "FE Notes",
  description: "Just playing around",

  // 主题和它的配置
  theme: "@vuepress/theme-default",
  themeConfig: {
    logo: "https://vuejs.org/images/logo.png",
    // 顶部导航
    navbar: [],
    // 侧边栏
    sidebar: [
      // SidebarItem
      {
        text: "JS基础",
        link: "/js-basic",
      },
      // 字符串 - 页面文件路径
      "/bar/README.md",
    ],
  },
  port: 3000,
});

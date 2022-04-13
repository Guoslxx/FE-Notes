import { defineUserConfig } from "vuepress";
import type { DefaultThemeOptions } from "vuepress";
import { sidebarConfig } from "./config/sidebar";

export default defineUserConfig<DefaultThemeOptions>({
  // 站点配置
  lang: "zh-cn",
  title: "苍山牧云",
  description: "Just do it.",
  base: "/FE-Notes/",
  // 主题和它的配置
  theme: "@vuepress/theme-default",
  themeConfig: {
    logo: "https://vuejs.org/images/logo.png",
    // 顶部导航
    navbar: [
      { text: "FE Notes", link: "/notes" },
      { text: "Bookmarks", link: "/bookmarks" },
    ],
    // 侧边栏
    sidebar:sidebarConfig
  },
  port: 3000,
});

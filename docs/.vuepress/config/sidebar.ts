import type { SidebarConfig } from "@vuepress/theme-default";

export const sidebarConfig: SidebarConfig = {
  "/notes": [
    { text: "Javascript", link: "/notes/javascript" },
    { text: "前端工程化", link: "/notes/front-end-enginnering" },
    { text: "浏览器", link: "/notes/browser" },
    { text: "面试题", link: "/notes/interview" },
  ],
  "/":[]
};

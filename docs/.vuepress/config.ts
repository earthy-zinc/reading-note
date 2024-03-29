import { defineUserConfig } from "vuepress";
import fullTextSearchPlugin from "vuepress-plugin-full-text-search2";
import theme from "./theme";


export default defineUserConfig({
  base: "/",
  lang: "zh-CN",
  title: "土味锌的阅读笔记",
  description: "全栈开发学习笔记",
  theme,
  plugins: [
    // @ts-ignore
    fullTextSearchPlugin({
      locales: {
        '/': {
          placeholder: "搜索"
        }
      }
    })
  ],
});

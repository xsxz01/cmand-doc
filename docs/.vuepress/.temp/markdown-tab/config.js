import { CodeTabs } from "C:/Sheencity/Workspace/cmand-doc/node_modules/.pnpm/@vuepress+plugin-markdown-t_417bbffdd265ef2f2a3ac165d2a1e1c0/node_modules/@vuepress/plugin-markdown-tab/lib/client/components/CodeTabs.js";
import { Tabs } from "C:/Sheencity/Workspace/cmand-doc/node_modules/.pnpm/@vuepress+plugin-markdown-t_417bbffdd265ef2f2a3ac165d2a1e1c0/node_modules/@vuepress/plugin-markdown-tab/lib/client/components/Tabs.js";
import "C:/Sheencity/Workspace/cmand-doc/node_modules/.pnpm/@vuepress+plugin-markdown-t_417bbffdd265ef2f2a3ac165d2a1e1c0/node_modules/@vuepress/plugin-markdown-tab/lib/client/styles/vars.css";

export default {
  enhance: ({ app }) => {
    app.component("CodeTabs", CodeTabs);
    app.component("Tabs", Tabs);
  },
};

import { CodeTabs } from "C:/Sheencity/Workspace/cmand-doc/node_modules/.pnpm/@vuepress+plugin-markdown-t_9148936413d0ee86c2304b5d831b6a23/node_modules/@vuepress/plugin-markdown-tab/lib/client/components/CodeTabs.js";
import { Tabs } from "C:/Sheencity/Workspace/cmand-doc/node_modules/.pnpm/@vuepress+plugin-markdown-t_9148936413d0ee86c2304b5d831b6a23/node_modules/@vuepress/plugin-markdown-tab/lib/client/components/Tabs.js";
import "C:/Sheencity/Workspace/cmand-doc/node_modules/.pnpm/@vuepress+plugin-markdown-t_9148936413d0ee86c2304b5d831b6a23/node_modules/@vuepress/plugin-markdown-tab/lib/client/styles/vars.css";

export default {
  enhance: ({ app }) => {
    app.component("CodeTabs", CodeTabs);
    app.component("Tabs", Tabs);
  },
};

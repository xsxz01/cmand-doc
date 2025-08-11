import { GitContributors } from "C:/Sheencity/Workspace/cmand-doc/node_modules/.pnpm/@vuepress+plugin-git@2.0.0-_0057d2d1eb87e08ac4ab9aa558dc6b79/node_modules/@vuepress/plugin-git/lib/client/components/GitContributors.js";
import { GitChangelog } from "C:/Sheencity/Workspace/cmand-doc/node_modules/.pnpm/@vuepress+plugin-git@2.0.0-_0057d2d1eb87e08ac4ab9aa558dc6b79/node_modules/@vuepress/plugin-git/lib/client/components/GitChangelog.js";

export default {
  enhance: ({ app }) => {
    app.component("GitContributors", GitContributors);
    app.component("GitChangelog", GitChangelog);
  },
};

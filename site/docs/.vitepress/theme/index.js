import DefaultTheme from 'vitepress/theme';

import mholosUI from 'mholos-ui';

export default {
  ...DefaultTheme,
  enhanceApp: async ({ app }) => {
    app.use(mholosUI);
  }
};

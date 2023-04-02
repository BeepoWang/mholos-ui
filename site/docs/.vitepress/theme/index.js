import DefaultTheme from 'vitepress/theme';

import mholos from 'mholos-ui';

export default {
  ...DefaultTheme,
  enhanceApp: async ({ app }) => {
    app.use(mholos);
  }
};

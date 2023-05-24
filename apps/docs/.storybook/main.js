const path = require("path");
module.exports = {
  stories: ["../stories/**/*.stories.mdx", "../../../packages/ui/ui-divergana/src/**/*.stories.tsx"],
  addons: ["@storybook/addon-links", "@storybook/addon-essentials", "@storybook/addon-postcss"
  //'@storybook/addon-interactions',
  //'@storybook/addon-jest',
  ],
  framework: '@storybook/react-vite',
  async viteFinal(config, {
    configType
  }) {

    const _config = {
      ...config,
    };
   
    return _config;
  },
  docs: {
    autodocs: true
  }
};
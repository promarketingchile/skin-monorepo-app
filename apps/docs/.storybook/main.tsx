module.exports = {
  stories: ['../stories/**/*.stories.@(js|jsx|ts|tsx)',"../../../packages/ui/ui-divergana/src/**/*.stories.tsx"],
  addons: ["@storybook/addon-links", "@storybook/addon-essentials",
  '@storybook/addon-interactions',
  //'@storybook/addon-jest',
  ],
  framework: '@storybook/react-vite',
  async viteFinal(config) { return config; },
  docs: {
    autodocs: true
  }
};
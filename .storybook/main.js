// This file has been automatically migrated to valid ESM format by Storybook.
import { createRequire } from "node:module";
const require = createRequire(import.meta.url);
/** @type { import('@storybook/react-webpack5').StorybookConfig } */
const config = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: ["@storybook/addon-links", "@storybook/addon-onboarding", {
    name: '@storybook/addon-styling-webpack',
    options: {
      rules: [
        // Replaces any existing Sass rules with given rules
        {
          test: /\.(sa|sc|c)ss$/,
          use: [
            "style-loader",
            "css-loader",
            {
              loader: "sass-loader",
              options: { implementation: require.resolve("sass") }
            },
          ],
        },
      ]
    }
  }, "@storybook/addon-webpack5-compiler-swc", "@storybook/addon-docs"],
  framework: {
    name: "@storybook/react-webpack5",
    options: {
      builder: {},
    },
  },
  docs: {},
};
export default config;

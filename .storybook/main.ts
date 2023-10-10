const config = {
  staticDirs: ['../public'],
  stories: ['../src/components/**/stories.tsx'],
  addons: [
    //'@storybook/addon-links',
    //'@storybook/addon-interactions',
    //'@storybook/addon-postcss',
    '@storybook/addon-essentials',
    'storybook-tailwind-dark-mode'
  ],
  framework: {
    name: '@storybook/nextjs',
    options: {}
  },
  docs: {
    autodocs: true
  },
  webpackFinal: (config) => {
    config.resolve.modules.push(`${process.cwd()}/src`)
    return config
  }
}
export default config

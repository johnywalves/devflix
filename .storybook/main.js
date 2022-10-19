module.exports = {
  stories: ['../src/components/**/*stories.tsx', '../src/views/**/*stories.tsx'],
  addons: ['@storybook/addon-essentials', 'storybook-addon-next-router'],
  core: {
    builder: 'webpack5'
  },
  webpackFinal: (config) => {
    config.resolve.modules.push(`${process.cwd()}/src`)
    return config
  }
}

import type { StorybookConfig } from '@storybook/nextjs'

const config: StorybookConfig = {
  stories: [
    '../src/**/*.mdx',
    '../src/components/**/*stories.tsx',
    '../src/views/**/*stories.tsx'
  ],
  addons: ['@storybook/addon-essentials'],
  staticDirs: ['../public'],
  webpackFinal: (config) => {
    config?.resolve?.modules?.push(`${process.cwd()}/src`)
    return config
  },
  framework: {
    name: '@storybook/nextjs',
    options: {}
  },
  docs: {
    autodocs: 'tag',
    defaultName: 'Overview'
  }
}

export default config

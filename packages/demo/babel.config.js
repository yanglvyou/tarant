// babel-preset-taro 更多选项和默认值：
// https://github.com/NervJS/taro/blob/next/packages/babel-preset-taro/README.md
module.exports = {
  presets: [
    [
      'taro',
      {
        framework: 'react',
        ts: true,
      },
    ],
  ],
  plugins: [
    [
      'import',
      {
        libraryName: '@tarant/core',
        customName: name => `@tarant/core/lib/components/${name.replace(/^os-/, '')}`,
        customStyleName: name =>
          `@tarant/core/dist/styles/components/${name.replace(/^os-/, '')}/index.scss`,
      },
      '@tarant/core',
    ],
    [
      'import',
      {
        libraryName: 'ossaui',
        customName: name => `ossaui/lib/components/${name.replace(/^os-/, '')}`,
        customStyleName: name => `ossaui/dist/style/components/${name.replace(/^os-/, '')}.scss`,
      },
      'ossaui',
    ],
  ],
};

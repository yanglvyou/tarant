# tarant

## 快速上手

Tarant 目前支持 Taro3，Taro1/Taro2 版本敬请期待。

#### 安装

1. 首先需要有一个基于 Taro 的 React 项目，详细请参考[Taro 快速开始](https://docs.taro.zone/docs/GETTING-STARTED)

```bash
npm install -g @tarojs/cli
taro init myApp
```

2. 安装 @tarant/core

```bash
npm install @tarant/core
```

#### 使用

1. 在入口文件中引入样式文件

```javascript
// app.tsx
import '@tarant/core/dist/style/index.scss'

// 或者在app.scss中引入
@import '~@tarant/core/dist/style/index.scss'
```

2. 配置编译时对组件库进行编译

> 如果不对组件库进行编译，组件库内的样式文件不会经过 postcss 处理

```javascript
module.exports = {
  // ...
  h5: {
    // ...
    esnextModules: ['@tarant/core'],
  },
};
```

3. 在页面中引入`@tarant/core`组件

```javascript
// page/index.tsx
import { OsButton } from '@tarant/core';

const demo = () => {
  return (
    <OsButton type="primary" onClick={() => handleClick()}>
      按钮
    </OsButton>
  );
};
```

#### 按需引入

组件的样式文件既可以在入口文件引入，也可以在使用组件时，按需引入

```javascript
import { OsButton } from '@tarant/core';
```

> 注意，目前组件库的按需引入需要借助一个 babel 插件[babel-plugin-import](https://github.com/umijs/babel-plugin-import)来实现

首先需要安装

```bash
npm i babel-plugin-import -D
```

然后在`babel.config.js`文件中添加如下配置：

```javascript
plugins: [
  [
    'import',
    {
      libraryName: '@tarant/core',
      customName: name => `@tarant/core/lib/components/${name.replace(/^os-/, '')}`,
      customStyleName: name =>
        `@tarant/core/dist/style/components/${name.replace(/^os-/, '')}.scss`,
    },
    '@tarant/core',
  ],
];
```

#### 预览

详细 Taro 项目预览可参考[Taro 文档](https://docs.taro.zone/docs/GETTING-STARTED#%E7%BC%96%E8%AF%91%E8%BF%90%E8%A1%8C)

```bash
// 微信小程序预览
npm run dev:weapp

// h5预览
npm run dev:h5
```

## 开源协议

[MIT](https://opensource.org/licenses/MIT)

Copyright (c) 2022 Yanxuan

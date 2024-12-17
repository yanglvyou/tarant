---
sidebar_position: 4
demo_url: 'http://127.0.0.1:10086/#/components/button/demo/index'
---

# OsButton 按钮

### 介绍

按钮用于触发一个操作，如提交表单。

### 引入

```jsx
import { OsButton } from 'tarant';
```

## 代码演示

### 按钮颜色

按钮支持 `default`、`primary`、`info`、`success`、`warning`、`danger` 六种颜色，默认为 `default`。

```jsx
<OsButton color="primary">主要按钮</OsButton>
<OsButton color="info">信息按钮</OsButton>
<OsButton color="success">成功按钮</OsButton>
<OsButton color="warning">警告按钮</OsButton>
<OsButton color="danger">危险按钮</OsButton>
<OsButton color="default">默认按钮</OsButton>
```

### 文本按钮

通过 `variant="text"` 属性将按钮设置为文本按钮。

```jsx
<OsButton variant="text" color="primary">主要按钮</OsButton>
<OsButton variant="text" color="info">信息按钮</OsButton>
<OsButton variant="text" color="success">成功按钮</OsButton>
<OsButton variant="text" color="warning">警告按钮</OsButton>
<OsButton variant="text" color="danger">危险按钮</OsButton>
<OsButton variant="text" color="default">默认按钮</OsButton>
```

### 轮廓按钮

通过 `variant="contained"` 属性将按钮设置为轮廓按钮。

```jsx
<OsButton variant="outlined" color="primary">主要按钮</OsButton>
<OsButton variant="outlined" color="info">信息按钮</OsButton>
<OsButton variant="outlined" color="success">成功按钮</OsButton>
<OsButton variant="outlined" color="warning">警告按钮</OsButton>
<OsButton variant="outlined" color="danger">危险按钮</OsButton>
<OsButton variant="outlined" color="default">默认按钮</OsButton>
```

### 细边框

设置 `hairline` 属性可以展示 0.5px 的细边框。

```jsx
<OsButton variant="outlined" color="primary" hairline>主要按钮</OsButton>
<OsButton variant="outlined" color="info" hairline>信息按钮</OsButton>
<OsButton variant="outlined" color="success" hairline>成功按钮</OsButton>
<OsButton variant="outlined" color="warning" hairline>警告按钮</OsButton>
<OsButton variant="outlined" color="danger" hairline>危险按钮</OsButton>
<OsButton variant="outlined" color="default" hairline>默认按钮</OsButton>
```

### 禁用状态

通过 `disabled` 属性来禁用按钮，禁用状态下按钮不可点击。

```jsx
<OsButton variant="contained" color="primary" disabled>主要按钮</OsButton>
<OsButton variant="contained" color="info" disabled>信息按钮</OsButton>
<OsButton variant="contained" color="success" disabled>成功按钮</OsButton>
<OsButton variant="contained" color="warning" disabled>警告按钮</OsButton>
<OsButton variant="contained" color="danger" disabled>危险按钮</OsButton>
<OsButton variant="contained" color="default" disabled>默认按钮</OsButton>
```

### 加载状态

通过 `loading` 属性设置按钮为加载状态，可以通过 `{type: "spinner"}` 设置加载类型。

```tsx
<OsButton color="success" loading />
<OsButton color="success" loading={{ type: "spinner" }} />
<OsButton color="primary" loading>加载中...</OsButton>
```

### 按钮形状

通过 `shape="square"` 设置方形按钮，通过 `shape="round"` 设置圆形按钮。

```jsx
<OsButton variant="contained" color="primary" shape="square">方形按钮</OsButton>
<OsButton variant="contained" color="primary" shape="round">圆形按钮</OsButton>
```

### 图标按钮

通过 `icon` 属性设置按钮图标，支持 Icon 组件里的所有图标，也可以传入图标 URL。

```jsx
<OsButton variant="contained" color="primary" icon={<DoneOutlined />} />
<OsButton variant="contained" color="primary" icon={<DoneOutlined />}>主要按钮</OsButton>
<OsButton variant="outlined" color="primary" icon={<DoneOutlined />} iconPosition="right">轮廓按钮</OsButton>
```

### 按钮尺寸

支持 `large`、`medium`、`small`、`mini` 四种尺寸，默认为 `medium`。

```jsx
<OsButton color="primary" size="large">大号按钮</OsButton>
<OsButton color="primary" size="medium">普通按钮</OsButton>
<OsButton color="primary" size="small">小型按钮</OsButton>
<OsButton color="primary" size="mini">迷你按钮</OsButton>
```

### 块级元素

按钮在默认情况下为行内块级元素，通过 `block` 属性可以将按钮的元素类型设置为块级元素。

```jsx
<OsButton color="primary" block>
  块级按钮
</OsButton>
```

### 自定义颜色

通过 `css` 属性可以自定义按钮的颜色。

```tsx
<OsButton style={{ backgroundColor: "#7232dd", color: "#fff" }}>单色按钮</OsButton>
<OsButton style={{ borderColor: "#7232dd", color: "#7232dd" }}>单色按钮</OsButton>
<OsButton style={{ background: "linear-gradient(to right, #ff6034, #ee0a24)", color: "#fff" }}>渐变色按钮</OsButton>
```

### 按钮组

```tsx
<OsButton.Group variant="contained" color="primary" shape="round">
  <OsButton> <ArrowLeft /> 上一步</OsButton>
  <OsButton> <Replay /> 刷新</OsButton>
  <OsButton>下一步 <Arrow /></OsButton>
</OsButton.Group>

<OsButton.Group variant="outlined" shape="round" size="small">
  <OsButton> <ArrowLeft /> 上一步</OsButton>
  <OsButton><Replay /> 刷新</OsButton>
  <OsButton>下一步 <Arrow /></OsButton>
</OsButton.Group>

<OsButton.Group variant="text" color="primary" shape="round">
  <OsButton> <ArrowLeft /> 上一步</OsButton>
  <OsButton> <Replay /> 刷新</OsButton>
  <OsButton>下一步 <Arrow /></OsButton>
</OsButton.Group>
```

## API

### Props

| 参数         | 说明                                                      | 类型                                                    | 默认值      |
| ------------ | --------------------------------------------------------- | ------------------------------------------------------- | ----------- |
| variant      | 按钮变种，可选值为 `contained` `text` `outlined`          | _string_                                                | `contained` |
| color        | 按钮颜色，可选值为 `primary` `success` `warning` `danger` | _string_                                                | `default`   |
| size         | 尺寸，可选值为 `large` `small` `mini`                     | _string_                                                | `medium`    |
| shape        | 按钮形状，可选值为 `square` `round`                       | _string_                                                | `square`    |
| icon         | 左侧[图标](/components/icon)或[图片](/components/image)   | _ReactNode_                                             | -           |
| iconPosition | 图标展示位置，可选值为 `right`                            | _string_                                                | `left`      |
| formType     | 原生 button 标签的 type 属性                              | _string_                                                | `button`    |
| block        | 是否为块级元素                                            | _boolean_                                               | `false`     |
| disabled     | 是否禁用按钮                                              | _boolean_                                               | `false`     |
| hairline     | 是否使用 0.5px 边框                                       | _boolean_                                               | `false`     |
| loading      | 是否显示为加载状态                                        | _boolean \| [LoadingProps](/components/loading/#props)_ | `false`     |
| children     | 按钮文字                                                  | _string_                                                | -           |

### OsButton.Group Props

| 参数     | 说明                                                      | 类型      | 默认值      |
| -------- | --------------------------------------------------------- | --------- | ----------- |
| variant  | 按钮变种，可选值为 `contained` `text` `outlined`          | _string_  | `contained` |
| color    | 按钮颜色，可选值为 `primary` `success` `warning` `danger` | _string_  | `default`   |
| size     | 尺寸，可选值为 `large` `small` `mini`                     | _string_  | `medium`    |
| shape    | 按钮形状，可选值为 `round`                                | _string_  | `square`    |
| block    | 是否为块级元素                                            | _boolean_ | -           |
| disabled | 是否禁用按钮                                              | _boolean_ | -           |
| hairline | 是否使用 0.5px 边框                                       | _boolean_ | -           |

## 主题定制

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider](/components/config-provider/) 组件。

| 名称                              | 默认值                                   | 描述 |
| --------------------------------- | ---------------------------------------- | ---- |
| --button-line-height              | _1.2_                                    | -    |
| --button-border-width             | _var(--border-width-base)_               | -    |
| --button-border-radius            | _var(--border-radius-sm)_                | -    |
| --button-border-radius-max        | _var(--border-radius-max)_               | -    |
| --button-transition-duration      | _var(--animation-duration-fast)_         | -    |
| --button-disabled-opacity         | _var(--disabled-opacity)_                | -    |
| --button-loading-icon-size        | _20px \* $hd_                            | -    |
| --button-height-mini              | _24px \* $hd_                            | -    |
| --button-padding-mini             | _0 var(--padding-base)_                  | -    |
| --button-font-size-mini           | _var(--font-size-xs)_                    | -    |
| --button-height-small             | _32px \* $hd_                            | -    |
| --button-padding-small            | _0 var(--padding-xs)_                    | -    |
| --button-font-size-small          | _var(--font-size-sm)_                    | -    |
| --button-height-medium            | _44px \* $hd_                            | -    |
| --button-padding-medium           | _0 var(--padding-md)_                    | -    |
| --button-font-size-medium         | _var(--font-size-md)_                    | -    |
| --button-height-large             | _50px \* $hd_                            | -    |
| --button-font-size-large          | _var(--font-size-lg)_                    | -    |
| --button-default-color            | _var(--text-color)_                      | -    |
| --button-default-background-color | _var(--white)_                           | -    |
| --button-default-border-color     | _var(--border-color)_                    | -    |
| --button-primary-color            | _var(--white)_                           | -    |
| --button-primary-background-color | _var(--primary-color)_                   | -    |
| --button-primary-border-color     | _var(--button-primary-background-color)_ | -    |
| --button-info-color               | _var(--white)_                           | -    |
| --button-info-background-color    | _var(--info-color)_                      | -    |
| --button-info-border-color        | _var(--button-info-background-color)_    | -    |
| --button-success-color            | _var(--white)_                           | -    |
| --button-success-background-color | _var(--success-color)_                   | -    |
| --button-success-border-color     | _var(--button-success-background-color)_ | -    |
| --button-warning-color            | _var(--white)_                           | -    |
| --button-warning-background-color | _var(--warning-color)_                   | -    |
| --button-warning-border-color     | _var(--button-warning-background-color)_ | -    |
| --button-danger-color             | _var(--white)_                           | -    |
| --button-danger-background-color  | _var(--danger-color)_                    | -    |
| --button-danger-border-color      | _var(--button-danger-background-color)_  | -    |

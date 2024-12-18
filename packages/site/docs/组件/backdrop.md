---
sidebar_position: 3
demo_url: 'http://127.0.0.1:10086/#/components/backdrop/index'
---

# Backdrop 背景板

### 介绍

创建一个背景幕，用于强调特定的页面元素，并阻止用户进行其他操作。

### 引入

```jsx
import { Backdrop } from '@tarant/core';
```

## 代码演示

### 基础用法

```jsx
import { Backdrop, OsButton } from '@tarant/core';

function BackdropExample() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <OsButton onClick={() => setOpen(true)}>显示背景板</OsButton>
      <Backdrop open={open} closeable onClose={() => setOpen(false)} />
    </>
  );
}
```

### 嵌入内容

通过 children 可以在背景板上嵌入任意内容。

```jsx
import { Backdrop, OsButton } from '@tarant/core';

function BackdropExample() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <OsButton onClick={() => setOpen(true)}>嵌入内容</OsButton>
      <Backdrop open={open} closeable onClose={() => setOpen(false)}>
        <View className="content-wrapper">
          <View className="content-block" />
        </View>
      </Backdrop>
    </>
  );
}
```

```scss
.content-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}

.content-block {
  width: 60px * 2;
  height: 60px * 2;
  background-color: #fff;
}
```

## API

### Props

| 参数        | 说明                     | 类型        | 默认值  |
| ----------- | ------------------------ | ----------- | ------- |
| className   | 自定义类名               | _string_    | -       |
| children    | 用于在遮罩层上方嵌入内容 | _ReactNode_ | -       |
| defaultOpen | 是否默认展示遮罩层       | _boolean_   | `false` |
| open        | 是否展示遮罩层           | _boolean_   | `false` |
| duration    | 动画时长，单位毫秒       | _number_    | `300`   |
| lock        | 是否锁定背景滚动         | _boolean_   | `true`  |
| closeable   | 点击遮罩层时是否关闭     | _boolean_   | `false` |

### Event

| 事件    | 说明       | 回调参数 |
| ------- | ---------- | -------- |
| onClick | 点击时触发 | -        |
| onClose | 关闭时触发 | -        |

## 主题定制

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider](/components/config-provider/) 组件。

| 名称                        | 默认值               | 描述 |
| --------------------------- | -------------------- | ---- |
| --backdrop-z-index          | _1000_               | -    |
| --backdrop-background-color | _rgba(0, 0, 0, 0.7)_ | -    |

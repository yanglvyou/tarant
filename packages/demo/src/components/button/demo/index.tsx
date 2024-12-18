import React, { useState, useEffect } from 'react';
import Taro from '@tarojs/taro';
import { View } from '@tarojs/components';
import DemoBlock from '../../demoBlock';
import DemoHeader from '../../demoHeader';
import DemoTable from '../../demoTable';
import { OsButton, OsIcon, ConfigProvider, Backdrop } from '@tarant/core';
import './index.scss';

const initialAPI = {
  title: 'API',
  head: ['参数', '说明', '类型', '默认值'],
  data: [
    {
      list: [
        'type',
        'default | primary | special1 | special2，可选',
        'string',
        'default,特殊按钮用于sku',
      ],
    },
    {
      list: ['shape', 'round | square，可选', 'string', 'square(默认有4px圆角)'],
    },
    {
      list: ['icon', 'icon名称，参考OsIcon，可选', 'string', '-'],
    },
    {
      list: [
        'size',
        'min | small | normal | large | block，可选',
        'string',
        'normal,特殊按钮不生效',
      ],
    },
    {
      list: ['color', '文字颜色，可选', 'string', '-'],
    },
    {
      list: ['bgColor', '背景色，可选', 'string', '-'],
    },
    {
      list: ['bdColor', '描边色，可选', 'string', '-'],
    },
    {
      list: [
        'startBgColor',
        '填充渐变开始色，可选',
        'string',
        '-（仅对primary按钮生效且与endBgColor配合使用）',
      ],
    },
    {
      list: [
        'endBgColor',
        '填充渐变结束色，可选',
        'string',
        '-（仅对primary按钮生效且与startBgColor配合使用）',
      ],
    },
    {
      list: ['isDisabled', '是否禁用，可选', 'boolean', 'false'],
    },
    {
      list: ['customStyle', '自定义样式，可选', 'object', '-'],
    },
    {
      list: ['className', '自定义类名，可选', 'string', '-'],
    },
    // ,
    // {
    //   list: ['button-custom', '自定义按钮类名', 'string', '-']
    // },
    // {
    //   list: ['button-text-custom', '自定义按钮文案类名', 'string', '-']
    // }
  ],
};
const initialEvent = {
  title: 'Event',
  head: ['函数名', '说明', '参数'],
  data: [
    {
      list: ['onClick', '点击时触发', 'event对象'],
    },
  ],
};
function onClick(event: any) {
  console.log(event);
  console.log('你点击了线框按钮！');
}

function onClick2() {
  console.log('你点击了色块按钮!');
}

const demoTitle = 'Button 按钮';
export default function Index(props: Props) {
  const [api] = useState(initialAPI);
  const [eventApi] = useState(initialEvent);

  const [open, setOpen] = useState(false);

  useEffect(() => {
    Taro.setNavigationBarTitle({
      title: demoTitle,
    });
  }, []);

  return (
    <View className="demo-button">
      <DemoHeader title={demoTitle}></DemoHeader>
      <DemoBlock title="按钮颜色" hideMb>
        <View className="button-item">
          <ConfigProvider
            theme={
              {
                // '--button-primary-color': '#2ca8e1',
                // '--button-primary-background-color': '#e19b2c',
              }
            }
          >
            <OsButton color="primary" onClick={() => setOpen(true)}>
              主要按钮
            </OsButton>
          </ConfigProvider>
        </View>
        <Backdrop open={open} closeable onClose={() => setOpen(false)} />
        <View className="button-item">
          <OsButton color="info">信息按钮</OsButton>
        </View>
        <View className="button-item">
          <OsButton color="success">成功按钮</OsButton>
        </View>

        <View className="button-item">
          <OsButton color="warning">警告按钮</OsButton>
        </View>

        <View className="button-item">
          <OsButton color="danger">危险按钮</OsButton>
        </View>

        <View className="button-item">
          <OsButton color="default">默认按钮</OsButton>
        </View>
      </DemoBlock>

      <DemoBlock title="文本按钮" hideMb>
        <View className="button-item">
          <OsButton variant="text" color="primary">
            主要按钮
          </OsButton>
        </View>
        <View className="button-item">
          <OsButton variant="text" color="info">
            信息按钮
          </OsButton>
        </View>
        <View className="button-item">
          <OsButton variant="text" color="success">
            成功按钮
          </OsButton>
        </View>

        <View className="button-item">
          <OsButton variant="text" color="warning">
            警告按钮
          </OsButton>
        </View>

        <View className="button-item">
          <OsButton variant="text" color="danger">
            危险按钮
          </OsButton>
        </View>

        <View className="button-item">
          <OsButton variant="text" color="default">
            默认按钮
          </OsButton>
        </View>
      </DemoBlock>

      <DemoBlock title="轮廓按钮" hideMb>
        <View className="button-item">
          <OsButton variant="outlined" color="primary">
            主要按钮
          </OsButton>
        </View>
        <View className="button-item">
          <OsButton variant="outlined" color="info">
            信息按钮
          </OsButton>
        </View>
        <View className="button-item">
          <OsButton variant="outlined" color="success">
            成功按钮
          </OsButton>
        </View>

        <View className="button-item">
          <OsButton variant="outlined" color="warning">
            警告按钮
          </OsButton>
        </View>

        <View className="button-item">
          <OsButton variant="outlined" color="danger">
            危险按钮
          </OsButton>
        </View>

        <View className="button-item">
          <OsButton variant="outlined" color="default">
            默认按钮
          </OsButton>
        </View>
      </DemoBlock>

      <DemoBlock title="细边框" hideMb>
        <View className="button-item">
          <OsButton variant="outlined" color="primary" hairline>
            主要按钮
          </OsButton>
        </View>
        <View className="button-item">
          <OsButton variant="outlined" color="info" hairline>
            信息按钮
          </OsButton>
        </View>
        <View className="button-item">
          <OsButton variant="outlined" color="success" hairline>
            成功按钮
          </OsButton>
        </View>

        <View className="button-item">
          <OsButton variant="outlined" color="warning" hairline>
            警告按钮
          </OsButton>
        </View>

        <View className="button-item">
          <OsButton variant="outlined" color="danger" hairline>
            危险按钮
          </OsButton>
        </View>

        <View className="button-item">
          <OsButton variant="outlined" color="default" hairline>
            默认按钮
          </OsButton>
        </View>
      </DemoBlock>

      <DemoBlock title="禁用状态" hideMb>
        <View className="button-item">
          <OsButton variant="contained" color="primary" disabled>
            主要按钮
          </OsButton>
        </View>
        <View className="button-item">
          <OsButton variant="contained" color="info" disabled>
            信息按钮
          </OsButton>
        </View>
        <View className="button-item">
          <OsButton variant="contained" color="success" disabled>
            成功按钮
          </OsButton>
        </View>

        <View className="button-item">
          <OsButton variant="contained" color="warning" disabled>
            警告按钮
          </OsButton>
        </View>

        <View className="button-item">
          <OsButton variant="contained" color="danger" disabled>
            危险按钮
          </OsButton>
        </View>

        <View className="button-item">
          <OsButton variant="contained" color="default" disabled>
            默认按钮
          </OsButton>
        </View>
      </DemoBlock>

      <DemoBlock title="加载状态" hideMb>
        <View className="button-item">
          <OsButton color="success" loading />
        </View>

        <View className="button-item">
          <OsButton color="success" loading={{ type: 'spinner' }} />
        </View>
        <View className="button-item">
          <OsButton color="primary" loading>
            加载中...
          </OsButton>
        </View>
      </DemoBlock>

      <DemoBlock title="按钮形状" hideMb>
        <View className="button-item">
          <OsButton variant="contained" color="primary" shape="square">
            方形按钮
          </OsButton>
        </View>

        <View className="button-item">
          <OsButton variant="contained" color="primary" shape="round">
            圆形按钮
          </OsButton>
        </View>
      </DemoBlock>
      <DemoBlock title="按钮尺寸" hideMb>
        <View className="button-item block">
          <OsButton color="primary" size="large">
            大号按钮
          </OsButton>
        </View>

        <View className="button-item">
          <OsButton color="primary" size="medium">
            普通按钮
          </OsButton>
        </View>

        <View className="button-item">
          <OsButton color="primary" size="small">
            小型按钮
          </OsButton>
        </View>

        <View className="button-item">
          <OsButton color="primary" size="mini">
            迷你按钮
          </OsButton>
        </View>
      </DemoBlock>
      <DemoBlock title="块级元素" hideMb>
        <View className="button-item block">
          <OsButton color="primary" block>
            块级按钮
          </OsButton>
        </View>
      </DemoBlock>
      <DemoBlock title="自定义颜色" hideMb>
        <View className="button-item">
          <OsButton style={{ backgroundColor: '#7232dd', color: '#fff' }}>单色按钮</OsButton>
        </View>
        <View className="button-item">
          <OsButton style={{ borderColor: '#7232dd', color: '#7232dd' }}>单色按钮</OsButton>
        </View>
        <View className="button-item">
          <OsButton
            style={{ background: 'linear-gradient(to right, #ff6034, #ee0a24)', color: '#fff' }}
          >
            渐变色按钮
          </OsButton>
        </View>
      </DemoBlock>
      <DemoBlock title="自定义颜色" hideMb>
        <View className="button-item">
          <OsButton.Group variant="contained" color="primary" shape="round">
            <OsButton>
              <OsIcon type="return" color="white" />
              上一步
            </OsButton>
            <OsButton>刷新</OsButton>
            <OsButton>
              下一步
              <OsIcon
                type="return"
                color="white"
                customStyle={{
                  rotate: '180deg',
                }}
              />
            </OsButton>
          </OsButton.Group>
        </View>
        <View className="button-item">
          <OsButton.Group variant="outlined" shape="round">
            <OsButton>
              <OsIcon type="return" color="#999" />
              上一步
            </OsButton>
            <OsButton>刷新</OsButton>
            <OsButton>
              下一步
              <OsIcon
                type="return"
                color="#999"
                customStyle={{
                  rotate: '180deg',
                }}
              />
            </OsButton>
          </OsButton.Group>
        </View>
        <View className="button-item">
          <OsButton.Group variant="text" shape="round">
            <OsButton>
              <OsIcon type="return" color="#999" />
              上一步
            </OsButton>
            <OsButton>刷新</OsButton>
            <OsButton>
              下一步
              <OsIcon
                type="return"
                color="#999"
                customStyle={{
                  rotate: '180deg',
                }}
              />
            </OsButton>
          </OsButton.Group>
        </View>
      </DemoBlock>
    </View>
  );
}

interface Props {}

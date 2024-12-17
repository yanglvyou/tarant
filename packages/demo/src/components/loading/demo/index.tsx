import React, { useState, useEffect } from 'react';
import Taro from '@tarojs/taro';
import { View } from '@tarojs/components';
import DemoBlock from '../../demoBlock';
import DemoHeader from '../../demoHeader';
import DemoTable from '../../demoTable';
import { OsLoading, ConfigProvider, ConfigProviderThemeVars } from 'tarant';
import './index.scss';

function getClassObject() {
  const classObject = {
    ['loading-demo']: true,
  };
  return classObject;
}

const initialListApi = {
  title: 'API',
  head: ['参数', '说明', '类型', '默认值'],
  data: [
    {
      list: ['type', '类型，可选值为 spinner', 'string', 'circular'],
    },
    {
      list: ['size', '默认单位为 px', 'number | string', '30px'],
    },
    {
      list: ['direction', '可选值为 horizontal', 'string', 'vertical'],
    },
    {
      list: ['children', '加载文案', 'ReactNode', '-'],
    },
  ],
};
const initialListEvent = {
  title: 'Event',
  head: ['函数名', '说明', '参数'],
  data: [
    {
      list: ['-', '-', '-', '-'],
    },
  ],
};
const demoTitle = 'Loading 加载';
export default function Index(props: ConfigProviderThemeVars) {
  const [listApi] = useState(initialListApi);

  const [listEvent] = useState(initialListEvent);
  const classObject = getClassObject(); //组件修饰
  console.log('classObject: ', classObject);

  useEffect(() => {
    Taro.setNavigationBarTitle({
      title: demoTitle,
    });
  }, []);

  return (
    <View className="loading-demo">
      <DemoHeader title={demoTitle}></DemoHeader>
      <DemoBlock title="加载类型">
        <View className="inline-item">
          <OsLoading />
        </View>
        <OsLoading type="spinner" />
      </DemoBlock>

      <DemoBlock title="自定义颜色">
        <View className="inline-item">
          <OsLoading className="custom-color" />
        </View>
        <OsLoading type="spinner" className="custom-color" />
      </DemoBlock>

      <DemoBlock title="自定义大小">
        <View className="inline-item">
          <OsLoading size="24px" />
        </View>
        <OsLoading type="spinner" size="24px" />
      </DemoBlock>

      <DemoBlock title="加载文案">
        <OsLoading size="24px">加载中...</OsLoading>
      </DemoBlock>

      <DemoBlock title="垂直排列">
        <ConfigProvider
          theme={{
            loadingColor: '#aec107',
            loadingSize: '30px',
            loadingTextColor: 'red',
          }}
        >
          <OsLoading direction="vertical">加载中...</OsLoading>
        </ConfigProvider>
      </DemoBlock>

      <DemoBlock title="自定义颜色">
        <View className="inline-item">
          <OsLoading className="custom-color" direction="vertical">
            加载中...
          </OsLoading>
        </View>
        <OsLoading className="custom-text-color" direction="vertical">
          加载中...
        </OsLoading>
      </DemoBlock>

      <DemoBlock>
        <DemoTable list={listApi}></DemoTable>
      </DemoBlock>

      <DemoBlock>
        <DemoTable list={listEvent}></DemoTable>
      </DemoBlock>
    </View>
  );
}

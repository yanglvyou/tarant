import React, { useState, useEffect } from 'react';
import Taro from '@tarojs/taro';
import { View } from '@tarojs/components';
import { OsButton, OsIcon, ConfigProvider, Backdrop } from '@tarant/core';
import './index.scss';
import DemoBlock from '../demoBlock';
import DemoHeader from '../demoHeader';

const demoTitle = 'Backdrop 背景板';
export default function Index(props: Props) {
  const [open, setOpen] = useState(false);

  const [opened2, setOpened2] = useState(false);

  useEffect(() => {
    Taro.setNavigationBarTitle({
      title: demoTitle,
    });
  }, []);

  return (
    <View className="demo-button">
      <DemoHeader title={demoTitle}></DemoHeader>

      <DemoBlock title="基础用法" hideMb>
        <View className="button-item">
          <ConfigProvider
            theme={
              {
                // '--backdrop-background-color': 'rgba(0, 0, 0, 0.5)',
              }
            }
          >
            <OsButton color="primary" onClick={() => setOpen(true)}>
              基础用法
            </OsButton>
            <Backdrop open={open} closeable onClose={() => setOpen(false)} />
          </ConfigProvider>
        </View>
      </DemoBlock>

      <DemoBlock title="文本按钮" hideMb>
        <View className="button-item">
          <OsButton variant="contained" color="primary" onClick={() => setOpened2(true)}>
            嵌入内容
          </OsButton>
          <Backdrop open={opened2} closeable onClose={() => setOpened2(false)}>
            <View className="content-wrapper">
              <View className="content-block" />
            </View>
          </Backdrop>
        </View>
      </DemoBlock>
    </View>
  );
}

interface Props {}

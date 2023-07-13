import './App.css';
import { Layout } from '@douyinfe/semi-ui';
import dayjs from 'dayjs'


import React from 'react';
import { Nav, Avatar, Dropdown, Select, Button } from '@douyinfe/semi-ui';
import { IconStar, IconUser, IconUserGroup, IconSetting, IconEdit, IconLanguage, IconSemiLogo } from '@douyinfe/semi-icons';
import { ChartComponent } from './charts/bars';
function App() {
  const { Header, Footer, Content, Sider } = Layout;

  const items = [
      { itemKey: 'user', text: '用户管理', icon: <IconUser /> },
      { itemKey: 'union', text: '活动管理', icon: <IconStar /> },
      {
          itemKey: 'union-management',
          text: '任务管理',
          icon: <IconUserGroup />,
          items: ['公告设置', '任务查询', '信息录入']
      },
      {
          itemKey: 'approve-management',
          text: '审批管理',
          icon: <IconEdit />,
          items: [
              '入驻审核',
              {
                  itemKey: 'operation-management',
                  text: '运营管理',
                  items: [
                      '人员管理',
                      '人员变更'
                  ]
              }
          ]
      },
      {
          text: '任务平台',
          icon: <IconSetting />,
          itemKey: 'job',
          items: ['任务管理', '用户任务查询'],
      },
  ];

  const renderHorizontal = () => {
    return (
      <Nav
        style={{ width: '100%' }}
        mode={'horizontal'}
        onSelect={key => console.log(key)}
        header={{
            logo: <IconSemiLogo style={{ height: '36px', fontSize: 36 }} />,
            text: 'Semi 运营后台'
        }}
        footer={
          <>
            <Select defaultValue='Chinese' style={{ width: 120, marginRight: 10 }} insetLabel={<IconLanguage />}>
              <Select.Option value='Chinese'>中文</Select.Option>
              <Select.Option value='English'>English</Select.Option>
              <Select.Option value='Korean'>한국어</Select.Option>
              <Select.Option value='Japanese'>日本語</Select.Option>
            </Select>
            <Button style={{ marginRight: 10 }}>切换至全球版</Button>
            <Dropdown
              position="bottomRight"
              render={
                  <Dropdown.Menu>
                      <Dropdown.Item>详情</Dropdown.Item>
                      <Dropdown.Item>退出</Dropdown.Item>
                  </Dropdown.Menu>
              }
            >
                <Avatar size="small" color='light-blue' style={{ margin: 4 }}>BD</Avatar>
                <span>Bytedancer</span>
            </Dropdown>
          </>
        }
      />
    );
  }

  const renderVertical = () => {
    return (
        <Nav
          style={{height: '100vh'}}
          items={items}
          onSelect={key => console.log(key)}
          footer={{
              collapseButton: true,
          }}
        />
    );
  }

  const initialData = [
    { time: '2018-12-22', value: 32.51 },
    { time: '2018-12-23', value: 31.11 },
    { time: '2018-12-24', value: 27.02 },
    { time: '2018-12-25', value: 27.32 },
    { time: '2018-12-26', value: 25.17 },
    { time: '2018-12-27', value: 28.89 },
    { time: '2018-12-28', value: 25.46 },
    { time: '2018-12-29', value: 23.92 },
    { time: '2018-12-30', value: 22.68 },
    { time: '2018-12-31', value: 22.67 },
  ];

  return (
    <Layout style={{height: '100vh'}}>
        <Header>{renderHorizontal()}</Header> 
        <Sider>{renderVertical()}</Sider>
        <Layout>

        <ChartComponent data={initialData}></ChartComponent>
        </Layout>
    </Layout>
  );
}

export default App;
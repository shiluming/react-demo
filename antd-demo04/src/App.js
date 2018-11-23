import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Layout } from 'antd';

const { Header, Footer, Sider, Content } = Layout;

class App extends Component {
  
  state = {
    username:'是路名',
    role:'admin'
  }
  render() {
    return (
      <div >
        <div className="cloak">
          <div className="title">
            手机CRM平台
            <button className="btnLogout">返回</button>
          </div>
          {/* 用户名 */}
          <div className="name">
            {this.state.username}
            <span>{this.state.role}</span>
          </div>
          {/* 链接 */}
          <div className="homePageItem">
            <a href="#"><div>VIP 管理</div></a>
            <a href="#"><div>KA 管理</div></a>
            <a href="#"><div>商家提现</div></a>
            <a href="#"><div>合伙人提现</div></a>
            <a href="#"><div>我的提现</div></a>
            <a href="#"><div>数据统计</div></a>
            <a href="#"><div>我的申请</div></a>
          </div>

        </div>
      </div>
    );
  }
}

export default App;

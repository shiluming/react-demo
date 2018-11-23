import React, { Component } from 'react';
import logo from './logo.svg';
import {Layout } from 'antd';
import './App.css';
const { Header, Footer, Sider, Content } = Layout;



class App extends Component {
  render() {
    return (
      <div>
          <Layout>
            <Header>Header</Header>
            <Content>Content</Content>
            <Footer>Footer</Footer>
          </Layout>
      </div>
    );
  }
}

export default App;

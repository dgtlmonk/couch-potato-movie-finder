import React from 'react'
import { Form as AntForm, Layout, Button, Input, Icon, Card, Row, Col } from 'antd'

const FormItem = AntForm.Item;
const {Header, Footer, Sider, Content} = Layout;

class Dashboard extends React.Component {
  render() {
    return(
      <div>
        <Layout>
          <Header style={{ color: 'white'}}>
            <Row>
              <Col span={8}><div className="logo">Welcome Back</div></Col>
              <Col span={12}>
                  <AntForm>
                    <FormItem style={{ padding:'1em'}}>
                      <Input data-testid="search"></Input>
                    </FormItem>
                  </AntForm>
              </Col>
              <Col span={4}>
                <span>
                  <Icon type="user" />
                </span>
              </Col>
            </Row>
          </Header>
          <Content>
           <Layout>
              <Row>
                <h3>Titleasdf</h3>
              </Row>
              <Row>
                <div data-testid="movie-list">
                  <Col span={6}>
                  </Col>
                </div>
              </Row>
           </Layout>
          </Content>
        </Layout>
      </div>
    )
  }
}

export default Dashboard
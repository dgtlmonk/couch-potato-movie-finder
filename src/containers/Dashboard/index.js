import React from 'react'
import { Form as AntForm, Layout, Button, Input, Icon, Card, Row, Col } from 'antd'

const FormItem = AntForm.Item;
const {Header, Footer, Sider, Content} = Layout;

class Dashboard extends React.Component {
  render() {
    return(
      <div>
        <Layout>
          <Header>
            <div className="logo">Welcome Back</div>
            <div>
              <AntForm>
                <FormItem>
                  <Input data-testid="search"></Input>
                </FormItem>
              </AntForm>
            </div>
          </Header>
          <Content>
           <Row>
            <h3>Title</h3>
           </Row>
            <Row>
              <div data-testid="movie-list">
                <Col span={6}>
                </Col>
              </div>
            </Row>
          </Content>
        </Layout>
      </div>
    )
  }
}

export default Dashboard
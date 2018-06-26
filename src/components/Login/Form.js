import React from 'react'
import PropTypes from 'prop-types'
import { Form as AntForm, Button, Input, Icon } from 'antd'

const FormItem = AntForm.Item;
const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 8 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 16 },
  },
};

class Form extends React.PureComponent {
  state = {
    username: 'chuck',
    password: 'norris'
  }

  static propTypes = {
    onSubmit: PropTypes.func.isRequired
  }

  static defaultProps = {
    onSubmit: () => undefined
  }

  update = (field, val) => {
    this.setState({
      [field]: val
    })
  }

  render(){
    const { getFieldDecorator } = this.props.form;

    return (
      <div>
        <AntForm onSubmit={ e => {
          e.preventDefault()
          const creds = this.props.form.getFieldsValue();
          const { username, password } = creds;

          this.props.onSubmit({
            username,
            password
          })
        }}>
          <FormItem  {...formItemLayout} label="Username">
            {getFieldDecorator('username', {
              rules: [{ required: true, message: 'Please input your username!' }],
            })(
              <Input data-testid="username" prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
            )}
          </FormItem>
          <FormItem  {...formItemLayout} label="Password">
            {getFieldDecorator('password', {
              rules: [{ required: true, message: 'Please input your Password!' }],
            })(
              <Input data-testid="password"prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
            )}
          </FormItem>
          <Button data-testid="submit" type="primary" htmlType="submit">Login</Button>
        </AntForm>
      </div>
    )
  }
}

export default AntForm.create({})(Form);

import React from "react";
import { Form, Icon, Input, Button, Checkbox, message } from "antd";
import Localstorage from "./../../utils/Localstorage.js";
import { login } from "./../../httpserver/api/login.js";
import "./login.less";
const FormItem = Form.Item;

class NormalLoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  getLogin(data, e) {
    e.preventDefault();
    login(data)
      .then(res => {
        // console.log(res);
        if (res.status === 1) {
          Localstorage.exist("token", data.username); // token
          this.props.history.push("/table");
        } else {
          message.config({
            top: 100,
            duration: 2.5,
            maxCount: 1
          });
          message.error("用户名 / 密码不正确，请重输 ！");
        }
      })
      .catch(err => {
        console.log(err);
      });
  }
  handleSubmit = e => {
    this.props.form.validateFields((err, values) => {
      // console.log("Received values of form: ", values);
      if (!err) {
        let data = {
          username: values.username,
          password: values.password
        };
        this.getLogin(data, e);
      } else {
        e.preventDefault();
      }
    });
  };
  componentWillMount() {
    // console.log(Localstorage.take("token"));
    if (Localstorage.take("token")) {
      // 判断是否登陆过
      this.props.history.push("/table");
    }
  }
  render() {
    const { getFieldDecorator } = this.props.form;
    const margin = { margin: "auto" };
    return (
      <Form onSubmit={this.handleSubmit} className="login-form" style={margin}>
        <h1 className="title">登录</h1>
        <FormItem>
          {getFieldDecorator("username", {
            rules: [{ required: true, message: "请输入您的用户名！" }]
          })(
            <Input
              prefix={<Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />}
              placeholder="用户名"
            />
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator("password", {
            rules: [{ required: true, message: "请输入您的密码！" }]
          })(
            <Input
              prefix={<Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />}
              type="password"
              placeholder="密码"
            />
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator("remember", {
            valuePropName: "checked",
            initialValue: true
          })(<Checkbox>记住我</Checkbox>)}
          <a className="login-form-forgot" href="">
            忘记密码
          </a>
          <Button
            type="primary"
            htmlType="submit"
            className="login-form-button"
          >
            登录
          </Button>
          <div className="register">现在注册!</div>
        </FormItem>
      </Form>
    );
  }
}

const WrappedNormalLoginForm = Form.create()(NormalLoginForm);

export default WrappedNormalLoginForm;

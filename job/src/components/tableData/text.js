import React from "react";
import { Form, Input } from "antd";
const FormItem = Form.Item;
class Texts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    let props = this.props;
    return (
      <FormItem label={props.label} required={props.required}>
        <Input
          name={props.name}
          value={props.value}
          style={props.style}
          placeholder={props.placeholder}
          onChange={e => props.event(e)}
        />
      </FormItem>
    );
  }
}
export default Texts;

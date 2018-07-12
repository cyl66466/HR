import React from "react";
import { Form, Radio } from "antd";
const RadioGroup = Radio.Group;
const FormItem = Form.Item;
class Radios extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    let props = this.props;
    return (
      <FormItem label={props.label} required={props.required}>
        <RadioGroup
          name={props.name}
          value={props.value}
          onChange={e => props.event(e)}
        >
          {props.arr.map((item, index) => (
            <Radio value={item.id} key={item.id}>
              {item.text}
            </Radio>
          ))}
        </RadioGroup>
      </FormItem>
    );
  }
}
export default Radios;

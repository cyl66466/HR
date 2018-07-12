import React from "react";
import { Form, Select } from "antd";
import "./../../style/tableData/select.less";
const FormItem = Form.Item;
const Option = Select.Option;
class Selects extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    let props = this.props;
    let option;
    if (props.arr[0].id) {
      option = props.arr.map(item => (
        <Option value={item.id} key={item.id}>
          {item.text}
        </Option>
      ));
    } else {
      option = props.arr.map(item => (
        <Option value={item} key={item}>
          {item}
        </Option>
      ));
    }
    return (
      <FormItem label={props.label} required={props.required}>
        <Select
          name={props.name}
          className="select-width"
          value={props.value}
          onChange={e => props.event(e, props.name)}
        >
          {option}
        </Select>
      </FormItem>
    );
  }
}
export default Selects;

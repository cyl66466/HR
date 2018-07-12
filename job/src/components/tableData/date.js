import React from "react";
import { Form, DatePicker } from "antd";
const FormItem = Form.Item;
class Dates extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    let props = this.props;
    return (
      <FormItem label={props.label} required={props.required}>
        <DatePicker
          name={props.name}
          onChange={e => props.event(e, props.name, "date")}
        />
      </FormItem>
    );
  }
}
export default Dates;

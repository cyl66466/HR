import React from "react";
import { Table, Row } from "antd";
import Texts from "./../../components/tableData/text.js";
import Dates from "./../../components/tableData/date.js";
import "./../../style/tableData/table.less";

class Tables extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  createColumns() {
    let columns = [];
    for (let item of this.props.data.head) {
      let colarr = {};
      let dom = obj => (
        <Row>
          <Texts name={obj.name} value={obj.value} event={obj.event} />
        </Row>
      );
      colarr.title = item.title;
      colarr.width = item.width;
      colarr.dataIndex = item.dataIndex;
      if (item.domType === "date") {
        dom = obj => (
          <Row>
            <Dates name={obj.name} event={obj.event} />
          </Row>
        );
      }
      colarr.render = dom;
      columns.push(colarr);
    }
    // console.log(columns);
    return columns;
  }
  createDataSource() {
    let that = this;
    let content = this.props.data.content;
    let head = this.props.data.head;
    let data = [];
    for (let j = 0; j < content.length; j++) {
      let coldata = {};
      coldata.key = j;
      for (let i = 0; i < head.length; i++) {
        // coldata[head[i].dataIndex] = {
        //   name: "",
        //   value: "",
        //   event: ""
        // };
        // coldata[head[i].dataIndex].name = content[j][i];
        // coldata[head[i].dataIndex].value = that.props[content[j][i]];
        // coldata[head[i].dataIndex].event = that.props.event;
        let newobj = {
          name: "",
          value: "",
          event: ""
        };
        newobj.name = content[j][i];
        newobj.value = that.props[content[j][i]];
        newobj.event = that.props.event;
        coldata[head[i].dataIndex] = newobj;
      }
      data.push(coldata);
    }
    // console.log(data);
    return data;
  }
  render() {
    let columns = this.createColumns();
    let data = this.createDataSource();
    return <Table className="diy-table" columns={columns} dataSource={data} />;
  }
}

export default Tables;

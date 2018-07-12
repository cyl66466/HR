import React from "react";
import { Table, Input, Row, DatePicker } from "antd";
import Selects from "./../../components/tableData/select.js";
import "./../../style/tableData/table.less";
// const FormItem = Form.Item;
const { RangePicker } = DatePicker;
const columns = [
  {
    title: "起止年、月、日",
    width: "16vw",
    dataIndex: "edudate",
    render: obj => (
      <RangePicker
        onChange={dateString => obj.event(dateString, obj.namearr)}
      />
    )
  },
  {
    title: "就读学校",
    dataIndex: "edu",
    render: obj => <Input name={obj.name} onChange={e => obj.event(e)} />
  },
  {
    title: "专业",
    dataIndex: "edumajor",
    render: obj => <Input name={obj.name} onChange={e => obj.event(e)} />
  },
  {
    title: "学历",
    dataIndex: "edudegree",
    render: obj => (
      <Row className="eduselect">
        <Selects {...obj} />
      </Row>
    )
  },
  {
    title: "学历性质",
    dataIndex: "edunature",
    render: obj => (
      <Row className="eduselect">
        <Selects {...obj} />
      </Row>
    )
  },
  {
    title: "教育类型",
    dataIndex: "edutype",
    render: obj => (
      <Row className="eduselect">
        <Selects {...obj} />
      </Row>
    )
  }
];

class Tables extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    let that = this;
    const data = [
      {
        key: "1",
        edudate: {
          namearr: this.props.data.edudate[0],
          event: that.props.event1
        },
        edu: {
          name: "edu1school",
          event: that.props.event2
        },
        edumajor: {
          name: "edu1major",
          event: that.props.event2
        },
        edudegree: {
          name: "edu1xueli",
          value: that.props.edu1xueli,
          event: that.props.event2,
          arr: that.props.data.selectArr.edudegree
        },
        edunature: {
          name: "edu1property",
          value: that.props.edu1property,
          event: that.props.event2,
          arr: that.props.data.selectArr.edunature
        },
        edutype: {
          name: "edu1type",
          value: that.props.edu1type,
          event: that.props.event2,
          arr: that.props.data.selectArr.edutype
        }
      },
      {
        key: "2",
        edudate: {
          namearr: this.props.data.edudate[1],
          event: that.props.event1
        },
        edu: {
          name: "edu2school",
          event: that.props.event2
        },
        edumajor: {
          name: "edu2major",
          event: that.props.event2
        },
        edudegree: {
          name: "edu2xueli",
          value: that.props.edu2xueli,
          event: that.props.event2,
          arr: that.props.data.selectArr.edudegree
        },
        edunature: {
          name: "edu2property",
          value: that.props.edu2property,
          event: that.props.event2,
          arr: that.props.data.selectArr.edunature
        },
        edutype: {
          name: "edu2type",
          value: that.props.edu2type,
          event: that.props.event2,
          arr: that.props.data.selectArr.edutype
        }
      },
      {
        key: "3",
        edudate: {
          namearr: this.props.data.edudate[2],
          event: that.props.event1
        },
        edu: {
          name: "edu3school",
          event: that.props.event2
        },
        edumajor: {
          name: "edu3major",
          event: that.props.event2
        },
        edudegree: {
          name: "edu3xueli",
          value: that.props.edu3xueli,
          event: that.props.event2,
          arr: that.props.data.selectArr.edudegree
        },
        edunature: {
          name: "edu3property",
          value: that.props.edu3property,
          event: that.props.event2,
          arr: that.props.data.selectArr.edunature
        },
        edutype: {
          name: "edu3type",
          value: that.props.edu3type,
          event: that.props.event2,
          arr: that.props.data.selectArr.edutype
        }
      },
      {
        key: "4",
        edudate: {
          namearr: this.props.data.edudate[3],
          event: that.props.event1
        },
        edu: {
          name: "edu4school",
          event: that.props.event2
        },
        edumajor: {
          name: "edu4major",
          event: that.props.event2
        },
        edudegree: {
          name: "edu4xueli",
          value: that.props.edu4xueli,
          event: that.props.event2,
          arr: that.props.data.selectArr.edudegree
        },
        edunature: {
          name: "edu4property",
          value: that.props.edu4property,
          event: that.props.event2,
          arr: that.props.data.selectArr.edunature
        },
        edutype: {
          name: "edu4type",
          value: that.props.edu4type,
          event: that.props.event2,
          arr: that.props.data.selectArr.edutype
        }
      }
    ];
    return <Table className="diy-table" columns={columns} dataSource={data} />;
  }
}

export default Tables;

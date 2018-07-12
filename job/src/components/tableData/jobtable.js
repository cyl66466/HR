import React from "react";
import { Table, Input, DatePicker } from "antd";
import Selects from "./../../components/tableData/select.js";
import "./../../style/tableData/table.less";
// const FormItem = Form.Item;
const { RangePicker } = DatePicker;
const columns = [
  {
    title: "起止年、月、日",
    width: "16vw",
    dataIndex: "jobdate",
    render: obj => (
      <RangePicker
        onChange={dateString => obj.event(dateString, obj.namearr)}
      />
    )
  },
  {
    title: "工作单位、职务、职级",
    width: "15vw",
    dataIndex: "job",
    render: obj => <Input name={obj.name} onChange={e => obj.event(e)} />
  },
  {
    title: "离职原因",
    dataIndex: "quit",
    render: obj => <Selects {...obj} />
  },
  {
    title: "证明人",
    dataIndex: "witness",
    render: obj => <Input name={obj.name} onChange={e => obj.event(e)} />
  },
  {
    title: "联系方式",
    dataIndex: "witnessTel",
    render: obj => <Input name={obj.name} onChange={e => obj.event(e)} />
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
        jobdate: {
          namearr: this.props.data.jobdate[0],
          event: that.props.event1
        },
        job: {
          name: "job1info",
          event: that.props.event2
        },
        quit: {
          name: "job1quit",
          event: that.props.event2,
          value: that.props.job1quit,
          arr: this.props.data.quitReason
        },
        witness: {
          name: "job1witness",
          event: that.props.event2
        },
        witnessTel: {
          name: "job1tel",
          event: that.props.event2
        }
      },
      {
        key: "2",
        jobdate: {
          namearr: this.props.data.jobdate[1],
          event: that.props.event1
        },
        job: {
          name: "job2info",
          event: that.props.event2
        },
        quit: {
          name: "job2quit",
          event: that.props.event2,
          value: that.props.job2quit,
          arr: this.props.data.quitReason
        },
        witness: {
          name: "job2witness",
          event: that.props.event2
        },
        witnessTel: {
          name: "job2tel",
          event: that.props.event2
        }
      },
      {
        key: "3",
        jobdate: {
          namearr: this.props.data.jobdate[2],
          event: that.props.event1
        },
        job: {
          name: "job3info",
          event: that.props.event2
        },
        quit: {
          name: "job3quit",
          event: that.props.event2,
          value: that.props.job3quit,
          arr: this.props.data.quitReason
        },
        witness: {
          name: "job3witness",
          event: that.props.event2
        },
        witnessTel: {
          name: "job3tel",
          event: that.props.event2
        }
      }
    ];
    return <Table className="diy-table" columns={columns} dataSource={data} />;
  }
}

export default Tables;

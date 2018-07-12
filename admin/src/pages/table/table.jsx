import React from "react";
import { Link } from "react-router-dom";
import { Table, Icon, message, Select, Input, Modal } from "antd";
import Localstorage from "./../../utils/Localstorage.js";
import { getAllData, getOutExcel } from "./../../httpserver/api/getAllData.js";
import apiData from "./../../constants/api.js";
import "./table.less";
const Option = Select.Option;
const Search = Input.Search;
const confirm = Modal.confirm;
let globalAllData = [];
class TableLine extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      allData: [],
      searchType: "ename",
      selectedRowKeys: [] //记录表格中选中的信息
    };
    this.creatTable = this.creatTable.bind(this);
    this.onSelectChange = this.onSelectChange.bind(this);
    this.countList = this.countList.bind(this);
    this.outExcel = this.outExcel.bind(this);
  }
  componentWillMount() {
    getAllData()
      .then(res => {
        if (res.status === 1) {
          globalAllData = res.data;
          this.setState({
            allData: res.data
          });
        } else {
          message.config({
            top: 100,
            duration: 2.5,
            maxCount: 1
          });
          message.error("抱歉，服务器正在维护，请稍后再试！");
        }
      })
      .catch(err => {
        console.log(err);
      });
  }
  // 退出登录
  outLogin() {
    Localstorage.delete("token");
    this.props.history.push("/");
  }
  // 获取筛选的方式
  operSelectChange(value) {
    this.setState({
      searchType: value
    });
  }
  // 获取搜索的具体内容
  operSearchChange(value) {
    let newAllData = [];
    let sType = "ename";
    let sKey = "userinfo";
    let reg = new RegExp(value.trim(), "i"); //搜索内容（模糊匹配）
    if (this.state.searchType === "ejob") {
      sType = "ejob";
      sKey = "applyinfo";
    }
    for (let i = 0; i < globalAllData.length; i++) {
      let val = globalAllData[i][sKey][sType];
      if (sType === "ename") {
        val =
          globalAllData[i].userinfo.efirstname +
          globalAllData[i].userinfo.elastname;
      }
      if (reg.test(val)) {
        newAllData.push(globalAllData[i]);
      }
    }
    this.setState({
      allData: newAllData
    });
  }
  // 选中表格的某行
  onSelectChange(selectedRowKeys) {
    this.setState({ selectedRowKeys });
  }
  // 统计需要导出的名单
  countList() {
    let ids = [];
    let { selectedRowKeys, allData } = this.state;
    for (let i = 0; i < selectedRowKeys.length; i++) {
      // 每一行用户对应的 用户ID
      let userId = allData[selectedRowKeys[i]].userinfo.id;
      ids.push(userId);
    }
    // console.log(ids);
    return ids;
  }
  // 获取Excel下载路径并进行对应下载
  outExcel() {
    let that = this;
    let ids = this.countList();
    let data = {
      ids
    };
    getOutExcel(data)
      .then(res => {
        if (res.status === 1) {
          that.setState(
            {
              downloadUrl: res.data
            },
            () => {
              that.refs.test.click();
            }
          );
        } else {
          message.config({
            top: 100,
            duration: 2.5,
            maxCount: 1
          });
          message.error("导出失败，请稍后再试！");
        }
      })
      .catch(err => {
        console.log(err);
      });
  }
  // 一键导出Excel
  exportExcel() {
    let that = this;
    let modalText;
    let { selectedRowKeys } = this.state;
    if (selectedRowKeys.length > 0) {
      modalText = `确定导出选中的 ${
        selectedRowKeys.length
      } 名应聘者合成的Excel ?`;
    } else {
      modalText = `暂未选中具体应聘者，将默认导出含有所有人信息的Excel`;
    }
    confirm({
      title: "温馨提示 : ",
      style: { top: 220 },
      width: 470,
      content: modalText,
      onOk() {
        that.outExcel();
      },
      onCancel() {}
    });
  }
  creatTable() {
    let that = this;
    const columns = [
      {
        title: "序号",
        dataIndex: "num",
        key: "num",
        width: 80
      },
      {
        title: "照片",
        dataIndex: "picture",
        key: "picture",
        width: 120,
        render: text => (
          <img className="imgs_zjz" alt="" src={apiData.imgurl + text} />
        )
      },
      {
        title: "姓名",
        dataIndex: "name",
        key: "name",
        width: 150,
        render: obj => {
          return (
            <Link to={{ pathname: "/showTable", query: obj.data }}>
              {obj.name}
            </Link>
          ); // query为获取数据的索引
        }
      },
      {
        title: "职位",
        dataIndex: "position",
        key: "position",
        width: 150
      },
      {
        title: "填表日期",
        dataIndex: "time",
        key: "time",
        width: 150
      }
    ];
    //测试使用，后期需删除
    let registerData = {
      applyinfo: {},
      userinfo: {},
      homeinfo: {},
      eduinfo: {},
      jobinfo: {},
      certinfo: {},
      awardinfo: {},
      currentjob: {},
      witness: {}
    };
    const data = [];
    let allData = that.state.allData;
    for (let i = 0; i < allData.length; i++) {
      data.push({
        key: i,
        num: `${i + 1}`,
        picture: allData[i].userinfo.photo,
        name: {
          name: allData[i].userinfo.efirstname + allData[i].userinfo.elastname,
          data: allData[i] || registerData
        },
        position: allData[i].applyinfo.ejob,
        time: allData[i].applyinfo.writedate
      });
    }
    const { selectedRowKeys } = this.state;
    const rowSelection = {
      selectedRowKeys,
      onChange: that.onSelectChange
    };
    let dom = (
      <Table
        rowSelection={rowSelection}
        columns={columns}
        dataSource={data}
        pagination={{ defaultPageSize: 10 }}
        bordered
      />
    );
    return dom;
  }
  render() {
    let username = Localstorage.take("token");
    const { selectedRowKeys } = this.state;
    const hasSelected = selectedRowKeys.length > 0;

    return (
      <div className="information">
        <div className="header">
          <div className="left">
            <img
              alt=""
              src="http://cas.hengyi.com:8080/themes/hengyi/images/logo.png"
            />
          </div>
          <div className="right">
            <span>
              欢迎您 <Icon type="smile-o" />
            </span>
            <span className="admin">{username}</span>
            <span className="out-login" onClick={() => this.outLogin()}>
              <Icon type="poweroff" />
              {` 退出`}
            </span>
          </div>
        </div>
        <div className="title">应聘登记汇总表</div>
        <div className="operation">
          <div className="oper-left">
            <Select
              className="oper-select"
              value={this.state.searchType}
              onChange={value => this.operSelectChange(value)}
            >
              <Option value="ename">姓名</Option>
              <Option value="ejob">职位</Option>
            </Select>
            <Search
              className="oper-search"
              placeholder="请输入搜索的内容"
              onSearch={value => this.operSearchChange(value)}
              enterButton
            />
          </div>
          <div className="oper-right">
            <span>
              已选
              {hasSelected ? this.state.selectedRowKeys.length : 0}条
            </span>
            <div className="export-excel" onClick={() => this.exportExcel()}>
              一键导出Excel
            </div>
            <a ref="test" href={this.state.downloadUrl} className="hideDownDom">
              测试代码
            </a>
          </div>
        </div>
        <div className="all-data-table">{this.creatTable()}</div>
      </div>
    );
  }
}
export default TableLine;

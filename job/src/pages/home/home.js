import React from "react";
import Texts from "./../../components/tableData/text.js";
import Radios from "./../../components/tableData/radio.js";
import Selects from "./../../components/tableData/select.js";
import Dates from "./../../components/tableData/date.js";
import City from "./../../components/tableData/city.js";
import PicturesWall from "./../../components/tableData/pictureswall.js";
import Tables from "./../../components/tableData/table.js";
import Edutable from "./../../components/tableData/edutable.js";
import Jobtable from "./../../components/tableData/jobtable.js";
import "./home.less";
import {
  Form,
  Row,
  Input,
  Button,
  Col,
  Select,
  Checkbox,
  Modal,
  Table,
  Icon,
  notification
} from "antd";
import applyData from "./../../constants/applyData.js";
import Localstorage from "./../../utils/Localstorage.js";
import moment from "moment";
import { uploadData } from "./../../httpserver/api/home.js";
const FormItem = Form.Item;
const { TextArea } = Input;
const Option = Select.Option;
const confirm = Modal.confirm;
class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isSubmit: false,
      ehowtoknow: "01", //从何种渠道得知招聘信息？
      esex: "1", //性别
      nations: "汉族", //民族
      emarriage: "0", //婚姻状况
      ebear: "未育", //生育状况
      agreement: true, //是否同意协议
      // enativepro: "", //省
      // enativecity: "", //市
      secondcity1: [],
      secondcity2: [],
      secondcity3: []
    };
    this.creactTable = this.creactTable.bind(this);
    this.creactSubmission = this.creactSubmission.bind(this);
    this.onValueChange = this.onValueChange.bind(this);
    this.handleProvinceChange = this.handleProvinceChange.bind(this);
    this.getEduDate = this.getEduDate.bind(this);
    this.creatEduTableDom = this.creatEduTableDom.bind(this);
    this.creatJobTableDom = this.creatJobTableDom.bind(this);

    this.creatUrgentDom = this.creatUrgentDom.bind(this);
    this.infoCheck = this.infoCheck.bind(this);
    this.showPrompt = this.showPrompt.bind(this);
    this.sendData = this.sendData.bind(this);
  }
  componentDidMount() {
    let isSubmit = Localstorage.take("isSubmit");
    this.setState({
      isSubmit
    });
  }
  // 管理员登录
  // <span className="admin" onClick={() => this.login()}>
  // 管理员
  // </span>
  login() {
    let isSubmit = Localstorage.delete("isSubmit");
  }
  // 记录用户输入的值
  onValueChange(e, name, data) {
    let value;
    let infoName;
    if (name) {
      value = e;
      infoName = name;
      if (data) {
        value = moment(value).format("LL");
      }
    } else {
      infoName = e.target.name;
      value = e.target.value.trim();
    }

    this.setState(
      {
        [infoName]: value
      },
      () => {
        // console.log(this.state);
      }
    );
  }
  // 记录省市联动中的省数据
  handleProvinceChange(value, obj) {
    let secondcity;
    for (let v of obj.cityData) {
      if (v.name === value) {
        secondcity = v.citys;
      }
    }
    this.setState(
      {
        [obj.enativepro]: value,
        [obj.secondcity]: secondcity,
        [obj.enativecity]: secondcity[0]
      },
      () => {
        // console.log(this.state[obj.enativepro]);
        // console.log(this.state[obj.enativecity]);
      }
    );
  }
  // 记录教育背景时间
  getEduDate(dateString, arr) {
    // console.log(arr);
    this.setState(
      {
        [arr[0]]: moment(dateString[0]).format("LL"),
        [arr[1]]: moment(dateString[1]).format("LL")
      },
      () => {
        // console.log(this.state[arr[0]]);
        // console.log(this.state[arr[1]]);
      }
    );
  }
  //创建dom结构
  creatDom(data) {
    let dom;
    let attr = {
      label: data.label,
      name: data.name,
      style: data.style,
      required: data.required,
      placeholder: data.placeholder,
      value: this.state[data.name],
      event: this.onValueChange,
      arr: data.arr
    };
    switch (data.domType) {
      case "text":
        dom = <Texts {...attr} />;
        break;
      case "radio":
        dom = <Radios {...attr} />;
        break;
      case "select":
        dom = <Selects {...attr} />;
        break;
      case "date":
        dom = <Dates {...attr} />;
        break;
      case "city":
        attr.name1 = data.name1;
        attr.name2 = data.name2;
        attr.value1 = this.state[data.name1];
        attr.value2 = this.state[data.name2];
        attr.secondcityname = data.secondcity;
        attr.secondcity = this.state[data.secondcity];
        attr.event2 = this.handleProvinceChange;
        dom = <City {...attr} />;
        break;
      default:
        break;
    }
    return dom;
  }
  // 创建Table表的结构
  creatTableDom(data) {
    let that = this;
    let dom;
    let attr = {
      data: data,
      event: this.onValueChange
    };
    for (let item of data.content) {
      for (let i of item) {
        attr[i] = that.state[i];
      }
    }

    dom = <Tables {...attr} />;
    return dom;
  }
  //创建教育类的Table表的结构
  creatEduTableDom(data) {
    let that = this;
    let dom;
    let attr = {
      data: data,
      event1: this.getEduDate,
      event2: this.onValueChange
    };
    for (let item of data.content) {
      for (let i of item) {
        attr[i] = that.state[i];
      }
    }

    dom = <Edutable {...attr} />;
    return dom;
  }
  //创建工作经历的Table表的结构
  creatJobTableDom(data) {
    let that = this;
    let dom;
    let attr = {
      data: data,
      event1: this.getEduDate,
      event2: this.onValueChange
    };
    for (let item of data.content) {
      for (let i of item) {
        attr[i] = that.state[i];
      }
    }

    dom = <Jobtable {...attr} />;
    return dom;
  }
  // 创建紧急联系人的dom信息
  creatUrgentDom() {
    let dom;
    const ecolumns = [
      {
        // title: "姓名",
        width: "13vw",
        dataIndex: "name",
        render: obj => (
          <Row>
            <Texts
              name={obj.name}
              required={obj.required}
              label={obj.label}
              placeholder={obj.placeholder}
              value={obj.value}
              event={obj.event}
            />
          </Row>
        )
      },
      {
        // title: "与本人关系",
        width: "8vw",
        dataIndex: "nexus",
        render: obj => (
          <Row>
            <Texts name={obj.name} value={obj.value} event={obj.event} />
          </Row>
        )
      },
      {
        // title: "出生日期",
        dataIndex: "birthday",
        render: obj => (
          <Row>
            <Dates name={obj.name} event={obj.event} />
          </Row>
        )
      },
      {
        // title: "联系方式",
        dataIndex: "phone",
        render: obj => (
          <Row>
            <Texts
              name={obj.name}
              value={obj.value}
              placeholder={obj.placeholder}
              event={obj.event}
            />
          </Row>
        )
      },
      {
        // title: "工作/学习单位、职位及工作/学习地",
        dataIndex: "job",
        render: obj => (
          <Row>
            <Texts name={obj.name} value={obj.value} event={obj.event} />
          </Row>
        )
      }
    ];
    const data = [
      {
        key: "1",
        name: {
          name: "emename",
          placeholder: "紧急联系人(必填)",
          value: this.state.emename,
          event: this.onValueChange
        },
        nexus: {
          name: "emerelationship",
          value: this.state.emerelationship,
          event: this.onValueChange
        },
        birthday: {
          name: "emebirthdate",
          event: this.onValueChange
        },
        phone: {
          name: "emetel",
          placeholder: "请输入电话(必填)",
          value: this.state.emetel,
          event: this.onValueChange
        },
        job: {
          name: "emeinfo",
          value: this.state.emeinfo,
          event: this.onValueChange
        }
      }
    ];
    dom = <Table columns={ecolumns} dataSource={data} />;
    return dom;
  }
  // 记录是否同意协议
  onAgreementChange(e) {
    let infoName = e.target.name;
    this.setState(
      {
        [infoName]: e.target.checked
      },
      () => {
        // console.log(this.state.agreement);
      }
    );
  }
  // 信息校对
  infoCheck() {
    let errText;
    for (let item of applyData.requiredfield) {
      if (!this.state[item.name]) {
        if (item.name === "photo") {
          errText = item.text;
        } else {
          errText = item.text + "不能为空";
        }
        break;
      } else {
        if (item.reg) {
          if (!item.reg.test(this.state[item.name])) {
            errText = item.err;
            break;
          }
        }
      }
    }
    return errText;
  }
  // 弹出错误提示
  showPrompt(errText) {
    notification.config({
      top: 220,
      duration: 3
    });
    notification.open({
      message: "填写有误！",
      description: errText,
      style: {
        color: "red"
      }
    });
  }
  // 向后台发送数据
  sendData(resolve) {
    let that = this;
    let myDate = moment().format("LL");
    let data = {
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
    for (let item in applyData.fromData) {
      for (let val of applyData.fromData[item]) {
        data[item][val] = that.state[val];
      }
    }
    data.applyinfo.writedate = myDate;
    for (let v of applyData.enativepro.arr) {
      if (data.userinfo.enativepro === v.text) {
        data.userinfo.enativepro = v.id;
        break;
      }
    }
    uploadData(data)
      .then(res => {
        // console.log(res);
        that.setState({
          isSubmit: true
        });
        Localstorage.exist("isSubmit", true);
        setInterval(resolve, 1000);
      })
      .catch(err => {
        console.log(err);
      });
    // console.log("请求axios");
    // axios({
    //   method: "post",
    //   url: "http://192.168.126.215:8080/HR_System_v4.1/submit.do",
    //   data: data
    // })
    //   .then(function(res) {
    //     console.log(res);
    //   })
    //   .catch(function(err) {
    //     console.log(err);
    //   });
  }
  //点击提交按钮
  submit() {
    let that = this;
    // let errText; //测试用
    let errText = this.infoCheck();
    if (errText) {
      this.showPrompt(errText);
    } else {
      if (!this.state.agreement) {
        this.showPrompt("请阅读并同意保密协议!");
      } else {
        confirm({
          title: "温馨提示",
          content: "此表单只可提交一次，请仔细校对！",
          okText: "提交",
          style: {
            marginTop: 150
          },
          onOk() {
            return new Promise((resolve, reject) => {
              that.sendData(resolve, reject);
            }).catch(() => console.log("Oops errors!"));
          },
          onCancel() {}
        });
        console.log("信息无误！");
      }
    }
  }
  //创建整个登记应聘表
  creactTable() {
    let dom = (
      <div className="register-table">
        <div className="title">应聘登记表</div>
        <div className="tables">
          <Form layout="inline">
            <div className="col-title">
              <div className="col-name">申请信息</div>
              <Row>
                <Col span={12} className="col-right">
                  {this.creatDom(applyData.ejob)}
                </Col>
                <Col span={12} className="col-right">
                  {this.creatDom(applyData.esalary)}
                </Col>
              </Row>
              <Row>
                <Col span={12} className="col-right">
                  <FormItem label="从何种渠道得知招聘信息?">
                    <Select
                      name="ehowtoknow"
                      className="select-width"
                      value={this.state.ehowtoknow}
                      onChange={value =>
                        this.onValueChange(value, "ehowtoknow")
                      }
                    >
                      {applyData.ehowtoknow.map((item, index) => (
                        <Option name="ehowtoknow" value={item.id} key={item.id}>
                          {item.id + ` ` + item.source}
                        </Option>
                      ))}
                    </Select>
                  </FormItem>
                </Col>
              </Row>
            </div>
            <div className="col-title">
              <div className="col-name">个人基本信息</div>
              <Row>
                <Col span={8} className="col-right ename">
                  {this.creatDom(applyData.efirstname)}
                </Col>
                <Col span={4} className="col-right ename">
                  {this.creatDom(applyData.elastname)}
                </Col>
                <Col span={12} className="col-right">
                  <PicturesWall event={this.onValueChange} />
                </Col>
              </Row>
              <Row>
                <Col span={12} className="col-right">
                  {this.creatDom(applyData.eidnum)}
                </Col>
                <Col span={12} className="col-right">
                  {this.creatDom(applyData.esex)}
                </Col>
              </Row>
              <Row>
                <Col span={12} className="col-right">
                  {this.creatDom(applyData.ebirthdate)}
                </Col>
                <Col span={12} className="col-right">
                  {this.creatDom(applyData.nations)}
                </Col>
              </Row>
              <Row>
                <Col span={12} className="col-right">
                  {this.creatDom(applyData.outlook)}
                </Col>
                <Col span={12} className="col-right">
                  {this.creatDom(applyData.enative)}
                </Col>
              </Row>
              <Row>
                <Col span={12} className="col-right">
                  {this.creatDom(applyData.emarriage)}
                </Col>

                <Col span={12} className="col-right">
                  {this.creatDom(applyData.ebear)}
                </Col>
              </Row>
              <Row>
                <Col span={12} className="col-right">
                  {this.creatDom(applyData.eschool)}
                </Col>

                <Col span={12} className="col-right">
                  {this.creatDom(applyData.ehighedu)}
                </Col>
              </Row>
              <Row>
                <Col span={12} className="col-right">
                  {this.creatDom(applyData.emobile)}
                </Col>

                <Col span={12} className="col-right">
                  {this.creatDom(applyData.houseinfo)}
                </Col>
              </Row>
              <Row>
                <Col span={12} className="col-right">
                  {this.creatDom(applyData.graducert)}
                </Col>
                <Col span={12} className="col-right">
                  {this.creatDom(applyData.regtype)}
                </Col>
              </Row>
              <Row>
                <Col span={12} className="col-right">
                  {this.creatDom(applyData.english)}
                </Col>

                <Col span={12} className="col-right">
                  {this.creatDom(applyData.computerrank)}
                </Col>
              </Row>

              <Row>
                <Col span={11} className="col-right">
                  {this.creatDom(applyData.eaddr)}
                </Col>
                <Col span={4} className="col-left">
                  {this.creatDom(applyData.eaddrstreet)}
                </Col>

                <Col span={9} className="col-right">
                  {this.creatDom(applyData.ezipcode1)}
                </Col>
              </Row>

              <Row>
                <Col span={11} className="col-right">
                  {this.creatDom(applyData.ehomeaddr)}
                </Col>
                <Col span={4} className="col-left">
                  {this.creatDom(applyData.ehomestreet)}
                </Col>

                <Col span={9} className="col-right">
                  {this.creatDom(applyData.ezipcode2)}
                </Col>
              </Row>

              <Row>
                <Col span={11} className="col-right">
                  {this.creatDom(applyData.eregaddr)}
                </Col>
                <Col span={4} className="col-left">
                  {this.creatDom(applyData.enativestreet)}
                </Col>

                <Col span={9} className="col-right">
                  {this.creatDom(applyData.ezipcode3)}
                </Col>
              </Row>
              <Row>
                <Col span={20} className="col-right">
                  <FormItem
                    label="您是否有需特殊注明的健康问题？若有，请具体说明"
                    required="true"
                  >
                    <Input
                      name="healthinfo"
                      placeholder="若没有，请填&quot;无&quot;！"
                      onChange={e => this.onValueChange(e)}
                    />
                  </FormItem>
                </Col>
              </Row>
              <Row>
                <Col span={20} className="col-right">
                  <FormItem
                    label="您是否曾经应聘过本公司某一职位？若有，请具体说明"
                    required="true"
                  >
                    <Input
                      name="hireinfo"
                      placeholder="若没有，请填&quot;无&quot;！"
                      onChange={e => this.onValueChange(e)}
                    />
                  </FormItem>
                </Col>
              </Row>
              <Row>
                <Col span={20} className="col-right">
                  <FormItem
                    label="您是否有亲属和朋友在公司工作？若有，请具体说明"
                    required="true"
                  >
                    <Input
                      name="otherinfo"
                      placeholder="若没有，请填&quot;无&quot;！"
                      onChange={e => this.onValueChange(e)}
                    />
                  </FormItem>
                </Col>
              </Row>
              <div className="user-remarks">
                <span>备注：</span>照片将作为工牌照,特有如下要求:1.
                白底,正面免冠彩照,头部占照片尺寸2/3；2.
                亮度适宜，保证清晰，拍摄时间为近一年，照片大小小于120kb；3.
                照片以本人姓名命名
              </div>
            </div>

            <div className="col-title">
              <div className="col-name">
                家庭情况（配偶、儿女、父母、兄弟姐妹、紧急联系人）
              </div>
              <Row>{this.creatTableDom(applyData.family)}</Row>
              <Row>{this.creatUrgentDom()}</Row>
            </div>

            <div className="col-title">
              <div className="col-name">
                教育背景<span className="emphasize">
                  （学习经历按高到低填写，到高中为止）
                </span>
              </div>
              <Row>{this.creatEduTableDom(applyData.education)}</Row>
              <div className="user-remarks">
                <span>备注：</span>是否已毕业，若未毕业，请在取得毕业证之后补充学历证、学位证复印件至人力资源部
              </div>
            </div>
            <div className="col-title">
              <div className="col-name">工作经历（工作经历按倒序填写）</div>
              <Row>{this.creatJobTableDom(applyData.jobexperience)}</Row>
            </div>
            <div className="col-title">
              <div className="col-name">专业技术（职称或执业资格等）</div>
              <Row>{this.creatTableDom(applyData.major)}</Row>
            </div>
            <div className="col-title">
              <div className="col-name">在校/职期间获奖情况</div>
              <Row>{this.creatTableDom(applyData.award)}</Row>
            </div>
            <div className="col-title">
              <div className="col-name">现工作情况</div>
              <Row>
                <Col span={12} className="col-right">
                  <FormItem label="现雇主及单位地址">
                    <TextArea
                      name="currentjobplace"
                      value={this.state.currentjobplace}
                      rows={2}
                      cols={30}
                      onChange={e => this.onValueChange(e)}
                    />
                  </FormItem>
                </Col>
                <Col span={12} className="col-right">
                  <FormItem label="现任职务及主要工作职责">
                    <TextArea
                      name="currentjobinfo"
                      value={this.state.currentjobinfo}
                      rows={2}
                      cols={30}
                      onChange={e => this.onValueChange(e)}
                    />
                  </FormItem>
                </Col>
              </Row>
              <Row>
                <Col span={12} className="col-right">
                  {this.creatDom(applyData.currentjobstart)}
                </Col>

                <Col span={12} className="col-right">
                  {this.creatDom(applyData.currentsalary)}
                </Col>
              </Row>
              <Row>
                <Col span={12} className="col-right">
                  {this.creatDom(applyData.isquit)}
                </Col>

                <Col span={12} className="col-right">
                  {this.creatDom(applyData.quittime)}
                </Col>
              </Row>
              <Row>
                <Col span={12} className="col-right">
                  {this.creatDom(applyData.currentjobquitreason)}
                </Col>
                <Col span={12} className="col-right">
                  {this.creatDom(applyData.field1)}
                </Col>
              </Row>
            </div>
            <div className="col-title">
              <div className="col-name">证明人</div>
              <div className="user-remarks">
                请列举三位证明人的信息，其中一位必须是现任单位或最近一任工作单位的同事或者是您学校的导师，并且不能是您的亲属。我们会在与您确认录用意向后通过书面或电话联系证明人。我们有权就您所填此表中的任何一项内容向证明人咨询。
              </div>
              <div>
                <div className="witness-title">
                  1.现任或最近工作单位的上级或您学校的导师{" "}
                  <span className="must">(第一证明人)</span>
                </div>
                <Row>
                  <Col span={8} className="col-right">
                    {this.creatDom(applyData.wit1name)}
                  </Col>
                  <Col span={8} className="col-right">
                    {this.creatDom(applyData.wit1phone)}
                  </Col>
                  <Col span={8} className="col-right">
                    {this.creatDom(applyData.wit1job)}
                  </Col>
                </Row>
                <Row>
                  <Col span={8} className="col-right">
                    {this.creatDom(applyData.wit1place)}
                  </Col>
                  <Col span={8} className="col-right">
                    {this.creatDom(applyData.wit1relation)}
                  </Col>
                </Row>
              </div>
              <div>
                <div className="witness-title">2.第二证明人</div>
                <Row>
                  <Col span={8} className="col-right">
                    {this.creatDom(applyData.wit2name)}
                  </Col>
                  <Col span={8} className="col-right">
                    {this.creatDom(applyData.wit2phone)}
                  </Col>
                  <Col span={8} className="col-right">
                    {this.creatDom(applyData.wit2job)}
                  </Col>
                </Row>
                <Row>
                  <Col span={8} className="col-right">
                    {this.creatDom(applyData.wit2place)}
                  </Col>
                  <Col span={8} className="col-right">
                    {this.creatDom(applyData.wit2relation)}
                  </Col>
                </Row>
              </div>
              <div>
                <div className="witness-title">3.现单位人事部门联系人</div>
                <Row>
                  <Col span={8} className="col-right">
                    {this.creatDom(applyData.wit1hr)}
                  </Col>
                  <Col span={8} className="col-right">
                    {this.creatDom(applyData.wit1hrjob)}
                  </Col>
                  <Col span={8} className="col-right">
                    {this.creatDom(applyData.wit1hremail)}
                  </Col>
                </Row>
                <Row>
                  <Col span={8} className="col-right">
                    {this.creatDom(applyData.wit1hrphone)}
                  </Col>
                  <Col span={8} className="col-right">
                    {this.creatDom(applyData.wit1hrplace)}
                  </Col>
                </Row>
              </div>
            </div>
            <div className="col-title last-col-title">
              <div className="col-name">应聘人承诺与个人资料保密</div>
              <div className="agreement">
                <Checkbox
                  name="agreement"
                  checked={this.state.agreement}
                  onChange={e => this.onAgreementChange(e)}
                >
                  <div className="two">
                    公司将妥善处理您在本表填写的个人信息，并承诺保护您的隐私。<br />
                    本人承诺以上所填各项内容和所提供的“证明资料”（含学历证书、工作经历证明、离职证明、体检证明等）均为真实有效，并同意公司就其真实性及有效性进行调查；若发现本人有任何隐瞒事实欺诈行为，公司有权对本人予以违纪辞退，公司无须支付任何经济补偿!
                  </div>
                </Checkbox>
              </div>
              <div className="submit">
                <Button
                  type="primary"
                  size="large"
                  onClick={() => this.submit()}
                >
                  提交信息
                </Button>
              </div>
            </div>
          </Form>
        </div>
      </div>
    );
    return dom;
  }
  //创建已提交页面
  creactSubmission() {
    let dom = (
      <div className="already-sub">
        <div className="icon">
          <Icon type="smile-o" style={{ fontSize: 66, color: "#08c" }} />
        </div>
        <div>亲，您已提交登记表，如有问题请联系招聘人员！</div>
      </div>
    );
    return dom;
  }
  render() {
    return (
      <div className={this.state.isSubmit ? "" : "information"}>
        <div className="header">
          <div className="left">
            <img
              alt=""
              src="http://cas.hengyi.com:8080/themes/hengyi/images/logo.png"
            />
          </div>
          <div className="right">
            <span onClick={() => this.login()}>
              欢迎您 <Icon type="smile-o" />
            </span>
          </div>
        </div>
        {this.state.isSubmit ? this.creactSubmission() : this.creactTable()}
        {!this.state.isSubmit && (
          <div className="footer">
            杭州市萧山区市心北路260号恒逸•南岸明珠3幢2402；Tel:
            +86-0571-83860872 ；Email: hr@hengyi.com
          </div>
        )}
      </div>
    );
  }
}

export default Home;

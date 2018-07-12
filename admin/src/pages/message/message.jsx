import React from "react";
import { Table, Icon } from "antd";
import applyData from "./../../constants/applyData.js";
import apiData from "./../../constants/api.js";
import "./message.less";
let registerData;
class showMsg extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isShow: true
    };
    this.convertData = this.convertData.bind(this);
    this.creatHrDom = this.creatHrDom.bind(this);
    this.creatApplyDom = this.creatApplyDom.bind(this);
    this.creatUserDom = this.creatUserDom.bind(this);
    this.creatHomeDom = this.creatHomeDom.bind(this);
    this.creatEduDom = this.creatEduDom.bind(this);
    this.creatJobDom = this.creatJobDom.bind(this);
    this.creatCertDom = this.creatCertDom.bind(this);
    this.creatAward = this.creatAward.bind(this);
    this.creatCurrentJobDom = this.creatCurrentJobDom.bind(this);
    this.creatWitnessDom = this.creatWitnessDom.bind(this);
    this.creatAgreementDom = this.creatAgreementDom.bind(this);
    this.returnUp = this.returnUp.bind(this);
    this.print = this.print.bind(this);
  }
  // 将一些代码代号数据装换成文字数据
  convertData(data) {
    localStorage.setItem("registerData", JSON.stringify(data));
    registerData = data;
    //从何种渠道得知招聘信息
    for (let item of applyData.ehowtoknow) {
      if (registerData.applyinfo.ehowtoknow === item.id) {
        registerData.applyinfo.ehowtoknow = item.source;
      }
    }
    //性别，籍贯，婚姻情况，最高学历，住房情况，毕业证书，户口类型
    let userArr = [
      "esex",
      "enativepro",
      "emarriage",
      "ehighedu",
      "houseinfo",
      "graducert",
      "regtype"
    ];
    userArr.map(v => {
      for (let item of applyData[v].arr) {
        if (registerData.userinfo[v] === item.id) {
          registerData.userinfo[v] = item.text;
        }
      }
      return false;
    });
    // 性别
    // for (let item of applyData.esex.arr) {
    //   if (registerData.userinfo.esex === item.id) {
    //     registerData.userinfo.esex = item.text;
    //   }
    // }
    // // 籍贯
    // for (let item of applyData.enativepro.arr) {
    //   if (registerData.userinfo.enativepro === item.id) {
    //     registerData.userinfo.enativepro = item.text;
    //   }
    // }
    // // 婚姻情况
    // for (let item of applyData.emarriage.arr) {
    //   if (registerData.userinfo.emarriage === item.id) {
    //     registerData.userinfo.emarriage = item.text;
    //   }
    // }
    // //最高学历
    // for (let item of applyData.ehighedu.arr) {
    //   if (registerData.userinfo.ehighedu === item.id) {
    //     registerData.userinfo.ehighedu = item.text;
    //   }
    // }
    // //住房情况
    // for (let item of applyData.houseinfo.arr) {
    //   if (registerData.userinfo.houseinfo === item.id) {
    //     registerData.userinfo.houseinfo = item.text;
    //   }
    // }
    // //毕业证书
    // for (let item of applyData.graducert.arr) {
    //   if (registerData.userinfo.graducert === item.id) {
    //     registerData.userinfo.graducert = item.text;
    //   }
    // }
    // //户口类型
    // for (let item of applyData.regtype.arr) {
    //   if (registerData.userinfo.regtype === item.id) {
    //     registerData.userinfo.regtype = item.text;
    //   }
    // }
    //学历
    let eduinfo = registerData.eduinfo;
    let xueliArr = ["edu1xueli", "edu2xueli", "edu3xueli", "edu4xueli"];
    xueliArr.map(v => {
      for (let item of applyData.education.selectArr.edudegree) {
        if (eduinfo[v] === item.id) {
          registerData.eduinfo[v] = item.text;
        }
      }
      return false;
    });
    // 学历性质
    let propertyArr = [
      "edu1property",
      "edu2property",
      "edu3property",
      "edu4property"
    ];
    propertyArr.map(v => {
      for (let item of applyData.education.selectArr.edunature) {
        if (eduinfo[v] === item.id) {
          registerData.eduinfo[v] = item.text;
        }
      }
      return false;
    });
    // 教育类型
    let typeArr = ["edu1type", "edu2type", "edu3type", "edu4type"];
    typeArr.map(v => {
      for (let item of applyData.education.selectArr.edutype) {
        if (eduinfo[v] === item.id) {
          registerData.eduinfo[v] = item.text;
        }
      }
      return false;
    });
  }
  componentWillMount() {
    if (this.props.location.query) {
      this.convertData(this.props.location.query);
    } else if (JSON.parse(localStorage.getItem("registerData"))) {
      this.convertData(JSON.parse(localStorage.getItem("registerData")));
    } else {
      registerData = {
        applyinfo: {},
        userinfo: {},
        homeinfo: {},
        eduinfo: {},
        certinfo: {},
        awardinfo: {}
      };
    }
  }
  // 返回汇总表
  returnUp() {
    this.props.history.push("/table");
  }
  // 一键打印
  print() {
    let that = this;
    this.setState(
      {
        isShow: false
      },
      () => {
        window.print();
        that.setState({
          isShow: true
        });
      }
    );
  }
  // 创建入职信息一栏
  creatHrDom() {
    let dom;
    const columns = [
      {
        title: "key1",
        dataIndex: "key1",
        width: "18%",
        align: "left",
        className: "col-style"
      },
      {
        title: "val1",
        dataIndex: "val1",
        align: "left"
      },
      {
        title: "key2",
        dataIndex: "key2",
        width: "12%",
        align: "left",
        className: "col-style"
      },
      {
        title: "val2",
        dataIndex: "val2",
        align: "left"
      },
      {
        title: "key3",
        dataIndex: "key3",
        width: "12%",
        align: "left",
        className: "col-style"
      },
      {
        title: "val3",
        dataIndex: "val3",
        align: "left"
      }
    ];
    const data = [
      {
        key: "1",
        key1: "录用岗位及职级:",
        val1: "",
        key2: "入职时间:",
        val2: "",
        key3: "员工编号:",
        val3: ""
      }
    ];
    dom = (
      <Table
        columns={columns}
        dataSource={data}
        bordered
        title={() => "入职信息"}
      />
    );
    return dom;
  }
  // 创建申请信息一栏
  creatApplyDom() {
    let applyinfo = registerData.applyinfo;
    let dom;
    const columns = [
      {
        title: "key1",
        dataIndex: "key1",
        align: "left",
        className: "col-style"
      },
      {
        title: "val1",
        dataIndex: "val1",
        align: "left",
        width: "25%"
      },
      {
        title: "key2",
        dataIndex: "key2",
        align: "left",
        className: "col-style"
      },
      {
        title: "val2",
        dataIndex: "val2",
        align: "left",
        width: "25%"
      }
    ];
    const data = [
      {
        key: "1",
        key1: "申请职位:",
        val1: applyinfo.ejob,
        key2: "填表日期:",
        val2: applyinfo.writedate
      },
      {
        key: "2",
        key1: "从何种渠道得知招聘信息？",
        val1: applyinfo.ehowtoknow,
        key2: "期望薪资(税前):",
        val2: applyinfo.esalary
      }
    ];
    dom = (
      <Table
        columns={columns}
        dataSource={data}
        bordered
        title={() => "申请信息"}
      />
    );
    return dom;
  }
  // 创建个人基本信息一栏
  creatUserDom() {
    let userinfo = registerData.userinfo;
    let dom;
    const columns = [
      {
        title: "key1",
        dataIndex: "key1",
        align: "left",
        className: "col-style"
      },
      {
        title: "val1",
        dataIndex: "val1",
        align: "left",
        width: "28%",
        render: (text, record) => (
          <span>
            {typeof record.val1 === "number" && isNaN(record.val1)
              ? ""
              : record.val1}
          </span>
        )
      },
      {
        title: "key2",
        dataIndex: "key2",
        align: "left",
        className: "col-style"
      },
      {
        title: "val2",
        dataIndex: "val2",
        align: "left",
        width: "28%",
        render: (text, record) =>
          record.url ? (
            <img
              src={apiData.imgurl + record.url}
              alt=""
              width="65"
              height="85"
            />
          ) : (
            <span>
              {typeof record.val2 === "number" && isNaN(record.val2)
                ? ""
                : record.val2}
            </span>
          )
      }
    ];
    const data = [
      {
        key: "1",
        key1: "姓名:",
        val1: userinfo.efirstname + userinfo.elastname,
        key2: "照片:",
        val2: "",
        url: userinfo.photo
      },
      {
        key: "2",
        key1: "出生日期:",
        val1: userinfo.ebirthdate,
        key2: "性别:",
        val2: userinfo.esex
      },
      {
        key: "3",
        key1: "政治面貌:",
        val1: userinfo.outlook,
        key2: "民族:",
        val2: userinfo.enation
      },
      {
        key: "4",
        key1: "毕业学校:",
        val1: userinfo.eschool,
        key2: "籍贯:",
        val2: userinfo.enativepro + userinfo.enativecity
      },
      {
        key: "5",
        key1: "身份证:",
        val1: userinfo.eidnum,
        key2: "手机号码:",
        val2: userinfo.emobile
      },
      {
        key: "6",
        key1: "最高学历:",
        val1: userinfo.ehighedu,
        key2: "户口类型:",
        val2: userinfo.regtype
      },
      {
        key: "7",
        key1: "住房情况:",
        val1: userinfo.houseinfo,
        key2: "毕业证书:",
        val2: userinfo.graducert
      },
      {
        key: "8",
        key1: "婚姻状况:",
        val1: userinfo.emarriage,
        key2: "生育状况:",
        val2: userinfo.ebear
      },
      {
        key: "9",
        key1: "英语水平:",
        val1: userinfo.english,
        key2: "计算机水平:",
        val2: userinfo.computerrank
      },
      {
        key: "10",
        key1: "现居住地:",
        val1: userinfo.eaddrpro + userinfo.eaddrcity + userinfo.eaddrstreet,
        key2: "邮编:",
        val2: userinfo.ezipcode1
      },
      {
        key: "11",
        key1: "家庭住地:",
        val1: userinfo.ehomepro + userinfo.ehomecity + userinfo.ehomestreet,
        key2: "邮编:",
        val2: userinfo.ezipcode2
      },
      {
        key: "12",
        key1: "户籍住地:",
        val1:
          userinfo.enativepro + userinfo.enativecity + userinfo.enativestreet,
        key2: "邮编:",
        val2: userinfo.ezipcode3
      },
      {
        key: "13",
        key1: "您是否有需特殊注明的健康问题，若有，请具体说明:",
        val1: userinfo.healthinfo,
        key2: "您是否曾经应聘过本公司某一职位？若有，请具体说明:",
        val2: userinfo.hireinfo
      },
      {
        key: "14",
        key1: "您是否有亲属和朋友在公司工作？若有，请具体说明:",
        val1: userinfo.otherinfo,
        key2: "",
        val2: ""
      }
    ];
    let pagination = {
      defaultPageSize: 20
    };
    dom = (
      <Table
        columns={columns}
        dataSource={data}
        bordered
        title={() => "个人基本信息"}
        pagination={pagination}
      />
    );
    return dom;
  }
  //创建家庭情况（配偶、儿女、父母、兄弟姐妹、紧急联系人）一栏
  creatHomeDom() {
    let homeinfo = registerData.homeinfo;
    let dom;
    const columns = [
      {
        title: "姓名",
        dataIndex: "name",
        align: "left",
        width: "18%",
        render: (text, record) => (
          <span>
            {record.ename}
            {record.name}
          </span>
        )
      },
      {
        title: "与本人关系",
        dataIndex: "relation",
        align: "left",
        width: "15%"
      },
      {
        title: "出生日期",
        dataIndex: "birthdate",
        align: "left",
        width: "20%"
      },
      {
        title: "联系方式",
        dataIndex: "tel",
        align: "left",
        width: "20%"
      },
      {
        title: "工作/学习单位、职位及工作/学习地",
        dataIndex: "info",
        align: "left"
      }
    ];
    const data = [
      {
        key: "1",
        name: homeinfo.home1name,
        relation: homeinfo.home1relationship,
        birthdate: homeinfo.home1birthdate,
        tel: homeinfo.home1tel,
        info: homeinfo.home1info
      },
      {
        key: "2",
        name: homeinfo.home2name,
        relation: homeinfo.home2relationship,
        birthdate: homeinfo.home2birthdate,
        tel: homeinfo.home2tel,
        info: homeinfo.home2info
      },
      {
        key: "3",
        name: homeinfo.home3name,
        relation: homeinfo.home3relationship,
        birthdate: homeinfo.home3birthdate,
        tel: homeinfo.home3tel,
        info: homeinfo.home3info
      },
      {
        key: "4",
        name: homeinfo.emename,
        ename: "紧急联系人：",
        relation: homeinfo.emerelationship,
        birthdate: homeinfo.emebirthdate,
        tel: homeinfo.emetel,
        info: homeinfo.emeinfo
      }
    ];
    dom = (
      <Table
        columns={columns}
        dataSource={data}
        bordered
        title={() => "家庭情况（配偶、儿女、父母、兄弟姐妹、紧急联系人）"}
      />
    );
    return dom;
  }
  //创建教育背景（学习经历按高到低填写，到高中为止）一栏
  creatEduDom() {
    let eduinfo = registerData.eduinfo;
    let dom;
    const columns = [
      {
        title: "起止年、月、日",
        dataIndex: "edudate",
        align: "left",
        width: "25.5%",
        render: (text, record) => (
          <span>{!record.edustartdate ? "" : text}</span>
        )
      },
      {
        title: "就读学校",
        dataIndex: "eduschool",
        align: "left"
      },
      {
        title: "专业",
        dataIndex: "edumajor",
        align: "left"
      },
      {
        title: "学历",
        dataIndex: "eduxueli",
        align: "left"
      },
      {
        title: "学历性质",
        dataIndex: "eduproperty",
        align: "left"
      },
      {
        title: "教育类型",
        dataIndex: "edutype",
        align: "left"
      }
    ];
    const data = [
      {
        key: "1",
        edudate: eduinfo.edu1startdate + "-" + eduinfo.edu1enddate,
        edustartdate: eduinfo.edu1startdate,
        eduenddate: eduinfo.edu1enddate,
        eduschool: eduinfo.edu1school,
        edumajor: eduinfo.edu1major,
        eduxueli: eduinfo.edu1xueli,
        eduproperty: eduinfo.edu1property,
        edutype: eduinfo.edu1type
      },
      {
        key: "2",
        edudate: eduinfo.edu2startdate + "-" + eduinfo.edu2enddate,
        edustartdate: eduinfo.edu2startdate,
        eduenddate: eduinfo.edu2enddate,
        eduschool: eduinfo.edu2school,
        edumajor: eduinfo.edu2major,
        eduxueli: eduinfo.edu2xueli,
        eduproperty: eduinfo.edu2property,
        edutype: eduinfo.edu2type
      },
      {
        key: "3",
        edudate: eduinfo.edu3startdate + "-" + eduinfo.edu3enddate,
        edustartdate: eduinfo.edu3startdate,
        eduenddate: eduinfo.edu3enddate,
        eduschool: eduinfo.edu3school,
        edumajor: eduinfo.edu3major,
        eduxueli: eduinfo.edu3xueli,
        eduproperty: eduinfo.edu3property,
        edutype: eduinfo.edu3type
      },
      {
        key: "4",
        edudate: eduinfo.edu4startdate + "-" + eduinfo.edu4enddate,
        edustartdate: eduinfo.edu4startdate,
        eduenddate: eduinfo.edu4enddate,
        eduschool: eduinfo.edu4school,
        edumajor: eduinfo.edu4major,
        eduxueli: eduinfo.edu4xueli,
        eduproperty: eduinfo.edu4property,
        edutype: eduinfo.edu4type
      }
    ];
    dom = (
      <Table
        columns={columns}
        dataSource={data}
        bordered
        title={() => "教育背景（学习经历按高到低填写，到高中为止）"}
      />
    );
    return dom;
  }
  //创建工作经历（工作经历按倒序填写）一栏
  creatJobDom() {
    let jobinfo = registerData.jobinfo;
    let dom;
    const columns = [
      {
        title: "起止年、月、日",
        dataIndex: "jobdate",
        align: "left",
        width: "25.5%",
        render: (text, record) => (
          <span>{!record.jobstartdate ? "" : text}</span>
        )
      },
      {
        title: "工作单位、职务、职级",
        dataIndex: "job",
        align: "left"
      },
      {
        title: "离职原因",
        dataIndex: "quit",
        align: "left"
      },
      {
        title: "证明人",
        dataIndex: "witness",
        align: "left"
      },
      {
        title: "联系方式",
        dataIndex: "witnessTel",
        align: "left"
      }
    ];
    const data = [
      {
        key: "1",
        jobdate: jobinfo.job1startdate + "-" + jobinfo.job1enddate,
        jobstartdate: jobinfo.job1startdate,
        jobenddate: jobinfo.job1enddate,
        job: jobinfo.job1info,
        quit: jobinfo.job1quit,
        witness: jobinfo.job1witness,
        witnessTel: jobinfo.job1tel
      },
      {
        key: "2",
        jobdate: jobinfo.job2startdate + "-" + jobinfo.job2enddate,
        jobstartdate: jobinfo.job2startdate,
        jobenddate: jobinfo.job2enddate,
        job: jobinfo.job2info,
        quit: jobinfo.job2quit,
        witness: jobinfo.job2witness,
        witnessTel: jobinfo.job2tel
      },
      {
        key: "3",
        jobdate: jobinfo.job3startdate + "-" + jobinfo.job3enddate,
        jobstartdate: jobinfo.job3startdate,
        jobenddate: jobinfo.job3enddate,
        job: jobinfo.job3info,
        quit: jobinfo.job3quit,
        witness: jobinfo.job3witness,
        witnessTel: jobinfo.job3tel
      }
    ];
    dom = (
      <Table
        columns={columns}
        dataSource={data}
        bordered
        title={() => "工作经历（工作经历按倒序填写）"}
      />
    );
    return dom;
  }
  //创建专业技术（职称或执业资格等）一栏
  creatCertDom() {
    let certinfo = registerData.certinfo;
    let dom;
    const columns = [
      {
        title: "所获职称或执业资格证书等",
        dataIndex: "cert",
        align: "left"
      },
      {
        title: "发证机构",
        dataIndex: "certorg",
        align: "left"
      },
      {
        title: "获取日期",
        dataIndex: "certdate",
        align: "left"
      }
    ];
    const data = [
      {
        key: "1",
        cert: certinfo.cert1,
        certorg: certinfo.cert1org,
        certdate: certinfo.cert1date
      },
      {
        key: "2",
        cert: certinfo.cert2,
        certorg: certinfo.cert2org,
        certdate: certinfo.cert2date
      },
      {
        key: "3",
        cert: certinfo.cert3,
        certorg: certinfo.cert3org,
        certdate: certinfo.cert3date
      }
    ];
    dom = (
      <Table
        columns={columns}
        dataSource={data}
        bordered
        title={() => "专业技术（职称或执业资格等）"}
      />
    );
    return dom;
  }
  //创建在校/职期间获奖情况一栏
  creatAward() {
    let awardinfo = registerData.awardinfo;
    let dom;
    const columns = [
      {
        title: "获奖日期",
        dataIndex: "awarddate",
        align: "left"
      },
      {
        title: "在校/职期间获奖情况",
        dataIndex: "awardsit",
        align: "left"
      },
      {
        title: "单位",
        dataIndex: "awardplace",
        align: "left"
      },
      {
        title: "内容备注",
        dataIndex: "awarddetail",
        align: "left"
      }
    ];
    const data = [
      {
        key: "1",
        awarddate: awardinfo.award1date,
        awardsit: awardinfo.award1info,
        awardplace: awardinfo.award1place,
        awarddetail: awardinfo.award1detail
      },
      {
        key: "2",
        awarddate: awardinfo.award2date,
        awardsit: awardinfo.award2info,
        awardplace: awardinfo.award2place,
        awarddetail: awardinfo.award2detail
      },
      {
        key: "3",
        awarddate: awardinfo.award3date,
        awardsit: awardinfo.award3info,
        awardplace: awardinfo.award3place,
        awarddetail: awardinfo.award3detail
      }
    ];
    dom = (
      <Table
        columns={columns}
        dataSource={data}
        bordered
        title={() => "在校/职期间获奖情况"}
      />
    );
    return dom;
  }
  // 创建现工作情况一栏
  creatCurrentJobDom() {
    let currentjob = registerData.currentjob;
    let dom;
    const columns = [
      {
        title: "key1",
        dataIndex: "key1",
        align: "left",
        className: "col-style"
      },
      {
        title: "val1",
        dataIndex: "val1",
        align: "left",
        width: "23%"
      },
      {
        title: "key2",
        dataIndex: "key2",
        align: "left",
        className: "col-style",
        width: "28%"
      },
      {
        title: "val2",
        dataIndex: "val2",
        align: "left",
        width: "23%"
      }
    ];
    const data = [
      {
        key: "1",
        key1: "现雇主及单位地址:",
        val1: currentjob.currentjobplace,
        key2: "现任职务及主要工作职责:",
        val2: currentjob.currentjobinfo
      },
      {
        key: "2",
        key1: "开始时间:",
        val1: currentjob.currentjobstart,
        key2: "当前年薪:",
        val2: currentjob.currentsalary
      },
      {
        key: "3",
        key1: "备注：是否与前用人单位已解除劳动合同:",
        val1: currentjob.isquit,
        key2: "离职所需要的时间:",
        val2: currentjob.quittime
      },
      {
        key: "4",
        key1: "离职原因:",
        val1: currentjob.currentjobquitreason,
        key2: `若离职原因是"其他"，请具体说明:`,
        val2: currentjob.field1
      }
    ];
    dom = (
      <Table
        columns={columns}
        dataSource={data}
        bordered
        title={() => "现工作情况"}
      />
    );
    return dom;
  }
  // 创建证明人一栏
  creatWitnessDom() {
    let witness = registerData.witness;
    let dom;
    const renderContent = (value, row, index) => {
      const obj = {
        children: value,
        props: {}
      };
      if (index % 3 === 0) {
        obj.props.colSpan = 0;
      }
      return obj;
    };
    const columns = [
      {
        title: "key1",
        dataIndex: "key1",
        width: "12%",
        align: "left",
        className: "col-style",
        render: (text, row, index) => {
          if (index % 3 !== 0) {
            return text;
          }
          return {
            children: <span className="witness">{text}</span>,
            props: {
              colSpan: 6
            }
          };
        }
      },
      {
        title: "val1",
        dataIndex: "val1",
        align: "left",
        render: renderContent
      },
      {
        title: "key2",
        dataIndex: "key2",
        width: "12%",
        align: "left",
        className: "col-style",
        render: renderContent
      },
      {
        title: "val2",
        dataIndex: "val2",
        align: "left",
        render: renderContent
      },
      {
        title: "key3",
        dataIndex: "key3",
        width: "12%",
        align: "left",
        className: "col-style",
        render: renderContent
      },
      {
        title: "val3",
        dataIndex: "val3",
        align: "left",
        render: renderContent
      }
    ];
    const data = [
      {
        key: "1",
        key1: "1.现任或最近工作单位的上级或您学校的导师 ( 第一证明人 )",
        val1: "",
        key2: "",
        val2: "",
        key3: "",
        val3: ""
      },
      {
        key: "2",
        key1: "姓名:",
        val1: witness.wit1name,
        key2: "电话:",
        val2: witness.wit1phone,
        key3: "职务",
        val3: witness.wit1job
      },
      {
        key: "3",
        key1: "与本人关系:",
        val1: witness.wit1relation,
        key2: "单位:",
        val2: witness.wit1place,
        key3: "",
        val3: ""
      },
      {
        key: "4",
        key1: "2.第二证明人",
        val1: "",
        key2: "",
        val2: "",
        key3: "",
        val3: ""
      },
      {
        key: "5",
        key1: "姓名:",
        val1: witness.wit2name,
        key2: "电话:",
        val2: witness.wit2phone,
        key3: "职务",
        val3: witness.wit2job
      },
      {
        key: "6",
        key1: "与本人关系:",
        val1: witness.wit2relation,
        key2: "单位:",
        val2: witness.wit2place,
        key3: "",
        val3: ""
      },
      {
        key: "7",
        key1: "3.现单位人事部门联系人",
        val1: "",
        key2: "",
        val2: "",
        key3: "",
        val3: ""
      },
      {
        key: "8",
        key1: "姓名:",
        val1: witness.wit1hr,
        key2: "职务:",
        val2: witness.wit1hrjob,
        key3: "邮箱",
        val3: witness.wit1hremail
      },
      {
        key: "9",
        key1: "联系方式:",
        val1: witness.wit1hrphone,
        key2: "单位及地址:",
        val2: witness.wit1hrplace,
        key3: "",
        val3: ""
      }
    ];
    dom = (
      <Table
        columns={columns}
        dataSource={data}
        bordered
        title={() => "证明人"}
      />
    );
    return dom;
  }
  //创建应聘人承诺与个人资料保密一栏
  creatAgreementDom() {
    let dom;
    const columns = [
      {
        title: "key1",
        dataIndex: "key1",
        align: "left",
        className: "col-style",
        render: () => (
          <div>
            <div className="agreement-top">
              公司将妥善处理您在本表填写的个人信息，并承诺保护您的隐私<br />
              本人承诺以上所填各项内容和所提供的“证明资料”（含学历证书、工作经历证明、离职证明、体检证明等）均为真实有效，并同意公司就其真实性及有效性进行调查；若发现本人有任何隐瞒事实欺诈行为，公司有权对本人予以违纪辞退，公司无须支付任何经济补偿!
            </div>
            <div className="agreement-bottom">
              <span className="sign-name">应聘人亲笔签名：</span>
              <span className="sign-date">日期：</span>
            </div>
          </div>
        )
      }
    ];
    const data = [
      {
        key: "1",
        key1: ""
      }
    ];
    dom = (
      <Table
        columns={columns}
        dataSource={data}
        bordered
        title={() => "应聘人承诺与个人资料保密"}
      />
    );
    return dom;
  }
  render() {
    return (
      <div className="info">
        {this.state.isShow && (
          <div className="header">
            <div className="left">
              <img
                alt=""
                src="http://cas.hengyi.com:8080/themes/hengyi/images/logo.png"
              />
            </div>
            <div className="right">
              <span className="out-login" onClick={() => this.returnUp()}>
                <Icon type="logout" />
                {` 返回汇总表`}
              </span>
              <span className="print" onClick={this.print}>
                一键打印
              </span>
            </div>
          </div>
        )}

        <div className="title">应聘登记表</div>

        <div
          className={this.state.isShow ? `tables print-tables` : `tables bor`}
        >
          <div className="like-table">
            {this.creatHrDom()}
            {this.creatApplyDom()}
            {this.creatUserDom()}
          </div>
          <div className="real-table">
            {this.creatHomeDom()}
            {this.creatEduDom()}
            {this.creatJobDom()}
            {this.creatCertDom()}
            {this.creatAward()}
          </div>
          <div className="like-table">
            {this.creatCurrentJobDom()}
            {this.creatWitnessDom()}
          </div>
          <div className="agreement">{this.creatAgreementDom()}</div>
        </div>
      </div>
    );
  }
}
export default showMsg;

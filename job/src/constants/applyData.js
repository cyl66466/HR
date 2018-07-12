let applyData = {
  //申请职位
  ejob: {
    domType: "text",
    label: "申请职位",
    required: true,
    name: "ejob",
    placeholder: "请输入您应聘的职位"
  },
  // 期望薪资/元 (税前)
  esalary: {
    domType: "text",
    label: "期望薪资/元 (税前)",
    required: false,
    name: "esalary"
    // placeholder: "请输入期望薪资"
  },
  // 从何种渠道得知招聘信息
  ehowtoknow: [
    {
      id: "01",
      source: "网络招聘"
    },
    {
      id: "02",
      source: "报刊杂志"
    },
    {
      id: "03",
      source: "现场招聘"
    },
    {
      id: "04",
      source: "中介机构"
    },
    {
      id: "05",
      source: "人才市场"
    },
    {
      id: "06",
      source: "猎头公司"
    },
    {
      id: "07",
      source: "校园招聘(本科及以上)"
    },
    {
      id: "08",
      source: "校园招聘(专科)"
    },
    {
      id: "09",
      source: "校园招聘(中专及职高)"
    },
    {
      id: "10",
      source: "劳务派遣"
    },
    {
      id: "11",
      source: "招聘会"
    },
    {
      id: "12",
      source: "内部推荐"
    },
    {
      id: "13",
      source: "外部推荐"
    },
    {
      id: "14",
      source: "其他"
    }
  ],
  //应聘者的姓
  efirstname: {
    domType: "text",
    label: "姓名",
    required: true,
    style: { width: "6vw" },
    name: "efirstname",
    placeholder: "姓"
  },
  //应聘者的名
  elastname: {
    domType: "text",
    label: "",
    name: "elastname",
    placeholder: "名"
  },
  //性别
  esex: {
    domType: "radio",
    label: "性别",
    required: true,
    name: "esex",
    arr: [{ id: "1", text: "男" }, { id: "2", text: "女" }]
  },
  // 民族
  nations: {
    domType: "select",
    label: "民族",
    required: true,
    name: "enation",
    arr: [
      "汉族",
      "蒙古族",
      "回族",
      "藏族",
      "维吾尔族",
      "苗族",
      "彝族",
      "壮族",
      "布依族",
      "朝鲜族",
      "满族",
      "侗族",
      "瑶族",
      "白族",
      "土家族",
      "哈尼族",
      "哈萨克族",
      "傣族",
      "黎族",
      "傈僳族",
      "佤族",
      "畲族",
      "高山族",
      "拉祜族",
      "水族",
      "东乡族",
      "纳西族",
      "景颇族",
      "柯尔克孜族",
      "土族",
      "达斡尔族",
      "仫佬族",
      "羌族",
      "布朗族",
      "撒拉族",
      "毛南族",
      "仡佬族",
      "锡伯族",
      "阿昌族",
      "普米族",
      "塔吉克族",
      "怒族",
      "乌孜别克族",
      "俄罗斯族",
      "鄂温克族",
      "德昂族",
      "保安族",
      "裕固族",
      "京族",
      "塔塔尔族",
      "独龙族",
      "鄂伦春族",
      "赫哲族",
      "门巴族",
      "珞巴族",
      "基诺族"
    ]
  },
  // 出生日期
  ebirthdate: {
    domType: "date",
    label: "出生日期",
    required: true,
    name: "ebirthdate"
  },
  // 政治面貌
  outlook: {
    domType: "select",
    label: "政治面貌",
    required: true,
    name: "outlook",
    arr: ["中共党员", "中共预备党员", "共青团员", "群众", "其他"]
  },
  // 籍贯（省）
  enativepro: {
    domType: "select",
    label: "籍贯",
    name: "enativepro",
    arr: [
      {
        id: "010",
        text: "北京"
      },
      {
        id: "020",
        text: "上海"
      },
      {
        id: "030",
        text: "天津"
      },
      {
        id: "040",
        text: "内蒙古"
      },
      {
        id: "050",
        text: "山西"
      },
      {
        id: "060",
        text: "河北"
      },

      {
        id: "070",
        text: "辽宁"
      },
      {
        id: "080",
        text: "吉林"
      },
      {
        id: "090",
        text: "黑龙江"
      },
      {
        id: "100",
        text: "江苏"
      },
      {
        id: "110",
        text: "安徽"
      },
      {
        id: "120",
        text: "山东"
      },
      {
        id: "130",
        text: "浙江"
      },
      {
        id: "140",
        text: "江西"
      },
      {
        id: "150",
        text: "福建"
      },
      {
        id: "160",
        text: "湖南"
      },
      {
        id: "170",
        text: "湖北"
      },
      {
        id: "180",
        text: "河南"
      },
      {
        id: "190",
        text: "广东"
      },

      {
        id: "200",
        text: "海南"
      },
      {
        id: "210",
        text: "广西"
      },
      {
        id: "220",
        text: "贵州"
      },
      {
        id: "230",
        text: "四川"
      },
      {
        id: "240",
        text: "云南"
      },
      {
        id: "250",
        text: "陕西"
      },
      {
        id: "260",
        text: "甘肃"
      },
      {
        id: "270",
        text: "宁夏"
      },
      {
        id: "280",
        text: "青海"
      },
      {
        id: "290",
        text: "新疆"
      },
      {
        id: "300",
        text: "西藏"
      },
      {
        id: "320",
        text: "重庆"
      },
      {
        id: "330",
        text: "香港"
      },
      {
        id: "340",
        text: "澳门"
      },
      {
        id: "350",
        text: "台湾"
      }
    ]
  },
  // 籍贯（省市）
  enative: {
    domType: "city",
    label: "籍贯",
    required: true,
    secondcity: "secondcity3",
    name1: "enativepro", //省
    name2: "enativecity" //市
  },
  // 婚姻状况
  emarriage: {
    domType: "radio",
    label: "婚姻状况",
    required: true,
    name: "emarriage",
    arr: [
      { id: "0", text: "未婚" },
      { id: "1", text: "已婚" },
      { id: "9", text: "未知" }
    ]
  },
  // 生育状况
  ebear: {
    domType: "radio",
    label: "生育状况",
    name: "ebear",
    arr: [{ id: "已育", text: "已育" }, { id: "未育", text: "未育" }]
  },
  //毕业学校
  eschool: {
    domType: "text",
    label: "毕业学校",
    required: true,
    name: "eschool",
    placeholder: "请输入您毕业的学校"
  },
  // 最高学历
  ehighedu: {
    domType: "select",
    label: "最高学历",
    required: true,
    name: "ehighedu",
    arr: [
      {
        id: "10",
        text: "博士"
      },
      {
        id: "15",
        text: "硕士"
      },
      {
        id: "20",
        text: "本科"
      },
      {
        id: "25",
        text: "专科"
      },
      {
        id: "30",
        text: "高中中专"
      },
      {
        id: "35",
        text: "高中"
      },

      {
        id: "40",
        text: "职高"
      },
      {
        id: "45",
        text: "初中中专"
      },
      {
        id: "50",
        text: "技校"
      },
      {
        id: "55",
        text: "初中"
      },
      {
        id: "60",
        text: "初中以下"
      }
    ]
  },
  // 手机号码
  emobile: {
    domType: "text",
    label: "手机号码",
    required: true,
    name: "emobile",
    placeholder: "请输入您的手机号码"
  },
  // QQ号码
  eqqnum: {
    domType: "text",
    label: "QQ号码",
    name: "eqqnum"
    // placeholder: "请输入您的QQ号码"
  },
  // 住房情况
  houseinfo: {
    domType: "select",
    label: "住房情况",
    required: true,
    name: "houseinfo",
    arr: [
      {
        id: "10",
        text: "自有住房"
      },
      {
        id: "20",
        text: "公司套房"
      },
      {
        id: "30",
        text: "公司夫妻房"
      },
      {
        id: "40",
        text: "公司集体宿舍"
      },
      {
        id: "50",
        text: "自己租房"
      }
    ]
  },
  // 身份证号
  eidnum: {
    domType: "text",
    label: "身份证号",
    required: true,
    name: "eidnum",
    placeholder: "请输入您的身份证号码"
  },
  //毕业证书
  graducert: {
    domType: "select",
    label: "毕业证书",
    required: true,
    name: "graducert",
    arr: [
      {
        id: "11",
        text: "博士研究生毕业"
      },
      {
        id: "12",
        text: "博士研究生结业"
      },
      {
        id: "21",
        text: "硕士研究生毕业"
      },
      {
        id: "22",
        text: "硕士研究生结业"
      },
      {
        id: "31",
        text: "大学本科毕业"
      },
      {
        id: "32",
        text: "大学本科结业"
      },
      {
        id: "33",
        text: "大学普通班毕业"
      },
      {
        id: "41",
        text: "大学专科毕业"
      },
      {
        id: "42",
        text: "大学专科结业"
      },
      {
        id: "51",
        text: "高中中专毕业"
      },
      {
        id: "52",
        text: "高中中专结业"
      },
      {
        id: "61",
        text: "职业高中毕业"
      },
      {
        id: "62",
        text: "职业高中结业"
      },
      {
        id: "71",
        text: "技工学校毕业"
      },
      {
        id: "72",
        text: "技工学校结业"
      },
      {
        id: "81",
        text: "普通高中毕业"
      },
      {
        id: "82",
        text: "普通高中结业"
      },
      {
        id: "91",
        text: "初中中专毕业"
      },
      {
        id: "92",
        text: "初中中专结业"
      },
      {
        id: "95",
        text: "初中毕业"
      },
      {
        id: "99",
        text: "其他"
      }
    ]
  },
  // 计算机水平
  computerrank: {
    domType: "select",
    label: "计算机水平",
    name: "computerrank",
    arr: ["精通", "熟练", "一般"]
  },
  // 户口类型
  regtype: {
    domType: "select",
    label: "户口类型",
    required: true,
    name: "regtype",
    arr: [
      {
        id: "10",
        text: "本市城镇户"
      },
      {
        id: "11",
        text: "本市农村户"
      },
      {
        id: "12",
        text: "非本市城镇户"
      },
      {
        id: "13",
        text: "非本市农村户"
      },
      {
        id: "14",
        text: "其他"
      }
    ]
  },
  // 英语水平
  english: {
    domType: "select",
    label: "英语水平",
    required: true,
    name: "english",
    arr: [
      "专业八级",
      "专业四级",
      "雅思",
      "托福",
      "英语六级",
      "英语四级",
      "其他"
    ]
  },

  // 现居地址
  eaddr: {
    domType: "city",
    label: "现居地址",
    required: true,
    secondcity: "secondcity1",
    name1: "eaddrpro", //省
    name2: "eaddrcity" //市
  },
  // 现居地址（街道、区）
  eaddrstreet: {
    domType: "text",
    label: "",
    name: "eaddrstreet",
    placeholder: "街道/门牌号"
  },
  // 现居地址（邮编）
  ezipcode1: {
    domType: "text",
    label: "邮编",
    name: "ezipcode1",
    placeholder: ""
  },

  // 家庭地址
  ehomeaddr: {
    domType: "city",
    label: "家庭地址",
    required: true,
    secondcity: "secondcity2",
    name1: "ehomepro", //省
    name2: "ehomecity" //市
  },
  // 家庭地址（街道、区）
  ehomestreet: {
    domType: "text",
    label: "",
    name: "ehomestreet",
    placeholder: "街道/门牌号"
  },
  // 家庭地址（邮编）
  ezipcode2: {
    domType: "text",
    label: "邮编",
    name: "ezipcode2",
    placeholder: ""
  },

  // 户籍地址
  eregaddr: {
    domType: "city",
    label: "户籍地址",
    required: true,
    secondcity: "secondcity3",
    name1: "enativepro", //省
    name2: "enativecity" //市
  },
  // 户籍地址（街道、区）
  enativestreet: {
    domType: "text",
    label: "",
    name: "enativestreet",
    placeholder: "街道/门牌号"
  },
  // 户籍地址（邮编）
  ezipcode3: {
    domType: "text",
    label: "邮编",
    required: true,
    name: "ezipcode3",
    placeholder: ""
  },

  //学历
  record: [
    {
      id: "10",
      text: "博士"
    },
    {
      id: "15",
      text: "硕士"
    },
    {
      id: "20",
      text: "本科"
    },
    {
      id: "25",
      text: "专科"
    },
    {
      id: "30",
      text: "高中中专"
    },
    {
      id: "35",
      text: "高中"
    },

    {
      id: "40",
      text: "职高"
    },
    {
      id: "45",
      text: "初中中专"
    },
    {
      id: "50",
      text: "技校"
    },
    {
      id: "55",
      text: "初中"
    },
    {
      id: "60",
      text: "初中以下"
    }
  ],

  // 学历性质
  recordnature: [
    {
      id: "01",
      text: "全日制"
    },
    {
      id: "02",
      text: "在职"
    },
    {
      id: "03",
      text: "国外教育"
    },
    {
      id: "04",
      text: "脱产"
    }
  ],

  // 教育类型
  educationtype: [
    {
      id: "1",
      text: "统招"
    },
    {
      id: "2",
      text: "委培"
    },
    {
      id: "3",
      text: "函授"
    },
    {
      id: "4",
      text: "自考"
    },
    {
      id: "5",
      text: "夜大"
    },
    {
      id: "6",
      text: "电大"
    },
    {
      id: "7",
      text: "网络教育"
    },
    {
      id: "8",
      text: "国外教育"
    }
  ],

  //家庭情况表格
  family: {
    head: [
      {
        domType: "text",
        title: "姓名",
        width: "13vw",
        dataIndex: "name"
      },
      {
        domType: "text",
        title: "与本人关系",
        width: "8vw",
        dataIndex: "relationship"
      },
      {
        domType: "date",
        title: "出生日期",
        dataIndex: "birthdate"
      },
      {
        domType: "text",
        title: "联系方式",
        dataIndex: "tel"
      },
      {
        domType: "text",
        title: "工作/学习单位、职位及工作/学习地",
        dataIndex: "info"
      }
    ],
    content: [
      [
        "home1name",
        "home1relationship",
        "home1birthdate",
        "home1tel",
        "home1info"
      ],
      [
        "home2name",
        "home2relationship",
        "home2birthdate",
        "home2tel",
        "home2info"
      ],
      [
        "home3name",
        "home3relationship",
        "home3birthdate",
        "home3tel",
        "home3info"
      ]
    ]
  },
  //教育背景（学习经历按高到低填写，到高中为止）
  education: {
    head: [
      {
        domType: "data",
        title: "起止年、月、日",
        dataIndex: "edudate"
      },
      {
        domType: "text",
        title: "就读大学",
        dataIndex: "university"
      },
      {
        domType: "text",
        title: "专业",
        dataIndex: "edumajor"
      },
      {
        domType: "select",
        title: "学历",
        dataIndex: "record"
      }
    ],
    selectArr: {
      // 学历
      edudegree: [
        {
          id: "10",
          text: "博士"
        },
        {
          id: "15",
          text: "硕士"
        },
        {
          id: "20",
          text: "本科"
        },
        {
          id: "25",
          text: "专科"
        },
        {
          id: "30",
          text: "高中中专"
        },
        {
          id: "35",
          text: "高中"
        },

        {
          id: "40",
          text: "职高"
        },
        {
          id: "45",
          text: "初中中专"
        },
        {
          id: "50",
          text: "技校"
        },
        {
          id: "55",
          text: "初中"
        },
        {
          id: "60",
          text: "初中以下"
        }
      ],
      // 学历性质
      edunature: [
        {
          id: "01",
          text: "全日制"
        },
        {
          id: "02",
          text: "在职"
        },
        {
          id: "03",
          text: "国外教育"
        },
        {
          id: "04",
          text: "脱产"
        }
      ],
      // 教育类型
      edutype: [
        {
          id: "1",
          text: "统招"
        },
        {
          id: "2",
          text: "委培"
        },
        {
          id: "3",
          text: "函授"
        },
        {
          id: "4",
          text: "自考"
        },
        {
          id: "5",
          text: "夜大"
        },
        {
          id: "6",
          text: "电大"
        },
        {
          id: "7",
          text: "网络教育"
        },
        {
          id: "8",
          text: "国外教育"
        }
      ]
    },
    content: [
      ["edu1school", "edu1major", "edu1xueli", "edu1property", "edu1type"],
      ["edu2school", "edu2major", "edu2xueli", "edu2property", "edu2type"],
      ["edu3school", "edu3major", "edu3xueli", "edu3property", "edu3type"],
      ["edu4school", "edu4major", "edu4xueli", "edu4property", "edu4type"]
    ],
    edudate: [
      ["edu1startdate", "edu1enddate"],
      ["edu2startdate", "edu2enddate"],
      ["edu3startdate", "edu3enddate"],
      ["edu4startdate", "edu4enddate"]
    ]
  },
  //工作经历
  jobexperience: {
    quitReason: [
      "工作环境不满意",
      "工作量过大，工作压力大",
      "工作时间与个人意愿不符",
      "上班路程较远，不方便",
      "工作地点与个人发展期望不符",
      "没有发展空间",
      "想改变个人职业发展方向",
      "培训、学习和交流的机会少",
      "缺乏明确的晋升机制",
      "薪酬待遇低",
      "福利不完善",
      "缺乏明确薪酬调整机制",
      "停工待料，停产时间长",
      "对上司管理能力不认同",
      "人际关系复杂、工作氛围压抑",
      "工作乏味，没有挑战性",
      "工作没有得到同事、上司认可",
      "缺乏与工作成就对应的激励措施",
      "与专业不相符，才能无法发挥",
      "工作缺少指导，岗位职责不清",
      "夫妻双方分居两地",
      "需要回去照顾家人",
      "婚育原因",
      "其他家庭原因",
      "个人不愿续签",
      "协商解除劳务合同"
    ],
    content: [
      ["job1info", "job1quit", "job1witness", "job1tel"],
      ["job2info", "job2quit", "job2witness", "job2tel"],
      ["job3info", "job3quit", "job3witness", "job3tel"]
    ],
    jobdate: [
      ["job1startdate", "job1enddate"],
      ["job2startdate", "job2enddate"],
      ["job3startdate", "job3enddate"]
    ]
  },
  //专业技术
  major: {
    head: [
      {
        domType: "text",
        title: "所获职称或执业资格证书等",
        dataIndex: "certificate"
      },
      {
        domType: "text",
        title: "发证机构",
        dataIndex: "mechanism"
      },
      {
        domType: "date",
        title: "获取日期",
        dataIndex: "getdate"
      }
    ],
    content: [
      ["cert1", "cert1org", "cert1date"],
      ["cert2", "cert2org", "cert2date"],
      ["cert3", "cert3org", "cert3date"]
    ]
  },
  //在校/职期间获奖情况
  award: {
    head: [
      {
        domType: "date",
        title: "获奖日期",
        dataIndex: "awarddate"
      },
      {
        domType: "text",
        title: "在校/职期间获奖情况",
        dataIndex: "awardinfo"
      },
      {
        domType: "text",
        title: "单位",
        dataIndex: "place"
      },
      {
        domType: "text",
        title: "内容备注",
        dataIndex: "detail"
      }
    ],
    content: [
      ["award1date", "award1info", "award1place", "award1detail"],
      ["award2date", "award2info", "award2place", "award2detail"],
      ["award3date", "award3info", "award3place", "award3detail"]
    ]
  },
  // 现雇主及单位地址
  currentjobplace: {
    domType: "text",
    label: "现雇主及单位地址",
    name: "currentjobplace"
  },
  // 现任职务及主要工作职责
  currentjobinfo: {
    domType: "text",
    label: "现任职务及主要工作职责",
    name: "currentjobinfo"
  },
  // 开始时间
  currentjobstart: {
    domType: "date",
    label: "开始时间",
    name: "currentjobstart"
  },
  // 主要离职原因
  currentjobquitreason: {
    domType: "select",
    label: "主要离职原因",
    name: "currentjobquitreason",
    arr: [
      "工作环境不满意",
      "工作量过大，工作压力大",
      "工作时间与个人意愿不符",
      "上班路程较远，不方便",
      "工作地点与个人发展期望不符",
      "没有发展空间",
      "想改变个人职业发展方向",
      "培训、学习和交流的机会少",
      "缺乏明确的晋升机制",
      "薪酬待遇低",
      "福利不完善",
      "缺乏明确薪酬调整机制",
      "停工待料，停产时间长",
      "对上司管理能力不认同",
      "人际关系复杂、工作氛围压抑",
      "工作乏味，没有挑战性",
      "工作没有得到同事、上司认可",
      "缺乏与工作成就对应的激励措施",
      "与专业不相符，才能无法发挥",
      "工作缺少指导，岗位职责不清",
      "夫妻双方分居两地",
      "需要回去照顾家人",
      "婚育原因",
      "其他家庭原因",
      "个人不愿续签",
      "协商解除劳务合同",
      "其他"
    ]
  },
  // 离职原因为其他，则进行对应的备注填写
  field1: {
    domType: "text",
    label: `若离职原因是"其他"，请具体说明`,
    name: "field1"
  },
  // 当前年薪
  currentsalary: {
    domType: "text",
    label: "当前年薪",
    name: "currentsalary"
  },
  // 备注：是否与前用人单位已解除劳动合同
  isquit: {
    domType: "radio",
    label: "备注：是否与前用人单位已解除劳动合同",
    name: "isquit",
    arr: [{ id: "是", text: "是" }, { id: "否", text: "否" }]
  },
  // 离职所需要的时间
  quittime: {
    domType: "text",
    label: "离职所需要的时间",
    name: "quittime"
  },
  // 现任或最近工作单位的上级或您学校的导师---姓名
  wit1name: {
    domType: "text",
    label: "姓名",
    required: true,
    name: "wit1name"
  },
  // 现任或最近工作单位的上级或您学校的导师---电话
  wit1phone: {
    domType: "text",
    label: "电话",
    required: true,
    name: "wit1phone"
  },
  // 现任或最近工作单位的上级或您学校的导师---职务
  wit1job: {
    domType: "text",
    label: "职务",
    required: true,
    name: "wit1job"
  },
  // 现任或最近工作单位的上级或您学校的导师---单位
  wit1place: {
    domType: "text",
    label: "单位",
    required: true,
    name: "wit1place"
  },
  // 现任或最近工作单位的上级或您学校的导师---与本人关系
  wit1relation: {
    domType: "text",
    label: "与本人关系",
    required: true,
    name: "wit1relation"
  },
  // 第二证明人---姓名
  wit2name: {
    domType: "text",
    label: "姓名",
    name: "wit2name"
  },
  // 第二证明人---电话
  wit2phone: {
    domType: "text",
    label: "电话",
    name: "wit2phone"
  },
  // 第二证明人---职务
  wit2job: {
    domType: "text",
    label: "职务",
    name: "wit2job"
  },
  // 第二证明人---单位
  wit2place: {
    domType: "text",
    label: "单位",
    name: "wit2place"
  },
  // 第二证明人---与本人关系
  wit2relation: {
    domType: "text",
    label: "与本人关系",
    name: "wit2relation"
  },
  // 现单位人事部门---姓名
  wit1hr: {
    domType: "text",
    label: "姓名",
    name: "wit1hr"
  },
  // 现单位人事部门---职务
  wit1hrjob: {
    domType: "text",
    label: "职务",
    name: "wit1hrjob"
  },
  // 现单位人事部门---联系方式
  wit1hrphone: {
    domType: "text",
    label: "联系方式",
    name: "wit1hrphone"
  },
  // 现单位人事部门---单位及地址
  wit1hrplace: {
    domType: "text",
    label: "单位及地址",
    name: "wit1hrplace"
  },
  // 现单位人事部门---邮箱
  wit1hremail: {
    domType: "text",
    label: "邮箱",
    name: "wit1hremail"
  },
  // 必填字段
  requiredfield: [
    {
      name: "ejob",
      text: "申请职位"
    },
    {
      name: "efirstname",
      text: "姓名的姓"
    },
    {
      name: "elastname",
      text: "姓名的名"
    },
    {
      name: "photo",
      text: "照片不能为空 且 大小不超过120kb"
    },
    {
      name: "eidnum",
      text: "身份证号",
      reg: /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/,
      err: "身份证格式有误，请重新填写！"
    },
    {
      name: "ebirthdate",
      text: "出生日期"
    },
    {
      name: "enation",
      text: "民族"
    },
    {
      name: "outlook",
      text: "政治面貌"
    },
    {
      name: "emarriage",
      text: "婚姻状况"
    },
    {
      name: "enativepro",
      text: "籍贯"
    },
    {
      name: "ehighedu",
      text: "最高学历"
    },
    {
      name: "eschool",
      text: "毕业学校"
    },
    {
      name: "emobile",
      text: "手机号码",
      reg: /^[1][3,4,5,6,7,8][0-9]{9}$/,
      err: "手机号码格式有误，请重新填写！"
    },
    {
      name: "graducert",
      text: "毕业证书"
    },
    {
      name: "houseinfo",
      text: "住房情况"
    },
    {
      name: "english",
      text: "英语水平"
    },
    {
      name: "regtype",
      text: "户口类型"
    },
    {
      name: "eaddrpro",
      text: "现居住地"
    },
    {
      name: "eaddrstreet",
      text: "现居住地的街道门牌号"
    },
    {
      name: "ehomepro",
      text: "家庭住址"
    },
    {
      name: "ehomestreet",
      text: "家庭住址的街道门牌号"
    },
    {
      name: "enativepro",
      text: "户籍地址"
    },
    {
      name: "enativestreet",
      text: "户籍住址的街道门牌号"
    },
    {
      name: "ezipcode3",
      text: "户籍住址的邮编"
    },
    {
      name: "healthinfo",
      text: "您是否有需特殊注明的健康问题"
    },
    {
      name: "hireinfo",
      text: "您是否曾经应聘过本公司某一职位"
    },
    {
      name: "otherinfo",
      text: "您是否有亲属和朋友在公司工作"
    },
    {
      name: "emename",
      text: "紧急联系人",
      reg: /^[\u4e00-\u9fa5]{2,10}$/,
      err: "紧急联系人的姓名格式有误，请重新填写！"
    },
    {
      name: "emerelationship",
      text: "紧急联系人与本人关系"
    },
    {
      name: "emetel",
      text: "紧急联系人的联系方式",
      reg: /^[1][3,4,5,6,7,8][0-9]{9}$/,
      err: "紧急联系人的手机号码格式有误，请重新填写！"
    },
    {
      name: "edu1startdate",
      text: "教育背景中的起止年月日"
    },
    {
      name: "edu1school",
      text: "教育背景中的就读学校"
    },
    {
      name: "edu1major",
      text: "教育背景中的专业"
    },
    {
      name: "edu1xueli",
      text: "教育背景中的学历"
    },
    {
      name: "edu1property",
      text: "教育背景中的学历性质"
    },
    {
      name: "edu1type",
      text: "教育背景中的教育类型"
    },
    {
      name: "wit1name",
      text: "第一证明人的姓名"
    },
    {
      name: "wit1phone",
      text: "第一证明人的电话",
      reg: /^[1][3,4,5,6,7,8][0-9]{9}$/,
      err: "第一证明人的电话格式有误，请重新填写！"
    },
    {
      name: "wit1job",
      text: "第一证明人的职务"
    },
    {
      name: "wit1place",
      text: "第一证明人的单位"
    },
    {
      name: "wit1relation",
      text: "第一证明人与本人的关系"
    }
  ],
  // 上传表单数据的所有字段
  fromData: {
    applyinfo: ["ejob", "esalary", "ehowtoknow", "writedate"],
    userinfo: [
      "efirstname",
      "elastname",
      "esex",
      "enation",
      "ebirthdate",
      "outlook",
      "enativepro",
      "enativecity ",
      "photo",
      "emarriage",
      "ebear",
      "eschool",
      "ehighedu",
      "emobile",
      "eqqnum",
      "eidnum",
      "eaddrpro",
      "eaddrcity",
      "eaddrstreet",
      "ezipcode1",
      "ehomepro",
      "ehomecity",
      "ehomestreet",
      "ezipcode2",
      "enativepro",
      "enativecity",
      "enativestreet",
      "ezipcode3",
      "english",
      "houseinfo",
      "graducert",
      "computerrank",
      "computercert",
      "regtype",
      "healthinfo",
      "hireinfo",
      "otherinfo"
    ],
    homeinfo: [
      "home1name",
      "home2name",
      "home3name",
      "home1relationship",
      "home2relationship",
      "home3relationship",
      "home1birthdate",
      "home2birthdate",
      "home3birthdate",
      "home1tel",
      "home2tel",
      "home3tel",
      "home1info",
      "home2info",
      "home3info",
      "emename",
      "emerelationship",
      "emebirthdate",
      "emetel",
      "emeinfo"
    ],
    eduinfo: [
      "edu1startdate",
      "edu2startdate",
      "edu3startdate",
      "edu4startdate",
      "edu1enddate",
      "edu2enddate",
      "edu3enddate",
      "edu4enddate",
      "edu1school",
      "edu2school",
      "edu3school",
      "edu4school",
      "edu1major",
      "edu2major",
      "edu3major",
      "edu4major",
      "edu1degree",
      "edu2degree",
      "edu3degree",
      "edu4degree",
      "edu1xueli",
      "edu2xueli",
      "edu3xueli",
      "edu4xueli",
      "edu1property",
      "edu2property",
      "edu3property",
      "edu4property",
      "edu1type",
      "edu2type",
      "edu3type",
      "edu4type"
    ],
    jobinfo: [
      "job1startdate",
      "job1enddate",
      "job1info",
      "job1quit",
      "job1witness",
      "job1tel",
      "job2startdate",
      "job2enddate",
      "job2info",
      "job2quit",
      "job2witness",
      "job2tel",
      "job3startdate",
      "job3enddate",
      "job3info",
      "job3quit",
      "job3witness",
      "job3tel"
    ],
    certinfo: [
      "cert1",
      "cert2",
      "cert3",
      "cert1org",
      "cert2org",
      "cert3org",
      "cert1date",
      "cert2date",
      "cert3date"
    ],
    awardinfo: [
      "award1date",
      "award2date",
      "award3date",
      "award1info",
      "award2info",
      "award3info",
      "award1place",
      "award2place",
      "award3place",
      "award1detail",
      "award2detail",
      "award3detail"
    ],
    currentjob: [
      "currentjobplace",
      "currentjobinfo",
      "currentjobstart",
      "currentjobquitreason",
      "currentsalary",
      "field1",
      "isquit",
      "quittime"
    ],
    witness: [
      "wit1name",
      "wit1phone",
      "wit1job",
      "wit1place",
      "wit1relation",
      "wit2name",
      "wit2phone",
      "wit2job",
      "wit2place",
      "wit2relation",
      "wit1hr",
      "wit1hrjob",
      "wit1hrphone",
      "wit1hrplace",
      "wit1hremail"
    ]
  }
};
export default applyData;

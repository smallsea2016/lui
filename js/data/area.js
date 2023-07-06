var provinceList = [{
  label: "北京市",
  value: "110000"
}, {
  label: "天津市",
  value: "120000"
}, {
  label: "河北省",
  value: "130000"
}, {
  label: "山西省",
  value: "140000"
}, {
  label: "内蒙古自治区",
  value: "150000"
}, {
  label: "辽宁省",
  value: "210000"
}, {
  label: "吉林省",
  value: "220000"
}, {
  label: "黑龙江省",
  value: "230000"
}, {
  label: "上海市",
  value: "310000"
}, {
  label: "江苏省",
  value: "320000"
}, {
  label: "浙江省",
  value: "330000"
}, {
  label: "安徽省",
  value: "340000"
}, {
  label: "福建省",
  value: "350000"
}, {
  label: "江西省",
  value: "360000"
}, {
  label: "山东省",
  value: "370000"
}, {
  label: "河南省",
  value: "410000"
}, {
  label: "湖北省",
  value: "420000"
}, {
  label: "湖南省",
  value: "430000"
}, {
  label: "广东省",
  value: "440000"
}, {
  label: "广西壮族自治区",
  value: "450000"
}, {
  label: "海南省",
  value: "460000"
}, {
  label: "重庆市",
  value: "500000"
}, {
  label: "四川省",
  value: "510000"
}, {
  label: "贵州省",
  value: "520000"
}, {
  label: "云南省",
  value: "530000"
}, {
  label: "西藏自治区",
  value: "540000"
}, {
  label: "陕西省",
  value: "610000"
}, {
  label: "甘肃省",
  value: "620000"
}, {
  label: "青海省",
  value: "630000"
}, {
  label: "宁夏回族自治区",
  value: "640000"
}, {
  label: "新疆维吾尔自治区",
  value: "650000"
}, {
  label: "台湾省",
  value: "710000"
}, {
  label: "香港特别行政区",
  value: "810000"
}, {
  label: "澳门特别行政区",
  value: "820000"
}];

var cityList = {
  "110000": [{
    province: "北京市",
    label: "北京市",
    value: "110100"
  }],
  "120000": [{
    province: "天津市",
    label: "天津市",
    value: "120100"
  }],
  "130000": [{
      province: "河北省",
      label: "石家庄市",
      value: "130100"
    },
    {
      province: "河北省",
      label: "唐山市",
      value: "130200"
    },
    {
      province: "河北省",
      label: "秦皇岛市",
      value: "130300"
    },
    {
      province: "河北省",
      label: "邯郸市",
      value: "130400"
    },
    {
      province: "河北省",
      label: "邢台市",
      value: "130500"
    },
    {
      province: "河北省",
      label: "保定市",
      value: "130600"
    },
    {
      province: "河北省",
      label: "张家口市",
      value: "130700"
    },
    {
      province: "河北省",
      label: "承德市",
      value: "130800"
    },
    {
      province: "河北省",
      label: "沧州市",
      value: "130900"
    },
    {
      province: "河北省",
      label: "廊坊市",
      value: "131000"
    },
    {
      province: "河北省",
      label: "衡水市",
      value: "131100"
    },
    {
      province: "河北省",
      label: "省直辖县级行政区划",
      value: "139000"
    }
  ],
  "140000": [{
      province: "山西省",
      label: "太原市",
      value: "140100"
    },
    {
      province: "山西省",
      label: "大同市",
      value: "140200"
    },
    {
      province: "山西省",
      label: "阳泉市",
      value: "140300"
    },
    {
      province: "山西省",
      label: "长治市",
      value: "140400"
    },
    {
      province: "山西省",
      label: "晋城市",
      value: "140500"
    },
    {
      province: "山西省",
      label: "朔州市",
      value: "140600"
    },
    {
      province: "山西省",
      label: "晋中市",
      value: "140700"
    },
    {
      province: "山西省",
      label: "运城市",
      value: "140800"
    },
    {
      province: "山西省",
      label: "忻州市",
      value: "140900"
    },
    {
      province: "山西省",
      label: "临汾市",
      value: "141000"
    },
    {
      province: "山西省",
      label: "吕梁市",
      value: "141100"
    }
  ],
  "150000": [{
      province: "内蒙古自治区",
      label: "呼和浩特市",
      value: "150100"
    },
    {
      province: "内蒙古自治区",
      label: "包头市",
      value: "150200"
    },
    {
      province: "内蒙古自治区",
      label: "乌海市",
      value: "150300"
    },
    {
      province: "内蒙古自治区",
      label: "赤峰市",
      value: "150400"
    },
    {
      province: "内蒙古自治区",
      label: "通辽市",
      value: "150500"
    },
    {
      province: "内蒙古自治区",
      label: "鄂尔多斯市",
      value: "150600"
    },
    {
      province: "内蒙古自治区",
      label: "呼伦贝尔市",
      value: "150700"
    },
    {
      province: "内蒙古自治区",
      label: "巴彦淖尔市",
      value: "150800"
    },
    {
      province: "内蒙古自治区",
      label: "乌兰察布市",
      value: "150900"
    },
    {
      province: "内蒙古自治区",
      label: "兴安盟",
      value: "152200"
    },
    {
      province: "内蒙古自治区",
      label: "锡林郭勒盟",
      value: "152500"
    },
    {
      province: "内蒙古自治区",
      label: "阿拉善盟",
      value: "152900"
    }
  ],
  "210000": [{
      province: "辽宁省",
      label: "沈阳市",
      value: "210100"
    },
    {
      province: "辽宁省",
      label: "大连市",
      value: "210200"
    },
    {
      province: "辽宁省",
      label: "鞍山市",
      value: "210300"
    },
    {
      province: "辽宁省",
      label: "抚顺市",
      value: "210400"
    },
    {
      province: "辽宁省",
      label: "本溪市",
      value: "210500"
    },
    {
      province: "辽宁省",
      label: "丹东市",
      value: "210600"
    },
    {
      province: "辽宁省",
      label: "锦州市",
      value: "210700"
    },
    {
      province: "辽宁省",
      label: "营口市",
      value: "210800"
    },
    {
      province: "辽宁省",
      label: "阜新市",
      value: "210900"
    },
    {
      province: "辽宁省",
      label: "辽阳市",
      value: "211000"
    },
    {
      province: "辽宁省",
      label: "盘锦市",
      value: "211100"
    },
    {
      province: "辽宁省",
      label: "铁岭市",
      value: "211200"
    },
    {
      province: "辽宁省",
      label: "朝阳市",
      value: "211300"
    },
    {
      province: "辽宁省",
      label: "葫芦岛市",
      value: "211400"
    }
  ],
  "220000": [{
      province: "吉林省",
      label: "长春市",
      value: "220100"
    },
    {
      province: "吉林省",
      label: "吉林市",
      value: "220200"
    },
    {
      province: "吉林省",
      label: "四平市",
      value: "220300"
    },
    {
      province: "吉林省",
      label: "辽源市",
      value: "220400"
    },
    {
      province: "吉林省",
      label: "通化市",
      value: "220500"
    },
    {
      province: "吉林省",
      label: "白山市",
      value: "220600"
    },
    {
      province: "吉林省",
      label: "松原市",
      value: "220700"
    },
    {
      province: "吉林省",
      label: "白城市",
      value: "220800"
    },
    {
      province: "吉林省",
      label: "延边朝鲜族自治州",
      value: "222400"
    }
  ],
  "230000": [{
      province: "黑龙江省",
      label: "哈尔滨市",
      value: "230100"
    },
    {
      province: "黑龙江省",
      label: "齐齐哈尔市",
      value: "230200"
    },
    {
      province: "黑龙江省",
      label: "鸡西市",
      value: "230300"
    },
    {
      province: "黑龙江省",
      label: "鹤岗市",
      value: "230400"
    },
    {
      province: "黑龙江省",
      label: "双鸭山市",
      value: "230500"
    },
    {
      province: "黑龙江省",
      label: "大庆市",
      value: "230600"
    },
    {
      province: "黑龙江省",
      label: "伊春市",
      value: "230700"
    },
    {
      province: "黑龙江省",
      label: "佳木斯市",
      value: "230800"
    },
    {
      province: "黑龙江省",
      label: "七台河市",
      value: "230900"
    },
    {
      province: "黑龙江省",
      label: "牡丹江市",
      value: "231000"
    },
    {
      province: "黑龙江省",
      label: "黑河市",
      value: "231100"
    },
    {
      province: "黑龙江省",
      label: "绥化市",
      value: "231200"
    },
    {
      province: "黑龙江省",
      label: "大兴安岭地区",
      value: "232700"
    }
  ],
  "310000": [{
    province: "上海市",
    label: "上海市",
    value: "310100"
  }],
  "320000": [{
      province: "江苏省",
      label: "南京市",
      value: "320100"
    },
    {
      province: "江苏省",
      label: "无锡市",
      value: "320200"
    },
    {
      province: "江苏省",
      label: "徐州市",
      value: "320300"
    },
    {
      province: "江苏省",
      label: "常州市",
      value: "320400"
    },
    {
      province: "江苏省",
      label: "苏州市",
      value: "320500"
    },
    {
      province: "江苏省",
      label: "南通市",
      value: "320600"
    },
    {
      province: "江苏省",
      label: "连云港市",
      value: "320700"
    },
    {
      province: "江苏省",
      label: "淮安市",
      value: "320800"
    },
    {
      province: "江苏省",
      label: "盐城市",
      value: "320900"
    },
    {
      province: "江苏省",
      label: "扬州市",
      value: "321000"
    },
    {
      province: "江苏省",
      label: "镇江市",
      value: "321100"
    },
    {
      province: "江苏省",
      label: "泰州市",
      value: "321200"
    },
    {
      province: "江苏省",
      label: "宿迁市",
      value: "321300"
    }
  ],
  "330000": [{
      province: "浙江省",
      label: "杭州市",
      value: "330100"
    },
    {
      province: "浙江省",
      label: "宁波市",
      value: "330200"
    },
    {
      province: "浙江省",
      label: "温州市",
      value: "330300"
    },
    {
      province: "浙江省",
      label: "嘉兴市",
      value: "330400"
    },
    {
      province: "浙江省",
      label: "湖州市",
      value: "330500"
    },
    {
      province: "浙江省",
      label: "绍兴市",
      value: "330600"
    },
    {
      province: "浙江省",
      label: "金华市",
      value: "330700"
    },
    {
      province: "浙江省",
      label: "衢州市",
      value: "330800"
    },
    {
      province: "浙江省",
      label: "舟山市",
      value: "330900"
    },
    {
      province: "浙江省",
      label: "台州市",
      value: "331000"
    },
    {
      province: "浙江省",
      label: "丽水市",
      value: "331100"
    }
  ],
  "340000": [{
      province: "安徽省",
      label: "合肥市",
      value: "340100"
    },
    {
      province: "安徽省",
      label: "芜湖市",
      value: "340200"
    },
    {
      province: "安徽省",
      label: "蚌埠市",
      value: "340300"
    },
    {
      province: "安徽省",
      label: "淮南市",
      value: "340400"
    },
    {
      province: "安徽省",
      label: "马鞍山市",
      value: "340500"
    },
    {
      province: "安徽省",
      label: "淮北市",
      value: "340600"
    },
    {
      province: "安徽省",
      label: "铜陵市",
      value: "340700"
    },
    {
      province: "安徽省",
      label: "安庆市",
      value: "340800"
    },
    {
      province: "安徽省",
      label: "黄山市",
      value: "341000"
    },
    {
      province: "安徽省",
      label: "滁州市",
      value: "341100"
    },
    {
      province: "安徽省",
      label: "阜阳市",
      value: "341200"
    },
    {
      province: "安徽省",
      label: "宿州市",
      value: "341300"
    },
    {
      province: "安徽省",
      label: "六安市",
      value: "341500"
    },
    {
      province: "安徽省",
      label: "亳州市",
      value: "341600"
    },
    {
      province: "安徽省",
      label: "池州市",
      value: "341700"
    },
    {
      province: "安徽省",
      label: "宣城市",
      value: "341800"
    }
  ],
  "350000": [{
      province: "福建省",
      label: "福州市",
      value: "350100"
    },
    {
      province: "福建省",
      label: "厦门市",
      value: "350200"
    },
    {
      province: "福建省",
      label: "莆田市",
      value: "350300"
    },
    {
      province: "福建省",
      label: "三明市",
      value: "350400"
    },
    {
      province: "福建省",
      label: "泉州市",
      value: "350500"
    },
    {
      province: "福建省",
      label: "漳州市",
      value: "350600"
    },
    {
      province: "福建省",
      label: "南平市",
      value: "350700"
    },
    {
      province: "福建省",
      label: "龙岩市",
      value: "350800"
    },
    {
      province: "福建省",
      label: "宁德市",
      value: "350900"
    }
  ],
  "360000": [{
      province: "江西省",
      label: "南昌市",
      value: "360100"
    },
    {
      province: "江西省",
      label: "景德镇市",
      value: "360200"
    },
    {
      province: "江西省",
      label: "萍乡市",
      value: "360300"
    },
    {
      province: "江西省",
      label: "九江市",
      value: "360400"
    },
    {
      province: "江西省",
      label: "新余市",
      value: "360500"
    },
    {
      province: "江西省",
      label: "鹰潭市",
      value: "360600"
    },
    {
      province: "江西省",
      label: "赣州市",
      value: "360700"
    },
    {
      province: "江西省",
      label: "吉安市",
      value: "360800"
    },
    {
      province: "江西省",
      label: "宜春市",
      value: "360900"
    },
    {
      province: "江西省",
      label: "抚州市",
      value: "361000"
    },
    {
      province: "江西省",
      label: "上饶市",
      value: "361100"
    }
  ],
  "370000": [{
      province: "山东省",
      label: "济南市",
      value: "370100"
    },
    {
      province: "山东省",
      label: "青岛市",
      value: "370200"
    },
    {
      province: "山东省",
      label: "淄博市",
      value: "370300"
    },
    {
      province: "山东省",
      label: "枣庄市",
      value: "370400"
    },
    {
      province: "山东省",
      label: "东营市",
      value: "370500"
    },
    {
      province: "山东省",
      label: "烟台市",
      value: "370600"
    },
    {
      province: "山东省",
      label: "潍坊市",
      value: "370700"
    },
    {
      province: "山东省",
      label: "济宁市",
      value: "370800"
    },
    {
      province: "山东省",
      label: "泰安市",
      value: "370900"
    },
    {
      province: "山东省",
      label: "威海市",
      value: "371000"
    },
    {
      province: "山东省",
      label: "日照市",
      value: "371100"
    },
    {
      province: "山东省",
      label: "莱芜市",
      value: "371200"
    },
    {
      province: "山东省",
      label: "临沂市",
      value: "371300"
    },
    {
      province: "山东省",
      label: "德州市",
      value: "371400"
    },
    {
      province: "山东省",
      label: "聊城市",
      value: "371500"
    },
    {
      province: "山东省",
      label: "滨州市",
      value: "371600"
    },
    {
      province: "山东省",
      label: "菏泽市",
      value: "371700"
    }
  ],
  "410000": [{
      province: "河南省",
      label: "郑州市",
      value: "410100"
    },
    {
      province: "河南省",
      label: "开封市",
      value: "410200"
    },
    {
      province: "河南省",
      label: "洛阳市",
      value: "410300"
    },
    {
      province: "河南省",
      label: "平顶山市",
      value: "410400"
    },
    {
      province: "河南省",
      label: "安阳市",
      value: "410500"
    },
    {
      province: "河南省",
      label: "鹤壁市",
      value: "410600"
    },
    {
      province: "河南省",
      label: "新乡市",
      value: "410700"
    },
    {
      province: "河南省",
      label: "焦作市",
      value: "410800"
    },
    {
      province: "河南省",
      label: "濮阳市",
      value: "410900"
    },
    {
      province: "河南省",
      label: "许昌市",
      value: "411000"
    },
    {
      province: "河南省",
      label: "漯河市",
      value: "411100"
    },
    {
      province: "河南省",
      label: "三门峡市",
      value: "411200"
    },
    {
      province: "河南省",
      label: "南阳市",
      value: "411300"
    },
    {
      province: "河南省",
      label: "商丘市",
      value: "411400"
    },
    {
      province: "河南省",
      label: "信阳市",
      value: "411500"
    },
    {
      province: "河南省",
      label: "周口市",
      value: "411600"
    },
    {
      province: "河南省",
      label: "驻马店市",
      value: "411700"
    },
    {
      province: "河南省",
      label: "省直辖县级行政区划",
      value: "419000"
    }
  ],
  "420000": [{
      province: "湖北省",
      label: "武汉市",
      value: "420100"
    },
    {
      province: "湖北省",
      label: "黄石市",
      value: "420200"
    },
    {
      province: "湖北省",
      label: "十堰市",
      value: "420300"
    },
    {
      province: "湖北省",
      label: "宜昌市",
      value: "420500"
    },
    {
      province: "湖北省",
      label: "襄阳市",
      value: "420600"
    },
    {
      province: "湖北省",
      label: "鄂州市",
      value: "420700"
    },
    {
      province: "湖北省",
      label: "荆门市",
      value: "420800"
    },
    {
      province: "湖北省",
      label: "孝感市",
      value: "420900"
    },
    {
      province: "湖北省",
      label: "荆州市",
      value: "421000"
    },
    {
      province: "湖北省",
      label: "黄冈市",
      value: "421100"
    },
    {
      province: "湖北省",
      label: "咸宁市",
      value: "421200"
    },
    {
      province: "湖北省",
      label: "随州市",
      value: "421300"
    },
    {
      province: "湖北省",
      label: "恩施土家族苗族自治州",
      value: "422800"
    },
    {
      province: "湖北省",
      label: "省直辖县级行政区划",
      value: "429000"
    }
  ],
  "430000": [{
      province: "湖南省",
      label: "长沙市",
      value: "430100"
    },
    {
      province: "湖南省",
      label: "株洲市",
      value: "430200"
    },
    {
      province: "湖南省",
      label: "湘潭市",
      value: "430300"
    },
    {
      province: "湖南省",
      label: "衡阳市",
      value: "430400"
    },
    {
      province: "湖南省",
      label: "邵阳市",
      value: "430500"
    },
    {
      province: "湖南省",
      label: "岳阳市",
      value: "430600"
    },
    {
      province: "湖南省",
      label: "常德市",
      value: "430700"
    },
    {
      province: "湖南省",
      label: "张家界市",
      value: "430800"
    },
    {
      province: "湖南省",
      label: "益阳市",
      value: "430900"
    },
    {
      province: "湖南省",
      label: "郴州市",
      value: "431000"
    },
    {
      province: "湖南省",
      label: "永州市",
      value: "431100"
    },
    {
      province: "湖南省",
      label: "怀化市",
      value: "431200"
    },
    {
      province: "湖南省",
      label: "娄底市",
      value: "431300"
    },
    {
      province: "湖南省",
      label: "湘西土家族苗族自治州",
      value: "433100"
    }
  ],
  "440000": [{
      province: "广东省",
      label: "广州市",
      value: "440100"
    },
    {
      province: "广东省",
      label: "韶关市",
      value: "440200"
    },
    {
      province: "广东省",
      label: "深圳市",
      value: "440300"
    },
    {
      province: "广东省",
      label: "珠海市",
      value: "440400"
    },
    {
      province: "广东省",
      label: "汕头市",
      value: "440500"
    },
    {
      province: "广东省",
      label: "佛山市",
      value: "440600"
    },
    {
      province: "广东省",
      label: "江门市",
      value: "440700"
    },
    {
      province: "广东省",
      label: "湛江市",
      value: "440800"
    },
    {
      province: "广东省",
      label: "茂名市",
      value: "440900"
    },
    {
      province: "广东省",
      label: "肇庆市",
      value: "441200"
    },
    {
      province: "广东省",
      label: "惠州市",
      value: "441300"
    },
    {
      province: "广东省",
      label: "梅州市",
      value: "441400"
    },
    {
      province: "广东省",
      label: "汕尾市",
      value: "441500"
    },
    {
      province: "广东省",
      label: "河源市",
      value: "441600"
    },
    {
      province: "广东省",
      label: "阳江市",
      value: "441700"
    },
    {
      province: "广东省",
      label: "清远市",
      value: "441800"
    },
    {
      province: "广东省",
      label: "东莞市",
      value: "441900"
    },
    {
      province: "广东省",
      label: "中山市",
      value: "442000"
    },
    {
      province: "广东省",
      label: "潮州市",
      value: "445100"
    },
    {
      province: "广东省",
      label: "揭阳市",
      value: "445200"
    },
    {
      province: "广东省",
      label: "云浮市",
      value: "445300"
    }
  ],
  "450000": [{
      province: "广西壮族自治区",
      label: "南宁市",
      value: "450100"
    },
    {
      province: "广西壮族自治区",
      label: "柳州市",
      value: "450200"
    },
    {
      province: "广西壮族自治区",
      label: "桂林市",
      value: "450300"
    },
    {
      province: "广西壮族自治区",
      label: "梧州市",
      value: "450400"
    },
    {
      province: "广西壮族自治区",
      label: "北海市",
      value: "450500"
    },
    {
      province: "广西壮族自治区",
      label: "防城港市",
      value: "450600"
    },
    {
      province: "广西壮族自治区",
      label: "钦州市",
      value: "450700"
    },
    {
      province: "广西壮族自治区",
      label: "贵港市",
      value: "450800"
    },
    {
      province: "广西壮族自治区",
      label: "玉林市",
      value: "450900"
    },
    {
      province: "广西壮族自治区",
      label: "百色市",
      value: "451000"
    },
    {
      province: "广西壮族自治区",
      label: "贺州市",
      value: "451100"
    },
    {
      province: "广西壮族自治区",
      label: "河池市",
      value: "451200"
    },
    {
      province: "广西壮族自治区",
      label: "来宾市",
      value: "451300"
    },
    {
      province: "广西壮族自治区",
      label: "崇左市",
      value: "451400"
    }
  ],
  "460000": [{
      province: "海南省",
      label: "海口市",
      value: "460100"
    },
    {
      province: "海南省",
      label: "三亚市",
      value: "460200"
    },
    {
      province: "海南省",
      label: "三沙市",
      value: "460300"
    },
    {
      province: "海南省",
      label: "儋州市",
      value: "460400"
    },
    {
      province: "海南省",
      label: "省直辖县级行政区划",
      value: "469000"
    }
  ],
  "500000": [{
      province: "重庆市",
      label: "重庆市",
      value: "500100"
    },
    {
      province: "重庆市",
      label: "县",
      value: "500200"
    }
  ],
  "510000": [{
      province: "四川省",
      label: "成都市",
      value: "510100"
    },
    {
      province: "四川省",
      label: "自贡市",
      value: "510300"
    },
    {
      province: "四川省",
      label: "攀枝花市",
      value: "510400"
    },
    {
      province: "四川省",
      label: "泸州市",
      value: "510500"
    },
    {
      province: "四川省",
      label: "德阳市",
      value: "510600"
    },
    {
      province: "四川省",
      label: "绵阳市",
      value: "510700"
    },
    {
      province: "四川省",
      label: "广元市",
      value: "510800"
    },
    {
      province: "四川省",
      label: "遂宁市",
      value: "510900"
    },
    {
      province: "四川省",
      label: "内江市",
      value: "511000"
    },
    {
      province: "四川省",
      label: "乐山市",
      value: "511100"
    },
    {
      province: "四川省",
      label: "南充市",
      value: "511300"
    },
    {
      province: "四川省",
      label: "眉山市",
      value: "511400"
    },
    {
      province: "四川省",
      label: "宜宾市",
      value: "511500"
    },
    {
      province: "四川省",
      label: "广安市",
      value: "511600"
    },
    {
      province: "四川省",
      label: "达州市",
      value: "511700"
    },
    {
      province: "四川省",
      label: "雅安市",
      value: "511800"
    },
    {
      province: "四川省",
      label: "巴中市",
      value: "511900"
    },
    {
      province: "四川省",
      label: "资阳市",
      value: "512000"
    },
    {
      province: "四川省",
      label: "阿坝藏族羌族自治州",
      value: "513200"
    },
    {
      province: "四川省",
      label: "甘孜藏族自治州",
      value: "513300"
    },
    {
      province: "四川省",
      label: "凉山彝族自治州",
      value: "513400"
    }
  ],
  "520000": [{
      province: "贵州省",
      label: "贵阳市",
      value: "520100"
    },
    {
      province: "贵州省",
      label: "六盘水市",
      value: "520200"
    },
    {
      province: "贵州省",
      label: "遵义市",
      value: "520300"
    },
    {
      province: "贵州省",
      label: "安顺市",
      value: "520400"
    },
    {
      province: "贵州省",
      label: "毕节市",
      value: "520500"
    },
    {
      province: "贵州省",
      label: "铜仁市",
      value: "520600"
    },
    {
      province: "贵州省",
      label: "黔西南布依族苗族自治州",
      value: "522300"
    },
    {
      province: "贵州省",
      label: "黔东南苗族侗族自治州",
      value: "522600"
    },
    {
      province: "贵州省",
      label: "黔南布依族苗族自治州",
      value: "522700"
    }
  ],
  "530000": [{
      province: "云南省",
      label: "昆明市",
      value: "530100"
    },
    {
      province: "云南省",
      label: "曲靖市",
      value: "530300"
    },
    {
      province: "云南省",
      label: "玉溪市",
      value: "530400"
    },
    {
      province: "云南省",
      label: "保山市",
      value: "530500"
    },
    {
      province: "云南省",
      label: "昭通市",
      value: "530600"
    },
    {
      province: "云南省",
      label: "丽江市",
      value: "530700"
    },
    {
      province: "云南省",
      label: "普洱市",
      value: "530800"
    },
    {
      province: "云南省",
      label: "临沧市",
      value: "530900"
    },
    {
      province: "云南省",
      label: "楚雄彝族自治州",
      value: "532300"
    },
    {
      province: "云南省",
      label: "红河哈尼族彝族自治州",
      value: "532500"
    },
    {
      province: "云南省",
      label: "文山壮族苗族自治州",
      value: "532600"
    },
    {
      province: "云南省",
      label: "西双版纳傣族自治州",
      value: "532800"
    },
    {
      province: "云南省",
      label: "大理白族自治州",
      value: "532900"
    },
    {
      province: "云南省",
      label: "德宏傣族景颇族自治州",
      value: "533100"
    },
    {
      province: "云南省",
      label: "怒江傈僳族自治州",
      value: "533300"
    },
    {
      province: "云南省",
      label: "迪庆藏族自治州",
      value: "533400"
    }
  ],
  "540000": [{
      province: "西藏自治区",
      label: "拉萨市",
      value: "540100"
    },
    {
      province: "西藏自治区",
      label: "日喀则市",
      value: "540200"
    },
    {
      province: "西藏自治区",
      label: "昌都市",
      value: "540300"
    },
    {
      province: "西藏自治区",
      label: "林芝市",
      value: "540400"
    },
    {
      province: "西藏自治区",
      label: "山南市",
      value: "540500"
    },
    {
      province: "西藏自治区",
      label: "那曲地区",
      value: "542400"
    },
    {
      province: "西藏自治区",
      label: "阿里地区",
      value: "542500"
    }
  ],
  "610000": [{
      province: "陕西省",
      label: "西安市",
      value: "610100"
    },
    {
      province: "陕西省",
      label: "铜川市",
      value: "610200"
    },
    {
      province: "陕西省",
      label: "宝鸡市",
      value: "610300"
    },
    {
      province: "陕西省",
      label: "咸阳市",
      value: "610400"
    },
    {
      province: "陕西省",
      label: "渭南市",
      value: "610500"
    },
    {
      province: "陕西省",
      label: "延安市",
      value: "610600"
    },
    {
      province: "陕西省",
      label: "汉中市",
      value: "610700"
    },
    {
      province: "陕西省",
      label: "榆林市",
      value: "610800"
    },
    {
      province: "陕西省",
      label: "安康市",
      value: "610900"
    },
    {
      province: "陕西省",
      label: "商洛市",
      value: "611000"
    }
  ],
  "620000": [{
      province: "甘肃省",
      label: "兰州市",
      value: "620100"
    },
    {
      province: "甘肃省",
      label: "嘉峪关市",
      value: "620200"
    },
    {
      province: "甘肃省",
      label: "金昌市",
      value: "620300"
    },
    {
      province: "甘肃省",
      label: "白银市",
      value: "620400"
    },
    {
      province: "甘肃省",
      label: "天水市",
      value: "620500"
    },
    {
      province: "甘肃省",
      label: "武威市",
      value: "620600"
    },
    {
      province: "甘肃省",
      label: "张掖市",
      value: "620700"
    },
    {
      province: "甘肃省",
      label: "平凉市",
      value: "620800"
    },
    {
      province: "甘肃省",
      label: "酒泉市",
      value: "620900"
    },
    {
      province: "甘肃省",
      label: "庆阳市",
      value: "621000"
    },
    {
      province: "甘肃省",
      label: "定西市",
      value: "621100"
    },
    {
      province: "甘肃省",
      label: "陇南市",
      value: "621200"
    },
    {
      province: "甘肃省",
      label: "临夏回族自治州",
      value: "622900"
    },
    {
      province: "甘肃省",
      label: "甘南藏族自治州",
      value: "623000"
    }
  ],
  "630000": [{
      province: "青海省",
      label: "西宁市",
      value: "630100"
    },
    {
      province: "青海省",
      label: "海东市",
      value: "630200"
    },
    {
      province: "青海省",
      label: "海北藏族自治州",
      value: "632200"
    },
    {
      province: "青海省",
      label: "黄南藏族自治州",
      value: "632300"
    },
    {
      province: "青海省",
      label: "海南藏族自治州",
      value: "632500"
    },
    {
      province: "青海省",
      label: "果洛藏族自治州",
      value: "632600"
    },
    {
      province: "青海省",
      label: "玉树藏族自治州",
      value: "632700"
    },
    {
      province: "青海省",
      label: "海西蒙古族藏族自治州",
      value: "632800"
    }
  ],
  "640000": [{
      province: "宁夏回族自治区",
      label: "银川市",
      value: "640100"
    },
    {
      province: "宁夏回族自治区",
      label: "石嘴山市",
      value: "640200"
    },
    {
      province: "宁夏回族自治区",
      label: "吴忠市",
      value: "640300"
    },
    {
      province: "宁夏回族自治区",
      label: "固原市",
      value: "640400"
    },
    {
      province: "宁夏回族自治区",
      label: "中卫市",
      value: "640500"
    }
  ],
  "650000": [{
      province: "新疆维吾尔自治区",
      label: "乌鲁木齐市",
      value: "650100"
    },
    {
      province: "新疆维吾尔自治区",
      label: "克拉玛依市",
      value: "650200"
    },
    {
      province: "新疆维吾尔自治区",
      label: "吐鲁番市",
      value: "650400"
    },
    {
      province: "新疆维吾尔自治区",
      label: "哈密市",
      value: "650500"
    },
    {
      province: "新疆维吾尔自治区",
      label: "昌吉回族自治州",
      value: "652300"
    },
    {
      province: "新疆维吾尔自治区",
      label: "博尔塔拉蒙古自治州",
      value: "652700"
    },
    {
      province: "新疆维吾尔自治区",
      label: "巴音郭楞蒙古自治州",
      value: "652800"
    },
    {
      province: "新疆维吾尔自治区",
      label: "阿克苏地区",
      value: "652900"
    },
    {
      province: "新疆维吾尔自治区",
      label: "克孜勒苏柯尔克孜自治州",
      value: "653000"
    },
    {
      province: "新疆维吾尔自治区",
      label: "喀什地区",
      value: "653100"
    },
    {
      province: "新疆维吾尔自治区",
      label: "和田地区",
      value: "653200"
    },
    {
      province: "新疆维吾尔自治区",
      label: "伊犁哈萨克自治州",
      value: "654000"
    },
    {
      province: "新疆维吾尔自治区",
      label: "塔城地区",
      value: "654200"
    },
    {
      province: "新疆维吾尔自治区",
      label: "阿勒泰地区",
      value: "654300"
    },
    {
      province: "新疆维吾尔自治区",
      label: "自治区直辖县级行政区划",
      value: "659000"
    }
  ],
  "710000": [{
      province: "台湾省",
      label: "台北市",
      value: "710100"
    },
    {
      province: "台湾省",
      label: "新北市",
      value: "710200"
    },
    {
      province: "台湾省",
      label: "桃园市",
      value: "710300"
    },
    {
      province: "台湾省",
      label: "台中市",
      value: "710400"
    },
    {
      province: "台湾省",
      label: "台南市",
      value: "710500"
    },
    {
      province: "台湾省",
      label: "高雄市",
      value: "710600"
    },
    {
      province: "台湾省",
      label: "基隆市",
      value: "710700"
    },
    {
      province: "台湾省",
      label: "新竹市",
      value: "710800"
    },
    {
      province: "台湾省",
      label: "嘉义市",
      value: "710900"
    },
    {
      province: "台湾省",
      label: "宜兰县",
      value: "712200"
    },
    {
      province: "台湾省",
      label: "桃园县",
      value: "712300"
    },
    {
      province: "台湾省",
      label: "新竹县",
      value: "712400"
    },
    {
      province: "台湾省",
      label: "苗栗县",
      value: "712500"
    },
    {
      province: "台湾省",
      label: "彰化县",
      value: "712700"
    },
    {
      province: "台湾省",
      label: "南投县",
      value: "712800"
    },
    {
      province: "台湾省",
      label: "云林县",
      value: "712900"
    },
    {
      province: "台湾省",
      label: "嘉义县",
      value: "713000"
    },
    {
      province: "台湾省",
      label: "屏东县",
      value: "713300"
    },
    {
      province: "台湾省",
      label: "台东县",
      value: "713400"
    },
    {
      province: "台湾省",
      label: "花莲县",
      value: "713500"
    },
    {
      province: "台湾省",
      label: "澎湖县",
      value: "713600"
    },
    {
      province: "台湾省",
      label: "金门县",
      value: "713700"
    },
    {
      province: "台湾省",
      label: "连江县",
      value: "713800"
    },
  ],
  "810000": [{
      province: "香港特别行政区",
      label: "香港岛",
      value: "810100"
    },
    {
      province: "香港特别行政区",
      label: "九龙",
      value: "810200"
    },
    {
      province: "香港特别行政区",
      label: "新界",
      value: "810300"
    },
  ],
  "820000": [{
      province: "澳门特别行政区",
      label: "澳门半岛",
      value: "820100"
    },
    {
      province: "澳门特别行政区",
      label: "氹仔岛",
      value: "820200"
    },
    {
      province: "澳门特别行政区",
      label: "路环岛",
      value: "820300"
    },
  ],
};

var areaList = {
  "110100": [{
      city: "市辖区",
      label: "东城区",
      value: "110101"
    },
    {
      city: "市辖区",
      label: "西城区",
      value: "110102"
    },
    {
      city: "市辖区",
      label: "朝阳区",
      value: "110105"
    },
    {
      city: "市辖区",
      label: "丰台区",
      value: "110106"
    },
    {
      city: "市辖区",
      label: "石景山区",
      value: "110107"
    },
    {
      city: "市辖区",
      label: "海淀区",
      value: "110108"
    },
    {
      city: "市辖区",
      label: "门头沟区",
      value: "110109"
    },
    {
      city: "市辖区",
      label: "房山区",
      value: "110111"
    },
    {
      city: "市辖区",
      label: "通州区",
      value: "110112"
    },
    {
      city: "市辖区",
      label: "顺义区",
      value: "110113"
    },
    {
      city: "市辖区",
      label: "昌平区",
      value: "110114"
    },
    {
      city: "市辖区",
      label: "大兴区",
      value: "110115"
    },
    {
      city: "市辖区",
      label: "怀柔区",
      value: "110116"
    },
    {
      city: "市辖区",
      label: "平谷区",
      value: "110117"
    },
    {
      city: "市辖区",
      label: "密云区",
      value: "110118"
    },
    {
      city: "市辖区",
      label: "延庆区",
      value: "110119"
    }
  ],
  "120100": [{
      city: "市辖区",
      label: "和平区",
      value: "120101"
    },
    {
      city: "市辖区",
      label: "河东区",
      value: "120102"
    },
    {
      city: "市辖区",
      label: "河西区",
      value: "120103"
    },
    {
      city: "市辖区",
      label: "南开区",
      value: "120104"
    },
    {
      city: "市辖区",
      label: "河北区",
      value: "120105"
    },
    {
      city: "市辖区",
      label: "红桥区",
      value: "120106"
    },
    {
      city: "市辖区",
      label: "东丽区",
      value: "120110"
    },
    {
      city: "市辖区",
      label: "西青区",
      value: "120111"
    },
    {
      city: "市辖区",
      label: "津南区",
      value: "120112"
    },
    {
      city: "市辖区",
      label: "北辰区",
      value: "120113"
    },
    {
      city: "市辖区",
      label: "武清区",
      value: "120114"
    },
    {
      city: "市辖区",
      label: "宝坻区",
      value: "120115"
    },
    {
      city: "市辖区",
      label: "滨海新区",
      value: "120116"
    },
    {
      city: "市辖区",
      label: "宁河区",
      value: "120117"
    },
    {
      city: "市辖区",
      label: "静海区",
      value: "120118"
    },
    {
      city: "市辖区",
      label: "蓟州区",
      value: "120119"
    }
  ],
  "130100": [{
      city: "石家庄市",
      label: "市辖区",
      value: "130101"
    },
    {
      city: "石家庄市",
      label: "长安区",
      value: "130102"
    },
    {
      city: "石家庄市",
      label: "桥西区",
      value: "130104"
    },
    {
      city: "石家庄市",
      label: "新华区",
      value: "130105"
    },
    {
      city: "石家庄市",
      label: "井陉矿区",
      value: "130107"
    },
    {
      city: "石家庄市",
      label: "裕华区",
      value: "130108"
    },
    {
      city: "石家庄市",
      label: "藁城区",
      value: "130109"
    },
    {
      city: "石家庄市",
      label: "鹿泉区",
      value: "130110"
    },
    {
      city: "石家庄市",
      label: "栾城区",
      value: "130111"
    },
    {
      city: "石家庄市",
      label: "井陉县",
      value: "130121"
    },
    {
      city: "石家庄市",
      label: "正定县",
      value: "130123"
    },
    {
      city: "石家庄市",
      label: "行唐县",
      value: "130125"
    },
    {
      city: "石家庄市",
      label: "灵寿县",
      value: "130126"
    },
    {
      city: "石家庄市",
      label: "高邑县",
      value: "130127"
    },
    {
      city: "石家庄市",
      label: "深泽县",
      value: "130128"
    },
    {
      city: "石家庄市",
      label: "赞皇县",
      value: "130129"
    },
    {
      city: "石家庄市",
      label: "无极县",
      value: "130130"
    },
    {
      city: "石家庄市",
      label: "平山县",
      value: "130131"
    },
    {
      city: "石家庄市",
      label: "元氏县",
      value: "130132"
    },
    {
      city: "石家庄市",
      label: "赵县",
      value: "130133"
    },
    {
      city: "石家庄市",
      label: "晋州市",
      value: "130183"
    },
    {
      city: "石家庄市",
      label: "新乐市",
      value: "130184"
    }
  ],
  "130200": [{
      city: "唐山市",
      label: "市辖区",
      value: "130201"
    },
    {
      city: "唐山市",
      label: "路南区",
      value: "130202"
    },
    {
      city: "唐山市",
      label: "路北区",
      value: "130203"
    },
    {
      city: "唐山市",
      label: "古冶区",
      value: "130204"
    },
    {
      city: "唐山市",
      label: "开平区",
      value: "130205"
    },
    {
      city: "唐山市",
      label: "丰南区",
      value: "130207"
    },
    {
      city: "唐山市",
      label: "丰润区",
      value: "130208"
    },
    {
      city: "唐山市",
      label: "曹妃甸区",
      value: "130209"
    },
    {
      city: "唐山市",
      label: "滦县",
      value: "130223"
    },
    {
      city: "唐山市",
      label: "滦南县",
      value: "130224"
    },
    {
      city: "唐山市",
      label: "乐亭县",
      value: "130225"
    },
    {
      city: "唐山市",
      label: "迁西县",
      value: "130227"
    },
    {
      city: "唐山市",
      label: "玉田县",
      value: "130229"
    },
    {
      city: "唐山市",
      label: "遵化市",
      value: "130281"
    },
    {
      city: "唐山市",
      label: "迁安市",
      value: "130283"
    }
  ],
  "130300": [{
      city: "秦皇岛市",
      label: "市辖区",
      value: "130301"
    },
    {
      city: "秦皇岛市",
      label: "海港区",
      value: "130302"
    },
    {
      city: "秦皇岛市",
      label: "山海关区",
      value: "130303"
    },
    {
      city: "秦皇岛市",
      label: "北戴河区",
      value: "130304"
    },
    {
      city: "秦皇岛市",
      label: "抚宁区",
      value: "130306"
    },
    {
      city: "秦皇岛市",
      label: "青龙满族自治县",
      value: "130321"
    },
    {
      city: "秦皇岛市",
      label: "昌黎县",
      value: "130322"
    },
    {
      city: "秦皇岛市",
      label: "卢龙县",
      value: "130324"
    }
  ],
  "130400": [{
      city: "邯郸市",
      label: "市辖区",
      value: "130401"
    },
    {
      city: "邯郸市",
      label: "邯山区",
      value: "130402"
    },
    {
      city: "邯郸市",
      label: "丛台区",
      value: "130403"
    },
    {
      city: "邯郸市",
      label: "复兴区",
      value: "130404"
    },
    {
      city: "邯郸市",
      label: "峰峰矿区",
      value: "130406"
    },
    {
      city: "邯郸市",
      label: "邯郸县",
      value: "130421"
    },
    {
      city: "邯郸市",
      label: "临漳县",
      value: "130423"
    },
    {
      city: "邯郸市",
      label: "成安县",
      value: "130424"
    },
    {
      city: "邯郸市",
      label: "大名县",
      value: "130425"
    },
    {
      city: "邯郸市",
      label: "涉县",
      value: "130426"
    },
    {
      city: "邯郸市",
      label: "磁县",
      value: "130427"
    },
    {
      city: "邯郸市",
      label: "肥乡县",
      value: "130428"
    },
    {
      city: "邯郸市",
      label: "永年县",
      value: "130429"
    },
    {
      city: "邯郸市",
      label: "邱县",
      value: "130430"
    },
    {
      city: "邯郸市",
      label: "鸡泽县",
      value: "130431"
    },
    {
      city: "邯郸市",
      label: "广平县",
      value: "130432"
    },
    {
      city: "邯郸市",
      label: "馆陶县",
      value: "130433"
    },
    {
      city: "邯郸市",
      label: "魏县",
      value: "130434"
    },
    {
      city: "邯郸市",
      label: "曲周县",
      value: "130435"
    },
    {
      city: "邯郸市",
      label: "武安市",
      value: "130481"
    }
  ],
  "130500": [{
      city: "邢台市",
      label: "市辖区",
      value: "130501"
    },
    {
      city: "邢台市",
      label: "桥东区",
      value: "130502"
    },
    {
      city: "邢台市",
      label: "桥西区",
      value: "130503"
    },
    {
      city: "邢台市",
      label: "邢台县",
      value: "130521"
    },
    {
      city: "邢台市",
      label: "临城县",
      value: "130522"
    },
    {
      city: "邢台市",
      label: "内丘县",
      value: "130523"
    },
    {
      city: "邢台市",
      label: "柏乡县",
      value: "130524"
    },
    {
      city: "邢台市",
      label: "隆尧县",
      value: "130525"
    },
    {
      city: "邢台市",
      label: "任县",
      value: "130526"
    },
    {
      city: "邢台市",
      label: "南和县",
      value: "130527"
    },
    {
      city: "邢台市",
      label: "宁晋县",
      value: "130528"
    },
    {
      city: "邢台市",
      label: "巨鹿县",
      value: "130529"
    },
    {
      city: "邢台市",
      label: "新河县",
      value: "130530"
    },
    {
      city: "邢台市",
      label: "广宗县",
      value: "130531"
    },
    {
      city: "邢台市",
      label: "平乡县",
      value: "130532"
    },
    {
      city: "邢台市",
      label: "威县",
      value: "130533"
    },
    {
      city: "邢台市",
      label: "清河县",
      value: "130534"
    },
    {
      city: "邢台市",
      label: "临西县",
      value: "130535"
    },
    {
      city: "邢台市",
      label: "南宫市",
      value: "130581"
    },
    {
      city: "邢台市",
      label: "沙河市",
      value: "130582"
    }
  ],
  "130600": [{
      city: "保定市",
      label: "市辖区",
      value: "130601"
    },
    {
      city: "保定市",
      label: "竞秀区",
      value: "130602"
    },
    {
      city: "保定市",
      label: "莲池区",
      value: "130606"
    },
    {
      city: "保定市",
      label: "满城区",
      value: "130607"
    },
    {
      city: "保定市",
      label: "清苑区",
      value: "130608"
    },
    {
      city: "保定市",
      label: "徐水区",
      value: "130609"
    },
    {
      city: "保定市",
      label: "涞水县",
      value: "130623"
    },
    {
      city: "保定市",
      label: "阜平县",
      value: "130624"
    },
    {
      city: "保定市",
      label: "定兴县",
      value: "130626"
    },
    {
      city: "保定市",
      label: "唐县",
      value: "130627"
    },
    {
      city: "保定市",
      label: "高阳县",
      value: "130628"
    },
    {
      city: "保定市",
      label: "容城县",
      value: "130629"
    },
    {
      city: "保定市",
      label: "涞源县",
      value: "130630"
    },
    {
      city: "保定市",
      label: "望都县",
      value: "130631"
    },
    {
      city: "保定市",
      label: "安新县",
      value: "130632"
    },
    {
      city: "保定市",
      label: "易县",
      value: "130633"
    },
    {
      city: "保定市",
      label: "曲阳县",
      value: "130634"
    },
    {
      city: "保定市",
      label: "蠡县",
      value: "130635"
    },
    {
      city: "保定市",
      label: "顺平县",
      value: "130636"
    },
    {
      city: "保定市",
      label: "博野县",
      value: "130637"
    },
    {
      city: "保定市",
      label: "雄县",
      value: "130638"
    },
    {
      city: "保定市",
      label: "涿州市",
      value: "130681"
    },
    {
      city: "保定市",
      label: "安国市",
      value: "130683"
    },
    {
      city: "保定市",
      label: "高碑店市",
      value: "130684"
    }
  ],
  "130700": [{
      city: "张家口市",
      label: "市辖区",
      value: "130701"
    },
    {
      city: "张家口市",
      label: "桥东区",
      value: "130702"
    },
    {
      city: "张家口市",
      label: "桥西区",
      value: "130703"
    },
    {
      city: "张家口市",
      label: "宣化区",
      value: "130705"
    },
    {
      city: "张家口市",
      label: "下花园区",
      value: "130706"
    },
    {
      city: "张家口市",
      label: "万全区",
      value: "130708"
    },
    {
      city: "张家口市",
      label: "崇礼区",
      value: "130709"
    },
    {
      city: "张家口市",
      label: "张北县",
      value: "130722"
    },
    {
      city: "张家口市",
      label: "康保县",
      value: "130723"
    },
    {
      city: "张家口市",
      label: "沽源县",
      value: "130724"
    },
    {
      city: "张家口市",
      label: "尚义县",
      value: "130725"
    },
    {
      city: "张家口市",
      label: "蔚县",
      value: "130726"
    },
    {
      city: "张家口市",
      label: "阳原县",
      value: "130727"
    },
    {
      city: "张家口市",
      label: "怀安县",
      value: "130728"
    },
    {
      city: "张家口市",
      label: "怀来县",
      value: "130730"
    },
    {
      city: "张家口市",
      label: "涿鹿县",
      value: "130731"
    },
    {
      city: "张家口市",
      label: "赤城县",
      value: "130732"
    }
  ],
  "130800": [{
      city: "承德市",
      label: "市辖区",
      value: "130801"
    },
    {
      city: "承德市",
      label: "双桥区",
      value: "130802"
    },
    {
      city: "承德市",
      label: "双滦区",
      value: "130803"
    },
    {
      city: "承德市",
      label: "鹰手营子矿区",
      value: "130804"
    },
    {
      city: "承德市",
      label: "承德县",
      value: "130821"
    },
    {
      city: "承德市",
      label: "兴隆县",
      value: "130822"
    },
    {
      city: "承德市",
      label: "平泉县",
      value: "130823"
    },
    {
      city: "承德市",
      label: "滦平县",
      value: "130824"
    },
    {
      city: "承德市",
      label: "隆化县",
      value: "130825"
    },
    {
      city: "承德市",
      label: "丰宁满族自治县",
      value: "130826"
    },
    {
      city: "承德市",
      label: "宽城满族自治县",
      value: "130827"
    },
    {
      city: "承德市",
      label: "围场满族蒙古族自治县",
      value: "130828"
    }
  ],
  "130900": [{
      city: "沧州市",
      label: "市辖区",
      value: "130901"
    },
    {
      city: "沧州市",
      label: "新华区",
      value: "130902"
    },
    {
      city: "沧州市",
      label: "运河区",
      value: "130903"
    },
    {
      city: "沧州市",
      label: "沧县",
      value: "130921"
    },
    {
      city: "沧州市",
      label: "青县",
      value: "130922"
    },
    {
      city: "沧州市",
      label: "东光县",
      value: "130923"
    },
    {
      city: "沧州市",
      label: "海兴县",
      value: "130924"
    },
    {
      city: "沧州市",
      label: "盐山县",
      value: "130925"
    },
    {
      city: "沧州市",
      label: "肃宁县",
      value: "130926"
    },
    {
      city: "沧州市",
      label: "南皮县",
      value: "130927"
    },
    {
      city: "沧州市",
      label: "吴桥县",
      value: "130928"
    },
    {
      city: "沧州市",
      label: "献县",
      value: "130929"
    },
    {
      city: "沧州市",
      label: "孟村回族自治县",
      value: "130930"
    },
    {
      city: "沧州市",
      label: "泊头市",
      value: "130981"
    },
    {
      city: "沧州市",
      label: "任丘市",
      value: "130982"
    },
    {
      city: "沧州市",
      label: "黄骅市",
      value: "130983"
    },
    {
      city: "沧州市",
      label: "河间市",
      value: "130984"
    }
  ],
  "131000": [{
      city: "廊坊市",
      label: "市辖区",
      value: "131001"
    },
    {
      city: "廊坊市",
      label: "安次区",
      value: "131002"
    },
    {
      city: "廊坊市",
      label: "广阳区",
      value: "131003"
    },
    {
      city: "廊坊市",
      label: "固安县",
      value: "131022"
    },
    {
      city: "廊坊市",
      label: "永清县",
      value: "131023"
    },
    {
      city: "廊坊市",
      label: "香河县",
      value: "131024"
    },
    {
      city: "廊坊市",
      label: "大城县",
      value: "131025"
    },
    {
      city: "廊坊市",
      label: "文安县",
      value: "131026"
    },
    {
      city: "廊坊市",
      label: "大厂回族自治县",
      value: "131028"
    },
    {
      city: "廊坊市",
      label: "霸州市",
      value: "131081"
    },
    {
      city: "廊坊市",
      label: "三河市",
      value: "131082"
    }
  ],
  "131100": [{
      city: "衡水市",
      label: "市辖区",
      value: "131101"
    },
    {
      city: "衡水市",
      label: "桃城区",
      value: "131102"
    },
    {
      city: "衡水市",
      label: "冀州区",
      value: "131103"
    },
    {
      city: "衡水市",
      label: "枣强县",
      value: "131121"
    },
    {
      city: "衡水市",
      label: "武邑县",
      value: "131122"
    },
    {
      city: "衡水市",
      label: "武强县",
      value: "131123"
    },
    {
      city: "衡水市",
      label: "饶阳县",
      value: "131124"
    },
    {
      city: "衡水市",
      label: "安平县",
      value: "131125"
    },
    {
      city: "衡水市",
      label: "故城县",
      value: "131126"
    },
    {
      city: "衡水市",
      label: "景县",
      value: "131127"
    },
    {
      city: "衡水市",
      label: "阜城县",
      value: "131128"
    },
    {
      city: "衡水市",
      label: "深州市",
      value: "131182"
    }
  ],
  "139000": [{
      city: "省直辖县级行政区划",
      label: "定州市",
      value: "139001"
    },
    {
      city: "省直辖县级行政区划",
      label: "辛集市",
      value: "139002"
    }
  ],
  "140100": [{
      city: "太原市",
      label: "市辖区",
      value: "140101"
    },
    {
      city: "太原市",
      label: "小店区",
      value: "140105"
    },
    {
      city: "太原市",
      label: "迎泽区",
      value: "140106"
    },
    {
      city: "太原市",
      label: "杏花岭区",
      value: "140107"
    },
    {
      city: "太原市",
      label: "尖草坪区",
      value: "140108"
    },
    {
      city: "太原市",
      label: "万柏林区",
      value: "140109"
    },
    {
      city: "太原市",
      label: "晋源区",
      value: "140110"
    },
    {
      city: "太原市",
      label: "清徐县",
      value: "140121"
    },
    {
      city: "太原市",
      label: "阳曲县",
      value: "140122"
    },
    {
      city: "太原市",
      label: "娄烦县",
      value: "140123"
    },
    {
      city: "太原市",
      label: "古交市",
      value: "140181"
    }
  ],
  "140200": [{
      city: "大同市",
      label: "市辖区",
      value: "140201"
    },
    {
      city: "大同市",
      label: "城区",
      value: "140202"
    },
    {
      city: "大同市",
      label: "矿区",
      value: "140203"
    },
    {
      city: "大同市",
      label: "南郊区",
      value: "140211"
    },
    {
      city: "大同市",
      label: "新荣区",
      value: "140212"
    },
    {
      city: "大同市",
      label: "阳高县",
      value: "140221"
    },
    {
      city: "大同市",
      label: "天镇县",
      value: "140222"
    },
    {
      city: "大同市",
      label: "广灵县",
      value: "140223"
    },
    {
      city: "大同市",
      label: "灵丘县",
      value: "140224"
    },
    {
      city: "大同市",
      label: "浑源县",
      value: "140225"
    },
    {
      city: "大同市",
      label: "左云县",
      value: "140226"
    },
    {
      city: "大同市",
      label: "大同县",
      value: "140227"
    }
  ],
  "140300": [{
      city: "阳泉市",
      label: "市辖区",
      value: "140301"
    },
    {
      city: "阳泉市",
      label: "城区",
      value: "140302"
    },
    {
      city: "阳泉市",
      label: "矿区",
      value: "140303"
    },
    {
      city: "阳泉市",
      label: "郊区",
      value: "140311"
    },
    {
      city: "阳泉市",
      label: "平定县",
      value: "140321"
    },
    {
      city: "阳泉市",
      label: "盂县",
      value: "140322"
    }
  ],
  "140400": [{
      city: "长治市",
      label: "市辖区",
      value: "140401"
    },
    {
      city: "长治市",
      label: "城区",
      value: "140402"
    },
    {
      city: "长治市",
      label: "郊区",
      value: "140411"
    },
    {
      city: "长治市",
      label: "长治县",
      value: "140421"
    },
    {
      city: "长治市",
      label: "襄垣县",
      value: "140423"
    },
    {
      city: "长治市",
      label: "屯留县",
      value: "140424"
    },
    {
      city: "长治市",
      label: "平顺县",
      value: "140425"
    },
    {
      city: "长治市",
      label: "黎城县",
      value: "140426"
    },
    {
      city: "长治市",
      label: "壶关县",
      value: "140427"
    },
    {
      city: "长治市",
      label: "长子县",
      value: "140428"
    },
    {
      city: "长治市",
      label: "武乡县",
      value: "140429"
    },
    {
      city: "长治市",
      label: "沁县",
      value: "140430"
    },
    {
      city: "长治市",
      label: "沁源县",
      value: "140431"
    },
    {
      city: "长治市",
      label: "潞城市",
      value: "140481"
    }
  ],
  "140500": [{
      city: "晋城市",
      label: "市辖区",
      value: "140501"
    },
    {
      city: "晋城市",
      label: "城区",
      value: "140502"
    },
    {
      city: "晋城市",
      label: "沁水县",
      value: "140521"
    },
    {
      city: "晋城市",
      label: "阳城县",
      value: "140522"
    },
    {
      city: "晋城市",
      label: "陵川县",
      value: "140524"
    },
    {
      city: "晋城市",
      label: "泽州县",
      value: "140525"
    },
    {
      city: "晋城市",
      label: "高平市",
      value: "140581"
    }
  ],
  "140600": [{
      city: "朔州市",
      label: "市辖区",
      value: "140601"
    },
    {
      city: "朔州市",
      label: "朔城区",
      value: "140602"
    },
    {
      city: "朔州市",
      label: "平鲁区",
      value: "140603"
    },
    {
      city: "朔州市",
      label: "山阴县",
      value: "140621"
    },
    {
      city: "朔州市",
      label: "应县",
      value: "140622"
    },
    {
      city: "朔州市",
      label: "右玉县",
      value: "140623"
    },
    {
      city: "朔州市",
      label: "怀仁县",
      value: "140624"
    }
  ],
  "140700": [{
      city: "晋中市",
      label: "市辖区",
      value: "140701"
    },
    {
      city: "晋中市",
      label: "榆次区",
      value: "140702"
    },
    {
      city: "晋中市",
      label: "榆社县",
      value: "140721"
    },
    {
      city: "晋中市",
      label: "左权县",
      value: "140722"
    },
    {
      city: "晋中市",
      label: "和顺县",
      value: "140723"
    },
    {
      city: "晋中市",
      label: "昔阳县",
      value: "140724"
    },
    {
      city: "晋中市",
      label: "寿阳县",
      value: "140725"
    },
    {
      city: "晋中市",
      label: "太谷县",
      value: "140726"
    },
    {
      city: "晋中市",
      label: "祁县",
      value: "140727"
    },
    {
      city: "晋中市",
      label: "平遥县",
      value: "140728"
    },
    {
      city: "晋中市",
      label: "灵石县",
      value: "140729"
    },
    {
      city: "晋中市",
      label: "介休市",
      value: "140781"
    }
  ],
  "140800": [{
      city: "运城市",
      label: "市辖区",
      value: "140801"
    },
    {
      city: "运城市",
      label: "盐湖区",
      value: "140802"
    },
    {
      city: "运城市",
      label: "临猗县",
      value: "140821"
    },
    {
      city: "运城市",
      label: "万荣县",
      value: "140822"
    },
    {
      city: "运城市",
      label: "闻喜县",
      value: "140823"
    },
    {
      city: "运城市",
      label: "稷山县",
      value: "140824"
    },
    {
      city: "运城市",
      label: "新绛县",
      value: "140825"
    },
    {
      city: "运城市",
      label: "绛县",
      value: "140826"
    },
    {
      city: "运城市",
      label: "垣曲县",
      value: "140827"
    },
    {
      city: "运城市",
      label: "夏县",
      value: "140828"
    },
    {
      city: "运城市",
      label: "平陆县",
      value: "140829"
    },
    {
      city: "运城市",
      label: "芮城县",
      value: "140830"
    },
    {
      city: "运城市",
      label: "永济市",
      value: "140881"
    },
    {
      city: "运城市",
      label: "河津市",
      value: "140882"
    }
  ],
  "140900": [{
      city: "忻州市",
      label: "市辖区",
      value: "140901"
    },
    {
      city: "忻州市",
      label: "忻府区",
      value: "140902"
    },
    {
      city: "忻州市",
      label: "定襄县",
      value: "140921"
    },
    {
      city: "忻州市",
      label: "五台县",
      value: "140922"
    },
    {
      city: "忻州市",
      label: "代县",
      value: "140923"
    },
    {
      city: "忻州市",
      label: "繁峙县",
      value: "140924"
    },
    {
      city: "忻州市",
      label: "宁武县",
      value: "140925"
    },
    {
      city: "忻州市",
      label: "静乐县",
      value: "140926"
    },
    {
      city: "忻州市",
      label: "神池县",
      value: "140927"
    },
    {
      city: "忻州市",
      label: "五寨县",
      value: "140928"
    },
    {
      city: "忻州市",
      label: "岢岚县",
      value: "140929"
    },
    {
      city: "忻州市",
      label: "河曲县",
      value: "140930"
    },
    {
      city: "忻州市",
      label: "保德县",
      value: "140931"
    },
    {
      city: "忻州市",
      label: "偏关县",
      value: "140932"
    },
    {
      city: "忻州市",
      label: "原平市",
      value: "140981"
    }
  ],
  "141000": [{
      city: "临汾市",
      label: "市辖区",
      value: "141001"
    },
    {
      city: "临汾市",
      label: "尧都区",
      value: "141002"
    },
    {
      city: "临汾市",
      label: "曲沃县",
      value: "141021"
    },
    {
      city: "临汾市",
      label: "翼城县",
      value: "141022"
    },
    {
      city: "临汾市",
      label: "襄汾县",
      value: "141023"
    },
    {
      city: "临汾市",
      label: "洪洞县",
      value: "141024"
    },
    {
      city: "临汾市",
      label: "古县",
      value: "141025"
    },
    {
      city: "临汾市",
      label: "安泽县",
      value: "141026"
    },
    {
      city: "临汾市",
      label: "浮山县",
      value: "141027"
    },
    {
      city: "临汾市",
      label: "吉县",
      value: "141028"
    },
    {
      city: "临汾市",
      label: "乡宁县",
      value: "141029"
    },
    {
      city: "临汾市",
      label: "大宁县",
      value: "141030"
    },
    {
      city: "临汾市",
      label: "隰县",
      value: "141031"
    },
    {
      city: "临汾市",
      label: "永和县",
      value: "141032"
    },
    {
      city: "临汾市",
      label: "蒲县",
      value: "141033"
    },
    {
      city: "临汾市",
      label: "汾西县",
      value: "141034"
    },
    {
      city: "临汾市",
      label: "侯马市",
      value: "141081"
    },
    {
      city: "临汾市",
      label: "霍州市",
      value: "141082"
    }
  ],
  "141100": [{
      city: "吕梁市",
      label: "市辖区",
      value: "141101"
    },
    {
      city: "吕梁市",
      label: "离石区",
      value: "141102"
    },
    {
      city: "吕梁市",
      label: "文水县",
      value: "141121"
    },
    {
      city: "吕梁市",
      label: "交城县",
      value: "141122"
    },
    {
      city: "吕梁市",
      label: "兴县",
      value: "141123"
    },
    {
      city: "吕梁市",
      label: "临县",
      value: "141124"
    },
    {
      city: "吕梁市",
      label: "柳林县",
      value: "141125"
    },
    {
      city: "吕梁市",
      label: "石楼县",
      value: "141126"
    },
    {
      city: "吕梁市",
      label: "岚县",
      value: "141127"
    },
    {
      city: "吕梁市",
      label: "方山县",
      value: "141128"
    },
    {
      city: "吕梁市",
      label: "中阳县",
      value: "141129"
    },
    {
      city: "吕梁市",
      label: "交口县",
      value: "141130"
    },
    {
      city: "吕梁市",
      label: "孝义市",
      value: "141181"
    },
    {
      city: "吕梁市",
      label: "汾阳市",
      value: "141182"
    }
  ],
  "150100": [{
      city: "呼和浩特市",
      label: "市辖区",
      value: "150101"
    },
    {
      city: "呼和浩特市",
      label: "新城区",
      value: "150102"
    },
    {
      city: "呼和浩特市",
      label: "回民区",
      value: "150103"
    },
    {
      city: "呼和浩特市",
      label: "玉泉区",
      value: "150104"
    },
    {
      city: "呼和浩特市",
      label: "赛罕区",
      value: "150105"
    },
    {
      city: "呼和浩特市",
      label: "土默特左旗",
      value: "150121"
    },
    {
      city: "呼和浩特市",
      label: "托克托县",
      value: "150122"
    },
    {
      city: "呼和浩特市",
      label: "和林格尔县",
      value: "150123"
    },
    {
      city: "呼和浩特市",
      label: "清水河县",
      value: "150124"
    },
    {
      city: "呼和浩特市",
      label: "武川县",
      value: "150125"
    }
  ],
  "150200": [{
      city: "包头市",
      label: "市辖区",
      value: "150201"
    },
    {
      city: "包头市",
      label: "东河区",
      value: "150202"
    },
    {
      city: "包头市",
      label: "昆都仑区",
      value: "150203"
    },
    {
      city: "包头市",
      label: "青山区",
      value: "150204"
    },
    {
      city: "包头市",
      label: "石拐区",
      value: "150205"
    },
    {
      city: "包头市",
      label: "白云鄂博矿区",
      value: "150206"
    },
    {
      city: "包头市",
      label: "九原区",
      value: "150207"
    },
    {
      city: "包头市",
      label: "土默特右旗",
      value: "150221"
    },
    {
      city: "包头市",
      label: "固阳县",
      value: "150222"
    },
    {
      city: "包头市",
      label: "达尔罕茂明安联合旗",
      value: "150223"
    }
  ],
  "150300": [{
      city: "乌海市",
      label: "市辖区",
      value: "150301"
    },
    {
      city: "乌海市",
      label: "海勃湾区",
      value: "150302"
    },
    {
      city: "乌海市",
      label: "海南区",
      value: "150303"
    },
    {
      city: "乌海市",
      label: "乌达区",
      value: "150304"
    }
  ],
  "150400": [{
      city: "赤峰市",
      label: "市辖区",
      value: "150401"
    },
    {
      city: "赤峰市",
      label: "红山区",
      value: "150402"
    },
    {
      city: "赤峰市",
      label: "元宝山区",
      value: "150403"
    },
    {
      city: "赤峰市",
      label: "松山区",
      value: "150404"
    },
    {
      city: "赤峰市",
      label: "阿鲁科尔沁旗",
      value: "150421"
    },
    {
      city: "赤峰市",
      label: "巴林左旗",
      value: "150422"
    },
    {
      city: "赤峰市",
      label: "巴林右旗",
      value: "150423"
    },
    {
      city: "赤峰市",
      label: "林西县",
      value: "150424"
    },
    {
      city: "赤峰市",
      label: "克什克腾旗",
      value: "150425"
    },
    {
      city: "赤峰市",
      label: "翁牛特旗",
      value: "150426"
    },
    {
      city: "赤峰市",
      label: "喀喇沁旗",
      value: "150428"
    },
    {
      city: "赤峰市",
      label: "宁城县",
      value: "150429"
    },
    {
      city: "赤峰市",
      label: "敖汉旗",
      value: "150430"
    }
  ],
  "150500": [{
      city: "通辽市",
      label: "市辖区",
      value: "150501"
    },
    {
      city: "通辽市",
      label: "科尔沁区",
      value: "150502"
    },
    {
      city: "通辽市",
      label: "科尔沁左翼中旗",
      value: "150521"
    },
    {
      city: "通辽市",
      label: "科尔沁左翼后旗",
      value: "150522"
    },
    {
      city: "通辽市",
      label: "开鲁县",
      value: "150523"
    },
    {
      city: "通辽市",
      label: "库伦旗",
      value: "150524"
    },
    {
      city: "通辽市",
      label: "奈曼旗",
      value: "150525"
    },
    {
      city: "通辽市",
      label: "扎鲁特旗",
      value: "150526"
    },
    {
      city: "通辽市",
      label: "霍林郭勒市",
      value: "150581"
    }
  ],
  "150600": [{
      city: "鄂尔多斯市",
      label: "市辖区",
      value: "150601"
    },
    {
      city: "鄂尔多斯市",
      label: "东胜区",
      value: "150602"
    },
    {
      city: "鄂尔多斯市",
      label: "康巴什区",
      value: "150603"
    },
    {
      city: "鄂尔多斯市",
      label: "达拉特旗",
      value: "150621"
    },
    {
      city: "鄂尔多斯市",
      label: "准格尔旗",
      value: "150622"
    },
    {
      city: "鄂尔多斯市",
      label: "鄂托克前旗",
      value: "150623"
    },
    {
      city: "鄂尔多斯市",
      label: "鄂托克旗",
      value: "150624"
    },
    {
      city: "鄂尔多斯市",
      label: "杭锦旗",
      value: "150625"
    },
    {
      city: "鄂尔多斯市",
      label: "乌审旗",
      value: "150626"
    },
    {
      city: "鄂尔多斯市",
      label: "伊金霍洛旗",
      value: "150627"
    }
  ],
  "150700": [{
      city: "呼伦贝尔市",
      label: "市辖区",
      value: "150701"
    },
    {
      city: "呼伦贝尔市",
      label: "海拉尔区",
      value: "150702"
    },
    {
      city: "呼伦贝尔市",
      label: "扎赉诺尔区",
      value: "150703"
    },
    {
      city: "呼伦贝尔市",
      label: "阿荣旗",
      value: "150721"
    },
    {
      city: "呼伦贝尔市",
      label: "莫力达瓦达斡尔族自治旗",
      value: "150722"
    },
    {
      city: "呼伦贝尔市",
      label: "鄂伦春自治旗",
      value: "150723"
    },
    {
      city: "呼伦贝尔市",
      label: "鄂温克族自治旗",
      value: "150724"
    },
    {
      city: "呼伦贝尔市",
      label: "陈巴尔虎旗",
      value: "150725"
    },
    {
      city: "呼伦贝尔市",
      label: "新巴尔虎左旗",
      value: "150726"
    },
    {
      city: "呼伦贝尔市",
      label: "新巴尔虎右旗",
      value: "150727"
    },
    {
      city: "呼伦贝尔市",
      label: "满洲里市",
      value: "150781"
    },
    {
      city: "呼伦贝尔市",
      label: "牙克石市",
      value: "150782"
    },
    {
      city: "呼伦贝尔市",
      label: "扎兰屯市",
      value: "150783"
    },
    {
      city: "呼伦贝尔市",
      label: "额尔古纳市",
      value: "150784"
    },
    {
      city: "呼伦贝尔市",
      label: "根河市",
      value: "150785"
    }
  ],
  "150800": [{
      city: "巴彦淖尔市",
      label: "市辖区",
      value: "150801"
    },
    {
      city: "巴彦淖尔市",
      label: "临河区",
      value: "150802"
    },
    {
      city: "巴彦淖尔市",
      label: "五原县",
      value: "150821"
    },
    {
      city: "巴彦淖尔市",
      label: "磴口县",
      value: "150822"
    },
    {
      city: "巴彦淖尔市",
      label: "乌拉特前旗",
      value: "150823"
    },
    {
      city: "巴彦淖尔市",
      label: "乌拉特中旗",
      value: "150824"
    },
    {
      city: "巴彦淖尔市",
      label: "乌拉特后旗",
      value: "150825"
    },
    {
      city: "巴彦淖尔市",
      label: "杭锦后旗",
      value: "150826"
    }
  ],
  "150900": [{
      city: "乌兰察布市",
      label: "市辖区",
      value: "150901"
    },
    {
      city: "乌兰察布市",
      label: "集宁区",
      value: "150902"
    },
    {
      city: "乌兰察布市",
      label: "卓资县",
      value: "150921"
    },
    {
      city: "乌兰察布市",
      label: "化德县",
      value: "150922"
    },
    {
      city: "乌兰察布市",
      label: "商都县",
      value: "150923"
    },
    {
      city: "乌兰察布市",
      label: "兴和县",
      value: "150924"
    },
    {
      city: "乌兰察布市",
      label: "凉城县",
      value: "150925"
    },
    {
      city: "乌兰察布市",
      label: "察哈尔右翼前旗",
      value: "150926"
    },
    {
      city: "乌兰察布市",
      label: "察哈尔右翼中旗",
      value: "150927"
    },
    {
      city: "乌兰察布市",
      label: "察哈尔右翼后旗",
      value: "150928"
    },
    {
      city: "乌兰察布市",
      label: "四子王旗",
      value: "150929"
    },
    {
      city: "乌兰察布市",
      label: "丰镇市",
      value: "150981"
    }
  ],
  "152200": [{
      city: "兴安盟",
      label: "乌兰浩特市",
      value: "152201"
    },
    {
      city: "兴安盟",
      label: "阿尔山市",
      value: "152202"
    },
    {
      city: "兴安盟",
      label: "科尔沁右翼前旗",
      value: "152221"
    },
    {
      city: "兴安盟",
      label: "科尔沁右翼中旗",
      value: "152222"
    },
    {
      city: "兴安盟",
      label: "扎赉特旗",
      value: "152223"
    },
    {
      city: "兴安盟",
      label: "突泉县",
      value: "152224"
    }
  ],
  "152500": [{
      city: "锡林郭勒盟",
      label: "二连浩特市",
      value: "152501"
    },
    {
      city: "锡林郭勒盟",
      label: "锡林浩特市",
      value: "152502"
    },
    {
      city: "锡林郭勒盟",
      label: "阿巴嘎旗",
      value: "152522"
    },
    {
      city: "锡林郭勒盟",
      label: "苏尼特左旗",
      value: "152523"
    },
    {
      city: "锡林郭勒盟",
      label: "苏尼特右旗",
      value: "152524"
    },
    {
      city: "锡林郭勒盟",
      label: "东乌珠穆沁旗",
      value: "152525"
    },
    {
      city: "锡林郭勒盟",
      label: "西乌珠穆沁旗",
      value: "152526"
    },
    {
      city: "锡林郭勒盟",
      label: "太仆寺旗",
      value: "152527"
    },
    {
      city: "锡林郭勒盟",
      label: "镶黄旗",
      value: "152528"
    },
    {
      city: "锡林郭勒盟",
      label: "正镶白旗",
      value: "152529"
    },
    {
      city: "锡林郭勒盟",
      label: "正蓝旗",
      value: "152530"
    },
    {
      city: "锡林郭勒盟",
      label: "多伦县",
      value: "152531"
    }
  ],
  "152900": [{
      city: "阿拉善盟",
      label: "阿拉善左旗",
      value: "152921"
    },
    {
      city: "阿拉善盟",
      label: "阿拉善右旗",
      value: "152922"
    },
    {
      city: "阿拉善盟",
      label: "额济纳旗",
      value: "152923"
    }
  ],
  "210100": [{
      city: "沈阳市",
      label: "市辖区",
      value: "210101"
    },
    {
      city: "沈阳市",
      label: "和平区",
      value: "210102"
    },
    {
      city: "沈阳市",
      label: "沈河区",
      value: "210103"
    },
    {
      city: "沈阳市",
      label: "大东区",
      value: "210104"
    },
    {
      city: "沈阳市",
      label: "皇姑区",
      value: "210105"
    },
    {
      city: "沈阳市",
      label: "铁西区",
      value: "210106"
    },
    {
      city: "沈阳市",
      label: "苏家屯区",
      value: "210111"
    },
    {
      city: "沈阳市",
      label: "浑南区",
      value: "210112"
    },
    {
      city: "沈阳市",
      label: "沈北新区",
      value: "210113"
    },
    {
      city: "沈阳市",
      label: "于洪区",
      value: "210114"
    },
    {
      city: "沈阳市",
      label: "辽中区",
      value: "210115"
    },
    {
      city: "沈阳市",
      label: "康平县",
      value: "210123"
    },
    {
      city: "沈阳市",
      label: "法库县",
      value: "210124"
    },
    {
      city: "沈阳市",
      label: "新民市",
      value: "210181"
    }
  ],
  "210200": [{
      city: "大连市",
      label: "市辖区",
      value: "210201"
    },
    {
      city: "大连市",
      label: "中山区",
      value: "210202"
    },
    {
      city: "大连市",
      label: "西岗区",
      value: "210203"
    },
    {
      city: "大连市",
      label: "沙河口区",
      value: "210204"
    },
    {
      city: "大连市",
      label: "甘井子区",
      value: "210211"
    },
    {
      city: "大连市",
      label: "旅顺口区",
      value: "210212"
    },
    {
      city: "大连市",
      label: "金州区",
      value: "210213"
    },
    {
      city: "大连市",
      label: "普兰店区",
      value: "210214"
    },
    {
      city: "大连市",
      label: "长海县",
      value: "210224"
    },
    {
      city: "大连市",
      label: "瓦房店市",
      value: "210281"
    },
    {
      city: "大连市",
      label: "庄河市",
      value: "210283"
    }
  ],
  "210300": [{
      city: "鞍山市",
      label: "市辖区",
      value: "210301"
    },
    {
      city: "鞍山市",
      label: "铁东区",
      value: "210302"
    },
    {
      city: "鞍山市",
      label: "铁西区",
      value: "210303"
    },
    {
      city: "鞍山市",
      label: "立山区",
      value: "210304"
    },
    {
      city: "鞍山市",
      label: "千山区",
      value: "210311"
    },
    {
      city: "鞍山市",
      label: "台安县",
      value: "210321"
    },
    {
      city: "鞍山市",
      label: "岫岩满族自治县",
      value: "210323"
    },
    {
      city: "鞍山市",
      label: "海城市",
      value: "210381"
    }
  ],
  "210400": [{
      city: "抚顺市",
      label: "市辖区",
      value: "210401"
    },
    {
      city: "抚顺市",
      label: "新抚区",
      value: "210402"
    },
    {
      city: "抚顺市",
      label: "东洲区",
      value: "210403"
    },
    {
      city: "抚顺市",
      label: "望花区",
      value: "210404"
    },
    {
      city: "抚顺市",
      label: "顺城区",
      value: "210411"
    },
    {
      city: "抚顺市",
      label: "抚顺县",
      value: "210421"
    },
    {
      city: "抚顺市",
      label: "新宾满族自治县",
      value: "210422"
    },
    {
      city: "抚顺市",
      label: "清原满族自治县",
      value: "210423"
    }
  ],
  "210500": [{
      city: "本溪市",
      label: "市辖区",
      value: "210501"
    },
    {
      city: "本溪市",
      label: "平山区",
      value: "210502"
    },
    {
      city: "本溪市",
      label: "溪湖区",
      value: "210503"
    },
    {
      city: "本溪市",
      label: "明山区",
      value: "210504"
    },
    {
      city: "本溪市",
      label: "南芬区",
      value: "210505"
    },
    {
      city: "本溪市",
      label: "本溪满族自治县",
      value: "210521"
    },
    {
      city: "本溪市",
      label: "桓仁满族自治县",
      value: "210522"
    }
  ],
  "210600": [{
      city: "丹东市",
      label: "市辖区",
      value: "210601"
    },
    {
      city: "丹东市",
      label: "元宝区",
      value: "210602"
    },
    {
      city: "丹东市",
      label: "振兴区",
      value: "210603"
    },
    {
      city: "丹东市",
      label: "振安区",
      value: "210604"
    },
    {
      city: "丹东市",
      label: "宽甸满族自治县",
      value: "210624"
    },
    {
      city: "丹东市",
      label: "东港市",
      value: "210681"
    },
    {
      city: "丹东市",
      label: "凤城市",
      value: "210682"
    }
  ],
  "210700": [{
      city: "锦州市",
      label: "市辖区",
      value: "210701"
    },
    {
      city: "锦州市",
      label: "古塔区",
      value: "210702"
    },
    {
      city: "锦州市",
      label: "凌河区",
      value: "210703"
    },
    {
      city: "锦州市",
      label: "太和区",
      value: "210711"
    },
    {
      city: "锦州市",
      label: "黑山县",
      value: "210726"
    },
    {
      city: "锦州市",
      label: "义县",
      value: "210727"
    },
    {
      city: "锦州市",
      label: "凌海市",
      value: "210781"
    },
    {
      city: "锦州市",
      label: "北镇市",
      value: "210782"
    }
  ],
  "210800": [{
      city: "营口市",
      label: "市辖区",
      value: "210801"
    },
    {
      city: "营口市",
      label: "站前区",
      value: "210802"
    },
    {
      city: "营口市",
      label: "西市区",
      value: "210803"
    },
    {
      city: "营口市",
      label: "鲅鱼圈区",
      value: "210804"
    },
    {
      city: "营口市",
      label: "老边区",
      value: "210811"
    },
    {
      city: "营口市",
      label: "盖州市",
      value: "210881"
    },
    {
      city: "营口市",
      label: "大石桥市",
      value: "210882"
    }
  ],
  "210900": [{
      city: "阜新市",
      label: "市辖区",
      value: "210901"
    },
    {
      city: "阜新市",
      label: "海州区",
      value: "210902"
    },
    {
      city: "阜新市",
      label: "新邱区",
      value: "210903"
    },
    {
      city: "阜新市",
      label: "太平区",
      value: "210904"
    },
    {
      city: "阜新市",
      label: "清河门区",
      value: "210905"
    },
    {
      city: "阜新市",
      label: "细河区",
      value: "210911"
    },
    {
      city: "阜新市",
      label: "阜新蒙古族自治县",
      value: "210921"
    },
    {
      city: "阜新市",
      label: "彰武县",
      value: "210922"
    }
  ],
  "211000": [{
      city: "辽阳市",
      label: "市辖区",
      value: "211001"
    },
    {
      city: "辽阳市",
      label: "白塔区",
      value: "211002"
    },
    {
      city: "辽阳市",
      label: "文圣区",
      value: "211003"
    },
    {
      city: "辽阳市",
      label: "宏伟区",
      value: "211004"
    },
    {
      city: "辽阳市",
      label: "弓长岭区",
      value: "211005"
    },
    {
      city: "辽阳市",
      label: "太子河区",
      value: "211011"
    },
    {
      city: "辽阳市",
      label: "辽阳县",
      value: "211021"
    },
    {
      city: "辽阳市",
      label: "灯塔市",
      value: "211081"
    }
  ],
  "211100": [{
      city: "盘锦市",
      label: "市辖区",
      value: "211101"
    },
    {
      city: "盘锦市",
      label: "双台子区",
      value: "211102"
    },
    {
      city: "盘锦市",
      label: "兴隆台区",
      value: "211103"
    },
    {
      city: "盘锦市",
      label: "大洼区",
      value: "211104"
    },
    {
      city: "盘锦市",
      label: "盘山县",
      value: "211122"
    }
  ],
  "211200": [{
      city: "铁岭市",
      label: "市辖区",
      value: "211201"
    },
    {
      city: "铁岭市",
      label: "银州区",
      value: "211202"
    },
    {
      city: "铁岭市",
      label: "清河区",
      value: "211204"
    },
    {
      city: "铁岭市",
      label: "铁岭县",
      value: "211221"
    },
    {
      city: "铁岭市",
      label: "西丰县",
      value: "211223"
    },
    {
      city: "铁岭市",
      label: "昌图县",
      value: "211224"
    },
    {
      city: "铁岭市",
      label: "调兵山市",
      value: "211281"
    },
    {
      city: "铁岭市",
      label: "开原市",
      value: "211282"
    }
  ],
  "211300": [{
      city: "朝阳市",
      label: "市辖区",
      value: "211301"
    },
    {
      city: "朝阳市",
      label: "双塔区",
      value: "211302"
    },
    {
      city: "朝阳市",
      label: "龙城区",
      value: "211303"
    },
    {
      city: "朝阳市",
      label: "朝阳县",
      value: "211321"
    },
    {
      city: "朝阳市",
      label: "建平县",
      value: "211322"
    },
    {
      city: "朝阳市",
      label: "喀喇沁左翼蒙古族自治县",
      value: "211324"
    },
    {
      city: "朝阳市",
      label: "北票市",
      value: "211381"
    },
    {
      city: "朝阳市",
      label: "凌源市",
      value: "211382"
    }
  ],
  "211400": [{
      city: "葫芦岛市",
      label: "市辖区",
      value: "211401"
    },
    {
      city: "葫芦岛市",
      label: "连山区",
      value: "211402"
    },
    {
      city: "葫芦岛市",
      label: "龙港区",
      value: "211403"
    },
    {
      city: "葫芦岛市",
      label: "南票区",
      value: "211404"
    },
    {
      city: "葫芦岛市",
      label: "绥中县",
      value: "211421"
    },
    {
      city: "葫芦岛市",
      label: "建昌县",
      value: "211422"
    },
    {
      city: "葫芦岛市",
      label: "兴城市",
      value: "211481"
    }
  ],
  "220100": [{
      city: "长春市",
      label: "市辖区",
      value: "220101"
    },
    {
      city: "长春市",
      label: "南关区",
      value: "220102"
    },
    {
      city: "长春市",
      label: "宽城区",
      value: "220103"
    },
    {
      city: "长春市",
      label: "朝阳区",
      value: "220104"
    },
    {
      city: "长春市",
      label: "二道区",
      value: "220105"
    },
    {
      city: "长春市",
      label: "绿园区",
      value: "220106"
    },
    {
      city: "长春市",
      label: "双阳区",
      value: "220112"
    },
    {
      city: "长春市",
      label: "九台区",
      value: "220113"
    },
    {
      city: "长春市",
      label: "农安县",
      value: "220122"
    },
    {
      city: "长春市",
      label: "榆树市",
      value: "220182"
    },
    {
      city: "长春市",
      label: "德惠市",
      value: "220183"
    }
  ],
  "220200": [{
      city: "吉林市",
      label: "市辖区",
      value: "220201"
    },
    {
      city: "吉林市",
      label: "昌邑区",
      value: "220202"
    },
    {
      city: "吉林市",
      label: "龙潭区",
      value: "220203"
    },
    {
      city: "吉林市",
      label: "船营区",
      value: "220204"
    },
    {
      city: "吉林市",
      label: "丰满区",
      value: "220211"
    },
    {
      city: "吉林市",
      label: "永吉县",
      value: "220221"
    },
    {
      city: "吉林市",
      label: "蛟河市",
      value: "220281"
    },
    {
      city: "吉林市",
      label: "桦甸市",
      value: "220282"
    },
    {
      city: "吉林市",
      label: "舒兰市",
      value: "220283"
    },
    {
      city: "吉林市",
      label: "磐石市",
      value: "220284"
    }
  ],
  "220300": [{
      city: "四平市",
      label: "市辖区",
      value: "220301"
    },
    {
      city: "四平市",
      label: "铁西区",
      value: "220302"
    },
    {
      city: "四平市",
      label: "铁东区",
      value: "220303"
    },
    {
      city: "四平市",
      label: "梨树县",
      value: "220322"
    },
    {
      city: "四平市",
      label: "伊通满族自治县",
      value: "220323"
    },
    {
      city: "四平市",
      label: "公主岭市",
      value: "220381"
    },
    {
      city: "四平市",
      label: "双辽市",
      value: "220382"
    }
  ],
  "220400": [{
      city: "辽源市",
      label: "市辖区",
      value: "220401"
    },
    {
      city: "辽源市",
      label: "龙山区",
      value: "220402"
    },
    {
      city: "辽源市",
      label: "西安区",
      value: "220403"
    },
    {
      city: "辽源市",
      label: "东丰县",
      value: "220421"
    },
    {
      city: "辽源市",
      label: "东辽县",
      value: "220422"
    }
  ],
  "220500": [{
      city: "通化市",
      label: "市辖区",
      value: "220501"
    },
    {
      city: "通化市",
      label: "东昌区",
      value: "220502"
    },
    {
      city: "通化市",
      label: "二道江区",
      value: "220503"
    },
    {
      city: "通化市",
      label: "通化县",
      value: "220521"
    },
    {
      city: "通化市",
      label: "辉南县",
      value: "220523"
    },
    {
      city: "通化市",
      label: "柳河县",
      value: "220524"
    },
    {
      city: "通化市",
      label: "梅河口市",
      value: "220581"
    },
    {
      city: "通化市",
      label: "集安市",
      value: "220582"
    }
  ],
  "220600": [{
      city: "白山市",
      label: "市辖区",
      value: "220601"
    },
    {
      city: "白山市",
      label: "浑江区",
      value: "220602"
    },
    {
      city: "白山市",
      label: "江源区",
      value: "220605"
    },
    {
      city: "白山市",
      label: "抚松县",
      value: "220621"
    },
    {
      city: "白山市",
      label: "靖宇县",
      value: "220622"
    },
    {
      city: "白山市",
      label: "长白朝鲜族自治县",
      value: "220623"
    },
    {
      city: "白山市",
      label: "临江市",
      value: "220681"
    }
  ],
  "220700": [{
      city: "松原市",
      label: "市辖区",
      value: "220701"
    },
    {
      city: "松原市",
      label: "宁江区",
      value: "220702"
    },
    {
      city: "松原市",
      label: "前郭尔罗斯蒙古族自治县",
      value: "220721"
    },
    {
      city: "松原市",
      label: "长岭县",
      value: "220722"
    },
    {
      city: "松原市",
      label: "乾安县",
      value: "220723"
    },
    {
      city: "松原市",
      label: "扶余市",
      value: "220781"
    }
  ],
  "220800": [{
      city: "白城市",
      label: "市辖区",
      value: "220801"
    },
    {
      city: "白城市",
      label: "洮北区",
      value: "220802"
    },
    {
      city: "白城市",
      label: "镇赉县",
      value: "220821"
    },
    {
      city: "白城市",
      label: "通榆县",
      value: "220822"
    },
    {
      city: "白城市",
      label: "洮南市",
      value: "220881"
    },
    {
      city: "白城市",
      label: "大安市",
      value: "220882"
    }
  ],
  "222400": [{
      city: "延边朝鲜族自治州",
      label: "延吉市",
      value: "222401"
    },
    {
      city: "延边朝鲜族自治州",
      label: "图们市",
      value: "222402"
    },
    {
      city: "延边朝鲜族自治州",
      label: "敦化市",
      value: "222403"
    },
    {
      city: "延边朝鲜族自治州",
      label: "珲春市",
      value: "222404"
    },
    {
      city: "延边朝鲜族自治州",
      label: "龙井市",
      value: "222405"
    },
    {
      city: "延边朝鲜族自治州",
      label: "和龙市",
      value: "222406"
    },
    {
      city: "延边朝鲜族自治州",
      label: "汪清县",
      value: "222424"
    },
    {
      city: "延边朝鲜族自治州",
      label: "安图县",
      value: "222426"
    }
  ],
  "230100": [{
      city: "哈尔滨市",
      label: "市辖区",
      value: "230101"
    },
    {
      city: "哈尔滨市",
      label: "道里区",
      value: "230102"
    },
    {
      city: "哈尔滨市",
      label: "南岗区",
      value: "230103"
    },
    {
      city: "哈尔滨市",
      label: "道外区",
      value: "230104"
    },
    {
      city: "哈尔滨市",
      label: "平房区",
      value: "230108"
    },
    {
      city: "哈尔滨市",
      label: "松北区",
      value: "230109"
    },
    {
      city: "哈尔滨市",
      label: "香坊区",
      value: "230110"
    },
    {
      city: "哈尔滨市",
      label: "呼兰区",
      value: "230111"
    },
    {
      city: "哈尔滨市",
      label: "阿城区",
      value: "230112"
    },
    {
      city: "哈尔滨市",
      label: "双城区",
      value: "230113"
    },
    {
      city: "哈尔滨市",
      label: "依兰县",
      value: "230123"
    },
    {
      city: "哈尔滨市",
      label: "方正县",
      value: "230124"
    },
    {
      city: "哈尔滨市",
      label: "宾县",
      value: "230125"
    },
    {
      city: "哈尔滨市",
      label: "巴彦县",
      value: "230126"
    },
    {
      city: "哈尔滨市",
      label: "木兰县",
      value: "230127"
    },
    {
      city: "哈尔滨市",
      label: "通河县",
      value: "230128"
    },
    {
      city: "哈尔滨市",
      label: "延寿县",
      value: "230129"
    },
    {
      city: "哈尔滨市",
      label: "尚志市",
      value: "230183"
    },
    {
      city: "哈尔滨市",
      label: "五常市",
      value: "230184"
    }
  ],
  "230200": [{
      city: "齐齐哈尔市",
      label: "市辖区",
      value: "230201"
    },
    {
      city: "齐齐哈尔市",
      label: "龙沙区",
      value: "230202"
    },
    {
      city: "齐齐哈尔市",
      label: "建华区",
      value: "230203"
    },
    {
      city: "齐齐哈尔市",
      label: "铁锋区",
      value: "230204"
    },
    {
      city: "齐齐哈尔市",
      label: "昂昂溪区",
      value: "230205"
    },
    {
      city: "齐齐哈尔市",
      label: "富拉尔基区",
      value: "230206"
    },
    {
      city: "齐齐哈尔市",
      label: "碾子山区",
      value: "230207"
    },
    {
      city: "齐齐哈尔市",
      label: "梅里斯达斡尔族区",
      value: "230208"
    },
    {
      city: "齐齐哈尔市",
      label: "龙江县",
      value: "230221"
    },
    {
      city: "齐齐哈尔市",
      label: "依安县",
      value: "230223"
    },
    {
      city: "齐齐哈尔市",
      label: "泰来县",
      value: "230224"
    },
    {
      city: "齐齐哈尔市",
      label: "甘南县",
      value: "230225"
    },
    {
      city: "齐齐哈尔市",
      label: "富裕县",
      value: "230227"
    },
    {
      city: "齐齐哈尔市",
      label: "克山县",
      value: "230229"
    },
    {
      city: "齐齐哈尔市",
      label: "克东县",
      value: "230230"
    },
    {
      city: "齐齐哈尔市",
      label: "拜泉县",
      value: "230231"
    },
    {
      city: "齐齐哈尔市",
      label: "讷河市",
      value: "230281"
    }
  ],
  "230300": [{
      city: "鸡西市",
      label: "市辖区",
      value: "230301"
    },
    {
      city: "鸡西市",
      label: "鸡冠区",
      value: "230302"
    },
    {
      city: "鸡西市",
      label: "恒山区",
      value: "230303"
    },
    {
      city: "鸡西市",
      label: "滴道区",
      value: "230304"
    },
    {
      city: "鸡西市",
      label: "梨树区",
      value: "230305"
    },
    {
      city: "鸡西市",
      label: "城子河区",
      value: "230306"
    },
    {
      city: "鸡西市",
      label: "麻山区",
      value: "230307"
    },
    {
      city: "鸡西市",
      label: "鸡东县",
      value: "230321"
    },
    {
      city: "鸡西市",
      label: "虎林市",
      value: "230381"
    },
    {
      city: "鸡西市",
      label: "密山市",
      value: "230382"
    }
  ],
  "230400": [{
      city: "鹤岗市",
      label: "市辖区",
      value: "230401"
    },
    {
      city: "鹤岗市",
      label: "向阳区",
      value: "230402"
    },
    {
      city: "鹤岗市",
      label: "工农区",
      value: "230403"
    },
    {
      city: "鹤岗市",
      label: "南山区",
      value: "230404"
    },
    {
      city: "鹤岗市",
      label: "兴安区",
      value: "230405"
    },
    {
      city: "鹤岗市",
      label: "东山区",
      value: "230406"
    },
    {
      city: "鹤岗市",
      label: "兴山区",
      value: "230407"
    },
    {
      city: "鹤岗市",
      label: "萝北县",
      value: "230421"
    },
    {
      city: "鹤岗市",
      label: "绥滨县",
      value: "230422"
    }
  ],
  "230500": [{
      city: "双鸭山市",
      label: "市辖区",
      value: "230501"
    },
    {
      city: "双鸭山市",
      label: "尖山区",
      value: "230502"
    },
    {
      city: "双鸭山市",
      label: "岭东区",
      value: "230503"
    },
    {
      city: "双鸭山市",
      label: "四方台区",
      value: "230505"
    },
    {
      city: "双鸭山市",
      label: "宝山区",
      value: "230506"
    },
    {
      city: "双鸭山市",
      label: "集贤县",
      value: "230521"
    },
    {
      city: "双鸭山市",
      label: "友谊县",
      value: "230522"
    },
    {
      city: "双鸭山市",
      label: "宝清县",
      value: "230523"
    },
    {
      city: "双鸭山市",
      label: "饶河县",
      value: "230524"
    }
  ],
  "230600": [{
      city: "大庆市",
      label: "市辖区",
      value: "230601"
    },
    {
      city: "大庆市",
      label: "萨尔图区",
      value: "230602"
    },
    {
      city: "大庆市",
      label: "龙凤区",
      value: "230603"
    },
    {
      city: "大庆市",
      label: "让胡路区",
      value: "230604"
    },
    {
      city: "大庆市",
      label: "红岗区",
      value: "230605"
    },
    {
      city: "大庆市",
      label: "大同区",
      value: "230606"
    },
    {
      city: "大庆市",
      label: "肇州县",
      value: "230621"
    },
    {
      city: "大庆市",
      label: "肇源县",
      value: "230622"
    },
    {
      city: "大庆市",
      label: "林甸县",
      value: "230623"
    },
    {
      city: "大庆市",
      label: "杜尔伯特蒙古族自治县",
      value: "230624"
    }
  ],
  "230700": [{
      city: "伊春市",
      label: "市辖区",
      value: "230701"
    },
    {
      city: "伊春市",
      label: "伊春区",
      value: "230702"
    },
    {
      city: "伊春市",
      label: "南岔区",
      value: "230703"
    },
    {
      city: "伊春市",
      label: "友好区",
      value: "230704"
    },
    {
      city: "伊春市",
      label: "西林区",
      value: "230705"
    },
    {
      city: "伊春市",
      label: "翠峦区",
      value: "230706"
    },
    {
      city: "伊春市",
      label: "新青区",
      value: "230707"
    },
    {
      city: "伊春市",
      label: "美溪区",
      value: "230708"
    },
    {
      city: "伊春市",
      label: "金山屯区",
      value: "230709"
    },
    {
      city: "伊春市",
      label: "五营区",
      value: "230710"
    },
    {
      city: "伊春市",
      label: "乌马河区",
      value: "230711"
    },
    {
      city: "伊春市",
      label: "汤旺河区",
      value: "230712"
    },
    {
      city: "伊春市",
      label: "带岭区",
      value: "230713"
    },
    {
      city: "伊春市",
      label: "乌伊岭区",
      value: "230714"
    },
    {
      city: "伊春市",
      label: "红星区",
      value: "230715"
    },
    {
      city: "伊春市",
      label: "上甘岭区",
      value: "230716"
    },
    {
      city: "伊春市",
      label: "嘉荫县",
      value: "230722"
    },
    {
      city: "伊春市",
      label: "铁力市",
      value: "230781"
    }
  ],
  "230800": [{
      city: "佳木斯市",
      label: "市辖区",
      value: "230801"
    },
    {
      city: "佳木斯市",
      label: "向阳区",
      value: "230803"
    },
    {
      city: "佳木斯市",
      label: "前进区",
      value: "230804"
    },
    {
      city: "佳木斯市",
      label: "东风区",
      value: "230805"
    },
    {
      city: "佳木斯市",
      label: "郊区",
      value: "230811"
    },
    {
      city: "佳木斯市",
      label: "桦南县",
      value: "230822"
    },
    {
      city: "佳木斯市",
      label: "桦川县",
      value: "230826"
    },
    {
      city: "佳木斯市",
      label: "汤原县",
      value: "230828"
    },
    {
      city: "佳木斯市",
      label: "同江市",
      value: "230881"
    },
    {
      city: "佳木斯市",
      label: "富锦市",
      value: "230882"
    },
    {
      city: "佳木斯市",
      label: "抚远市",
      value: "230883"
    }
  ],
  "230900": [{
      city: "七台河市",
      label: "市辖区",
      value: "230901"
    },
    {
      city: "七台河市",
      label: "新兴区",
      value: "230902"
    },
    {
      city: "七台河市",
      label: "桃山区",
      value: "230903"
    },
    {
      city: "七台河市",
      label: "茄子河区",
      value: "230904"
    },
    {
      city: "七台河市",
      label: "勃利县",
      value: "230921"
    }
  ],
  "231000": [{
      city: "牡丹江市",
      label: "市辖区",
      value: "231001"
    },
    {
      city: "牡丹江市",
      label: "东安区",
      value: "231002"
    },
    {
      city: "牡丹江市",
      label: "阳明区",
      value: "231003"
    },
    {
      city: "牡丹江市",
      label: "爱民区",
      value: "231004"
    },
    {
      city: "牡丹江市",
      label: "西安区",
      value: "231005"
    },
    {
      city: "牡丹江市",
      label: "林口县",
      value: "231025"
    },
    {
      city: "牡丹江市",
      label: "绥芬河市",
      value: "231081"
    },
    {
      city: "牡丹江市",
      label: "海林市",
      value: "231083"
    },
    {
      city: "牡丹江市",
      label: "宁安市",
      value: "231084"
    },
    {
      city: "牡丹江市",
      label: "穆棱市",
      value: "231085"
    },
    {
      city: "牡丹江市",
      label: "东宁市",
      value: "231086"
    }
  ],
  "231100": [{
      city: "黑河市",
      label: "市辖区",
      value: "231101"
    },
    {
      city: "黑河市",
      label: "爱辉区",
      value: "231102"
    },
    {
      city: "黑河市",
      label: "嫩江县",
      value: "231121"
    },
    {
      city: "黑河市",
      label: "逊克县",
      value: "231123"
    },
    {
      city: "黑河市",
      label: "孙吴县",
      value: "231124"
    },
    {
      city: "黑河市",
      label: "北安市",
      value: "231181"
    },
    {
      city: "黑河市",
      label: "五大连池市",
      value: "231182"
    }
  ],
  "231200": [{
      city: "绥化市",
      label: "市辖区",
      value: "231201"
    },
    {
      city: "绥化市",
      label: "北林区",
      value: "231202"
    },
    {
      city: "绥化市",
      label: "望奎县",
      value: "231221"
    },
    {
      city: "绥化市",
      label: "兰西县",
      value: "231222"
    },
    {
      city: "绥化市",
      label: "青冈县",
      value: "231223"
    },
    {
      city: "绥化市",
      label: "庆安县",
      value: "231224"
    },
    {
      city: "绥化市",
      label: "明水县",
      value: "231225"
    },
    {
      city: "绥化市",
      label: "绥棱县",
      value: "231226"
    },
    {
      city: "绥化市",
      label: "安达市",
      value: "231281"
    },
    {
      city: "绥化市",
      label: "肇东市",
      value: "231282"
    },
    {
      city: "绥化市",
      label: "海伦市",
      value: "231283"
    }
  ],
  "232700": [{
      city: "大兴安岭地区",
      label: "呼玛县",
      value: "232721"
    },
    {
      city: "大兴安岭地区",
      label: "塔河县",
      value: "232722"
    },
    {
      city: "大兴安岭地区",
      label: "漠河县",
      value: "232723"
    }
  ],
  "310100": [{
      city: "市辖区",
      label: "黄浦区",
      value: "310101"
    },
    {
      city: "市辖区",
      label: "徐汇区",
      value: "310104"
    },
    {
      city: "市辖区",
      label: "长宁区",
      value: "310105"
    },
    {
      city: "市辖区",
      label: "静安区",
      value: "310106"
    },
    {
      city: "市辖区",
      label: "普陀区",
      value: "310107"
    },
    {
      city: "市辖区",
      label: "虹口区",
      value: "310109"
    },
    {
      city: "市辖区",
      label: "杨浦区",
      value: "310110"
    },
    {
      city: "市辖区",
      label: "闵行区",
      value: "310112"
    },
    {
      city: "市辖区",
      label: "宝山区",
      value: "310113"
    },
    {
      city: "市辖区",
      label: "嘉定区",
      value: "310114"
    },
    {
      city: "市辖区",
      label: "浦东新区",
      value: "310115"
    },
    {
      city: "市辖区",
      label: "金山区",
      value: "310116"
    },
    {
      city: "市辖区",
      label: "松江区",
      value: "310117"
    },
    {
      city: "市辖区",
      label: "青浦区",
      value: "310118"
    },
    {
      city: "市辖区",
      label: "奉贤区",
      value: "310120"
    },
    {
      city: "市辖区",
      label: "崇明区",
      value: "310151"
    }
  ],
  "320100": [{
      city: "南京市",
      label: "市辖区",
      value: "320101"
    },
    {
      city: "南京市",
      label: "玄武区",
      value: "320102"
    },
    {
      city: "南京市",
      label: "秦淮区",
      value: "320104"
    },
    {
      city: "南京市",
      label: "建邺区",
      value: "320105"
    },
    {
      city: "南京市",
      label: "鼓楼区",
      value: "320106"
    },
    {
      city: "南京市",
      label: "浦口区",
      value: "320111"
    },
    {
      city: "南京市",
      label: "栖霞区",
      value: "320113"
    },
    {
      city: "南京市",
      label: "雨花台区",
      value: "320114"
    },
    {
      city: "南京市",
      label: "江宁区",
      value: "320115"
    },
    {
      city: "南京市",
      label: "六合区",
      value: "320116"
    },
    {
      city: "南京市",
      label: "溧水区",
      value: "320117"
    },
    {
      city: "南京市",
      label: "高淳区",
      value: "320118"
    }
  ],
  "320200": [{
      city: "无锡市",
      label: "市辖区",
      value: "320201"
    },
    {
      city: "无锡市",
      label: "锡山区",
      value: "320205"
    },
    {
      city: "无锡市",
      label: "惠山区",
      value: "320206"
    },
    {
      city: "无锡市",
      label: "滨湖区",
      value: "320211"
    },
    {
      city: "无锡市",
      label: "梁溪区",
      value: "320213"
    },
    {
      city: "无锡市",
      label: "新吴区",
      value: "320214"
    },
    {
      city: "无锡市",
      label: "江阴市",
      value: "320281"
    },
    {
      city: "无锡市",
      label: "宜兴市",
      value: "320282"
    }
  ],
  "320300": [{
      city: "徐州市",
      label: "市辖区",
      value: "320301"
    },
    {
      city: "徐州市",
      label: "鼓楼区",
      value: "320302"
    },
    {
      city: "徐州市",
      label: "云龙区",
      value: "320303"
    },
    {
      city: "徐州市",
      label: "贾汪区",
      value: "320305"
    },
    {
      city: "徐州市",
      label: "泉山区",
      value: "320311"
    },
    {
      city: "徐州市",
      label: "铜山区",
      value: "320312"
    },
    {
      city: "徐州市",
      label: "丰县",
      value: "320321"
    },
    {
      city: "徐州市",
      label: "沛县",
      value: "320322"
    },
    {
      city: "徐州市",
      label: "睢宁县",
      value: "320324"
    },
    {
      city: "徐州市",
      label: "新沂市",
      value: "320381"
    },
    {
      city: "徐州市",
      label: "邳州市",
      value: "320382"
    }
  ],
  "320400": [{
      city: "常州市",
      label: "市辖区",
      value: "320401"
    },
    {
      city: "常州市",
      label: "天宁区",
      value: "320402"
    },
    {
      city: "常州市",
      label: "钟楼区",
      value: "320404"
    },
    {
      city: "常州市",
      label: "新北区",
      value: "320411"
    },
    {
      city: "常州市",
      label: "武进区",
      value: "320412"
    },
    {
      city: "常州市",
      label: "金坛区",
      value: "320413"
    },
    {
      city: "常州市",
      label: "溧阳市",
      value: "320481"
    }
  ],
  "320500": [{
      city: "苏州市",
      label: "市辖区",
      value: "320501"
    },
    {
      city: "苏州市",
      label: "虎丘区",
      value: "320505"
    },
    {
      city: "苏州市",
      label: "吴中区",
      value: "320506"
    },
    {
      city: "苏州市",
      label: "相城区",
      value: "320507"
    },
    {
      city: "苏州市",
      label: "姑苏区",
      value: "320508"
    },
    {
      city: "苏州市",
      label: "吴江区",
      value: "320509"
    },
    {
      city: "苏州市",
      label: "常熟市",
      value: "320581"
    },
    {
      city: "苏州市",
      label: "张家港市",
      value: "320582"
    },
    {
      city: "苏州市",
      label: "昆山市",
      value: "320583"
    },
    {
      city: "苏州市",
      label: "太仓市",
      value: "320585"
    }
  ],
  "320600": [{
      city: "南通市",
      label: "市辖区",
      value: "320601"
    },
    {
      city: "南通市",
      label: "崇川区",
      value: "320602"
    },
    {
      city: "南通市",
      label: "港闸区",
      value: "320611"
    },
    {
      city: "南通市",
      label: "通州区",
      value: "320612"
    },
    {
      city: "南通市",
      label: "海安县",
      value: "320621"
    },
    {
      city: "南通市",
      label: "如东县",
      value: "320623"
    },
    {
      city: "南通市",
      label: "启东市",
      value: "320681"
    },
    {
      city: "南通市",
      label: "如皋市",
      value: "320682"
    },
    {
      city: "南通市",
      label: "海门市",
      value: "320684"
    }
  ],
  "320700": [{
      city: "连云港市",
      label: "市辖区",
      value: "320701"
    },
    {
      city: "连云港市",
      label: "连云区",
      value: "320703"
    },
    {
      city: "连云港市",
      label: "海州区",
      value: "320706"
    },
    {
      city: "连云港市",
      label: "赣榆区",
      value: "320707"
    },
    {
      city: "连云港市",
      label: "东海县",
      value: "320722"
    },
    {
      city: "连云港市",
      label: "灌云县",
      value: "320723"
    },
    {
      city: "连云港市",
      label: "灌南县",
      value: "320724"
    }
  ],
  "320800": [{
      city: "淮安市",
      label: "市辖区",
      value: "320801"
    },
    {
      city: "淮安市",
      label: "淮安区",
      value: "320803"
    },
    {
      city: "淮安市",
      label: "淮阴区",
      value: "320804"
    },
    {
      city: "淮安市",
      label: "清江浦区",
      value: "320812"
    },
    {
      city: "淮安市",
      label: "洪泽区",
      value: "320813"
    },
    {
      city: "淮安市",
      label: "涟水县",
      value: "320826"
    },
    {
      city: "淮安市",
      label: "盱眙县",
      value: "320830"
    },
    {
      city: "淮安市",
      label: "金湖县",
      value: "320831"
    }
  ],
  "320900": [{
      city: "盐城市",
      label: "市辖区",
      value: "320901"
    },
    {
      city: "盐城市",
      label: "亭湖区",
      value: "320902"
    },
    {
      city: "盐城市",
      label: "盐都区",
      value: "320903"
    },
    {
      city: "盐城市",
      label: "大丰区",
      value: "320904"
    },
    {
      city: "盐城市",
      label: "响水县",
      value: "320921"
    },
    {
      city: "盐城市",
      label: "滨海县",
      value: "320922"
    },
    {
      city: "盐城市",
      label: "阜宁县",
      value: "320923"
    },
    {
      city: "盐城市",
      label: "射阳县",
      value: "320924"
    },
    {
      city: "盐城市",
      label: "建湖县",
      value: "320925"
    },
    {
      city: "盐城市",
      label: "东台市",
      value: "320981"
    }
  ],
  "321000": [{
      city: "扬州市",
      label: "市辖区",
      value: "321001"
    },
    {
      city: "扬州市",
      label: "广陵区",
      value: "321002"
    },
    {
      city: "扬州市",
      label: "邗江区",
      value: "321003"
    },
    {
      city: "扬州市",
      label: "江都区",
      value: "321012"
    },
    {
      city: "扬州市",
      label: "宝应县",
      value: "321023"
    },
    {
      city: "扬州市",
      label: "仪征市",
      value: "321081"
    },
    {
      city: "扬州市",
      label: "高邮市",
      value: "321084"
    }
  ],
  "321100": [{
      city: "镇江市",
      label: "市辖区",
      value: "321101"
    },
    {
      city: "镇江市",
      label: "京口区",
      value: "321102"
    },
    {
      city: "镇江市",
      label: "润州区",
      value: "321111"
    },
    {
      city: "镇江市",
      label: "丹徒区",
      value: "321112"
    },
    {
      city: "镇江市",
      label: "丹阳市",
      value: "321181"
    },
    {
      city: "镇江市",
      label: "扬中市",
      value: "321182"
    },
    {
      city: "镇江市",
      label: "句容市",
      value: "321183"
    }
  ],
  "321200": [{
      city: "泰州市",
      label: "市辖区",
      value: "321201"
    },
    {
      city: "泰州市",
      label: "海陵区",
      value: "321202"
    },
    {
      city: "泰州市",
      label: "高港区",
      value: "321203"
    },
    {
      city: "泰州市",
      label: "姜堰区",
      value: "321204"
    },
    {
      city: "泰州市",
      label: "兴化市",
      value: "321281"
    },
    {
      city: "泰州市",
      label: "靖江市",
      value: "321282"
    },
    {
      city: "泰州市",
      label: "泰兴市",
      value: "321283"
    }
  ],
  "321300": [{
      city: "宿迁市",
      label: "市辖区",
      value: "321301"
    },
    {
      city: "宿迁市",
      label: "宿城区",
      value: "321302"
    },
    {
      city: "宿迁市",
      label: "宿豫区",
      value: "321311"
    },
    {
      city: "宿迁市",
      label: "沭阳县",
      value: "321322"
    },
    {
      city: "宿迁市",
      label: "泗阳县",
      value: "321323"
    },
    {
      city: "宿迁市",
      label: "泗洪县",
      value: "321324"
    }
  ],
  "330100": [{
      city: "杭州市",
      label: "市辖区",
      value: "330101"
    },
    {
      city: "杭州市",
      label: "上城区",
      value: "330102"
    },
    {
      city: "杭州市",
      label: "下城区",
      value: "330103"
    },
    {
      city: "杭州市",
      label: "江干区",
      value: "330104"
    },
    {
      city: "杭州市",
      label: "拱墅区",
      value: "330105"
    },
    {
      city: "杭州市",
      label: "西湖区",
      value: "330106"
    },
    {
      city: "杭州市",
      label: "滨江区",
      value: "330108"
    },
    {
      city: "杭州市",
      label: "萧山区",
      value: "330109"
    },
    {
      city: "杭州市",
      label: "余杭区",
      value: "330110"
    },
    {
      city: "杭州市",
      label: "富阳区",
      value: "330111"
    },
    {
      city: "杭州市",
      label: "桐庐县",
      value: "330122"
    },
    {
      city: "杭州市",
      label: "淳安县",
      value: "330127"
    },
    {
      city: "杭州市",
      label: "建德市",
      value: "330182"
    },
    {
      city: "杭州市",
      label: "临安市",
      value: "330185"
    }
  ],
  "330200": [{
      city: "宁波市",
      label: "市辖区",
      value: "330201"
    },
    {
      city: "宁波市",
      label: "海曙区",
      value: "330203"
    },
    {
      city: "宁波市",
      label: "江东区",
      value: "330204"
    },
    {
      city: "宁波市",
      label: "江北区",
      value: "330205"
    },
    {
      city: "宁波市",
      label: "北仑区",
      value: "330206"
    },
    {
      city: "宁波市",
      label: "镇海区",
      value: "330211"
    },
    {
      city: "宁波市",
      label: "鄞州区",
      value: "330212"
    },
    {
      city: "宁波市",
      label: "象山县",
      value: "330225"
    },
    {
      city: "宁波市",
      label: "宁海县",
      value: "330226"
    },
    {
      city: "宁波市",
      label: "余姚市",
      value: "330281"
    },
    {
      city: "宁波市",
      label: "慈溪市",
      value: "330282"
    },
    {
      city: "宁波市",
      label: "奉化市",
      value: "330283"
    }
  ],
  "330300": [{
      city: "温州市",
      label: "市辖区",
      value: "330301"
    },
    {
      city: "温州市",
      label: "鹿城区",
      value: "330302"
    },
    {
      city: "温州市",
      label: "龙湾区",
      value: "330303"
    },
    {
      city: "温州市",
      label: "瓯海区",
      value: "330304"
    },
    {
      city: "温州市",
      label: "洞头区",
      value: "330305"
    },
    {
      city: "温州市",
      label: "永嘉县",
      value: "330324"
    },
    {
      city: "温州市",
      label: "平阳县",
      value: "330326"
    },
    {
      city: "温州市",
      label: "苍南县",
      value: "330327"
    },
    {
      city: "温州市",
      label: "文成县",
      value: "330328"
    },
    {
      city: "温州市",
      label: "泰顺县",
      value: "330329"
    },
    {
      city: "温州市",
      label: "瑞安市",
      value: "330381"
    },
    {
      city: "温州市",
      label: "乐清市",
      value: "330382"
    }
  ],
  "330400": [{
      city: "嘉兴市",
      label: "市辖区",
      value: "330401"
    },
    {
      city: "嘉兴市",
      label: "南湖区",
      value: "330402"
    },
    {
      city: "嘉兴市",
      label: "秀洲区",
      value: "330411"
    },
    {
      city: "嘉兴市",
      label: "嘉善县",
      value: "330421"
    },
    {
      city: "嘉兴市",
      label: "海盐县",
      value: "330424"
    },
    {
      city: "嘉兴市",
      label: "海宁市",
      value: "330481"
    },
    {
      city: "嘉兴市",
      label: "平湖市",
      value: "330482"
    },
    {
      city: "嘉兴市",
      label: "桐乡市",
      value: "330483"
    }
  ],
  "330500": [{
      city: "湖州市",
      label: "市辖区",
      value: "330501"
    },
    {
      city: "湖州市",
      label: "吴兴区",
      value: "330502"
    },
    {
      city: "湖州市",
      label: "南浔区",
      value: "330503"
    },
    {
      city: "湖州市",
      label: "德清县",
      value: "330521"
    },
    {
      city: "湖州市",
      label: "长兴县",
      value: "330522"
    },
    {
      city: "湖州市",
      label: "安吉县",
      value: "330523"
    }
  ],
  "330600": [{
      city: "绍兴市",
      label: "市辖区",
      value: "330601"
    },
    {
      city: "绍兴市",
      label: "越城区",
      value: "330602"
    },
    {
      city: "绍兴市",
      label: "柯桥区",
      value: "330603"
    },
    {
      city: "绍兴市",
      label: "上虞区",
      value: "330604"
    },
    {
      city: "绍兴市",
      label: "新昌县",
      value: "330624"
    },
    {
      city: "绍兴市",
      label: "诸暨市",
      value: "330681"
    },
    {
      city: "绍兴市",
      label: "嵊州市",
      value: "330683"
    }
  ],
  "330700": [{
      city: "金华市",
      label: "市辖区",
      value: "330701"
    },
    {
      city: "金华市",
      label: "婺城区",
      value: "330702"
    },
    {
      city: "金华市",
      label: "金东区",
      value: "330703"
    },
    {
      city: "金华市",
      label: "武义县",
      value: "330723"
    },
    {
      city: "金华市",
      label: "浦江县",
      value: "330726"
    },
    {
      city: "金华市",
      label: "磐安县",
      value: "330727"
    },
    {
      city: "金华市",
      label: "兰溪市",
      value: "330781"
    },
    {
      city: "金华市",
      label: "义乌市",
      value: "330782"
    },
    {
      city: "金华市",
      label: "东阳市",
      value: "330783"
    },
    {
      city: "金华市",
      label: "永康市",
      value: "330784"
    }
  ],
  "330800": [{
      city: "衢州市",
      label: "市辖区",
      value: "330801"
    },
    {
      city: "衢州市",
      label: "柯城区",
      value: "330802"
    },
    {
      city: "衢州市",
      label: "衢江区",
      value: "330803"
    },
    {
      city: "衢州市",
      label: "常山县",
      value: "330822"
    },
    {
      city: "衢州市",
      label: "开化县",
      value: "330824"
    },
    {
      city: "衢州市",
      label: "龙游县",
      value: "330825"
    },
    {
      city: "衢州市",
      label: "江山市",
      value: "330881"
    }
  ],
  "330900": [{
      city: "舟山市",
      label: "市辖区",
      value: "330901"
    },
    {
      city: "舟山市",
      label: "定海区",
      value: "330902"
    },
    {
      city: "舟山市",
      label: "普陀区",
      value: "330903"
    },
    {
      city: "舟山市",
      label: "岱山县",
      value: "330921"
    },
    {
      city: "舟山市",
      label: "嵊泗县",
      value: "330922"
    }
  ],
  "331000": [{
      city: "台州市",
      label: "市辖区",
      value: "331001"
    },
    {
      city: "台州市",
      label: "椒江区",
      value: "331002"
    },
    {
      city: "台州市",
      label: "黄岩区",
      value: "331003"
    },
    {
      city: "台州市",
      label: "路桥区",
      value: "331004"
    },
    {
      city: "台州市",
      label: "玉环县",
      value: "331021"
    },
    {
      city: "台州市",
      label: "三门县",
      value: "331022"
    },
    {
      city: "台州市",
      label: "天台县",
      value: "331023"
    },
    {
      city: "台州市",
      label: "仙居县",
      value: "331024"
    },
    {
      city: "台州市",
      label: "温岭市",
      value: "331081"
    },
    {
      city: "台州市",
      label: "临海市",
      value: "331082"
    }
  ],
  "331100": [{
      city: "丽水市",
      label: "市辖区",
      value: "331101"
    },
    {
      city: "丽水市",
      label: "莲都区",
      value: "331102"
    },
    {
      city: "丽水市",
      label: "青田县",
      value: "331121"
    },
    {
      city: "丽水市",
      label: "缙云县",
      value: "331122"
    },
    {
      city: "丽水市",
      label: "遂昌县",
      value: "331123"
    },
    {
      city: "丽水市",
      label: "松阳县",
      value: "331124"
    },
    {
      city: "丽水市",
      label: "云和县",
      value: "331125"
    },
    {
      city: "丽水市",
      label: "庆元县",
      value: "331126"
    },
    {
      city: "丽水市",
      label: "景宁畲族自治县",
      value: "331127"
    },
    {
      city: "丽水市",
      label: "龙泉市",
      value: "331181"
    }
  ],
  "340100": [{
      city: "合肥市",
      label: "市辖区",
      value: "340101"
    },
    {
      city: "合肥市",
      label: "瑶海区",
      value: "340102"
    },
    {
      city: "合肥市",
      label: "庐阳区",
      value: "340103"
    },
    {
      city: "合肥市",
      label: "蜀山区",
      value: "340104"
    },
    {
      city: "合肥市",
      label: "包河区",
      value: "340111"
    },
    {
      city: "合肥市",
      label: "长丰县",
      value: "340121"
    },
    {
      city: "合肥市",
      label: "肥东县",
      value: "340122"
    },
    {
      city: "合肥市",
      label: "肥西县",
      value: "340123"
    },
    {
      city: "合肥市",
      label: "庐江县",
      value: "340124"
    },
    {
      city: "合肥市",
      label: "巢湖市",
      value: "340181"
    }
  ],
  "340200": [{
      city: "芜湖市",
      label: "市辖区",
      value: "340201"
    },
    {
      city: "芜湖市",
      label: "镜湖区",
      value: "340202"
    },
    {
      city: "芜湖市",
      label: "弋江区",
      value: "340203"
    },
    {
      city: "芜湖市",
      label: "鸠江区",
      value: "340207"
    },
    {
      city: "芜湖市",
      label: "三山区",
      value: "340208"
    },
    {
      city: "芜湖市",
      label: "芜湖县",
      value: "340221"
    },
    {
      city: "芜湖市",
      label: "繁昌县",
      value: "340222"
    },
    {
      city: "芜湖市",
      label: "南陵县",
      value: "340223"
    },
    {
      city: "芜湖市",
      label: "无为县",
      value: "340225"
    }
  ],
  "340300": [{
      city: "蚌埠市",
      label: "市辖区",
      value: "340301"
    },
    {
      city: "蚌埠市",
      label: "龙子湖区",
      value: "340302"
    },
    {
      city: "蚌埠市",
      label: "蚌山区",
      value: "340303"
    },
    {
      city: "蚌埠市",
      label: "禹会区",
      value: "340304"
    },
    {
      city: "蚌埠市",
      label: "淮上区",
      value: "340311"
    },
    {
      city: "蚌埠市",
      label: "怀远县",
      value: "340321"
    },
    {
      city: "蚌埠市",
      label: "五河县",
      value: "340322"
    },
    {
      city: "蚌埠市",
      label: "固镇县",
      value: "340323"
    }
  ],
  "340400": [{
      city: "淮南市",
      label: "市辖区",
      value: "340401"
    },
    {
      city: "淮南市",
      label: "大通区",
      value: "340402"
    },
    {
      city: "淮南市",
      label: "田家庵区",
      value: "340403"
    },
    {
      city: "淮南市",
      label: "谢家集区",
      value: "340404"
    },
    {
      city: "淮南市",
      label: "八公山区",
      value: "340405"
    },
    {
      city: "淮南市",
      label: "潘集区",
      value: "340406"
    },
    {
      city: "淮南市",
      label: "凤台县",
      value: "340421"
    },
    {
      city: "淮南市",
      label: "寿县",
      value: "340422"
    }
  ],
  "340500": [{
      city: "马鞍山市",
      label: "市辖区",
      value: "340501"
    },
    {
      city: "马鞍山市",
      label: "花山区",
      value: "340503"
    },
    {
      city: "马鞍山市",
      label: "雨山区",
      value: "340504"
    },
    {
      city: "马鞍山市",
      label: "博望区",
      value: "340506"
    },
    {
      city: "马鞍山市",
      label: "当涂县",
      value: "340521"
    },
    {
      city: "马鞍山市",
      label: "含山县",
      value: "340522"
    },
    {
      city: "马鞍山市",
      label: "和县",
      value: "340523"
    }
  ],
  "340600": [{
      city: "淮北市",
      label: "市辖区",
      value: "340601"
    },
    {
      city: "淮北市",
      label: "杜集区",
      value: "340602"
    },
    {
      city: "淮北市",
      label: "相山区",
      value: "340603"
    },
    {
      city: "淮北市",
      label: "烈山区",
      value: "340604"
    },
    {
      city: "淮北市",
      label: "濉溪县",
      value: "340621"
    }
  ],
  "340700": [{
      city: "铜陵市",
      label: "市辖区",
      value: "340701"
    },
    {
      city: "铜陵市",
      label: "铜官区",
      value: "340705"
    },
    {
      city: "铜陵市",
      label: "义安区",
      value: "340706"
    },
    {
      city: "铜陵市",
      label: "郊区",
      value: "340711"
    },
    {
      city: "铜陵市",
      label: "枞阳县",
      value: "340722"
    }
  ],
  "340800": [{
      city: "安庆市",
      label: "市辖区",
      value: "340801"
    },
    {
      city: "安庆市",
      label: "迎江区",
      value: "340802"
    },
    {
      city: "安庆市",
      label: "大观区",
      value: "340803"
    },
    {
      city: "安庆市",
      label: "宜秀区",
      value: "340811"
    },
    {
      city: "安庆市",
      label: "怀宁县",
      value: "340822"
    },
    {
      city: "安庆市",
      label: "潜山县",
      value: "340824"
    },
    {
      city: "安庆市",
      label: "太湖县",
      value: "340825"
    },
    {
      city: "安庆市",
      label: "宿松县",
      value: "340826"
    },
    {
      city: "安庆市",
      label: "望江县",
      value: "340827"
    },
    {
      city: "安庆市",
      label: "岳西县",
      value: "340828"
    },
    {
      city: "安庆市",
      label: "桐城市",
      value: "340881"
    }
  ],
  "341000": [{
      city: "黄山市",
      label: "市辖区",
      value: "341001"
    },
    {
      city: "黄山市",
      label: "屯溪区",
      value: "341002"
    },
    {
      city: "黄山市",
      label: "黄山区",
      value: "341003"
    },
    {
      city: "黄山市",
      label: "徽州区",
      value: "341004"
    },
    {
      city: "黄山市",
      label: "歙县",
      value: "341021"
    },
    {
      city: "黄山市",
      label: "休宁县",
      value: "341022"
    },
    {
      city: "黄山市",
      label: "黟县",
      value: "341023"
    },
    {
      city: "黄山市",
      label: "祁门县",
      value: "341024"
    }
  ],
  "341100": [{
      city: "滁州市",
      label: "市辖区",
      value: "341101"
    },
    {
      city: "滁州市",
      label: "琅琊区",
      value: "341102"
    },
    {
      city: "滁州市",
      label: "南谯区",
      value: "341103"
    },
    {
      city: "滁州市",
      label: "来安县",
      value: "341122"
    },
    {
      city: "滁州市",
      label: "全椒县",
      value: "341124"
    },
    {
      city: "滁州市",
      label: "定远县",
      value: "341125"
    },
    {
      city: "滁州市",
      label: "凤阳县",
      value: "341126"
    },
    {
      city: "滁州市",
      label: "天长市",
      value: "341181"
    },
    {
      city: "滁州市",
      label: "明光市",
      value: "341182"
    }
  ],
  "341200": [{
      city: "阜阳市",
      label: "市辖区",
      value: "341201"
    },
    {
      city: "阜阳市",
      label: "颍州区",
      value: "341202"
    },
    {
      city: "阜阳市",
      label: "颍东区",
      value: "341203"
    },
    {
      city: "阜阳市",
      label: "颍泉区",
      value: "341204"
    },
    {
      city: "阜阳市",
      label: "临泉县",
      value: "341221"
    },
    {
      city: "阜阳市",
      label: "太和县",
      value: "341222"
    },
    {
      city: "阜阳市",
      label: "阜南县",
      value: "341225"
    },
    {
      city: "阜阳市",
      label: "颍上县",
      value: "341226"
    },
    {
      city: "阜阳市",
      label: "界首市",
      value: "341282"
    }
  ],
  "341300": [{
      city: "宿州市",
      label: "市辖区",
      value: "341301"
    },
    {
      city: "宿州市",
      label: "埇桥区",
      value: "341302"
    },
    {
      city: "宿州市",
      label: "砀山县",
      value: "341321"
    },
    {
      city: "宿州市",
      label: "萧县",
      value: "341322"
    },
    {
      city: "宿州市",
      label: "灵璧县",
      value: "341323"
    },
    {
      city: "宿州市",
      label: "泗县",
      value: "341324"
    }
  ],
  "341500": [{
      city: "六安市",
      label: "市辖区",
      value: "341501"
    },
    {
      city: "六安市",
      label: "金安区",
      value: "341502"
    },
    {
      city: "六安市",
      label: "裕安区",
      value: "341503"
    },
    {
      city: "六安市",
      label: "叶集区",
      value: "341504"
    },
    {
      city: "六安市",
      label: "霍邱县",
      value: "341522"
    },
    {
      city: "六安市",
      label: "舒城县",
      value: "341523"
    },
    {
      city: "六安市",
      label: "金寨县",
      value: "341524"
    },
    {
      city: "六安市",
      label: "霍山县",
      value: "341525"
    }
  ],
  "341600": [{
      city: "亳州市",
      label: "市辖区",
      value: "341601"
    },
    {
      city: "亳州市",
      label: "谯城区",
      value: "341602"
    },
    {
      city: "亳州市",
      label: "涡阳县",
      value: "341621"
    },
    {
      city: "亳州市",
      label: "蒙城县",
      value: "341622"
    },
    {
      city: "亳州市",
      label: "利辛县",
      value: "341623"
    }
  ],
  "341700": [{
      city: "池州市",
      label: "市辖区",
      value: "341701"
    },
    {
      city: "池州市",
      label: "贵池区",
      value: "341702"
    },
    {
      city: "池州市",
      label: "东至县",
      value: "341721"
    },
    {
      city: "池州市",
      label: "石台县",
      value: "341722"
    },
    {
      city: "池州市",
      label: "青阳县",
      value: "341723"
    }
  ],
  "341800": [{
      city: "宣城市",
      label: "市辖区",
      value: "341801"
    },
    {
      city: "宣城市",
      label: "宣州区",
      value: "341802"
    },
    {
      city: "宣城市",
      label: "郎溪县",
      value: "341821"
    },
    {
      city: "宣城市",
      label: "广德县",
      value: "341822"
    },
    {
      city: "宣城市",
      label: "泾县",
      value: "341823"
    },
    {
      city: "宣城市",
      label: "绩溪县",
      value: "341824"
    },
    {
      city: "宣城市",
      label: "旌德县",
      value: "341825"
    },
    {
      city: "宣城市",
      label: "宁国市",
      value: "341881"
    }
  ],
  "350100": [{
      city: "福州市",
      label: "市辖区",
      value: "350101"
    },
    {
      city: "福州市",
      label: "鼓楼区",
      value: "350102"
    },
    {
      city: "福州市",
      label: "台江区",
      value: "350103"
    },
    {
      city: "福州市",
      label: "仓山区",
      value: "350104"
    },
    {
      city: "福州市",
      label: "马尾区",
      value: "350105"
    },
    {
      city: "福州市",
      label: "晋安区",
      value: "350111"
    },
    {
      city: "福州市",
      label: "闽侯县",
      value: "350121"
    },
    {
      city: "福州市",
      label: "连江县",
      value: "350122"
    },
    {
      city: "福州市",
      label: "罗源县",
      value: "350123"
    },
    {
      city: "福州市",
      label: "闽清县",
      value: "350124"
    },
    {
      city: "福州市",
      label: "永泰县",
      value: "350125"
    },
    {
      city: "福州市",
      label: "平潭县",
      value: "350128"
    },
    {
      city: "福州市",
      label: "福清市",
      value: "350181"
    },
    {
      city: "福州市",
      label: "长乐市",
      value: "350182"
    }
  ],
  "350200": [{
      city: "厦门市",
      label: "市辖区",
      value: "350201"
    },
    {
      city: "厦门市",
      label: "思明区",
      value: "350203"
    },
    {
      city: "厦门市",
      label: "海沧区",
      value: "350205"
    },
    {
      city: "厦门市",
      label: "湖里区",
      value: "350206"
    },
    {
      city: "厦门市",
      label: "集美区",
      value: "350211"
    },
    {
      city: "厦门市",
      label: "同安区",
      value: "350212"
    },
    {
      city: "厦门市",
      label: "翔安区",
      value: "350213"
    }
  ],
  "350300": [{
      city: "莆田市",
      label: "市辖区",
      value: "350301"
    },
    {
      city: "莆田市",
      label: "城厢区",
      value: "350302"
    },
    {
      city: "莆田市",
      label: "涵江区",
      value: "350303"
    },
    {
      city: "莆田市",
      label: "荔城区",
      value: "350304"
    },
    {
      city: "莆田市",
      label: "秀屿区",
      value: "350305"
    },
    {
      city: "莆田市",
      label: "仙游县",
      value: "350322"
    }
  ],
  "350400": [{
      city: "三明市",
      label: "市辖区",
      value: "350401"
    },
    {
      city: "三明市",
      label: "梅列区",
      value: "350402"
    },
    {
      city: "三明市",
      label: "三元区",
      value: "350403"
    },
    {
      city: "三明市",
      label: "明溪县",
      value: "350421"
    },
    {
      city: "三明市",
      label: "清流县",
      value: "350423"
    },
    {
      city: "三明市",
      label: "宁化县",
      value: "350424"
    },
    {
      city: "三明市",
      label: "大田县",
      value: "350425"
    },
    {
      city: "三明市",
      label: "尤溪县",
      value: "350426"
    },
    {
      city: "三明市",
      label: "沙县",
      value: "350427"
    },
    {
      city: "三明市",
      label: "将乐县",
      value: "350428"
    },
    {
      city: "三明市",
      label: "泰宁县",
      value: "350429"
    },
    {
      city: "三明市",
      label: "建宁县",
      value: "350430"
    },
    {
      city: "三明市",
      label: "永安市",
      value: "350481"
    }
  ],
  "350500": [{
      city: "泉州市",
      label: "市辖区",
      value: "350501"
    },
    {
      city: "泉州市",
      label: "鲤城区",
      value: "350502"
    },
    {
      city: "泉州市",
      label: "丰泽区",
      value: "350503"
    },
    {
      city: "泉州市",
      label: "洛江区",
      value: "350504"
    },
    {
      city: "泉州市",
      label: "泉港区",
      value: "350505"
    },
    {
      city: "泉州市",
      label: "惠安县",
      value: "350521"
    },
    {
      city: "泉州市",
      label: "安溪县",
      value: "350524"
    },
    {
      city: "泉州市",
      label: "永春县",
      value: "350525"
    },
    {
      city: "泉州市",
      label: "德化县",
      value: "350526"
    },
    {
      city: "泉州市",
      label: "金门县",
      value: "350527"
    },
    {
      city: "泉州市",
      label: "石狮市",
      value: "350581"
    },
    {
      city: "泉州市",
      label: "晋江市",
      value: "350582"
    },
    {
      city: "泉州市",
      label: "南安市",
      value: "350583"
    }
  ],
  "350600": [{
      city: "漳州市",
      label: "市辖区",
      value: "350601"
    },
    {
      city: "漳州市",
      label: "芗城区",
      value: "350602"
    },
    {
      city: "漳州市",
      label: "龙文区",
      value: "350603"
    },
    {
      city: "漳州市",
      label: "云霄县",
      value: "350622"
    },
    {
      city: "漳州市",
      label: "漳浦县",
      value: "350623"
    },
    {
      city: "漳州市",
      label: "诏安县",
      value: "350624"
    },
    {
      city: "漳州市",
      label: "长泰县",
      value: "350625"
    },
    {
      city: "漳州市",
      label: "东山县",
      value: "350626"
    },
    {
      city: "漳州市",
      label: "南靖县",
      value: "350627"
    },
    {
      city: "漳州市",
      label: "平和县",
      value: "350628"
    },
    {
      city: "漳州市",
      label: "华安县",
      value: "350629"
    },
    {
      city: "漳州市",
      label: "龙海市",
      value: "350681"
    }
  ],
  "350700": [{
      city: "南平市",
      label: "市辖区",
      value: "350701"
    },
    {
      city: "南平市",
      label: "延平区",
      value: "350702"
    },
    {
      city: "南平市",
      label: "建阳区",
      value: "350703"
    },
    {
      city: "南平市",
      label: "顺昌县",
      value: "350721"
    },
    {
      city: "南平市",
      label: "浦城县",
      value: "350722"
    },
    {
      city: "南平市",
      label: "光泽县",
      value: "350723"
    },
    {
      city: "南平市",
      label: "松溪县",
      value: "350724"
    },
    {
      city: "南平市",
      label: "政和县",
      value: "350725"
    },
    {
      city: "南平市",
      label: "邵武市",
      value: "350781"
    },
    {
      city: "南平市",
      label: "武夷山市",
      value: "350782"
    },
    {
      city: "南平市",
      label: "建瓯市",
      value: "350783"
    }
  ],
  "350800": [{
      city: "龙岩市",
      label: "市辖区",
      value: "350801"
    },
    {
      city: "龙岩市",
      label: "新罗区",
      value: "350802"
    },
    {
      city: "龙岩市",
      label: "永定区",
      value: "350803"
    },
    {
      city: "龙岩市",
      label: "长汀县",
      value: "350821"
    },
    {
      city: "龙岩市",
      label: "上杭县",
      value: "350823"
    },
    {
      city: "龙岩市",
      label: "武平县",
      value: "350824"
    },
    {
      city: "龙岩市",
      label: "连城县",
      value: "350825"
    },
    {
      city: "龙岩市",
      label: "漳平市",
      value: "350881"
    }
  ],
  "350900": [{
      city: "宁德市",
      label: "市辖区",
      value: "350901"
    },
    {
      city: "宁德市",
      label: "蕉城区",
      value: "350902"
    },
    {
      city: "宁德市",
      label: "霞浦县",
      value: "350921"
    },
    {
      city: "宁德市",
      label: "古田县",
      value: "350922"
    },
    {
      city: "宁德市",
      label: "屏南县",
      value: "350923"
    },
    {
      city: "宁德市",
      label: "寿宁县",
      value: "350924"
    },
    {
      city: "宁德市",
      label: "周宁县",
      value: "350925"
    },
    {
      city: "宁德市",
      label: "柘荣县",
      value: "350926"
    },
    {
      city: "宁德市",
      label: "福安市",
      value: "350981"
    },
    {
      city: "宁德市",
      label: "福鼎市",
      value: "350982"
    }
  ],
  "360100": [{
      city: "南昌市",
      label: "市辖区",
      value: "360101"
    },
    {
      city: "南昌市",
      label: "东湖区",
      value: "360102"
    },
    {
      city: "南昌市",
      label: "西湖区",
      value: "360103"
    },
    {
      city: "南昌市",
      label: "青云谱区",
      value: "360104"
    },
    {
      city: "南昌市",
      label: "湾里区",
      value: "360105"
    },
    {
      city: "南昌市",
      label: "青山湖区",
      value: "360111"
    },
    {
      city: "南昌市",
      label: "新建区",
      value: "360112"
    },
    {
      city: "南昌市",
      label: "南昌县",
      value: "360121"
    },
    {
      city: "南昌市",
      label: "安义县",
      value: "360123"
    },
    {
      city: "南昌市",
      label: "进贤县",
      value: "360124"
    }
  ],
  "360200": [{
      city: "景德镇市",
      label: "市辖区",
      value: "360201"
    },
    {
      city: "景德镇市",
      label: "昌江区",
      value: "360202"
    },
    {
      city: "景德镇市",
      label: "珠山区",
      value: "360203"
    },
    {
      city: "景德镇市",
      label: "浮梁县",
      value: "360222"
    },
    {
      city: "景德镇市",
      label: "乐平市",
      value: "360281"
    }
  ],
  "360300": [{
      city: "萍乡市",
      label: "市辖区",
      value: "360301"
    },
    {
      city: "萍乡市",
      label: "安源区",
      value: "360302"
    },
    {
      city: "萍乡市",
      label: "湘东区",
      value: "360313"
    },
    {
      city: "萍乡市",
      label: "莲花县",
      value: "360321"
    },
    {
      city: "萍乡市",
      label: "上栗县",
      value: "360322"
    },
    {
      city: "萍乡市",
      label: "芦溪县",
      value: "360323"
    }
  ],
  "360400": [{
      city: "九江市",
      label: "市辖区",
      value: "360401"
    },
    {
      city: "九江市",
      label: "濂溪区",
      value: "360402"
    },
    {
      city: "九江市",
      label: "浔阳区",
      value: "360403"
    },
    {
      city: "九江市",
      label: "九江县",
      value: "360421"
    },
    {
      city: "九江市",
      label: "武宁县",
      value: "360423"
    },
    {
      city: "九江市",
      label: "修水县",
      value: "360424"
    },
    {
      city: "九江市",
      label: "永修县",
      value: "360425"
    },
    {
      city: "九江市",
      label: "德安县",
      value: "360426"
    },
    {
      city: "九江市",
      label: "都昌县",
      value: "360428"
    },
    {
      city: "九江市",
      label: "湖口县",
      value: "360429"
    },
    {
      city: "九江市",
      label: "彭泽县",
      value: "360430"
    },
    {
      city: "九江市",
      label: "瑞昌市",
      value: "360481"
    },
    {
      city: "九江市",
      label: "共青城市",
      value: "360482"
    },
    {
      city: "九江市",
      label: "庐山市",
      value: "360483"
    }
  ],
  "360500": [{
      city: "新余市",
      label: "市辖区",
      value: "360501"
    },
    {
      city: "新余市",
      label: "渝水区",
      value: "360502"
    },
    {
      city: "新余市",
      label: "分宜县",
      value: "360521"
    }
  ],
  "360600": [{
      city: "鹰潭市",
      label: "市辖区",
      value: "360601"
    },
    {
      city: "鹰潭市",
      label: "月湖区",
      value: "360602"
    },
    {
      city: "鹰潭市",
      label: "余江县",
      value: "360622"
    },
    {
      city: "鹰潭市",
      label: "贵溪市",
      value: "360681"
    }
  ],
  "360700": [{
      city: "赣州市",
      label: "市辖区",
      value: "360701"
    },
    {
      city: "赣州市",
      label: "章贡区",
      value: "360702"
    },
    {
      city: "赣州市",
      label: "南康区",
      value: "360703"
    },
    {
      city: "赣州市",
      label: "赣县",
      value: "360721"
    },
    {
      city: "赣州市",
      label: "信丰县",
      value: "360722"
    },
    {
      city: "赣州市",
      label: "大余县",
      value: "360723"
    },
    {
      city: "赣州市",
      label: "上犹县",
      value: "360724"
    },
    {
      city: "赣州市",
      label: "崇义县",
      value: "360725"
    },
    {
      city: "赣州市",
      label: "安远县",
      value: "360726"
    },
    {
      city: "赣州市",
      label: "龙南县",
      value: "360727"
    },
    {
      city: "赣州市",
      label: "定南县",
      value: "360728"
    },
    {
      city: "赣州市",
      label: "全南县",
      value: "360729"
    },
    {
      city: "赣州市",
      label: "宁都县",
      value: "360730"
    },
    {
      city: "赣州市",
      label: "于都县",
      value: "360731"
    },
    {
      city: "赣州市",
      label: "兴国县",
      value: "360732"
    },
    {
      city: "赣州市",
      label: "会昌县",
      value: "360733"
    },
    {
      city: "赣州市",
      label: "寻乌县",
      value: "360734"
    },
    {
      city: "赣州市",
      label: "石城县",
      value: "360735"
    },
    {
      city: "赣州市",
      label: "瑞金市",
      value: "360781"
    }
  ],
  "360800": [{
      city: "吉安市",
      label: "市辖区",
      value: "360801"
    },
    {
      city: "吉安市",
      label: "吉州区",
      value: "360802"
    },
    {
      city: "吉安市",
      label: "青原区",
      value: "360803"
    },
    {
      city: "吉安市",
      label: "吉安县",
      value: "360821"
    },
    {
      city: "吉安市",
      label: "吉水县",
      value: "360822"
    },
    {
      city: "吉安市",
      label: "峡江县",
      value: "360823"
    },
    {
      city: "吉安市",
      label: "新干县",
      value: "360824"
    },
    {
      city: "吉安市",
      label: "永丰县",
      value: "360825"
    },
    {
      city: "吉安市",
      label: "泰和县",
      value: "360826"
    },
    {
      city: "吉安市",
      label: "遂川县",
      value: "360827"
    },
    {
      city: "吉安市",
      label: "万安县",
      value: "360828"
    },
    {
      city: "吉安市",
      label: "安福县",
      value: "360829"
    },
    {
      city: "吉安市",
      label: "永新县",
      value: "360830"
    },
    {
      city: "吉安市",
      label: "井冈山市",
      value: "360881"
    }
  ],
  "360900": [{
      city: "宜春市",
      label: "市辖区",
      value: "360901"
    },
    {
      city: "宜春市",
      label: "袁州区",
      value: "360902"
    },
    {
      city: "宜春市",
      label: "奉新县",
      value: "360921"
    },
    {
      city: "宜春市",
      label: "万载县",
      value: "360922"
    },
    {
      city: "宜春市",
      label: "上高县",
      value: "360923"
    },
    {
      city: "宜春市",
      label: "宜丰县",
      value: "360924"
    },
    {
      city: "宜春市",
      label: "靖安县",
      value: "360925"
    },
    {
      city: "宜春市",
      label: "铜鼓县",
      value: "360926"
    },
    {
      city: "宜春市",
      label: "丰城市",
      value: "360981"
    },
    {
      city: "宜春市",
      label: "樟树市",
      value: "360982"
    },
    {
      city: "宜春市",
      label: "高安市",
      value: "360983"
    }
  ],
  "361000": [{
      city: "抚州市",
      label: "市辖区",
      value: "361001"
    },
    {
      city: "抚州市",
      label: "临川区",
      value: "361002"
    },
    {
      city: "抚州市",
      label: "南城县",
      value: "361021"
    },
    {
      city: "抚州市",
      label: "黎川县",
      value: "361022"
    },
    {
      city: "抚州市",
      label: "南丰县",
      value: "361023"
    },
    {
      city: "抚州市",
      label: "崇仁县",
      value: "361024"
    },
    {
      city: "抚州市",
      label: "乐安县",
      value: "361025"
    },
    {
      city: "抚州市",
      label: "宜黄县",
      value: "361026"
    },
    {
      city: "抚州市",
      label: "金溪县",
      value: "361027"
    },
    {
      city: "抚州市",
      label: "资溪县",
      value: "361028"
    },
    {
      city: "抚州市",
      label: "东乡县",
      value: "361029"
    },
    {
      city: "抚州市",
      label: "广昌县",
      value: "361030"
    }
  ],
  "361100": [{
      city: "上饶市",
      label: "市辖区",
      value: "361101"
    },
    {
      city: "上饶市",
      label: "信州区",
      value: "361102"
    },
    {
      city: "上饶市",
      label: "广丰区",
      value: "361103"
    },
    {
      city: "上饶市",
      label: "上饶县",
      value: "361121"
    },
    {
      city: "上饶市",
      label: "玉山县",
      value: "361123"
    },
    {
      city: "上饶市",
      label: "铅山县",
      value: "361124"
    },
    {
      city: "上饶市",
      label: "横峰县",
      value: "361125"
    },
    {
      city: "上饶市",
      label: "弋阳县",
      value: "361126"
    },
    {
      city: "上饶市",
      label: "余干县",
      value: "361127"
    },
    {
      city: "上饶市",
      label: "鄱阳县",
      value: "361128"
    },
    {
      city: "上饶市",
      label: "万年县",
      value: "361129"
    },
    {
      city: "上饶市",
      label: "婺源县",
      value: "361130"
    },
    {
      city: "上饶市",
      label: "德兴市",
      value: "361181"
    }
  ],
  "370100": [{
      city: "济南市",
      label: "市辖区",
      value: "370101"
    },
    {
      city: "济南市",
      label: "历下区",
      value: "370102"
    },
    {
      city: "济南市",
      label: "市中区",
      value: "370103"
    },
    {
      city: "济南市",
      label: "槐荫区",
      value: "370104"
    },
    {
      city: "济南市",
      label: "天桥区",
      value: "370105"
    },
    {
      city: "济南市",
      label: "历城区",
      value: "370112"
    },
    {
      city: "济南市",
      label: "长清区",
      value: "370113"
    },
    {
      city: "济南市",
      label: "平阴县",
      value: "370124"
    },
    {
      city: "济南市",
      label: "济阳县",
      value: "370125"
    },
    {
      city: "济南市",
      label: "商河县",
      value: "370126"
    },
    {
      city: "济南市",
      label: "章丘市",
      value: "370181"
    }
  ],
  "370200": [{
      city: "青岛市",
      label: "市辖区",
      value: "370201"
    },
    {
      city: "青岛市",
      label: "市南区",
      value: "370202"
    },
    {
      city: "青岛市",
      label: "市北区",
      value: "370203"
    },
    {
      city: "青岛市",
      label: "黄岛区",
      value: "370211"
    },
    {
      city: "青岛市",
      label: "崂山区",
      value: "370212"
    },
    {
      city: "青岛市",
      label: "李沧区",
      value: "370213"
    },
    {
      city: "青岛市",
      label: "城阳区",
      value: "370214"
    },
    {
      city: "青岛市",
      label: "胶州市",
      value: "370281"
    },
    {
      city: "青岛市",
      label: "即墨市",
      value: "370282"
    },
    {
      city: "青岛市",
      label: "平度市",
      value: "370283"
    },
    {
      city: "青岛市",
      label: "莱西市",
      value: "370285"
    }
  ],
  "370300": [{
      city: "淄博市",
      label: "市辖区",
      value: "370301"
    },
    {
      city: "淄博市",
      label: "淄川区",
      value: "370302"
    },
    {
      city: "淄博市",
      label: "张店区",
      value: "370303"
    },
    {
      city: "淄博市",
      label: "博山区",
      value: "370304"
    },
    {
      city: "淄博市",
      label: "临淄区",
      value: "370305"
    },
    {
      city: "淄博市",
      label: "周村区",
      value: "370306"
    },
    {
      city: "淄博市",
      label: "桓台县",
      value: "370321"
    },
    {
      city: "淄博市",
      label: "高青县",
      value: "370322"
    },
    {
      city: "淄博市",
      label: "沂源县",
      value: "370323"
    }
  ],
  "370400": [{
      city: "枣庄市",
      label: "市辖区",
      value: "370401"
    },
    {
      city: "枣庄市",
      label: "市中区",
      value: "370402"
    },
    {
      city: "枣庄市",
      label: "薛城区",
      value: "370403"
    },
    {
      city: "枣庄市",
      label: "峄城区",
      value: "370404"
    },
    {
      city: "枣庄市",
      label: "台儿庄区",
      value: "370405"
    },
    {
      city: "枣庄市",
      label: "山亭区",
      value: "370406"
    },
    {
      city: "枣庄市",
      label: "滕州市",
      value: "370481"
    }
  ],
  "370500": [{
      city: "东营市",
      label: "市辖区",
      value: "370501"
    },
    {
      city: "东营市",
      label: "东营区",
      value: "370502"
    },
    {
      city: "东营市",
      label: "河口区",
      value: "370503"
    },
    {
      city: "东营市",
      label: "垦利区",
      value: "370505"
    },
    {
      city: "东营市",
      label: "利津县",
      value: "370522"
    },
    {
      city: "东营市",
      label: "广饶县",
      value: "370523"
    }
  ],
  "370600": [{
      city: "烟台市",
      label: "市辖区",
      value: "370601"
    },
    {
      city: "烟台市",
      label: "芝罘区",
      value: "370602"
    },
    {
      city: "烟台市",
      label: "福山区",
      value: "370611"
    },
    {
      city: "烟台市",
      label: "牟平区",
      value: "370612"
    },
    {
      city: "烟台市",
      label: "莱山区",
      value: "370613"
    },
    {
      city: "烟台市",
      label: "长岛县",
      value: "370634"
    },
    {
      city: "烟台市",
      label: "龙口市",
      value: "370681"
    },
    {
      city: "烟台市",
      label: "莱阳市",
      value: "370682"
    },
    {
      city: "烟台市",
      label: "莱州市",
      value: "370683"
    },
    {
      city: "烟台市",
      label: "蓬莱市",
      value: "370684"
    },
    {
      city: "烟台市",
      label: "招远市",
      value: "370685"
    },
    {
      city: "烟台市",
      label: "栖霞市",
      value: "370686"
    },
    {
      city: "烟台市",
      label: "海阳市",
      value: "370687"
    }
  ],
  "370700": [{
      city: "潍坊市",
      label: "市辖区",
      value: "370701"
    },
    {
      city: "潍坊市",
      label: "潍城区",
      value: "370702"
    },
    {
      city: "潍坊市",
      label: "寒亭区",
      value: "370703"
    },
    {
      city: "潍坊市",
      label: "坊子区",
      value: "370704"
    },
    {
      city: "潍坊市",
      label: "奎文区",
      value: "370705"
    },
    {
      city: "潍坊市",
      label: "临朐县",
      value: "370724"
    },
    {
      city: "潍坊市",
      label: "昌乐县",
      value: "370725"
    },
    {
      city: "潍坊市",
      label: "青州市",
      value: "370781"
    },
    {
      city: "潍坊市",
      label: "诸城市",
      value: "370782"
    },
    {
      city: "潍坊市",
      label: "寿光市",
      value: "370783"
    },
    {
      city: "潍坊市",
      label: "安丘市",
      value: "370784"
    },
    {
      city: "潍坊市",
      label: "高密市",
      value: "370785"
    },
    {
      city: "潍坊市",
      label: "昌邑市",
      value: "370786"
    }
  ],
  "370800": [{
      city: "济宁市",
      label: "市辖区",
      value: "370801"
    },
    {
      city: "济宁市",
      label: "任城区",
      value: "370811"
    },
    {
      city: "济宁市",
      label: "兖州区",
      value: "370812"
    },
    {
      city: "济宁市",
      label: "微山县",
      value: "370826"
    },
    {
      city: "济宁市",
      label: "鱼台县",
      value: "370827"
    },
    {
      city: "济宁市",
      label: "金乡县",
      value: "370828"
    },
    {
      city: "济宁市",
      label: "嘉祥县",
      value: "370829"
    },
    {
      city: "济宁市",
      label: "汶上县",
      value: "370830"
    },
    {
      city: "济宁市",
      label: "泗水县",
      value: "370831"
    },
    {
      city: "济宁市",
      label: "梁山县",
      value: "370832"
    },
    {
      city: "济宁市",
      label: "曲阜市",
      value: "370881"
    },
    {
      city: "济宁市",
      label: "邹城市",
      value: "370883"
    }
  ],
  "370900": [{
      city: "泰安市",
      label: "市辖区",
      value: "370901"
    },
    {
      city: "泰安市",
      label: "泰山区",
      value: "370902"
    },
    {
      city: "泰安市",
      label: "岱岳区",
      value: "370911"
    },
    {
      city: "泰安市",
      label: "宁阳县",
      value: "370921"
    },
    {
      city: "泰安市",
      label: "东平县",
      value: "370923"
    },
    {
      city: "泰安市",
      label: "新泰市",
      value: "370982"
    },
    {
      city: "泰安市",
      label: "肥城市",
      value: "370983"
    }
  ],
  "371000": [{
      city: "威海市",
      label: "市辖区",
      value: "371001"
    },
    {
      city: "威海市",
      label: "环翠区",
      value: "371002"
    },
    {
      city: "威海市",
      label: "文登区",
      value: "371003"
    },
    {
      city: "威海市",
      label: "荣成市",
      value: "371082"
    },
    {
      city: "威海市",
      label: "乳山市",
      value: "371083"
    }
  ],
  "371100": [{
      city: "日照市",
      label: "市辖区",
      value: "371101"
    },
    {
      city: "日照市",
      label: "东港区",
      value: "371102"
    },
    {
      city: "日照市",
      label: "岚山区",
      value: "371103"
    },
    {
      city: "日照市",
      label: "五莲县",
      value: "371121"
    },
    {
      city: "日照市",
      label: "莒县",
      value: "371122"
    }
  ],
  "371200": [{
      city: "莱芜市",
      label: "市辖区",
      value: "371201"
    },
    {
      city: "莱芜市",
      label: "莱城区",
      value: "371202"
    },
    {
      city: "莱芜市",
      label: "钢城区",
      value: "371203"
    }
  ],
  "371300": [{
      city: "临沂市",
      label: "市辖区",
      value: "371301"
    },
    {
      city: "临沂市",
      label: "兰山区",
      value: "371302"
    },
    {
      city: "临沂市",
      label: "罗庄区",
      value: "371311"
    },
    {
      city: "临沂市",
      label: "河东区",
      value: "371312"
    },
    {
      city: "临沂市",
      label: "沂南县",
      value: "371321"
    },
    {
      city: "临沂市",
      label: "郯城县",
      value: "371322"
    },
    {
      city: "临沂市",
      label: "沂水县",
      value: "371323"
    },
    {
      city: "临沂市",
      label: "兰陵县",
      value: "371324"
    },
    {
      city: "临沂市",
      label: "费县",
      value: "371325"
    },
    {
      city: "临沂市",
      label: "平邑县",
      value: "371326"
    },
    {
      city: "临沂市",
      label: "莒南县",
      value: "371327"
    },
    {
      city: "临沂市",
      label: "蒙阴县",
      value: "371328"
    },
    {
      city: "临沂市",
      label: "临沭县",
      value: "371329"
    }
  ],
  "371400": [{
      city: "德州市",
      label: "市辖区",
      value: "371401"
    },
    {
      city: "德州市",
      label: "德城区",
      value: "371402"
    },
    {
      city: "德州市",
      label: "陵城区",
      value: "371403"
    },
    {
      city: "德州市",
      label: "宁津县",
      value: "371422"
    },
    {
      city: "德州市",
      label: "庆云县",
      value: "371423"
    },
    {
      city: "德州市",
      label: "临邑县",
      value: "371424"
    },
    {
      city: "德州市",
      label: "齐河县",
      value: "371425"
    },
    {
      city: "德州市",
      label: "平原县",
      value: "371426"
    },
    {
      city: "德州市",
      label: "夏津县",
      value: "371427"
    },
    {
      city: "德州市",
      label: "武城县",
      value: "371428"
    },
    {
      city: "德州市",
      label: "乐陵市",
      value: "371481"
    },
    {
      city: "德州市",
      label: "禹城市",
      value: "371482"
    }
  ],
  "371500": [{
      city: "聊城市",
      label: "市辖区",
      value: "371501"
    },
    {
      city: "聊城市",
      label: "东昌府区",
      value: "371502"
    },
    {
      city: "聊城市",
      label: "阳谷县",
      value: "371521"
    },
    {
      city: "聊城市",
      label: "莘县",
      value: "371522"
    },
    {
      city: "聊城市",
      label: "茌平县",
      value: "371523"
    },
    {
      city: "聊城市",
      label: "东阿县",
      value: "371524"
    },
    {
      city: "聊城市",
      label: "冠县",
      value: "371525"
    },
    {
      city: "聊城市",
      label: "高唐县",
      value: "371526"
    },
    {
      city: "聊城市",
      label: "临清市",
      value: "371581"
    }
  ],
  "371600": [{
      city: "滨州市",
      label: "市辖区",
      value: "371601"
    },
    {
      city: "滨州市",
      label: "滨城区",
      value: "371602"
    },
    {
      city: "滨州市",
      label: "沾化区",
      value: "371603"
    },
    {
      city: "滨州市",
      label: "惠民县",
      value: "371621"
    },
    {
      city: "滨州市",
      label: "阳信县",
      value: "371622"
    },
    {
      city: "滨州市",
      label: "无棣县",
      value: "371623"
    },
    {
      city: "滨州市",
      label: "博兴县",
      value: "371625"
    },
    {
      city: "滨州市",
      label: "邹平县",
      value: "371626"
    }
  ],
  "371700": [{
      city: "菏泽市",
      label: "市辖区",
      value: "371701"
    },
    {
      city: "菏泽市",
      label: "牡丹区",
      value: "371702"
    },
    {
      city: "菏泽市",
      label: "定陶区",
      value: "371703"
    },
    {
      city: "菏泽市",
      label: "曹县",
      value: "371721"
    },
    {
      city: "菏泽市",
      label: "单县",
      value: "371722"
    },
    {
      city: "菏泽市",
      label: "成武县",
      value: "371723"
    },
    {
      city: "菏泽市",
      label: "巨野县",
      value: "371724"
    },
    {
      city: "菏泽市",
      label: "郓城县",
      value: "371725"
    },
    {
      city: "菏泽市",
      label: "鄄城县",
      value: "371726"
    },
    {
      city: "菏泽市",
      label: "东明县",
      value: "371728"
    }
  ],
  "410100": [{
      city: "郑州市",
      label: "市辖区",
      value: "410101"
    },
    {
      city: "郑州市",
      label: "中原区",
      value: "410102"
    },
    {
      city: "郑州市",
      label: "二七区",
      value: "410103"
    },
    {
      city: "郑州市",
      label: "管城回族区",
      value: "410104"
    },
    {
      city: "郑州市",
      label: "金水区",
      value: "410105"
    },
    {
      city: "郑州市",
      label: "上街区",
      value: "410106"
    },
    {
      city: "郑州市",
      label: "惠济区",
      value: "410108"
    },
    {
      city: "郑州市",
      label: "中牟县",
      value: "410122"
    },
    {
      city: "郑州市",
      label: "巩义市",
      value: "410181"
    },
    {
      city: "郑州市",
      label: "荥阳市",
      value: "410182"
    },
    {
      city: "郑州市",
      label: "新密市",
      value: "410183"
    },
    {
      city: "郑州市",
      label: "新郑市",
      value: "410184"
    },
    {
      city: "郑州市",
      label: "登封市",
      value: "410185"
    }
  ],
  "410200": [{
      city: "开封市",
      label: "市辖区",
      value: "410201"
    },
    {
      city: "开封市",
      label: "龙亭区",
      value: "410202"
    },
    {
      city: "开封市",
      label: "顺河回族区",
      value: "410203"
    },
    {
      city: "开封市",
      label: "鼓楼区",
      value: "410204"
    },
    {
      city: "开封市",
      label: "禹王台区",
      value: "410205"
    },
    {
      city: "开封市",
      label: "金明区",
      value: "410211"
    },
    {
      city: "开封市",
      label: "祥符区",
      value: "410212"
    },
    {
      city: "开封市",
      label: "杞县",
      value: "410221"
    },
    {
      city: "开封市",
      label: "通许县",
      value: "410222"
    },
    {
      city: "开封市",
      label: "尉氏县",
      value: "410223"
    },
    {
      city: "开封市",
      label: "兰考县",
      value: "410225"
    }
  ],
  "410300": [{
      city: "洛阳市",
      label: "市辖区",
      value: "410301"
    },
    {
      city: "洛阳市",
      label: "老城区",
      value: "410302"
    },
    {
      city: "洛阳市",
      label: "西工区",
      value: "410303"
    },
    {
      city: "洛阳市",
      label: "瀍河回族区",
      value: "410304"
    },
    {
      city: "洛阳市",
      label: "涧西区",
      value: "410305"
    },
    {
      city: "洛阳市",
      label: "吉利区",
      value: "410306"
    },
    {
      city: "洛阳市",
      label: "洛龙区",
      value: "410311"
    },
    {
      city: "洛阳市",
      label: "孟津县",
      value: "410322"
    },
    {
      city: "洛阳市",
      label: "新安县",
      value: "410323"
    },
    {
      city: "洛阳市",
      label: "栾川县",
      value: "410324"
    },
    {
      city: "洛阳市",
      label: "嵩县",
      value: "410325"
    },
    {
      city: "洛阳市",
      label: "汝阳县",
      value: "410326"
    },
    {
      city: "洛阳市",
      label: "宜阳县",
      value: "410327"
    },
    {
      city: "洛阳市",
      label: "洛宁县",
      value: "410328"
    },
    {
      city: "洛阳市",
      label: "伊川县",
      value: "410329"
    },
    {
      city: "洛阳市",
      label: "偃师市",
      value: "410381"
    }
  ],
  "410400": [{
      city: "平顶山市",
      label: "市辖区",
      value: "410401"
    },
    {
      city: "平顶山市",
      label: "新华区",
      value: "410402"
    },
    {
      city: "平顶山市",
      label: "卫东区",
      value: "410403"
    },
    {
      city: "平顶山市",
      label: "石龙区",
      value: "410404"
    },
    {
      city: "平顶山市",
      label: "湛河区",
      value: "410411"
    },
    {
      city: "平顶山市",
      label: "宝丰县",
      value: "410421"
    },
    {
      city: "平顶山市",
      label: "叶县",
      value: "410422"
    },
    {
      city: "平顶山市",
      label: "鲁山县",
      value: "410423"
    },
    {
      city: "平顶山市",
      label: "郏县",
      value: "410425"
    },
    {
      city: "平顶山市",
      label: "舞钢市",
      value: "410481"
    },
    {
      city: "平顶山市",
      label: "汝州市",
      value: "410482"
    }
  ],
  "410500": [{
      city: "安阳市",
      label: "市辖区",
      value: "410501"
    },
    {
      city: "安阳市",
      label: "文峰区",
      value: "410502"
    },
    {
      city: "安阳市",
      label: "北关区",
      value: "410503"
    },
    {
      city: "安阳市",
      label: "殷都区",
      value: "410505"
    },
    {
      city: "安阳市",
      label: "龙安区",
      value: "410506"
    },
    {
      city: "安阳市",
      label: "安阳县",
      value: "410522"
    },
    {
      city: "安阳市",
      label: "汤阴县",
      value: "410523"
    },
    {
      city: "安阳市",
      label: "滑县",
      value: "410526"
    },
    {
      city: "安阳市",
      label: "内黄县",
      value: "410527"
    },
    {
      city: "安阳市",
      label: "林州市",
      value: "410581"
    }
  ],
  "410600": [{
      city: "鹤壁市",
      label: "市辖区",
      value: "410601"
    },
    {
      city: "鹤壁市",
      label: "鹤山区",
      value: "410602"
    },
    {
      city: "鹤壁市",
      label: "山城区",
      value: "410603"
    },
    {
      city: "鹤壁市",
      label: "淇滨区",
      value: "410611"
    },
    {
      city: "鹤壁市",
      label: "浚县",
      value: "410621"
    },
    {
      city: "鹤壁市",
      label: "淇县",
      value: "410622"
    }
  ],
  "410700": [{
      city: "新乡市",
      label: "市辖区",
      value: "410701"
    },
    {
      city: "新乡市",
      label: "红旗区",
      value: "410702"
    },
    {
      city: "新乡市",
      label: "卫滨区",
      value: "410703"
    },
    {
      city: "新乡市",
      label: "凤泉区",
      value: "410704"
    },
    {
      city: "新乡市",
      label: "牧野区",
      value: "410711"
    },
    {
      city: "新乡市",
      label: "新乡县",
      value: "410721"
    },
    {
      city: "新乡市",
      label: "获嘉县",
      value: "410724"
    },
    {
      city: "新乡市",
      label: "原阳县",
      value: "410725"
    },
    {
      city: "新乡市",
      label: "延津县",
      value: "410726"
    },
    {
      city: "新乡市",
      label: "封丘县",
      value: "410727"
    },
    {
      city: "新乡市",
      label: "长垣县",
      value: "410728"
    },
    {
      city: "新乡市",
      label: "卫辉市",
      value: "410781"
    },
    {
      city: "新乡市",
      label: "辉县市",
      value: "410782"
    }
  ],
  "410800": [{
      city: "焦作市",
      label: "市辖区",
      value: "410801"
    },
    {
      city: "焦作市",
      label: "解放区",
      value: "410802"
    },
    {
      city: "焦作市",
      label: "中站区",
      value: "410803"
    },
    {
      city: "焦作市",
      label: "马村区",
      value: "410804"
    },
    {
      city: "焦作市",
      label: "山阳区",
      value: "410811"
    },
    {
      city: "焦作市",
      label: "修武县",
      value: "410821"
    },
    {
      city: "焦作市",
      label: "博爱县",
      value: "410822"
    },
    {
      city: "焦作市",
      label: "武陟县",
      value: "410823"
    },
    {
      city: "焦作市",
      label: "温县",
      value: "410825"
    },
    {
      city: "焦作市",
      label: "沁阳市",
      value: "410882"
    },
    {
      city: "焦作市",
      label: "孟州市",
      value: "410883"
    }
  ],
  "410900": [{
      city: "濮阳市",
      label: "市辖区",
      value: "410901"
    },
    {
      city: "濮阳市",
      label: "华龙区",
      value: "410902"
    },
    {
      city: "濮阳市",
      label: "清丰县",
      value: "410922"
    },
    {
      city: "濮阳市",
      label: "南乐县",
      value: "410923"
    },
    {
      city: "濮阳市",
      label: "范县",
      value: "410926"
    },
    {
      city: "濮阳市",
      label: "台前县",
      value: "410927"
    },
    {
      city: "濮阳市",
      label: "濮阳县",
      value: "410928"
    }
  ],
  "411000": [{
      city: "许昌市",
      label: "市辖区",
      value: "411001"
    },
    {
      city: "许昌市",
      label: "魏都区",
      value: "411002"
    },
    {
      city: "许昌市",
      label: "许昌县",
      value: "411023"
    },
    {
      city: "许昌市",
      label: "鄢陵县",
      value: "411024"
    },
    {
      city: "许昌市",
      label: "襄城县",
      value: "411025"
    },
    {
      city: "许昌市",
      label: "禹州市",
      value: "411081"
    },
    {
      city: "许昌市",
      label: "长葛市",
      value: "411082"
    }
  ],
  "411100": [{
      city: "漯河市",
      label: "市辖区",
      value: "411101"
    },
    {
      city: "漯河市",
      label: "源汇区",
      value: "411102"
    },
    {
      city: "漯河市",
      label: "郾城区",
      value: "411103"
    },
    {
      city: "漯河市",
      label: "召陵区",
      value: "411104"
    },
    {
      city: "漯河市",
      label: "舞阳县",
      value: "411121"
    },
    {
      city: "漯河市",
      label: "临颍县",
      value: "411122"
    }
  ],
  "411200": [{
      city: "三门峡市",
      label: "市辖区",
      value: "411201"
    },
    {
      city: "三门峡市",
      label: "湖滨区",
      value: "411202"
    },
    {
      city: "三门峡市",
      label: "陕州区",
      value: "411203"
    },
    {
      city: "三门峡市",
      label: "渑池县",
      value: "411221"
    },
    {
      city: "三门峡市",
      label: "卢氏县",
      value: "411224"
    },
    {
      city: "三门峡市",
      label: "义马市",
      value: "411281"
    },
    {
      city: "三门峡市",
      label: "灵宝市",
      value: "411282"
    }
  ],
  "411300": [{
      city: "南阳市",
      label: "市辖区",
      value: "411301"
    },
    {
      city: "南阳市",
      label: "宛城区",
      value: "411302"
    },
    {
      city: "南阳市",
      label: "卧龙区",
      value: "411303"
    },
    {
      city: "南阳市",
      label: "南召县",
      value: "411321"
    },
    {
      city: "南阳市",
      label: "方城县",
      value: "411322"
    },
    {
      city: "南阳市",
      label: "西峡县",
      value: "411323"
    },
    {
      city: "南阳市",
      label: "镇平县",
      value: "411324"
    },
    {
      city: "南阳市",
      label: "内乡县",
      value: "411325"
    },
    {
      city: "南阳市",
      label: "淅川县",
      value: "411326"
    },
    {
      city: "南阳市",
      label: "社旗县",
      value: "411327"
    },
    {
      city: "南阳市",
      label: "唐河县",
      value: "411328"
    },
    {
      city: "南阳市",
      label: "新野县",
      value: "411329"
    },
    {
      city: "南阳市",
      label: "桐柏县",
      value: "411330"
    },
    {
      city: "南阳市",
      label: "邓州市",
      value: "411381"
    }
  ],
  "411400": [{
      city: "商丘市",
      label: "市辖区",
      value: "411401"
    },
    {
      city: "商丘市",
      label: "梁园区",
      value: "411402"
    },
    {
      city: "商丘市",
      label: "睢阳区",
      value: "411403"
    },
    {
      city: "商丘市",
      label: "民权县",
      value: "411421"
    },
    {
      city: "商丘市",
      label: "睢县",
      value: "411422"
    },
    {
      city: "商丘市",
      label: "宁陵县",
      value: "411423"
    },
    {
      city: "商丘市",
      label: "柘城县",
      value: "411424"
    },
    {
      city: "商丘市",
      label: "虞城县",
      value: "411425"
    },
    {
      city: "商丘市",
      label: "夏邑县",
      value: "411426"
    },
    {
      city: "商丘市",
      label: "永城市",
      value: "411481"
    }
  ],
  "411500": [{
      city: "信阳市",
      label: "市辖区",
      value: "411501"
    },
    {
      city: "信阳市",
      label: "浉河区",
      value: "411502"
    },
    {
      city: "信阳市",
      label: "平桥区",
      value: "411503"
    },
    {
      city: "信阳市",
      label: "罗山县",
      value: "411521"
    },
    {
      city: "信阳市",
      label: "光山县",
      value: "411522"
    },
    {
      city: "信阳市",
      label: "新县",
      value: "411523"
    },
    {
      city: "信阳市",
      label: "商城县",
      value: "411524"
    },
    {
      city: "信阳市",
      label: "固始县",
      value: "411525"
    },
    {
      city: "信阳市",
      label: "潢川县",
      value: "411526"
    },
    {
      city: "信阳市",
      label: "淮滨县",
      value: "411527"
    },
    {
      city: "信阳市",
      label: "息县",
      value: "411528"
    }
  ],
  "411600": [{
      city: "周口市",
      label: "市辖区",
      value: "411601"
    },
    {
      city: "周口市",
      label: "川汇区",
      value: "411602"
    },
    {
      city: "周口市",
      label: "扶沟县",
      value: "411621"
    },
    {
      city: "周口市",
      label: "西华县",
      value: "411622"
    },
    {
      city: "周口市",
      label: "商水县",
      value: "411623"
    },
    {
      city: "周口市",
      label: "沈丘县",
      value: "411624"
    },
    {
      city: "周口市",
      label: "郸城县",
      value: "411625"
    },
    {
      city: "周口市",
      label: "淮阳县",
      value: "411626"
    },
    {
      city: "周口市",
      label: "太康县",
      value: "411627"
    },
    {
      city: "周口市",
      label: "鹿邑县",
      value: "411628"
    },
    {
      city: "周口市",
      label: "项城市",
      value: "411681"
    }
  ],
  "411700": [{
      city: "驻马店市",
      label: "市辖区",
      value: "411701"
    },
    {
      city: "驻马店市",
      label: "驿城区",
      value: "411702"
    },
    {
      city: "驻马店市",
      label: "西平县",
      value: "411721"
    },
    {
      city: "驻马店市",
      label: "上蔡县",
      value: "411722"
    },
    {
      city: "驻马店市",
      label: "平舆县",
      value: "411723"
    },
    {
      city: "驻马店市",
      label: "正阳县",
      value: "411724"
    },
    {
      city: "驻马店市",
      label: "确山县",
      value: "411725"
    },
    {
      city: "驻马店市",
      label: "泌阳县",
      value: "411726"
    },
    {
      city: "驻马店市",
      label: "汝南县",
      value: "411727"
    },
    {
      city: "驻马店市",
      label: "遂平县",
      value: "411728"
    },
    {
      city: "驻马店市",
      label: "新蔡县",
      value: "411729"
    }
  ],
  "419000": [{
    city: "省直辖县级行政区划",
    label: "济源市",
    value: "419001"
  }],
  "420100": [{
      city: "武汉市",
      label: "市辖区",
      value: "420101"
    },
    {
      city: "武汉市",
      label: "江岸区",
      value: "420102"
    },
    {
      city: "武汉市",
      label: "江汉区",
      value: "420103"
    },
    {
      city: "武汉市",
      label: "硚口区",
      value: "420104"
    },
    {
      city: "武汉市",
      label: "汉阳区",
      value: "420105"
    },
    {
      city: "武汉市",
      label: "武昌区",
      value: "420106"
    },
    {
      city: "武汉市",
      label: "青山区",
      value: "420107"
    },
    {
      city: "武汉市",
      label: "洪山区",
      value: "420111"
    },
    {
      city: "武汉市",
      label: "东西湖区",
      value: "420112"
    },
    {
      city: "武汉市",
      label: "汉南区",
      value: "420113"
    },
    {
      city: "武汉市",
      label: "蔡甸区",
      value: "420114"
    },
    {
      city: "武汉市",
      label: "江夏区",
      value: "420115"
    },
    {
      city: "武汉市",
      label: "黄陂区",
      value: "420116"
    },
    {
      city: "武汉市",
      label: "新洲区",
      value: "420117"
    }
  ],
  "420200": [{
      city: "黄石市",
      label: "市辖区",
      value: "420201"
    },
    {
      city: "黄石市",
      label: "黄石港区",
      value: "420202"
    },
    {
      city: "黄石市",
      label: "西塞山区",
      value: "420203"
    },
    {
      city: "黄石市",
      label: "下陆区",
      value: "420204"
    },
    {
      city: "黄石市",
      label: "铁山区",
      value: "420205"
    },
    {
      city: "黄石市",
      label: "阳新县",
      value: "420222"
    },
    {
      city: "黄石市",
      label: "大冶市",
      value: "420281"
    }
  ],
  "420300": [{
      city: "十堰市",
      label: "市辖区",
      value: "420301"
    },
    {
      city: "十堰市",
      label: "茅箭区",
      value: "420302"
    },
    {
      city: "十堰市",
      label: "张湾区",
      value: "420303"
    },
    {
      city: "十堰市",
      label: "郧阳区",
      value: "420304"
    },
    {
      city: "十堰市",
      label: "郧西县",
      value: "420322"
    },
    {
      city: "十堰市",
      label: "竹山县",
      value: "420323"
    },
    {
      city: "十堰市",
      label: "竹溪县",
      value: "420324"
    },
    {
      city: "十堰市",
      label: "房县",
      value: "420325"
    },
    {
      city: "十堰市",
      label: "丹江口市",
      value: "420381"
    }
  ],
  "420500": [{
      city: "宜昌市",
      label: "市辖区",
      value: "420501"
    },
    {
      city: "宜昌市",
      label: "西陵区",
      value: "420502"
    },
    {
      city: "宜昌市",
      label: "伍家岗区",
      value: "420503"
    },
    {
      city: "宜昌市",
      label: "点军区",
      value: "420504"
    },
    {
      city: "宜昌市",
      label: "猇亭区",
      value: "420505"
    },
    {
      city: "宜昌市",
      label: "夷陵区",
      value: "420506"
    },
    {
      city: "宜昌市",
      label: "远安县",
      value: "420525"
    },
    {
      city: "宜昌市",
      label: "兴山县",
      value: "420526"
    },
    {
      city: "宜昌市",
      label: "秭归县",
      value: "420527"
    },
    {
      city: "宜昌市",
      label: "长阳土家族自治县",
      value: "420528"
    },
    {
      city: "宜昌市",
      label: "五峰土家族自治县",
      value: "420529"
    },
    {
      city: "宜昌市",
      label: "宜都市",
      value: "420581"
    },
    {
      city: "宜昌市",
      label: "当阳市",
      value: "420582"
    },
    {
      city: "宜昌市",
      label: "枝江市",
      value: "420583"
    }
  ],
  "420600": [{
      city: "襄阳市",
      label: "市辖区",
      value: "420601"
    },
    {
      city: "襄阳市",
      label: "襄城区",
      value: "420602"
    },
    {
      city: "襄阳市",
      label: "樊城区",
      value: "420606"
    },
    {
      city: "襄阳市",
      label: "襄州区",
      value: "420607"
    },
    {
      city: "襄阳市",
      label: "南漳县",
      value: "420624"
    },
    {
      city: "襄阳市",
      label: "谷城县",
      value: "420625"
    },
    {
      city: "襄阳市",
      label: "保康县",
      value: "420626"
    },
    {
      city: "襄阳市",
      label: "老河口市",
      value: "420682"
    },
    {
      city: "襄阳市",
      label: "枣阳市",
      value: "420683"
    },
    {
      city: "襄阳市",
      label: "宜城市",
      value: "420684"
    }
  ],
  "420700": [{
      city: "鄂州市",
      label: "市辖区",
      value: "420701"
    },
    {
      city: "鄂州市",
      label: "梁子湖区",
      value: "420702"
    },
    {
      city: "鄂州市",
      label: "华容区",
      value: "420703"
    },
    {
      city: "鄂州市",
      label: "鄂城区",
      value: "420704"
    }
  ],
  "420800": [{
      city: "荆门市",
      label: "市辖区",
      value: "420801"
    },
    {
      city: "荆门市",
      label: "东宝区",
      value: "420802"
    },
    {
      city: "荆门市",
      label: "掇刀区",
      value: "420804"
    },
    {
      city: "荆门市",
      label: "京山县",
      value: "420821"
    },
    {
      city: "荆门市",
      label: "沙洋县",
      value: "420822"
    },
    {
      city: "荆门市",
      label: "钟祥市",
      value: "420881"
    }
  ],
  "420900": [{
      city: "孝感市",
      label: "市辖区",
      value: "420901"
    },
    {
      city: "孝感市",
      label: "孝南区",
      value: "420902"
    },
    {
      city: "孝感市",
      label: "孝昌县",
      value: "420921"
    },
    {
      city: "孝感市",
      label: "大悟县",
      value: "420922"
    },
    {
      city: "孝感市",
      label: "云梦县",
      value: "420923"
    },
    {
      city: "孝感市",
      label: "应城市",
      value: "420981"
    },
    {
      city: "孝感市",
      label: "安陆市",
      value: "420982"
    },
    {
      city: "孝感市",
      label: "汉川市",
      value: "420984"
    }
  ],
  "421000": [{
      city: "荆州市",
      label: "市辖区",
      value: "421001"
    },
    {
      city: "荆州市",
      label: "沙市区",
      value: "421002"
    },
    {
      city: "荆州市",
      label: "荆州区",
      value: "421003"
    },
    {
      city: "荆州市",
      label: "公安县",
      value: "421022"
    },
    {
      city: "荆州市",
      label: "监利县",
      value: "421023"
    },
    {
      city: "荆州市",
      label: "江陵县",
      value: "421024"
    },
    {
      city: "荆州市",
      label: "石首市",
      value: "421081"
    },
    {
      city: "荆州市",
      label: "洪湖市",
      value: "421083"
    },
    {
      city: "荆州市",
      label: "松滋市",
      value: "421087"
    }
  ],
  "421100": [{
      city: "黄冈市",
      label: "市辖区",
      value: "421101"
    },
    {
      city: "黄冈市",
      label: "黄州区",
      value: "421102"
    },
    {
      city: "黄冈市",
      label: "团风县",
      value: "421121"
    },
    {
      city: "黄冈市",
      label: "红安县",
      value: "421122"
    },
    {
      city: "黄冈市",
      label: "罗田县",
      value: "421123"
    },
    {
      city: "黄冈市",
      label: "英山县",
      value: "421124"
    },
    {
      city: "黄冈市",
      label: "浠水县",
      value: "421125"
    },
    {
      city: "黄冈市",
      label: "蕲春县",
      value: "421126"
    },
    {
      city: "黄冈市",
      label: "黄梅县",
      value: "421127"
    },
    {
      city: "黄冈市",
      label: "麻城市",
      value: "421181"
    },
    {
      city: "黄冈市",
      label: "武穴市",
      value: "421182"
    }
  ],
  "421200": [{
      city: "咸宁市",
      label: "市辖区",
      value: "421201"
    },
    {
      city: "咸宁市",
      label: "咸安区",
      value: "421202"
    },
    {
      city: "咸宁市",
      label: "嘉鱼县",
      value: "421221"
    },
    {
      city: "咸宁市",
      label: "通城县",
      value: "421222"
    },
    {
      city: "咸宁市",
      label: "崇阳县",
      value: "421223"
    },
    {
      city: "咸宁市",
      label: "通山县",
      value: "421224"
    },
    {
      city: "咸宁市",
      label: "赤壁市",
      value: "421281"
    }
  ],
  "421300": [{
      city: "随州市",
      label: "市辖区",
      value: "421301"
    },
    {
      city: "随州市",
      label: "曾都区",
      value: "421303"
    },
    {
      city: "随州市",
      label: "随县",
      value: "421321"
    },
    {
      city: "随州市",
      label: "广水市",
      value: "421381"
    }
  ],
  "422800": [{
      city: "恩施土家族苗族自治州",
      label: "恩施市",
      value: "422801"
    },
    {
      city: "恩施土家族苗族自治州",
      label: "利川市",
      value: "422802"
    },
    {
      city: "恩施土家族苗族自治州",
      label: "建始县",
      value: "422822"
    },
    {
      city: "恩施土家族苗族自治州",
      label: "巴东县",
      value: "422823"
    },
    {
      city: "恩施土家族苗族自治州",
      label: "宣恩县",
      value: "422825"
    },
    {
      city: "恩施土家族苗族自治州",
      label: "咸丰县",
      value: "422826"
    },
    {
      city: "恩施土家族苗族自治州",
      label: "来凤县",
      value: "422827"
    },
    {
      city: "恩施土家族苗族自治州",
      label: "鹤峰县",
      value: "422828"
    }
  ],
  "429000": [{
      city: "省直辖县级行政区划",
      label: "仙桃市",
      value: "429004"
    },
    {
      city: "省直辖县级行政区划",
      label: "潜江市",
      value: "429005"
    },
    {
      city: "省直辖县级行政区划",
      label: "天门市",
      value: "429006"
    },
    {
      city: "省直辖县级行政区划",
      label: "神农架林区",
      value: "429021"
    }
  ],
  "430100": [{
      city: "长沙市",
      label: "市辖区",
      value: "430101"
    },
    {
      city: "长沙市",
      label: "芙蓉区",
      value: "430102"
    },
    {
      city: "长沙市",
      label: "天心区",
      value: "430103"
    },
    {
      city: "长沙市",
      label: "岳麓区",
      value: "430104"
    },
    {
      city: "长沙市",
      label: "开福区",
      value: "430105"
    },
    {
      city: "长沙市",
      label: "雨花区",
      value: "430111"
    },
    {
      city: "长沙市",
      label: "望城区",
      value: "430112"
    },
    {
      city: "长沙市",
      label: "长沙县",
      value: "430121"
    },
    {
      city: "长沙市",
      label: "宁乡县",
      value: "430124"
    },
    {
      city: "长沙市",
      label: "浏阳市",
      value: "430181"
    }
  ],
  "430200": [{
      city: "株洲市",
      label: "市辖区",
      value: "430201"
    },
    {
      city: "株洲市",
      label: "荷塘区",
      value: "430202"
    },
    {
      city: "株洲市",
      label: "芦淞区",
      value: "430203"
    },
    {
      city: "株洲市",
      label: "石峰区",
      value: "430204"
    },
    {
      city: "株洲市",
      label: "天元区",
      value: "430211"
    },
    {
      city: "株洲市",
      label: "株洲县",
      value: "430221"
    },
    {
      city: "株洲市",
      label: "攸县",
      value: "430223"
    },
    {
      city: "株洲市",
      label: "茶陵县",
      value: "430224"
    },
    {
      city: "株洲市",
      label: "炎陵县",
      value: "430225"
    },
    {
      city: "株洲市",
      label: "醴陵市",
      value: "430281"
    }
  ],
  "430300": [{
      city: "湘潭市",
      label: "市辖区",
      value: "430301"
    },
    {
      city: "湘潭市",
      label: "雨湖区",
      value: "430302"
    },
    {
      city: "湘潭市",
      label: "岳塘区",
      value: "430304"
    },
    {
      city: "湘潭市",
      label: "湘潭县",
      value: "430321"
    },
    {
      city: "湘潭市",
      label: "湘乡市",
      value: "430381"
    },
    {
      city: "湘潭市",
      label: "韶山市",
      value: "430382"
    }
  ],
  "430400": [{
      city: "衡阳市",
      label: "市辖区",
      value: "430401"
    },
    {
      city: "衡阳市",
      label: "珠晖区",
      value: "430405"
    },
    {
      city: "衡阳市",
      label: "雁峰区",
      value: "430406"
    },
    {
      city: "衡阳市",
      label: "石鼓区",
      value: "430407"
    },
    {
      city: "衡阳市",
      label: "蒸湘区",
      value: "430408"
    },
    {
      city: "衡阳市",
      label: "南岳区",
      value: "430412"
    },
    {
      city: "衡阳市",
      label: "衡阳县",
      value: "430421"
    },
    {
      city: "衡阳市",
      label: "衡南县",
      value: "430422"
    },
    {
      city: "衡阳市",
      label: "衡山县",
      value: "430423"
    },
    {
      city: "衡阳市",
      label: "衡东县",
      value: "430424"
    },
    {
      city: "衡阳市",
      label: "祁东县",
      value: "430426"
    },
    {
      city: "衡阳市",
      label: "耒阳市",
      value: "430481"
    },
    {
      city: "衡阳市",
      label: "常宁市",
      value: "430482"
    }
  ],
  "430500": [{
      city: "邵阳市",
      label: "市辖区",
      value: "430501"
    },
    {
      city: "邵阳市",
      label: "双清区",
      value: "430502"
    },
    {
      city: "邵阳市",
      label: "大祥区",
      value: "430503"
    },
    {
      city: "邵阳市",
      label: "北塔区",
      value: "430511"
    },
    {
      city: "邵阳市",
      label: "邵东县",
      value: "430521"
    },
    {
      city: "邵阳市",
      label: "新邵县",
      value: "430522"
    },
    {
      city: "邵阳市",
      label: "邵阳县",
      value: "430523"
    },
    {
      city: "邵阳市",
      label: "隆回县",
      value: "430524"
    },
    {
      city: "邵阳市",
      label: "洞口县",
      value: "430525"
    },
    {
      city: "邵阳市",
      label: "绥宁县",
      value: "430527"
    },
    {
      city: "邵阳市",
      label: "新宁县",
      value: "430528"
    },
    {
      city: "邵阳市",
      label: "城步苗族自治县",
      value: "430529"
    },
    {
      city: "邵阳市",
      label: "武冈市",
      value: "430581"
    }
  ],
  "430600": [{
      city: "岳阳市",
      label: "市辖区",
      value: "430601"
    },
    {
      city: "岳阳市",
      label: "岳阳楼区",
      value: "430602"
    },
    {
      city: "岳阳市",
      label: "云溪区",
      value: "430603"
    },
    {
      city: "岳阳市",
      label: "君山区",
      value: "430611"
    },
    {
      city: "岳阳市",
      label: "岳阳县",
      value: "430621"
    },
    {
      city: "岳阳市",
      label: "华容县",
      value: "430623"
    },
    {
      city: "岳阳市",
      label: "湘阴县",
      value: "430624"
    },
    {
      city: "岳阳市",
      label: "平江县",
      value: "430626"
    },
    {
      city: "岳阳市",
      label: "汨罗市",
      value: "430681"
    },
    {
      city: "岳阳市",
      label: "临湘市",
      value: "430682"
    }
  ],
  "430700": [{
      city: "常德市",
      label: "市辖区",
      value: "430701"
    },
    {
      city: "常德市",
      label: "武陵区",
      value: "430702"
    },
    {
      city: "常德市",
      label: "鼎城区",
      value: "430703"
    },
    {
      city: "常德市",
      label: "安乡县",
      value: "430721"
    },
    {
      city: "常德市",
      label: "汉寿县",
      value: "430722"
    },
    {
      city: "常德市",
      label: "澧县",
      value: "430723"
    },
    {
      city: "常德市",
      label: "临澧县",
      value: "430724"
    },
    {
      city: "常德市",
      label: "桃源县",
      value: "430725"
    },
    {
      city: "常德市",
      label: "石门县",
      value: "430726"
    },
    {
      city: "常德市",
      label: "津市市",
      value: "430781"
    }
  ],
  "430800": [{
      city: "张家界市",
      label: "市辖区",
      value: "430801"
    },
    {
      city: "张家界市",
      label: "永定区",
      value: "430802"
    },
    {
      city: "张家界市",
      label: "武陵源区",
      value: "430811"
    },
    {
      city: "张家界市",
      label: "慈利县",
      value: "430821"
    },
    {
      city: "张家界市",
      label: "桑植县",
      value: "430822"
    }
  ],
  "430900": [{
      city: "益阳市",
      label: "市辖区",
      value: "430901"
    },
    {
      city: "益阳市",
      label: "资阳区",
      value: "430902"
    },
    {
      city: "益阳市",
      label: "赫山区",
      value: "430903"
    },
    {
      city: "益阳市",
      label: "南县",
      value: "430921"
    },
    {
      city: "益阳市",
      label: "桃江县",
      value: "430922"
    },
    {
      city: "益阳市",
      label: "安化县",
      value: "430923"
    },
    {
      city: "益阳市",
      label: "沅江市",
      value: "430981"
    }
  ],
  "431000": [{
      city: "郴州市",
      label: "市辖区",
      value: "431001"
    },
    {
      city: "郴州市",
      label: "北湖区",
      value: "431002"
    },
    {
      city: "郴州市",
      label: "苏仙区",
      value: "431003"
    },
    {
      city: "郴州市",
      label: "桂阳县",
      value: "431021"
    },
    {
      city: "郴州市",
      label: "宜章县",
      value: "431022"
    },
    {
      city: "郴州市",
      label: "永兴县",
      value: "431023"
    },
    {
      city: "郴州市",
      label: "嘉禾县",
      value: "431024"
    },
    {
      city: "郴州市",
      label: "临武县",
      value: "431025"
    },
    {
      city: "郴州市",
      label: "汝城县",
      value: "431026"
    },
    {
      city: "郴州市",
      label: "桂东县",
      value: "431027"
    },
    {
      city: "郴州市",
      label: "安仁县",
      value: "431028"
    },
    {
      city: "郴州市",
      label: "资兴市",
      value: "431081"
    }
  ],
  "431100": [{
      city: "永州市",
      label: "市辖区",
      value: "431101"
    },
    {
      city: "永州市",
      label: "零陵区",
      value: "431102"
    },
    {
      city: "永州市",
      label: "冷水滩区",
      value: "431103"
    },
    {
      city: "永州市",
      label: "祁阳县",
      value: "431121"
    },
    {
      city: "永州市",
      label: "东安县",
      value: "431122"
    },
    {
      city: "永州市",
      label: "双牌县",
      value: "431123"
    },
    {
      city: "永州市",
      label: "道县",
      value: "431124"
    },
    {
      city: "永州市",
      label: "江永县",
      value: "431125"
    },
    {
      city: "永州市",
      label: "宁远县",
      value: "431126"
    },
    {
      city: "永州市",
      label: "蓝山县",
      value: "431127"
    },
    {
      city: "永州市",
      label: "新田县",
      value: "431128"
    },
    {
      city: "永州市",
      label: "江华瑶族自治县",
      value: "431129"
    }
  ],
  "431200": [{
      city: "怀化市",
      label: "市辖区",
      value: "431201"
    },
    {
      city: "怀化市",
      label: "鹤城区",
      value: "431202"
    },
    {
      city: "怀化市",
      label: "中方县",
      value: "431221"
    },
    {
      city: "怀化市",
      label: "沅陵县",
      value: "431222"
    },
    {
      city: "怀化市",
      label: "辰溪县",
      value: "431223"
    },
    {
      city: "怀化市",
      label: "溆浦县",
      value: "431224"
    },
    {
      city: "怀化市",
      label: "会同县",
      value: "431225"
    },
    {
      city: "怀化市",
      label: "麻阳苗族自治县",
      value: "431226"
    },
    {
      city: "怀化市",
      label: "新晃侗族自治县",
      value: "431227"
    },
    {
      city: "怀化市",
      label: "芷江侗族自治县",
      value: "431228"
    },
    {
      city: "怀化市",
      label: "靖州苗族侗族自治县",
      value: "431229"
    },
    {
      city: "怀化市",
      label: "通道侗族自治县",
      value: "431230"
    },
    {
      city: "怀化市",
      label: "洪江市",
      value: "431281"
    }
  ],
  "431300": [{
      city: "娄底市",
      label: "市辖区",
      value: "431301"
    },
    {
      city: "娄底市",
      label: "娄星区",
      value: "431302"
    },
    {
      city: "娄底市",
      label: "双峰县",
      value: "431321"
    },
    {
      city: "娄底市",
      label: "新化县",
      value: "431322"
    },
    {
      city: "娄底市",
      label: "冷水江市",
      value: "431381"
    },
    {
      city: "娄底市",
      label: "涟源市",
      value: "431382"
    }
  ],
  "433100": [{
      city: "湘西土家族苗族自治州",
      label: "吉首市",
      value: "433101"
    },
    {
      city: "湘西土家族苗族自治州",
      label: "泸溪县",
      value: "433122"
    },
    {
      city: "湘西土家族苗族自治州",
      label: "凤凰县",
      value: "433123"
    },
    {
      city: "湘西土家族苗族自治州",
      label: "花垣县",
      value: "433124"
    },
    {
      city: "湘西土家族苗族自治州",
      label: "保靖县",
      value: "433125"
    },
    {
      city: "湘西土家族苗族自治州",
      label: "古丈县",
      value: "433126"
    },
    {
      city: "湘西土家族苗族自治州",
      label: "永顺县",
      value: "433127"
    },
    {
      city: "湘西土家族苗族自治州",
      label: "龙山县",
      value: "433130"
    }
  ],
  "440100": [{
      city: "广州市",
      label: "市辖区",
      value: "440101"
    },
    {
      city: "广州市",
      label: "荔湾区",
      value: "440103"
    },
    {
      city: "广州市",
      label: "越秀区",
      value: "440104"
    },
    {
      city: "广州市",
      label: "海珠区",
      value: "440105"
    },
    {
      city: "广州市",
      label: "天河区",
      value: "440106"
    },
    {
      city: "广州市",
      label: "白云区",
      value: "440111"
    },
    {
      city: "广州市",
      label: "黄埔区",
      value: "440112"
    },
    {
      city: "广州市",
      label: "番禺区",
      value: "440113"
    },
    {
      city: "广州市",
      label: "花都区",
      value: "440114"
    },
    {
      city: "广州市",
      label: "南沙区",
      value: "440115"
    },
    {
      city: "广州市",
      label: "从化区",
      value: "440117"
    },
    {
      city: "广州市",
      label: "增城区",
      value: "440118"
    }
  ],
  "440200": [{
      city: "韶关市",
      label: "市辖区",
      value: "440201"
    },
    {
      city: "韶关市",
      label: "武江区",
      value: "440203"
    },
    {
      city: "韶关市",
      label: "浈江区",
      value: "440204"
    },
    {
      city: "韶关市",
      label: "曲江区",
      value: "440205"
    },
    {
      city: "韶关市",
      label: "始兴县",
      value: "440222"
    },
    {
      city: "韶关市",
      label: "仁化县",
      value: "440224"
    },
    {
      city: "韶关市",
      label: "翁源县",
      value: "440229"
    },
    {
      city: "韶关市",
      label: "乳源瑶族自治县",
      value: "440232"
    },
    {
      city: "韶关市",
      label: "新丰县",
      value: "440233"
    },
    {
      city: "韶关市",
      label: "乐昌市",
      value: "440281"
    },
    {
      city: "韶关市",
      label: "南雄市",
      value: "440282"
    }
  ],
  "440300": [{
      city: "深圳市",
      label: "罗湖区",
      value: "440303"
    },
    {
      city: "深圳市",
      label: "福田区",
      value: "440304"
    },
    {
      city: "深圳市",
      label: "南山区",
      value: "440305"
    },
    {
      city: "深圳市",
      label: "宝安区",
      value: "440306"
    },
    {
      city: "深圳市",
      label: "龙岗区",
      value: "440307"
    },
    {
      city: "深圳市",
      label: "盐田区",
      value: "440308"
    },
    {
      city: "深圳市",
      label: "龙华区",
      value: "440309"
    },
    {
      city: "深圳市",
      label: "坪山区",
      value: "440310"
    },
    {
      city: "深圳市",
      label: "光明区",
      value: "440311"
    }
  ],
  "440400": [{
      city: "珠海市",
      label: "市辖区",
      value: "440401"
    },
    {
      city: "珠海市",
      label: "香洲区",
      value: "440402"
    },
    {
      city: "珠海市",
      label: "斗门区",
      value: "440403"
    },
    {
      city: "珠海市",
      label: "金湾区",
      value: "440404"
    }
  ],
  "440500": [{
      city: "汕头市",
      label: "市辖区",
      value: "440501"
    },
    {
      city: "汕头市",
      label: "龙湖区",
      value: "440507"
    },
    {
      city: "汕头市",
      label: "金平区",
      value: "440511"
    },
    {
      city: "汕头市",
      label: "濠江区",
      value: "440512"
    },
    {
      city: "汕头市",
      label: "潮阳区",
      value: "440513"
    },
    {
      city: "汕头市",
      label: "潮南区",
      value: "440514"
    },
    {
      city: "汕头市",
      label: "澄海区",
      value: "440515"
    },
    {
      city: "汕头市",
      label: "南澳县",
      value: "440523"
    }
  ],
  "440600": [{
      city: "佛山市",
      label: "市辖区",
      value: "440601"
    },
    {
      city: "佛山市",
      label: "禅城区",
      value: "440604"
    },
    {
      city: "佛山市",
      label: "南海区",
      value: "440605"
    },
    {
      city: "佛山市",
      label: "顺德区",
      value: "440606"
    },
    {
      city: "佛山市",
      label: "三水区",
      value: "440607"
    },
    {
      city: "佛山市",
      label: "高明区",
      value: "440608"
    }
  ],
  "440700": [{
      city: "江门市",
      label: "市辖区",
      value: "440701"
    },
    {
      city: "江门市",
      label: "蓬江区",
      value: "440703"
    },
    {
      city: "江门市",
      label: "江海区",
      value: "440704"
    },
    {
      city: "江门市",
      label: "新会区",
      value: "440705"
    },
    {
      city: "江门市",
      label: "台山市",
      value: "440781"
    },
    {
      city: "江门市",
      label: "开平市",
      value: "440783"
    },
    {
      city: "江门市",
      label: "鹤山市",
      value: "440784"
    },
    {
      city: "江门市",
      label: "恩平市",
      value: "440785"
    }
  ],
  "440800": [{
      city: "湛江市",
      label: "市辖区",
      value: "440801"
    },
    {
      city: "湛江市",
      label: "赤坎区",
      value: "440802"
    },
    {
      city: "湛江市",
      label: "霞山区",
      value: "440803"
    },
    {
      city: "湛江市",
      label: "坡头区",
      value: "440804"
    },
    {
      city: "湛江市",
      label: "麻章区",
      value: "440811"
    },
    {
      city: "湛江市",
      label: "遂溪县",
      value: "440823"
    },
    {
      city: "湛江市",
      label: "徐闻县",
      value: "440825"
    },
    {
      city: "湛江市",
      label: "廉江市",
      value: "440881"
    },
    {
      city: "湛江市",
      label: "雷州市",
      value: "440882"
    },
    {
      city: "湛江市",
      label: "吴川市",
      value: "440883"
    }
  ],
  "440900": [{
      city: "茂名市",
      label: "市辖区",
      value: "440901"
    },
    {
      city: "茂名市",
      label: "茂南区",
      value: "440902"
    },
    {
      city: "茂名市",
      label: "电白区",
      value: "440904"
    },
    {
      city: "茂名市",
      label: "高州市",
      value: "440981"
    },
    {
      city: "茂名市",
      label: "化州市",
      value: "440982"
    },
    {
      city: "茂名市",
      label: "信宜市",
      value: "440983"
    }
  ],
  "441200": [{
      city: "肇庆市",
      label: "市辖区",
      value: "441201"
    },
    {
      city: "肇庆市",
      label: "端州区",
      value: "441202"
    },
    {
      city: "肇庆市",
      label: "鼎湖区",
      value: "441203"
    },
    {
      city: "肇庆市",
      label: "高要区",
      value: "441204"
    },
    {
      city: "肇庆市",
      label: "广宁县",
      value: "441223"
    },
    {
      city: "肇庆市",
      label: "怀集县",
      value: "441224"
    },
    {
      city: "肇庆市",
      label: "封开县",
      value: "441225"
    },
    {
      city: "肇庆市",
      label: "德庆县",
      value: "441226"
    },
    {
      city: "肇庆市",
      label: "四会市",
      value: "441284"
    }
  ],
  "441300": [{
      city: "惠州市",
      label: "市辖区",
      value: "441301"
    },
    {
      city: "惠州市",
      label: "惠城区",
      value: "441302"
    },
    {
      city: "惠州市",
      label: "惠阳区",
      value: "441303"
    },
    {
      city: "惠州市",
      label: "博罗县",
      value: "441322"
    },
    {
      city: "惠州市",
      label: "惠东县",
      value: "441323"
    },
    {
      city: "惠州市",
      label: "龙门县",
      value: "441324"
    }
  ],
  "441400": [{
      city: "梅州市",
      label: "市辖区",
      value: "441401"
    },
    {
      city: "梅州市",
      label: "梅江区",
      value: "441402"
    },
    {
      city: "梅州市",
      label: "梅县区",
      value: "441403"
    },
    {
      city: "梅州市",
      label: "大埔县",
      value: "441422"
    },
    {
      city: "梅州市",
      label: "丰顺县",
      value: "441423"
    },
    {
      city: "梅州市",
      label: "五华县",
      value: "441424"
    },
    {
      city: "梅州市",
      label: "平远县",
      value: "441426"
    },
    {
      city: "梅州市",
      label: "蕉岭县",
      value: "441427"
    },
    {
      city: "梅州市",
      label: "兴宁市",
      value: "441481"
    }
  ],
  "441500": [{
      city: "汕尾市",
      label: "市辖区",
      value: "441501"
    },
    {
      city: "汕尾市",
      label: "城区",
      value: "441502"
    },
    {
      city: "汕尾市",
      label: "海丰县",
      value: "441521"
    },
    {
      city: "汕尾市",
      label: "陆河县",
      value: "441523"
    },
    {
      city: "汕尾市",
      label: "陆丰市",
      value: "441581"
    }
  ],
  "441600": [{
      city: "河源市",
      label: "市辖区",
      value: "441601"
    },
    {
      city: "河源市",
      label: "源城区",
      value: "441602"
    },
    {
      city: "河源市",
      label: "紫金县",
      value: "441621"
    },
    {
      city: "河源市",
      label: "龙川县",
      value: "441622"
    },
    {
      city: "河源市",
      label: "连平县",
      value: "441623"
    },
    {
      city: "河源市",
      label: "和平县",
      value: "441624"
    },
    {
      city: "河源市",
      label: "东源县",
      value: "441625"
    }
  ],
  "441700": [{
      city: "阳江市",
      label: "市辖区",
      value: "441701"
    },
    {
      city: "阳江市",
      label: "江城区",
      value: "441702"
    },
    {
      city: "阳江市",
      label: "阳东区",
      value: "441704"
    },
    {
      city: "阳江市",
      label: "阳西县",
      value: "441721"
    },
    {
      city: "阳江市",
      label: "阳春市",
      value: "441781"
    }
  ],
  "441800": [{
      city: "清远市",
      label: "市辖区",
      value: "441801"
    },
    {
      city: "清远市",
      label: "清城区",
      value: "441802"
    },
    {
      city: "清远市",
      label: "清新区",
      value: "441803"
    },
    {
      city: "清远市",
      label: "佛冈县",
      value: "441821"
    },
    {
      city: "清远市",
      label: "阳山县",
      value: "441823"
    },
    {
      city: "清远市",
      label: "连山壮族瑶族自治县",
      value: "441825"
    },
    {
      city: "清远市",
      label: "连南瑶族自治县",
      value: "441826"
    },
    {
      city: "清远市",
      label: "英德市",
      value: "441881"
    },
    {
      city: "清远市",
      label: "连州市",
      value: "441882"
    }
  ],
  "441900": [{
      city: "东莞市",
      label: "东城街道办事处",
      value: "441900003000"
    },
    {
      city: "东莞市",
      label: "南城街道办事处",
      value: "441900004000"
    },
    {
      city: "东莞市",
      label: "万江街道办事处",
      value: "441900005000"
    },
    {
      city: "东莞市",
      label: "莞城街道办事处",
      value: "441900006000"
    },
    {
      city: "东莞市",
      label: "石碣镇",
      value: "441900101000"
    },
    {
      city: "东莞市",
      label: "石龙镇",
      value: "441900102000"
    },
    {
      city: "东莞市",
      label: "茶山镇",
      value: "441900103000"
    },
    {
      city: "东莞市",
      label: "石排镇",
      value: "441900104000"
    },
    {
      city: "东莞市",
      label: "企石镇",
      value: "441900105000"
    },
    {
      city: "东莞市",
      label: "横沥镇",
      value: "441900106000"
    },
    {
      city: "东莞市",
      label: "桥头镇",
      value: "441900107000"
    },
    {
      city: "东莞市",
      label: "谢岗镇",
      value: "441900108000"
    },
    {
      city: "东莞市",
      label: "东坑镇",
      value: "441900109000"
    },
    {
      city: "东莞市",
      label: "常平镇",
      value: "441900110000"
    },
    {
      city: "东莞市",
      label: "寮步镇",
      value: "441900111000"
    },
    {
      city: "东莞市",
      label: "樟木头镇",
      value: "441900112000"
    },
    {
      city: "东莞市",
      label: "大朗镇",
      value: "441900113000"
    },
    {
      city: "东莞市",
      label: "黄江镇",
      value: "441900114000"
    },
    {
      city: "东莞市",
      label: "清溪镇",
      value: "441900115000"
    },
    {
      city: "东莞市",
      label: "塘厦镇",
      value: "441900116000"
    },
    {
      city: "东莞市",
      label: "凤岗镇",
      value: "441900117000"
    },
    {
      city: "东莞市",
      label: "大岭山镇",
      value: "441900118000"
    },
    {
      city: "东莞市",
      label: "长安镇",
      value: "441900119000"
    },
    {
      city: "东莞市",
      label: "虎门镇",
      value: "441900121000"
    },
    {
      city: "东莞市",
      label: "厚街镇",
      value: "441900122000"
    },
    {
      city: "东莞市",
      label: "沙田镇",
      value: "441900123000"
    },
    {
      city: "东莞市",
      label: "道滘镇",
      value: "441900124000"
    },
    {
      city: "东莞市",
      label: "洪梅镇",
      value: "441900125000"
    },
    {
      city: "东莞市",
      label: "麻涌镇",
      value: "441900126000"
    },
    {
      city: "东莞市",
      label: "望牛墩镇",
      value: "441900127000"
    },
    {
      city: "东莞市",
      label: "中堂镇",
      value: "441900128000"
    },
    {
      city: "东莞市",
      label: "高埗镇",
      value: "441900129000"
    },
    {
      city: "东莞市",
      label: "松山湖管委会",
      value: "441900401000"
    },
    {
      city: "东莞市",
      label: "虎门港管委会",
      value: "441900402000"
    },
    {
      city: "东莞市",
      label: "东莞生态园",
      value: "441900403000"
    }
  ],
  "442000": [{
      city: "中山市",
      label: "石岐区街道办事处",
      value: "442000001000"
    },
    {
      city: "中山市",
      label: "东区街道办事处",
      value: "442000002000"
    },
    {
      city: "中山市",
      label: "火炬开发区街道办事处",
      value: "442000003000"
    },
    {
      city: "中山市",
      label: "西区街道办事处",
      value: "442000004000"
    },
    {
      city: "中山市",
      label: "南区街道办事处",
      value: "442000005000"
    },
    {
      city: "中山市",
      label: "五桂山街道办事处",
      value: "442000006000"
    },
    {
      city: "中山市",
      label: "小榄镇",
      value: "442000100000"
    },
    {
      city: "中山市",
      label: "黄圃镇",
      value: "442000101000"
    },
    {
      city: "中山市",
      label: "民众镇",
      value: "442000102000"
    },
    {
      city: "中山市",
      label: "东凤镇",
      value: "442000103000"
    },
    {
      city: "中山市",
      label: "东升镇",
      value: "442000104000"
    },
    {
      city: "中山市",
      label: "古镇镇",
      value: "442000105000"
    },
    {
      city: "中山市",
      label: "沙溪镇",
      value: "442000106000"
    },
    {
      city: "中山市",
      label: "坦洲镇",
      value: "442000107000"
    },
    {
      city: "中山市",
      label: "港口镇",
      value: "442000108000"
    },
    {
      city: "中山市",
      label: "三角镇",
      value: "442000109000"
    },
    {
      city: "中山市",
      label: "横栏镇",
      value: "442000110000"
    },
    {
      city: "中山市",
      label: "南头镇",
      value: "442000111000"
    },
    {
      city: "中山市",
      label: "阜沙镇",
      value: "442000112000"
    },
    {
      city: "中山市",
      label: "南朗镇",
      value: "442000113000"
    },
    {
      city: "中山市",
      label: "三乡镇",
      value: "442000114000"
    },
    {
      city: "中山市",
      label: "板芙镇",
      value: "442000115000"
    },
    {
      city: "中山市",
      label: "大涌镇",
      value: "442000116000"
    },
    {
      city: "中山市",
      label: "神湾镇",
      value: "442000117000"
    }
  ],
  "445100": [{
      city: "潮州市",
      label: "市辖区",
      value: "445101"
    },
    {
      city: "潮州市",
      label: "湘桥区",
      value: "445102"
    },
    {
      city: "潮州市",
      label: "潮安区",
      value: "445103"
    },
    {
      city: "潮州市",
      label: "饶平县",
      value: "445122"
    }
  ],
  "445200": [{
      city: "揭阳市",
      label: "市辖区",
      value: "445201"
    },
    {
      city: "揭阳市",
      label: "榕城区",
      value: "445202"
    },
    {
      city: "揭阳市",
      label: "揭东区",
      value: "445203"
    },
    {
      city: "揭阳市",
      label: "揭西县",
      value: "445222"
    },
    {
      city: "揭阳市",
      label: "惠来县",
      value: "445224"
    },
    {
      city: "揭阳市",
      label: "普宁市",
      value: "445281"
    }
  ],
  "445300": [{
      city: "云浮市",
      label: "市辖区",
      value: "445301"
    },
    {
      city: "云浮市",
      label: "云城区",
      value: "445302"
    },
    {
      city: "云浮市",
      label: "云安区",
      value: "445303"
    },
    {
      city: "云浮市",
      label: "新兴县",
      value: "445321"
    },
    {
      city: "云浮市",
      label: "郁南县",
      value: "445322"
    },
    {
      city: "云浮市",
      label: "罗定市",
      value: "445381"
    }
  ],
  "450100": [{
      city: "南宁市",
      label: "市辖区",
      value: "450101"
    },
    {
      city: "南宁市",
      label: "兴宁区",
      value: "450102"
    },
    {
      city: "南宁市",
      label: "青秀区",
      value: "450103"
    },
    {
      city: "南宁市",
      label: "江南区",
      value: "450105"
    },
    {
      city: "南宁市",
      label: "西乡塘区",
      value: "450107"
    },
    {
      city: "南宁市",
      label: "良庆区",
      value: "450108"
    },
    {
      city: "南宁市",
      label: "邕宁区",
      value: "450109"
    },
    {
      city: "南宁市",
      label: "武鸣区",
      value: "450110"
    },
    {
      city: "南宁市",
      label: "隆安县",
      value: "450123"
    },
    {
      city: "南宁市",
      label: "马山县",
      value: "450124"
    },
    {
      city: "南宁市",
      label: "上林县",
      value: "450125"
    },
    {
      city: "南宁市",
      label: "宾阳县",
      value: "450126"
    },
    {
      city: "南宁市",
      label: "横县",
      value: "450127"
    }
  ],
  "450200": [{
      city: "柳州市",
      label: "市辖区",
      value: "450201"
    },
    {
      city: "柳州市",
      label: "城中区",
      value: "450202"
    },
    {
      city: "柳州市",
      label: "鱼峰区",
      value: "450203"
    },
    {
      city: "柳州市",
      label: "柳南区",
      value: "450204"
    },
    {
      city: "柳州市",
      label: "柳北区",
      value: "450205"
    },
    {
      city: "柳州市",
      label: "柳江区",
      value: "450206"
    },
    {
      city: "柳州市",
      label: "柳城县",
      value: "450222"
    },
    {
      city: "柳州市",
      label: "鹿寨县",
      value: "450223"
    },
    {
      city: "柳州市",
      label: "融安县",
      value: "450224"
    },
    {
      city: "柳州市",
      label: "融水苗族自治县",
      value: "450225"
    },
    {
      city: "柳州市",
      label: "三江侗族自治县",
      value: "450226"
    }
  ],
  "450300": [{
      city: "桂林市",
      label: "市辖区",
      value: "450301"
    },
    {
      city: "桂林市",
      label: "秀峰区",
      value: "450302"
    },
    {
      city: "桂林市",
      label: "叠彩区",
      value: "450303"
    },
    {
      city: "桂林市",
      label: "象山区",
      value: "450304"
    },
    {
      city: "桂林市",
      label: "七星区",
      value: "450305"
    },
    {
      city: "桂林市",
      label: "雁山区",
      value: "450311"
    },
    {
      city: "桂林市",
      label: "临桂区",
      value: "450312"
    },
    {
      city: "桂林市",
      label: "阳朔县",
      value: "450321"
    },
    {
      city: "桂林市",
      label: "灵川县",
      value: "450323"
    },
    {
      city: "桂林市",
      label: "全州县",
      value: "450324"
    },
    {
      city: "桂林市",
      label: "兴安县",
      value: "450325"
    },
    {
      city: "桂林市",
      label: "永福县",
      value: "450326"
    },
    {
      city: "桂林市",
      label: "灌阳县",
      value: "450327"
    },
    {
      city: "桂林市",
      label: "龙胜各族自治县",
      value: "450328"
    },
    {
      city: "桂林市",
      label: "资源县",
      value: "450329"
    },
    {
      city: "桂林市",
      label: "平乐县",
      value: "450330"
    },
    {
      city: "桂林市",
      label: "荔浦县",
      value: "450331"
    },
    {
      city: "桂林市",
      label: "恭城瑶族自治县",
      value: "450332"
    }
  ],
  "450400": [{
      city: "梧州市",
      label: "市辖区",
      value: "450401"
    },
    {
      city: "梧州市",
      label: "万秀区",
      value: "450403"
    },
    {
      city: "梧州市",
      label: "长洲区",
      value: "450405"
    },
    {
      city: "梧州市",
      label: "龙圩区",
      value: "450406"
    },
    {
      city: "梧州市",
      label: "苍梧县",
      value: "450421"
    },
    {
      city: "梧州市",
      label: "藤县",
      value: "450422"
    },
    {
      city: "梧州市",
      label: "蒙山县",
      value: "450423"
    },
    {
      city: "梧州市",
      label: "岑溪市",
      value: "450481"
    }
  ],
  "450500": [{
      city: "北海市",
      label: "市辖区",
      value: "450501"
    },
    {
      city: "北海市",
      label: "海城区",
      value: "450502"
    },
    {
      city: "北海市",
      label: "银海区",
      value: "450503"
    },
    {
      city: "北海市",
      label: "铁山港区",
      value: "450512"
    },
    {
      city: "北海市",
      label: "合浦县",
      value: "450521"
    }
  ],
  "450600": [{
      city: "防城港市",
      label: "市辖区",
      value: "450601"
    },
    {
      city: "防城港市",
      label: "港口区",
      value: "450602"
    },
    {
      city: "防城港市",
      label: "防城区",
      value: "450603"
    },
    {
      city: "防城港市",
      label: "上思县",
      value: "450621"
    },
    {
      city: "防城港市",
      label: "东兴市",
      value: "450681"
    }
  ],
  "450700": [{
      city: "钦州市",
      label: "市辖区",
      value: "450701"
    },
    {
      city: "钦州市",
      label: "钦南区",
      value: "450702"
    },
    {
      city: "钦州市",
      label: "钦北区",
      value: "450703"
    },
    {
      city: "钦州市",
      label: "灵山县",
      value: "450721"
    },
    {
      city: "钦州市",
      label: "浦北县",
      value: "450722"
    }
  ],
  "450800": [{
      city: "贵港市",
      label: "市辖区",
      value: "450801"
    },
    {
      city: "贵港市",
      label: "港北区",
      value: "450802"
    },
    {
      city: "贵港市",
      label: "港南区",
      value: "450803"
    },
    {
      city: "贵港市",
      label: "覃塘区",
      value: "450804"
    },
    {
      city: "贵港市",
      label: "平南县",
      value: "450821"
    },
    {
      city: "贵港市",
      label: "桂平市",
      value: "450881"
    }
  ],
  "450900": [{
      city: "玉林市",
      label: "市辖区",
      value: "450901"
    },
    {
      city: "玉林市",
      label: "玉州区",
      value: "450902"
    },
    {
      city: "玉林市",
      label: "福绵区",
      value: "450903"
    },
    {
      city: "玉林市",
      label: "容县",
      value: "450921"
    },
    {
      city: "玉林市",
      label: "陆川县",
      value: "450922"
    },
    {
      city: "玉林市",
      label: "博白县",
      value: "450923"
    },
    {
      city: "玉林市",
      label: "兴业县",
      value: "450924"
    },
    {
      city: "玉林市",
      label: "北流市",
      value: "450981"
    }
  ],
  "451000": [{
      city: "百色市",
      label: "市辖区",
      value: "451001"
    },
    {
      city: "百色市",
      label: "右江区",
      value: "451002"
    },
    {
      city: "百色市",
      label: "田阳县",
      value: "451021"
    },
    {
      city: "百色市",
      label: "田东县",
      value: "451022"
    },
    {
      city: "百色市",
      label: "平果县",
      value: "451023"
    },
    {
      city: "百色市",
      label: "德保县",
      value: "451024"
    },
    {
      city: "百色市",
      label: "那坡县",
      value: "451026"
    },
    {
      city: "百色市",
      label: "凌云县",
      value: "451027"
    },
    {
      city: "百色市",
      label: "乐业县",
      value: "451028"
    },
    {
      city: "百色市",
      label: "田林县",
      value: "451029"
    },
    {
      city: "百色市",
      label: "西林县",
      value: "451030"
    },
    {
      city: "百色市",
      label: "隆林各族自治县",
      value: "451031"
    },
    {
      city: "百色市",
      label: "靖西市",
      value: "451081"
    }
  ],
  "451100": [{
      city: "贺州市",
      label: "市辖区",
      value: "451101"
    },
    {
      city: "贺州市",
      label: "八步区",
      value: "451102"
    },
    {
      city: "贺州市",
      label: "平桂区",
      value: "451103"
    },
    {
      city: "贺州市",
      label: "昭平县",
      value: "451121"
    },
    {
      city: "贺州市",
      label: "钟山县",
      value: "451122"
    },
    {
      city: "贺州市",
      label: "富川瑶族自治县",
      value: "451123"
    }
  ],
  "451200": [{
      city: "河池市",
      label: "市辖区",
      value: "451201"
    },
    {
      city: "河池市",
      label: "金城江区",
      value: "451202"
    },
    {
      city: "河池市",
      label: "南丹县",
      value: "451221"
    },
    {
      city: "河池市",
      label: "天峨县",
      value: "451222"
    },
    {
      city: "河池市",
      label: "凤山县",
      value: "451223"
    },
    {
      city: "河池市",
      label: "东兰县",
      value: "451224"
    },
    {
      city: "河池市",
      label: "罗城仫佬族自治县",
      value: "451225"
    },
    {
      city: "河池市",
      label: "环江毛南族自治县",
      value: "451226"
    },
    {
      city: "河池市",
      label: "巴马瑶族自治县",
      value: "451227"
    },
    {
      city: "河池市",
      label: "都安瑶族自治县",
      value: "451228"
    },
    {
      city: "河池市",
      label: "大化瑶族自治县",
      value: "451229"
    },
    {
      city: "河池市",
      label: "宜州市",
      value: "451281"
    }
  ],
  "451300": [{
      city: "来宾市",
      label: "市辖区",
      value: "451301"
    },
    {
      city: "来宾市",
      label: "兴宾区",
      value: "451302"
    },
    {
      city: "来宾市",
      label: "忻城县",
      value: "451321"
    },
    {
      city: "来宾市",
      label: "象州县",
      value: "451322"
    },
    {
      city: "来宾市",
      label: "武宣县",
      value: "451323"
    },
    {
      city: "来宾市",
      label: "金秀瑶族自治县",
      value: "451324"
    },
    {
      city: "来宾市",
      label: "合山市",
      value: "451381"
    }
  ],
  "451400": [{
      city: "崇左市",
      label: "市辖区",
      value: "451401"
    },
    {
      city: "崇左市",
      label: "江州区",
      value: "451402"
    },
    {
      city: "崇左市",
      label: "扶绥县",
      value: "451421"
    },
    {
      city: "崇左市",
      label: "宁明县",
      value: "451422"
    },
    {
      city: "崇左市",
      label: "龙州县",
      value: "451423"
    },
    {
      city: "崇左市",
      label: "大新县",
      value: "451424"
    },
    {
      city: "崇左市",
      label: "天等县",
      value: "451425"
    },
    {
      city: "崇左市",
      label: "凭祥市",
      value: "451481"
    }
  ],
  "460100": [{
      city: "海口市",
      label: "市辖区",
      value: "460101"
    },
    {
      city: "海口市",
      label: "秀英区",
      value: "460105"
    },
    {
      city: "海口市",
      label: "龙华区",
      value: "460106"
    },
    {
      city: "海口市",
      label: "琼山区",
      value: "460107"
    },
    {
      city: "海口市",
      label: "美兰区",
      value: "460108"
    }
  ],
  "460200": [{
      city: "三亚市",
      label: "市辖区",
      value: "460201"
    },
    {
      city: "三亚市",
      label: "海棠区",
      value: "460202"
    },
    {
      city: "三亚市",
      label: "吉阳区",
      value: "460203"
    },
    {
      city: "三亚市",
      label: "天涯区",
      value: "460204"
    },
    {
      city: "三亚市",
      label: "崖州区",
      value: "460205"
    }
  ],
  "460300": [{
      city: "三沙市",
      label: "西沙群岛",
      value: "460321"
    },
    {
      city: "三沙市",
      label: "南沙群岛",
      value: "460322"
    },
    {
      city: "三沙市",
      label: "中沙群岛",
      value: "460323"
    },
    {
      city: "三沙市",
      label: "永乐群岛",
      value: "460324"
    }
  ],
  "460400": [],
  "469000": [{
      city: "省直辖县级行政区划",
      label: "五指山市",
      value: "469001"
    },
    {
      city: "省直辖县级行政区划",
      label: "琼海市",
      value: "469002"
    },
    {
      city: "省直辖县级行政区划",
      label: "文昌市",
      value: "469005"
    },
    {
      city: "省直辖县级行政区划",
      label: "万宁市",
      value: "469006"
    },
    {
      city: "省直辖县级行政区划",
      label: "东方市",
      value: "469007"
    },
    {
      city: "省直辖县级行政区划",
      label: "定安县",
      value: "469021"
    },
    {
      city: "省直辖县级行政区划",
      label: "屯昌县",
      value: "469022"
    },
    {
      city: "省直辖县级行政区划",
      label: "澄迈县",
      value: "469023"
    },
    {
      city: "省直辖县级行政区划",
      label: "临高县",
      value: "469024"
    },
    {
      city: "省直辖县级行政区划",
      label: "白沙黎族自治县",
      value: "469025"
    },
    {
      city: "省直辖县级行政区划",
      label: "昌江黎族自治县",
      value: "469026"
    },
    {
      city: "省直辖县级行政区划",
      label: "乐东黎族自治县",
      value: "469027"
    },
    {
      city: "省直辖县级行政区划",
      label: "陵水黎族自治县",
      value: "469028"
    },
    {
      city: "省直辖县级行政区划",
      label: "保亭黎族苗族自治县",
      value: "469029"
    },
    {
      city: "省直辖县级行政区划",
      label: "琼中黎族苗族自治县",
      value: "469030"
    }
  ],
  "500100": [{
      city: "市辖区",
      label: "万州区",
      value: "500101"
    },
    {
      city: "市辖区",
      label: "涪陵区",
      value: "500102"
    },
    {
      city: "市辖区",
      label: "渝中区",
      value: "500103"
    },
    {
      city: "市辖区",
      label: "大渡口区",
      value: "500104"
    },
    {
      city: "市辖区",
      label: "江北区",
      value: "500105"
    },
    {
      city: "市辖区",
      label: "沙坪坝区",
      value: "500106"
    },
    {
      city: "市辖区",
      label: "九龙坡区",
      value: "500107"
    },
    {
      city: "市辖区",
      label: "南岸区",
      value: "500108"
    },
    {
      city: "市辖区",
      label: "北碚区",
      value: "500109"
    },
    {
      city: "市辖区",
      label: "綦江区",
      value: "500110"
    },
    {
      city: "市辖区",
      label: "大足区",
      value: "500111"
    },
    {
      city: "市辖区",
      label: "渝北区",
      value: "500112"
    },
    {
      city: "市辖区",
      label: "巴南区",
      value: "500113"
    },
    {
      city: "市辖区",
      label: "黔江区",
      value: "500114"
    },
    {
      city: "市辖区",
      label: "长寿区",
      value: "500115"
    },
    {
      city: "市辖区",
      label: "江津区",
      value: "500116"
    },
    {
      city: "市辖区",
      label: "合川区",
      value: "500117"
    },
    {
      city: "市辖区",
      label: "永川区",
      value: "500118"
    },
    {
      city: "市辖区",
      label: "南川区",
      value: "500119"
    },
    {
      city: "市辖区",
      label: "璧山区",
      value: "500120"
    },
    {
      city: "市辖区",
      label: "铜梁区",
      value: "500151"
    },
    {
      city: "市辖区",
      label: "潼南区",
      value: "500152"
    },
    {
      city: "市辖区",
      label: "荣昌区",
      value: "500153"
    },
    {
      city: "市辖区",
      label: "开州区",
      value: "500154"
    }
  ],
  "500200": [{
      city: "县",
      label: "梁平县",
      value: "500228"
    },
    {
      city: "县",
      label: "城口县",
      value: "500229"
    },
    {
      city: "县",
      label: "丰都县",
      value: "500230"
    },
    {
      city: "县",
      label: "垫江县",
      value: "500231"
    },
    {
      city: "县",
      label: "武隆县",
      value: "500232"
    },
    {
      city: "县",
      label: "忠县",
      value: "500233"
    },
    {
      city: "县",
      label: "云阳县",
      value: "500235"
    },
    {
      city: "县",
      label: "奉节县",
      value: "500236"
    },
    {
      city: "县",
      label: "巫山县",
      value: "500237"
    },
    {
      city: "县",
      label: "巫溪县",
      value: "500238"
    },
    {
      city: "县",
      label: "石柱土家族自治县",
      value: "500240"
    },
    {
      city: "县",
      label: "秀山土家族苗族自治县",
      value: "500241"
    },
    {
      city: "县",
      label: "酉阳土家族苗族自治县",
      value: "500242"
    },
    {
      city: "县",
      label: "彭水苗族土家族自治县",
      value: "500243"
    }
  ],
  "510100": [{
      city: "成都市",
      label: "市辖区",
      value: "510101"
    },
    {
      city: "成都市",
      label: "锦江区",
      value: "510104"
    },
    {
      city: "成都市",
      label: "青羊区",
      value: "510105"
    },
    {
      city: "成都市",
      label: "金牛区",
      value: "510106"
    },
    {
      city: "成都市",
      label: "武侯区",
      value: "510107"
    },
    {
      city: "成都市",
      label: "成华区",
      value: "510108"
    },
    {
      city: "成都市",
      label: "龙泉驿区",
      value: "510112"
    },
    {
      city: "成都市",
      label: "青白江区",
      value: "510113"
    },
    {
      city: "成都市",
      label: "新都区",
      value: "510114"
    },
    {
      city: "成都市",
      label: "温江区",
      value: "510115"
    },
    {
      city: "成都市",
      label: "双流区",
      value: "510116"
    },
    {
      city: "成都市",
      label: "金堂县",
      value: "510121"
    },
    {
      city: "成都市",
      label: "郫县",
      value: "510124"
    },
    {
      city: "成都市",
      label: "大邑县",
      value: "510129"
    },
    {
      city: "成都市",
      label: "蒲江县",
      value: "510131"
    },
    {
      city: "成都市",
      label: "新津县",
      value: "510132"
    },
    {
      city: "成都市",
      label: "都江堰市",
      value: "510181"
    },
    {
      city: "成都市",
      label: "彭州市",
      value: "510182"
    },
    {
      city: "成都市",
      label: "邛崃市",
      value: "510183"
    },
    {
      city: "成都市",
      label: "崇州市",
      value: "510184"
    },
    {
      city: "成都市",
      label: "简阳市",
      value: "510185"
    }
  ],
  "510300": [{
      city: "自贡市",
      label: "市辖区",
      value: "510301"
    },
    {
      city: "自贡市",
      label: "自流井区",
      value: "510302"
    },
    {
      city: "自贡市",
      label: "贡井区",
      value: "510303"
    },
    {
      city: "自贡市",
      label: "大安区",
      value: "510304"
    },
    {
      city: "自贡市",
      label: "沿滩区",
      value: "510311"
    },
    {
      city: "自贡市",
      label: "荣县",
      value: "510321"
    },
    {
      city: "自贡市",
      label: "富顺县",
      value: "510322"
    }
  ],
  "510400": [{
      city: "攀枝花市",
      label: "市辖区",
      value: "510401"
    },
    {
      city: "攀枝花市",
      label: "东区",
      value: "510402"
    },
    {
      city: "攀枝花市",
      label: "西区",
      value: "510403"
    },
    {
      city: "攀枝花市",
      label: "仁和区",
      value: "510411"
    },
    {
      city: "攀枝花市",
      label: "米易县",
      value: "510421"
    },
    {
      city: "攀枝花市",
      label: "盐边县",
      value: "510422"
    }
  ],
  "510500": [{
      city: "泸州市",
      label: "市辖区",
      value: "510501"
    },
    {
      city: "泸州市",
      label: "江阳区",
      value: "510502"
    },
    {
      city: "泸州市",
      label: "纳溪区",
      value: "510503"
    },
    {
      city: "泸州市",
      label: "龙马潭区",
      value: "510504"
    },
    {
      city: "泸州市",
      label: "泸县",
      value: "510521"
    },
    {
      city: "泸州市",
      label: "合江县",
      value: "510522"
    },
    {
      city: "泸州市",
      label: "叙永县",
      value: "510524"
    },
    {
      city: "泸州市",
      label: "古蔺县",
      value: "510525"
    }
  ],
  "510600": [{
      city: "德阳市",
      label: "市辖区",
      value: "510601"
    },
    {
      city: "德阳市",
      label: "旌阳区",
      value: "510603"
    },
    {
      city: "德阳市",
      label: "中江县",
      value: "510623"
    },
    {
      city: "德阳市",
      label: "罗江县",
      value: "510626"
    },
    {
      city: "德阳市",
      label: "广汉市",
      value: "510681"
    },
    {
      city: "德阳市",
      label: "什邡市",
      value: "510682"
    },
    {
      city: "德阳市",
      label: "绵竹市",
      value: "510683"
    }
  ],
  "510700": [{
      city: "绵阳市",
      label: "市辖区",
      value: "510701"
    },
    {
      city: "绵阳市",
      label: "涪城区",
      value: "510703"
    },
    {
      city: "绵阳市",
      label: "游仙区",
      value: "510704"
    },
    {
      city: "绵阳市",
      label: "安州区",
      value: "510705"
    },
    {
      city: "绵阳市",
      label: "三台县",
      value: "510722"
    },
    {
      city: "绵阳市",
      label: "盐亭县",
      value: "510723"
    },
    {
      city: "绵阳市",
      label: "梓潼县",
      value: "510725"
    },
    {
      city: "绵阳市",
      label: "北川羌族自治县",
      value: "510726"
    },
    {
      city: "绵阳市",
      label: "平武县",
      value: "510727"
    },
    {
      city: "绵阳市",
      label: "江油市",
      value: "510781"
    }
  ],
  "510800": [{
      city: "广元市",
      label: "市辖区",
      value: "510801"
    },
    {
      city: "广元市",
      label: "利州区",
      value: "510802"
    },
    {
      city: "广元市",
      label: "昭化区",
      value: "510811"
    },
    {
      city: "广元市",
      label: "朝天区",
      value: "510812"
    },
    {
      city: "广元市",
      label: "旺苍县",
      value: "510821"
    },
    {
      city: "广元市",
      label: "青川县",
      value: "510822"
    },
    {
      city: "广元市",
      label: "剑阁县",
      value: "510823"
    },
    {
      city: "广元市",
      label: "苍溪县",
      value: "510824"
    }
  ],
  "510900": [{
      city: "遂宁市",
      label: "市辖区",
      value: "510901"
    },
    {
      city: "遂宁市",
      label: "船山区",
      value: "510903"
    },
    {
      city: "遂宁市",
      label: "安居区",
      value: "510904"
    },
    {
      city: "遂宁市",
      label: "蓬溪县",
      value: "510921"
    },
    {
      city: "遂宁市",
      label: "射洪县",
      value: "510922"
    },
    {
      city: "遂宁市",
      label: "大英县",
      value: "510923"
    }
  ],
  "511000": [{
      city: "内江市",
      label: "市辖区",
      value: "511001"
    },
    {
      city: "内江市",
      label: "市中区",
      value: "511002"
    },
    {
      city: "内江市",
      label: "东兴区",
      value: "511011"
    },
    {
      city: "内江市",
      label: "威远县",
      value: "511024"
    },
    {
      city: "内江市",
      label: "资中县",
      value: "511025"
    },
    {
      city: "内江市",
      label: "隆昌县",
      value: "511028"
    }
  ],
  "511100": [{
      city: "乐山市",
      label: "市辖区",
      value: "511101"
    },
    {
      city: "乐山市",
      label: "市中区",
      value: "511102"
    },
    {
      city: "乐山市",
      label: "沙湾区",
      value: "511111"
    },
    {
      city: "乐山市",
      label: "五通桥区",
      value: "511112"
    },
    {
      city: "乐山市",
      label: "金口河区",
      value: "511113"
    },
    {
      city: "乐山市",
      label: "犍为县",
      value: "511123"
    },
    {
      city: "乐山市",
      label: "井研县",
      value: "511124"
    },
    {
      city: "乐山市",
      label: "夹江县",
      value: "511126"
    },
    {
      city: "乐山市",
      label: "沐川县",
      value: "511129"
    },
    {
      city: "乐山市",
      label: "峨边彝族自治县",
      value: "511132"
    },
    {
      city: "乐山市",
      label: "马边彝族自治县",
      value: "511133"
    },
    {
      city: "乐山市",
      label: "峨眉山市",
      value: "511181"
    }
  ],
  "511300": [{
      city: "南充市",
      label: "市辖区",
      value: "511301"
    },
    {
      city: "南充市",
      label: "顺庆区",
      value: "511302"
    },
    {
      city: "南充市",
      label: "高坪区",
      value: "511303"
    },
    {
      city: "南充市",
      label: "嘉陵区",
      value: "511304"
    },
    {
      city: "南充市",
      label: "南部县",
      value: "511321"
    },
    {
      city: "南充市",
      label: "营山县",
      value: "511322"
    },
    {
      city: "南充市",
      label: "蓬安县",
      value: "511323"
    },
    {
      city: "南充市",
      label: "仪陇县",
      value: "511324"
    },
    {
      city: "南充市",
      label: "西充县",
      value: "511325"
    },
    {
      city: "南充市",
      label: "阆中市",
      value: "511381"
    }
  ],
  "511400": [{
      city: "眉山市",
      label: "市辖区",
      value: "511401"
    },
    {
      city: "眉山市",
      label: "东坡区",
      value: "511402"
    },
    {
      city: "眉山市",
      label: "彭山区",
      value: "511403"
    },
    {
      city: "眉山市",
      label: "仁寿县",
      value: "511421"
    },
    {
      city: "眉山市",
      label: "洪雅县",
      value: "511423"
    },
    {
      city: "眉山市",
      label: "丹棱县",
      value: "511424"
    },
    {
      city: "眉山市",
      label: "青神县",
      value: "511425"
    }
  ],
  "511500": [{
      city: "宜宾市",
      label: "市辖区",
      value: "511501"
    },
    {
      city: "宜宾市",
      label: "翠屏区",
      value: "511502"
    },
    {
      city: "宜宾市",
      label: "南溪区",
      value: "511503"
    },
    {
      city: "宜宾市",
      label: "宜宾县",
      value: "511521"
    },
    {
      city: "宜宾市",
      label: "江安县",
      value: "511523"
    },
    {
      city: "宜宾市",
      label: "长宁县",
      value: "511524"
    },
    {
      city: "宜宾市",
      label: "高县",
      value: "511525"
    },
    {
      city: "宜宾市",
      label: "珙县",
      value: "511526"
    },
    {
      city: "宜宾市",
      label: "筠连县",
      value: "511527"
    },
    {
      city: "宜宾市",
      label: "兴文县",
      value: "511528"
    },
    {
      city: "宜宾市",
      label: "屏山县",
      value: "511529"
    }
  ],
  "511600": [{
      city: "广安市",
      label: "市辖区",
      value: "511601"
    },
    {
      city: "广安市",
      label: "广安区",
      value: "511602"
    },
    {
      city: "广安市",
      label: "前锋区",
      value: "511603"
    },
    {
      city: "广安市",
      label: "岳池县",
      value: "511621"
    },
    {
      city: "广安市",
      label: "武胜县",
      value: "511622"
    },
    {
      city: "广安市",
      label: "邻水县",
      value: "511623"
    },
    {
      city: "广安市",
      label: "华蓥市",
      value: "511681"
    }
  ],
  "511700": [{
      city: "达州市",
      label: "市辖区",
      value: "511701"
    },
    {
      city: "达州市",
      label: "通川区",
      value: "511702"
    },
    {
      city: "达州市",
      label: "达川区",
      value: "511703"
    },
    {
      city: "达州市",
      label: "宣汉县",
      value: "511722"
    },
    {
      city: "达州市",
      label: "开江县",
      value: "511723"
    },
    {
      city: "达州市",
      label: "大竹县",
      value: "511724"
    },
    {
      city: "达州市",
      label: "渠县",
      value: "511725"
    },
    {
      city: "达州市",
      label: "万源市",
      value: "511781"
    }
  ],
  "511800": [{
      city: "雅安市",
      label: "市辖区",
      value: "511801"
    },
    {
      city: "雅安市",
      label: "雨城区",
      value: "511802"
    },
    {
      city: "雅安市",
      label: "名山区",
      value: "511803"
    },
    {
      city: "雅安市",
      label: "荥经县",
      value: "511822"
    },
    {
      city: "雅安市",
      label: "汉源县",
      value: "511823"
    },
    {
      city: "雅安市",
      label: "石棉县",
      value: "511824"
    },
    {
      city: "雅安市",
      label: "天全县",
      value: "511825"
    },
    {
      city: "雅安市",
      label: "芦山县",
      value: "511826"
    },
    {
      city: "雅安市",
      label: "宝兴县",
      value: "511827"
    }
  ],
  "511900": [{
      city: "巴中市",
      label: "市辖区",
      value: "511901"
    },
    {
      city: "巴中市",
      label: "巴州区",
      value: "511902"
    },
    {
      city: "巴中市",
      label: "恩阳区",
      value: "511903"
    },
    {
      city: "巴中市",
      label: "通江县",
      value: "511921"
    },
    {
      city: "巴中市",
      label: "南江县",
      value: "511922"
    },
    {
      city: "巴中市",
      label: "平昌县",
      value: "511923"
    }
  ],
  "512000": [{
      city: "资阳市",
      label: "市辖区",
      value: "512001"
    },
    {
      city: "资阳市",
      label: "雁江区",
      value: "512002"
    },
    {
      city: "资阳市",
      label: "安岳县",
      value: "512021"
    },
    {
      city: "资阳市",
      label: "乐至县",
      value: "512022"
    }
  ],
  "513200": [{
      city: "阿坝藏族羌族自治州",
      label: "马尔康市",
      value: "513201"
    },
    {
      city: "阿坝藏族羌族自治州",
      label: "汶川县",
      value: "513221"
    },
    {
      city: "阿坝藏族羌族自治州",
      label: "理县",
      value: "513222"
    },
    {
      city: "阿坝藏族羌族自治州",
      label: "茂县",
      value: "513223"
    },
    {
      city: "阿坝藏族羌族自治州",
      label: "松潘县",
      value: "513224"
    },
    {
      city: "阿坝藏族羌族自治州",
      label: "九寨沟县",
      value: "513225"
    },
    {
      city: "阿坝藏族羌族自治州",
      label: "金川县",
      value: "513226"
    },
    {
      city: "阿坝藏族羌族自治州",
      label: "小金县",
      value: "513227"
    },
    {
      city: "阿坝藏族羌族自治州",
      label: "黑水县",
      value: "513228"
    },
    {
      city: "阿坝藏族羌族自治州",
      label: "壤塘县",
      value: "513230"
    },
    {
      city: "阿坝藏族羌族自治州",
      label: "阿坝县",
      value: "513231"
    },
    {
      city: "阿坝藏族羌族自治州",
      label: "若尔盖县",
      value: "513232"
    },
    {
      city: "阿坝藏族羌族自治州",
      label: "红原县",
      value: "513233"
    }
  ],
  "513300": [{
      city: "甘孜藏族自治州",
      label: "康定市",
      value: "513301"
    },
    {
      city: "甘孜藏族自治州",
      label: "泸定县",
      value: "513322"
    },
    {
      city: "甘孜藏族自治州",
      label: "丹巴县",
      value: "513323"
    },
    {
      city: "甘孜藏族自治州",
      label: "九龙县",
      value: "513324"
    },
    {
      city: "甘孜藏族自治州",
      label: "雅江县",
      value: "513325"
    },
    {
      city: "甘孜藏族自治州",
      label: "道孚县",
      value: "513326"
    },
    {
      city: "甘孜藏族自治州",
      label: "炉霍县",
      value: "513327"
    },
    {
      city: "甘孜藏族自治州",
      label: "甘孜县",
      value: "513328"
    },
    {
      city: "甘孜藏族自治州",
      label: "新龙县",
      value: "513329"
    },
    {
      city: "甘孜藏族自治州",
      label: "德格县",
      value: "513330"
    },
    {
      city: "甘孜藏族自治州",
      label: "白玉县",
      value: "513331"
    },
    {
      city: "甘孜藏族自治州",
      label: "石渠县",
      value: "513332"
    },
    {
      city: "甘孜藏族自治州",
      label: "色达县",
      value: "513333"
    },
    {
      city: "甘孜藏族自治州",
      label: "理塘县",
      value: "513334"
    },
    {
      city: "甘孜藏族自治州",
      label: "巴塘县",
      value: "513335"
    },
    {
      city: "甘孜藏族自治州",
      label: "乡城县",
      value: "513336"
    },
    {
      city: "甘孜藏族自治州",
      label: "稻城县",
      value: "513337"
    },
    {
      city: "甘孜藏族自治州",
      label: "得荣县",
      value: "513338"
    }
  ],
  "513400": [{
      city: "凉山彝族自治州",
      label: "西昌市",
      value: "513401"
    },
    {
      city: "凉山彝族自治州",
      label: "木里藏族自治县",
      value: "513422"
    },
    {
      city: "凉山彝族自治州",
      label: "盐源县",
      value: "513423"
    },
    {
      city: "凉山彝族自治州",
      label: "德昌县",
      value: "513424"
    },
    {
      city: "凉山彝族自治州",
      label: "会理县",
      value: "513425"
    },
    {
      city: "凉山彝族自治州",
      label: "会东县",
      value: "513426"
    },
    {
      city: "凉山彝族自治州",
      label: "宁南县",
      value: "513427"
    },
    {
      city: "凉山彝族自治州",
      label: "普格县",
      value: "513428"
    },
    {
      city: "凉山彝族自治州",
      label: "布拖县",
      value: "513429"
    },
    {
      city: "凉山彝族自治州",
      label: "金阳县",
      value: "513430"
    },
    {
      city: "凉山彝族自治州",
      label: "昭觉县",
      value: "513431"
    },
    {
      city: "凉山彝族自治州",
      label: "喜德县",
      value: "513432"
    },
    {
      city: "凉山彝族自治州",
      label: "冕宁县",
      value: "513433"
    },
    {
      city: "凉山彝族自治州",
      label: "越西县",
      value: "513434"
    },
    {
      city: "凉山彝族自治州",
      label: "甘洛县",
      value: "513435"
    },
    {
      city: "凉山彝族自治州",
      label: "美姑县",
      value: "513436"
    },
    {
      city: "凉山彝族自治州",
      label: "雷波县",
      value: "513437"
    }
  ],
  "520100": [{
      city: "贵阳市",
      label: "市辖区",
      value: "520101"
    },
    {
      city: "贵阳市",
      label: "南明区",
      value: "520102"
    },
    {
      city: "贵阳市",
      label: "云岩区",
      value: "520103"
    },
    {
      city: "贵阳市",
      label: "花溪区",
      value: "520111"
    },
    {
      city: "贵阳市",
      label: "乌当区",
      value: "520112"
    },
    {
      city: "贵阳市",
      label: "白云区",
      value: "520113"
    },
    {
      city: "贵阳市",
      label: "观山湖区",
      value: "520115"
    },
    {
      city: "贵阳市",
      label: "开阳县",
      value: "520121"
    },
    {
      city: "贵阳市",
      label: "息烽县",
      value: "520122"
    },
    {
      city: "贵阳市",
      label: "修文县",
      value: "520123"
    },
    {
      city: "贵阳市",
      label: "清镇市",
      value: "520181"
    }
  ],
  "520200": [{
      city: "六盘水市",
      label: "钟山区",
      value: "520201"
    },
    {
      city: "六盘水市",
      label: "六枝特区",
      value: "520203"
    },
    {
      city: "六盘水市",
      label: "水城县",
      value: "520221"
    },
    {
      city: "六盘水市",
      label: "盘县",
      value: "520222"
    }
  ],
  "520300": [{
      city: "遵义市",
      label: "市辖区",
      value: "520301"
    },
    {
      city: "遵义市",
      label: "红花岗区",
      value: "520302"
    },
    {
      city: "遵义市",
      label: "汇川区",
      value: "520303"
    },
    {
      city: "遵义市",
      label: "播州区",
      value: "520304"
    },
    {
      city: "遵义市",
      label: "桐梓县",
      value: "520322"
    },
    {
      city: "遵义市",
      label: "绥阳县",
      value: "520323"
    },
    {
      city: "遵义市",
      label: "正安县",
      value: "520324"
    },
    {
      city: "遵义市",
      label: "道真仡佬族苗族自治县",
      value: "520325"
    },
    {
      city: "遵义市",
      label: "务川仡佬族苗族自治县",
      value: "520326"
    },
    {
      city: "遵义市",
      label: "凤冈县",
      value: "520327"
    },
    {
      city: "遵义市",
      label: "湄潭县",
      value: "520328"
    },
    {
      city: "遵义市",
      label: "余庆县",
      value: "520329"
    },
    {
      city: "遵义市",
      label: "习水县",
      value: "520330"
    },
    {
      city: "遵义市",
      label: "赤水市",
      value: "520381"
    },
    {
      city: "遵义市",
      label: "仁怀市",
      value: "520382"
    }
  ],
  "520400": [{
      city: "安顺市",
      label: "市辖区",
      value: "520401"
    },
    {
      city: "安顺市",
      label: "西秀区",
      value: "520402"
    },
    {
      city: "安顺市",
      label: "平坝区",
      value: "520403"
    },
    {
      city: "安顺市",
      label: "普定县",
      value: "520422"
    },
    {
      city: "安顺市",
      label: "镇宁布依族苗族自治县",
      value: "520423"
    },
    {
      city: "安顺市",
      label: "关岭布依族苗族自治县",
      value: "520424"
    },
    {
      city: "安顺市",
      label: "紫云苗族布依族自治县",
      value: "520425"
    }
  ],
  "520500": [{
      city: "毕节市",
      label: "市辖区",
      value: "520501"
    },
    {
      city: "毕节市",
      label: "七星关区",
      value: "520502"
    },
    {
      city: "毕节市",
      label: "大方县",
      value: "520521"
    },
    {
      city: "毕节市",
      label: "黔西县",
      value: "520522"
    },
    {
      city: "毕节市",
      label: "金沙县",
      value: "520523"
    },
    {
      city: "毕节市",
      label: "织金县",
      value: "520524"
    },
    {
      city: "毕节市",
      label: "纳雍县",
      value: "520525"
    },
    {
      city: "毕节市",
      label: "威宁彝族回族苗族自治县",
      value: "520526"
    },
    {
      city: "毕节市",
      label: "赫章县",
      value: "520527"
    }
  ],
  "520600": [{
      city: "铜仁市",
      label: "市辖区",
      value: "520601"
    },
    {
      city: "铜仁市",
      label: "碧江区",
      value: "520602"
    },
    {
      city: "铜仁市",
      label: "万山区",
      value: "520603"
    },
    {
      city: "铜仁市",
      label: "江口县",
      value: "520621"
    },
    {
      city: "铜仁市",
      label: "玉屏侗族自治县",
      value: "520622"
    },
    {
      city: "铜仁市",
      label: "石阡县",
      value: "520623"
    },
    {
      city: "铜仁市",
      label: "思南县",
      value: "520624"
    },
    {
      city: "铜仁市",
      label: "印江土家族苗族自治县",
      value: "520625"
    },
    {
      city: "铜仁市",
      label: "德江县",
      value: "520626"
    },
    {
      city: "铜仁市",
      label: "沿河土家族自治县",
      value: "520627"
    },
    {
      city: "铜仁市",
      label: "松桃苗族自治县",
      value: "520628"
    }
  ],
  "522300": [{
      city: "黔西南布依族苗族自治州",
      label: "兴义市",
      value: "522301"
    },
    {
      city: "黔西南布依族苗族自治州",
      label: "兴仁县",
      value: "522322"
    },
    {
      city: "黔西南布依族苗族自治州",
      label: "普安县",
      value: "522323"
    },
    {
      city: "黔西南布依族苗族自治州",
      label: "晴隆县",
      value: "522324"
    },
    {
      city: "黔西南布依族苗族自治州",
      label: "贞丰县",
      value: "522325"
    },
    {
      city: "黔西南布依族苗族自治州",
      label: "望谟县",
      value: "522326"
    },
    {
      city: "黔西南布依族苗族自治州",
      label: "册亨县",
      value: "522327"
    },
    {
      city: "黔西南布依族苗族自治州",
      label: "安龙县",
      value: "522328"
    }
  ],
  "522600": [{
      city: "黔东南苗族侗族自治州",
      label: "凯里市",
      value: "522601"
    },
    {
      city: "黔东南苗族侗族自治州",
      label: "黄平县",
      value: "522622"
    },
    {
      city: "黔东南苗族侗族自治州",
      label: "施秉县",
      value: "522623"
    },
    {
      city: "黔东南苗族侗族自治州",
      label: "三穗县",
      value: "522624"
    },
    {
      city: "黔东南苗族侗族自治州",
      label: "镇远县",
      value: "522625"
    },
    {
      city: "黔东南苗族侗族自治州",
      label: "岑巩县",
      value: "522626"
    },
    {
      city: "黔东南苗族侗族自治州",
      label: "天柱县",
      value: "522627"
    },
    {
      city: "黔东南苗族侗族自治州",
      label: "锦屏县",
      value: "522628"
    },
    {
      city: "黔东南苗族侗族自治州",
      label: "剑河县",
      value: "522629"
    },
    {
      city: "黔东南苗族侗族自治州",
      label: "台江县",
      value: "522630"
    },
    {
      city: "黔东南苗族侗族自治州",
      label: "黎平县",
      value: "522631"
    },
    {
      city: "黔东南苗族侗族自治州",
      label: "榕江县",
      value: "522632"
    },
    {
      city: "黔东南苗族侗族自治州",
      label: "从江县",
      value: "522633"
    },
    {
      city: "黔东南苗族侗族自治州",
      label: "雷山县",
      value: "522634"
    },
    {
      city: "黔东南苗族侗族自治州",
      label: "麻江县",
      value: "522635"
    },
    {
      city: "黔东南苗族侗族自治州",
      label: "丹寨县",
      value: "522636"
    }
  ],
  "522700": [{
      city: "黔南布依族苗族自治州",
      label: "都匀市",
      value: "522701"
    },
    {
      city: "黔南布依族苗族自治州",
      label: "福泉市",
      value: "522702"
    },
    {
      city: "黔南布依族苗族自治州",
      label: "荔波县",
      value: "522722"
    },
    {
      city: "黔南布依族苗族自治州",
      label: "贵定县",
      value: "522723"
    },
    {
      city: "黔南布依族苗族自治州",
      label: "瓮安县",
      value: "522725"
    },
    {
      city: "黔南布依族苗族自治州",
      label: "独山县",
      value: "522726"
    },
    {
      city: "黔南布依族苗族自治州",
      label: "平塘县",
      value: "522727"
    },
    {
      city: "黔南布依族苗族自治州",
      label: "罗甸县",
      value: "522728"
    },
    {
      city: "黔南布依族苗族自治州",
      label: "长顺县",
      value: "522729"
    },
    {
      city: "黔南布依族苗族自治州",
      label: "龙里县",
      value: "522730"
    },
    {
      city: "黔南布依族苗族自治州",
      label: "惠水县",
      value: "522731"
    },
    {
      city: "黔南布依族苗族自治州",
      label: "三都水族自治县",
      value: "522732"
    }
  ],
  "530100": [{
      city: "昆明市",
      label: "市辖区",
      value: "530101"
    },
    {
      city: "昆明市",
      label: "五华区",
      value: "530102"
    },
    {
      city: "昆明市",
      label: "盘龙区",
      value: "530103"
    },
    {
      city: "昆明市",
      label: "官渡区",
      value: "530111"
    },
    {
      city: "昆明市",
      label: "西山区",
      value: "530112"
    },
    {
      city: "昆明市",
      label: "东川区",
      value: "530113"
    },
    {
      city: "昆明市",
      label: "呈贡区",
      value: "530114"
    },
    {
      city: "昆明市",
      label: "晋宁县",
      value: "530122"
    },
    {
      city: "昆明市",
      label: "富民县",
      value: "530124"
    },
    {
      city: "昆明市",
      label: "宜良县",
      value: "530125"
    },
    {
      city: "昆明市",
      label: "石林彝族自治县",
      value: "530126"
    },
    {
      city: "昆明市",
      label: "嵩明县",
      value: "530127"
    },
    {
      city: "昆明市",
      label: "禄劝彝族苗族自治县",
      value: "530128"
    },
    {
      city: "昆明市",
      label: "寻甸回族彝族自治县",
      value: "530129"
    },
    {
      city: "昆明市",
      label: "安宁市",
      value: "530181"
    }
  ],
  "530300": [{
      city: "曲靖市",
      label: "市辖区",
      value: "530301"
    },
    {
      city: "曲靖市",
      label: "麒麟区",
      value: "530302"
    },
    {
      city: "曲靖市",
      label: "沾益区",
      value: "530303"
    },
    {
      city: "曲靖市",
      label: "马龙县",
      value: "530321"
    },
    {
      city: "曲靖市",
      label: "陆良县",
      value: "530322"
    },
    {
      city: "曲靖市",
      label: "师宗县",
      value: "530323"
    },
    {
      city: "曲靖市",
      label: "罗平县",
      value: "530324"
    },
    {
      city: "曲靖市",
      label: "富源县",
      value: "530325"
    },
    {
      city: "曲靖市",
      label: "会泽县",
      value: "530326"
    },
    {
      city: "曲靖市",
      label: "宣威市",
      value: "530381"
    }
  ],
  "530400": [{
      city: "玉溪市",
      label: "市辖区",
      value: "530401"
    },
    {
      city: "玉溪市",
      label: "红塔区",
      value: "530402"
    },
    {
      city: "玉溪市",
      label: "江川区",
      value: "530403"
    },
    {
      city: "玉溪市",
      label: "澄江县",
      value: "530422"
    },
    {
      city: "玉溪市",
      label: "通海县",
      value: "530423"
    },
    {
      city: "玉溪市",
      label: "华宁县",
      value: "530424"
    },
    {
      city: "玉溪市",
      label: "易门县",
      value: "530425"
    },
    {
      city: "玉溪市",
      label: "峨山彝族自治县",
      value: "530426"
    },
    {
      city: "玉溪市",
      label: "新平彝族傣族自治县",
      value: "530427"
    },
    {
      city: "玉溪市",
      label: "元江哈尼族彝族傣族自治县",
      value: "530428"
    }
  ],
  "530500": [{
      city: "保山市",
      label: "市辖区",
      value: "530501"
    },
    {
      city: "保山市",
      label: "隆阳区",
      value: "530502"
    },
    {
      city: "保山市",
      label: "施甸县",
      value: "530521"
    },
    {
      city: "保山市",
      label: "龙陵县",
      value: "530523"
    },
    {
      city: "保山市",
      label: "昌宁县",
      value: "530524"
    },
    {
      city: "保山市",
      label: "腾冲市",
      value: "530581"
    }
  ],
  "530600": [{
      city: "昭通市",
      label: "市辖区",
      value: "530601"
    },
    {
      city: "昭通市",
      label: "昭阳区",
      value: "530602"
    },
    {
      city: "昭通市",
      label: "鲁甸县",
      value: "530621"
    },
    {
      city: "昭通市",
      label: "巧家县",
      value: "530622"
    },
    {
      city: "昭通市",
      label: "盐津县",
      value: "530623"
    },
    {
      city: "昭通市",
      label: "大关县",
      value: "530624"
    },
    {
      city: "昭通市",
      label: "永善县",
      value: "530625"
    },
    {
      city: "昭通市",
      label: "绥江县",
      value: "530626"
    },
    {
      city: "昭通市",
      label: "镇雄县",
      value: "530627"
    },
    {
      city: "昭通市",
      label: "彝良县",
      value: "530628"
    },
    {
      city: "昭通市",
      label: "威信县",
      value: "530629"
    },
    {
      city: "昭通市",
      label: "水富县",
      value: "530630"
    }
  ],
  "530700": [{
      city: "丽江市",
      label: "市辖区",
      value: "530701"
    },
    {
      city: "丽江市",
      label: "古城区",
      value: "530702"
    },
    {
      city: "丽江市",
      label: "玉龙纳西族自治县",
      value: "530721"
    },
    {
      city: "丽江市",
      label: "永胜县",
      value: "530722"
    },
    {
      city: "丽江市",
      label: "华坪县",
      value: "530723"
    },
    {
      city: "丽江市",
      label: "宁蒗彝族自治县",
      value: "530724"
    }
  ],
  "530800": [{
      city: "普洱市",
      label: "市辖区",
      value: "530801"
    },
    {
      city: "普洱市",
      label: "思茅区",
      value: "530802"
    },
    {
      city: "普洱市",
      label: "宁洱哈尼族彝族自治县",
      value: "530821"
    },
    {
      city: "普洱市",
      label: "墨江哈尼族自治县",
      value: "530822"
    },
    {
      city: "普洱市",
      label: "景东彝族自治县",
      value: "530823"
    },
    {
      city: "普洱市",
      label: "景谷傣族彝族自治县",
      value: "530824"
    },
    {
      city: "普洱市",
      label: "镇沅彝族哈尼族拉祜族自治县",
      value: "530825"
    },
    {
      city: "普洱市",
      label: "江城哈尼族彝族自治县",
      value: "530826"
    },
    {
      city: "普洱市",
      label: "孟连傣族拉祜族佤族自治县",
      value: "530827"
    },
    {
      city: "普洱市",
      label: "澜沧拉祜族自治县",
      value: "530828"
    },
    {
      city: "普洱市",
      label: "西盟佤族自治县",
      value: "530829"
    }
  ],
  "530900": [{
      city: "临沧市",
      label: "市辖区",
      value: "530901"
    },
    {
      city: "临沧市",
      label: "临翔区",
      value: "530902"
    },
    {
      city: "临沧市",
      label: "凤庆县",
      value: "530921"
    },
    {
      city: "临沧市",
      label: "云县",
      value: "530922"
    },
    {
      city: "临沧市",
      label: "永德县",
      value: "530923"
    },
    {
      city: "临沧市",
      label: "镇康县",
      value: "530924"
    },
    {
      city: "临沧市",
      label: "双江拉祜族佤族布朗族傣族自治县",
      value: "530925"
    },
    {
      city: "临沧市",
      label: "耿马傣族佤族自治县",
      value: "530926"
    },
    {
      city: "临沧市",
      label: "沧源佤族自治县",
      value: "530927"
    }
  ],
  "532300": [{
      city: "楚雄彝族自治州",
      label: "楚雄市",
      value: "532301"
    },
    {
      city: "楚雄彝族自治州",
      label: "双柏县",
      value: "532322"
    },
    {
      city: "楚雄彝族自治州",
      label: "牟定县",
      value: "532323"
    },
    {
      city: "楚雄彝族自治州",
      label: "南华县",
      value: "532324"
    },
    {
      city: "楚雄彝族自治州",
      label: "姚安县",
      value: "532325"
    },
    {
      city: "楚雄彝族自治州",
      label: "大姚县",
      value: "532326"
    },
    {
      city: "楚雄彝族自治州",
      label: "永仁县",
      value: "532327"
    },
    {
      city: "楚雄彝族自治州",
      label: "元谋县",
      value: "532328"
    },
    {
      city: "楚雄彝族自治州",
      label: "武定县",
      value: "532329"
    },
    {
      city: "楚雄彝族自治州",
      label: "禄丰县",
      value: "532331"
    }
  ],
  "532500": [{
      city: "红河哈尼族彝族自治州",
      label: "个旧市",
      value: "532501"
    },
    {
      city: "红河哈尼族彝族自治州",
      label: "开远市",
      value: "532502"
    },
    {
      city: "红河哈尼族彝族自治州",
      label: "蒙自市",
      value: "532503"
    },
    {
      city: "红河哈尼族彝族自治州",
      label: "弥勒市",
      value: "532504"
    },
    {
      city: "红河哈尼族彝族自治州",
      label: "屏边苗族自治县",
      value: "532523"
    },
    {
      city: "红河哈尼族彝族自治州",
      label: "建水县",
      value: "532524"
    },
    {
      city: "红河哈尼族彝族自治州",
      label: "石屏县",
      value: "532525"
    },
    {
      city: "红河哈尼族彝族自治州",
      label: "泸西县",
      value: "532527"
    },
    {
      city: "红河哈尼族彝族自治州",
      label: "元阳县",
      value: "532528"
    },
    {
      city: "红河哈尼族彝族自治州",
      label: "红河县",
      value: "532529"
    },
    {
      city: "红河哈尼族彝族自治州",
      label: "金平苗族瑶族傣族自治县",
      value: "532530"
    },
    {
      city: "红河哈尼族彝族自治州",
      label: "绿春县",
      value: "532531"
    },
    {
      city: "红河哈尼族彝族自治州",
      label: "河口瑶族自治县",
      value: "532532"
    }
  ],
  "532600": [{
      city: "文山壮族苗族自治州",
      label: "文山市",
      value: "532601"
    },
    {
      city: "文山壮族苗族自治州",
      label: "砚山县",
      value: "532622"
    },
    {
      city: "文山壮族苗族自治州",
      label: "西畴县",
      value: "532623"
    },
    {
      city: "文山壮族苗族自治州",
      label: "麻栗坡县",
      value: "532624"
    },
    {
      city: "文山壮族苗族自治州",
      label: "马关县",
      value: "532625"
    },
    {
      city: "文山壮族苗族自治州",
      label: "丘北县",
      value: "532626"
    },
    {
      city: "文山壮族苗族自治州",
      label: "广南县",
      value: "532627"
    },
    {
      city: "文山壮族苗族自治州",
      label: "富宁县",
      value: "532628"
    }
  ],
  "532800": [{
      city: "西双版纳傣族自治州",
      label: "景洪市",
      value: "532801"
    },
    {
      city: "西双版纳傣族自治州",
      label: "勐海县",
      value: "532822"
    },
    {
      city: "西双版纳傣族自治州",
      label: "勐腊县",
      value: "532823"
    }
  ],
  "532900": [{
      city: "大理白族自治州",
      label: "大理市",
      value: "532901"
    },
    {
      city: "大理白族自治州",
      label: "漾濞彝族自治县",
      value: "532922"
    },
    {
      city: "大理白族自治州",
      label: "祥云县",
      value: "532923"
    },
    {
      city: "大理白族自治州",
      label: "宾川县",
      value: "532924"
    },
    {
      city: "大理白族自治州",
      label: "弥渡县",
      value: "532925"
    },
    {
      city: "大理白族自治州",
      label: "南涧彝族自治县",
      value: "532926"
    },
    {
      city: "大理白族自治州",
      label: "巍山彝族回族自治县",
      value: "532927"
    },
    {
      city: "大理白族自治州",
      label: "永平县",
      value: "532928"
    },
    {
      city: "大理白族自治州",
      label: "云龙县",
      value: "532929"
    },
    {
      city: "大理白族自治州",
      label: "洱源县",
      value: "532930"
    },
    {
      city: "大理白族自治州",
      label: "剑川县",
      value: "532931"
    },
    {
      city: "大理白族自治州",
      label: "鹤庆县",
      value: "532932"
    }
  ],
  "533100": [{
      city: "德宏傣族景颇族自治州",
      label: "瑞丽市",
      value: "533102"
    },
    {
      city: "德宏傣族景颇族自治州",
      label: "芒市",
      value: "533103"
    },
    {
      city: "德宏傣族景颇族自治州",
      label: "梁河县",
      value: "533122"
    },
    {
      city: "德宏傣族景颇族自治州",
      label: "盈江县",
      value: "533123"
    },
    {
      city: "德宏傣族景颇族自治州",
      label: "陇川县",
      value: "533124"
    }
  ],
  "533300": [{
      city: "怒江傈僳族自治州",
      label: "泸水市",
      value: "533301"
    },
    {
      city: "怒江傈僳族自治州",
      label: "福贡县",
      value: "533323"
    },
    {
      city: "怒江傈僳族自治州",
      label: "贡山独龙族怒族自治县",
      value: "533324"
    },
    {
      city: "怒江傈僳族自治州",
      label: "兰坪白族普米族自治县",
      value: "533325"
    }
  ],
  "533400": [{
      city: "迪庆藏族自治州",
      label: "香格里拉市",
      value: "533401"
    },
    {
      city: "迪庆藏族自治州",
      label: "德钦县",
      value: "533422"
    },
    {
      city: "迪庆藏族自治州",
      label: "维西傈僳族自治县",
      value: "533423"
    }
  ],
  "540100": [{
      city: "拉萨市",
      label: "市辖区",
      value: "540101"
    },
    {
      city: "拉萨市",
      label: "城关区",
      value: "540102"
    },
    {
      city: "拉萨市",
      label: "堆龙德庆区",
      value: "540103"
    },
    {
      city: "拉萨市",
      label: "林周县",
      value: "540121"
    },
    {
      city: "拉萨市",
      label: "当雄县",
      value: "540122"
    },
    {
      city: "拉萨市",
      label: "尼木县",
      value: "540123"
    },
    {
      city: "拉萨市",
      label: "曲水县",
      value: "540124"
    },
    {
      city: "拉萨市",
      label: "达孜县",
      value: "540126"
    },
    {
      city: "拉萨市",
      label: "墨竹工卡县",
      value: "540127"
    }
  ],
  "540200": [{
      city: "日喀则市",
      label: "桑珠孜区",
      value: "540202"
    },
    {
      city: "日喀则市",
      label: "南木林县",
      value: "540221"
    },
    {
      city: "日喀则市",
      label: "江孜县",
      value: "540222"
    },
    {
      city: "日喀则市",
      label: "定日县",
      value: "540223"
    },
    {
      city: "日喀则市",
      label: "萨迦县",
      value: "540224"
    },
    {
      city: "日喀则市",
      label: "拉孜县",
      value: "540225"
    },
    {
      city: "日喀则市",
      label: "昂仁县",
      value: "540226"
    },
    {
      city: "日喀则市",
      label: "谢通门县",
      value: "540227"
    },
    {
      city: "日喀则市",
      label: "白朗县",
      value: "540228"
    },
    {
      city: "日喀则市",
      label: "仁布县",
      value: "540229"
    },
    {
      city: "日喀则市",
      label: "康马县",
      value: "540230"
    },
    {
      city: "日喀则市",
      label: "定结县",
      value: "540231"
    },
    {
      city: "日喀则市",
      label: "仲巴县",
      value: "540232"
    },
    {
      city: "日喀则市",
      label: "亚东县",
      value: "540233"
    },
    {
      city: "日喀则市",
      label: "吉隆县",
      value: "540234"
    },
    {
      city: "日喀则市",
      label: "聂拉木县",
      value: "540235"
    },
    {
      city: "日喀则市",
      label: "萨嘎县",
      value: "540236"
    },
    {
      city: "日喀则市",
      label: "岗巴县",
      value: "540237"
    }
  ],
  "540300": [{
      city: "昌都市",
      label: "卡若区",
      value: "540302"
    },
    {
      city: "昌都市",
      label: "江达县",
      value: "540321"
    },
    {
      city: "昌都市",
      label: "贡觉县",
      value: "540322"
    },
    {
      city: "昌都市",
      label: "类乌齐县",
      value: "540323"
    },
    {
      city: "昌都市",
      label: "丁青县",
      value: "540324"
    },
    {
      city: "昌都市",
      label: "察雅县",
      value: "540325"
    },
    {
      city: "昌都市",
      label: "八宿县",
      value: "540326"
    },
    {
      city: "昌都市",
      label: "左贡县",
      value: "540327"
    },
    {
      city: "昌都市",
      label: "芒康县",
      value: "540328"
    },
    {
      city: "昌都市",
      label: "洛隆县",
      value: "540329"
    },
    {
      city: "昌都市",
      label: "边坝县",
      value: "540330"
    }
  ],
  "540400": [{
      city: "林芝市",
      label: "巴宜区",
      value: "540402"
    },
    {
      city: "林芝市",
      label: "工布江达县",
      value: "540421"
    },
    {
      city: "林芝市",
      label: "米林县",
      value: "540422"
    },
    {
      city: "林芝市",
      label: "墨脱县",
      value: "540423"
    },
    {
      city: "林芝市",
      label: "波密县",
      value: "540424"
    },
    {
      city: "林芝市",
      label: "察隅县",
      value: "540425"
    },
    {
      city: "林芝市",
      label: "朗县",
      value: "540426"
    }
  ],
  "540500": [{
      city: "山南市",
      label: "市辖区",
      value: "540501"
    },
    {
      city: "山南市",
      label: "乃东区",
      value: "540502"
    },
    {
      city: "山南市",
      label: "扎囊县",
      value: "540521"
    },
    {
      city: "山南市",
      label: "贡嘎县",
      value: "540522"
    },
    {
      city: "山南市",
      label: "桑日县",
      value: "540523"
    },
    {
      city: "山南市",
      label: "琼结县",
      value: "540524"
    },
    {
      city: "山南市",
      label: "曲松县",
      value: "540525"
    },
    {
      city: "山南市",
      label: "措美县",
      value: "540526"
    },
    {
      city: "山南市",
      label: "洛扎县",
      value: "540527"
    },
    {
      city: "山南市",
      label: "加查县",
      value: "540528"
    },
    {
      city: "山南市",
      label: "隆子县",
      value: "540529"
    },
    {
      city: "山南市",
      label: "错那县",
      value: "540530"
    },
    {
      city: "山南市",
      label: "浪卡子县",
      value: "540531"
    }
  ],
  "542400": [{
      city: "那曲地区",
      label: "那曲县",
      value: "542421"
    },
    {
      city: "那曲地区",
      label: "嘉黎县",
      value: "542422"
    },
    {
      city: "那曲地区",
      label: "比如县",
      value: "542423"
    },
    {
      city: "那曲地区",
      label: "聂荣县",
      value: "542424"
    },
    {
      city: "那曲地区",
      label: "安多县",
      value: "542425"
    },
    {
      city: "那曲地区",
      label: "申扎县",
      value: "542426"
    },
    {
      city: "那曲地区",
      label: "索县",
      value: "542427"
    },
    {
      city: "那曲地区",
      label: "班戈县",
      value: "542428"
    },
    {
      city: "那曲地区",
      label: "巴青县",
      value: "542429"
    },
    {
      city: "那曲地区",
      label: "尼玛县",
      value: "542430"
    },
    {
      city: "那曲地区",
      label: "双湖县",
      value: "542431"
    }
  ],
  "542500": [{
      city: "阿里地区",
      label: "普兰县",
      value: "542521"
    },
    {
      city: "阿里地区",
      label: "札达县",
      value: "542522"
    },
    {
      city: "阿里地区",
      label: "噶尔县",
      value: "542523"
    },
    {
      city: "阿里地区",
      label: "日土县",
      value: "542524"
    },
    {
      city: "阿里地区",
      label: "革吉县",
      value: "542525"
    },
    {
      city: "阿里地区",
      label: "改则县",
      value: "542526"
    },
    {
      city: "阿里地区",
      label: "措勤县",
      value: "542527"
    }
  ],
  "610100": [{
      city: "西安市",
      label: "市辖区",
      value: "610101"
    },
    {
      city: "西安市",
      label: "新城区",
      value: "610102"
    },
    {
      city: "西安市",
      label: "碑林区",
      value: "610103"
    },
    {
      city: "西安市",
      label: "莲湖区",
      value: "610104"
    },
    {
      city: "西安市",
      label: "灞桥区",
      value: "610111"
    },
    {
      city: "西安市",
      label: "未央区",
      value: "610112"
    },
    {
      city: "西安市",
      label: "雁塔区",
      value: "610113"
    },
    {
      city: "西安市",
      label: "阎良区",
      value: "610114"
    },
    {
      city: "西安市",
      label: "临潼区",
      value: "610115"
    },
    {
      city: "西安市",
      label: "长安区",
      value: "610116"
    },
    {
      city: "西安市",
      label: "高陵区",
      value: "610117"
    },
    {
      city: "西安市",
      label: "蓝田县",
      value: "610122"
    },
    {
      city: "西安市",
      label: "周至县",
      value: "610124"
    },
    {
      city: "西安市",
      label: "户县",
      value: "610125"
    }
  ],
  "610200": [{
      city: "铜川市",
      label: "市辖区",
      value: "610201"
    },
    {
      city: "铜川市",
      label: "王益区",
      value: "610202"
    },
    {
      city: "铜川市",
      label: "印台区",
      value: "610203"
    },
    {
      city: "铜川市",
      label: "耀州区",
      value: "610204"
    },
    {
      city: "铜川市",
      label: "宜君县",
      value: "610222"
    }
  ],
  "610300": [{
      city: "宝鸡市",
      label: "市辖区",
      value: "610301"
    },
    {
      city: "宝鸡市",
      label: "渭滨区",
      value: "610302"
    },
    {
      city: "宝鸡市",
      label: "金台区",
      value: "610303"
    },
    {
      city: "宝鸡市",
      label: "陈仓区",
      value: "610304"
    },
    {
      city: "宝鸡市",
      label: "凤翔县",
      value: "610322"
    },
    {
      city: "宝鸡市",
      label: "岐山县",
      value: "610323"
    },
    {
      city: "宝鸡市",
      label: "扶风县",
      value: "610324"
    },
    {
      city: "宝鸡市",
      label: "眉县",
      value: "610326"
    },
    {
      city: "宝鸡市",
      label: "陇县",
      value: "610327"
    },
    {
      city: "宝鸡市",
      label: "千阳县",
      value: "610328"
    },
    {
      city: "宝鸡市",
      label: "麟游县",
      value: "610329"
    },
    {
      city: "宝鸡市",
      label: "凤县",
      value: "610330"
    },
    {
      city: "宝鸡市",
      label: "太白县",
      value: "610331"
    }
  ],
  "610400": [{
      city: "咸阳市",
      label: "市辖区",
      value: "610401"
    },
    {
      city: "咸阳市",
      label: "秦都区",
      value: "610402"
    },
    {
      city: "咸阳市",
      label: "杨陵区",
      value: "610403"
    },
    {
      city: "咸阳市",
      label: "渭城区",
      value: "610404"
    },
    {
      city: "咸阳市",
      label: "三原县",
      value: "610422"
    },
    {
      city: "咸阳市",
      label: "泾阳县",
      value: "610423"
    },
    {
      city: "咸阳市",
      label: "乾县",
      value: "610424"
    },
    {
      city: "咸阳市",
      label: "礼泉县",
      value: "610425"
    },
    {
      city: "咸阳市",
      label: "永寿县",
      value: "610426"
    },
    {
      city: "咸阳市",
      label: "彬县",
      value: "610427"
    },
    {
      city: "咸阳市",
      label: "长武县",
      value: "610428"
    },
    {
      city: "咸阳市",
      label: "旬邑县",
      value: "610429"
    },
    {
      city: "咸阳市",
      label: "淳化县",
      value: "610430"
    },
    {
      city: "咸阳市",
      label: "武功县",
      value: "610431"
    },
    {
      city: "咸阳市",
      label: "兴平市",
      value: "610481"
    }
  ],
  "610500": [{
      city: "渭南市",
      label: "市辖区",
      value: "610501"
    },
    {
      city: "渭南市",
      label: "临渭区",
      value: "610502"
    },
    {
      city: "渭南市",
      label: "华州区",
      value: "610503"
    },
    {
      city: "渭南市",
      label: "潼关县",
      value: "610522"
    },
    {
      city: "渭南市",
      label: "大荔县",
      value: "610523"
    },
    {
      city: "渭南市",
      label: "合阳县",
      value: "610524"
    },
    {
      city: "渭南市",
      label: "澄城县",
      value: "610525"
    },
    {
      city: "渭南市",
      label: "蒲城县",
      value: "610526"
    },
    {
      city: "渭南市",
      label: "白水县",
      value: "610527"
    },
    {
      city: "渭南市",
      label: "富平县",
      value: "610528"
    },
    {
      city: "渭南市",
      label: "韩城市",
      value: "610581"
    },
    {
      city: "渭南市",
      label: "华阴市",
      value: "610582"
    }
  ],
  "610600": [{
      city: "延安市",
      label: "市辖区",
      value: "610601"
    },
    {
      city: "延安市",
      label: "宝塔区",
      value: "610602"
    },
    {
      city: "延安市",
      label: "安塞区",
      value: "610603"
    },
    {
      city: "延安市",
      label: "延长县",
      value: "610621"
    },
    {
      city: "延安市",
      label: "延川县",
      value: "610622"
    },
    {
      city: "延安市",
      label: "子长县",
      value: "610623"
    },
    {
      city: "延安市",
      label: "志丹县",
      value: "610625"
    },
    {
      city: "延安市",
      label: "吴起县",
      value: "610626"
    },
    {
      city: "延安市",
      label: "甘泉县",
      value: "610627"
    },
    {
      city: "延安市",
      label: "富县",
      value: "610628"
    },
    {
      city: "延安市",
      label: "洛川县",
      value: "610629"
    },
    {
      city: "延安市",
      label: "宜川县",
      value: "610630"
    },
    {
      city: "延安市",
      label: "黄龙县",
      value: "610631"
    },
    {
      city: "延安市",
      label: "黄陵县",
      value: "610632"
    }
  ],
  "610700": [{
      city: "汉中市",
      label: "市辖区",
      value: "610701"
    },
    {
      city: "汉中市",
      label: "汉台区",
      value: "610702"
    },
    {
      city: "汉中市",
      label: "南郑县",
      value: "610721"
    },
    {
      city: "汉中市",
      label: "城固县",
      value: "610722"
    },
    {
      city: "汉中市",
      label: "洋县",
      value: "610723"
    },
    {
      city: "汉中市",
      label: "西乡县",
      value: "610724"
    },
    {
      city: "汉中市",
      label: "勉县",
      value: "610725"
    },
    {
      city: "汉中市",
      label: "宁强县",
      value: "610726"
    },
    {
      city: "汉中市",
      label: "略阳县",
      value: "610727"
    },
    {
      city: "汉中市",
      label: "镇巴县",
      value: "610728"
    },
    {
      city: "汉中市",
      label: "留坝县",
      value: "610729"
    },
    {
      city: "汉中市",
      label: "佛坪县",
      value: "610730"
    }
  ],
  "610800": [{
      city: "榆林市",
      label: "市辖区",
      value: "610801"
    },
    {
      city: "榆林市",
      label: "榆阳区",
      value: "610802"
    },
    {
      city: "榆林市",
      label: "横山区",
      value: "610803"
    },
    {
      city: "榆林市",
      label: "神木县",
      value: "610821"
    },
    {
      city: "榆林市",
      label: "府谷县",
      value: "610822"
    },
    {
      city: "榆林市",
      label: "靖边县",
      value: "610824"
    },
    {
      city: "榆林市",
      label: "定边县",
      value: "610825"
    },
    {
      city: "榆林市",
      label: "绥德县",
      value: "610826"
    },
    {
      city: "榆林市",
      label: "米脂县",
      value: "610827"
    },
    {
      city: "榆林市",
      label: "佳县",
      value: "610828"
    },
    {
      city: "榆林市",
      label: "吴堡县",
      value: "610829"
    },
    {
      city: "榆林市",
      label: "清涧县",
      value: "610830"
    },
    {
      city: "榆林市",
      label: "子洲县",
      value: "610831"
    }
  ],
  "610900": [{
      city: "安康市",
      label: "市辖区",
      value: "610901"
    },
    {
      city: "安康市",
      label: "汉滨区",
      value: "610902"
    },
    {
      city: "安康市",
      label: "汉阴县",
      value: "610921"
    },
    {
      city: "安康市",
      label: "石泉县",
      value: "610922"
    },
    {
      city: "安康市",
      label: "宁陕县",
      value: "610923"
    },
    {
      city: "安康市",
      label: "紫阳县",
      value: "610924"
    },
    {
      city: "安康市",
      label: "岚皋县",
      value: "610925"
    },
    {
      city: "安康市",
      label: "平利县",
      value: "610926"
    },
    {
      city: "安康市",
      label: "镇坪县",
      value: "610927"
    },
    {
      city: "安康市",
      label: "旬阳县",
      value: "610928"
    },
    {
      city: "安康市",
      label: "白河县",
      value: "610929"
    }
  ],
  "611000": [{
      city: "商洛市",
      label: "市辖区",
      value: "611001"
    },
    {
      city: "商洛市",
      label: "商州区",
      value: "611002"
    },
    {
      city: "商洛市",
      label: "洛南县",
      value: "611021"
    },
    {
      city: "商洛市",
      label: "丹凤县",
      value: "611022"
    },
    {
      city: "商洛市",
      label: "商南县",
      value: "611023"
    },
    {
      city: "商洛市",
      label: "山阳县",
      value: "611024"
    },
    {
      city: "商洛市",
      label: "镇安县",
      value: "611025"
    },
    {
      city: "商洛市",
      label: "柞水县",
      value: "611026"
    }
  ],
  "620100": [{
      city: "兰州市",
      label: "市辖区",
      value: "620101"
    },
    {
      city: "兰州市",
      label: "城关区",
      value: "620102"
    },
    {
      city: "兰州市",
      label: "七里河区",
      value: "620103"
    },
    {
      city: "兰州市",
      label: "西固区",
      value: "620104"
    },
    {
      city: "兰州市",
      label: "安宁区",
      value: "620105"
    },
    {
      city: "兰州市",
      label: "红古区",
      value: "620111"
    },
    {
      city: "兰州市",
      label: "永登县",
      value: "620121"
    },
    {
      city: "兰州市",
      label: "皋兰县",
      value: "620122"
    },
    {
      city: "兰州市",
      label: "榆中县",
      value: "620123"
    }
  ],
  "620200": [{
    city: "嘉峪关市",
    label: "市辖区",
    value: "620201"
  }],
  "620300": [{
      city: "金昌市",
      label: "市辖区",
      value: "620301"
    },
    {
      city: "金昌市",
      label: "金川区",
      value: "620302"
    },
    {
      city: "金昌市",
      label: "永昌县",
      value: "620321"
    }
  ],
  "620400": [{
      city: "白银市",
      label: "市辖区",
      value: "620401"
    },
    {
      city: "白银市",
      label: "白银区",
      value: "620402"
    },
    {
      city: "白银市",
      label: "平川区",
      value: "620403"
    },
    {
      city: "白银市",
      label: "靖远县",
      value: "620421"
    },
    {
      city: "白银市",
      label: "会宁县",
      value: "620422"
    },
    {
      city: "白银市",
      label: "景泰县",
      value: "620423"
    }
  ],
  "620500": [{
      city: "天水市",
      label: "市辖区",
      value: "620501"
    },
    {
      city: "天水市",
      label: "秦州区",
      value: "620502"
    },
    {
      city: "天水市",
      label: "麦积区",
      value: "620503"
    },
    {
      city: "天水市",
      label: "清水县",
      value: "620521"
    },
    {
      city: "天水市",
      label: "秦安县",
      value: "620522"
    },
    {
      city: "天水市",
      label: "甘谷县",
      value: "620523"
    },
    {
      city: "天水市",
      label: "武山县",
      value: "620524"
    },
    {
      city: "天水市",
      label: "张家川回族自治县",
      value: "620525"
    }
  ],
  "620600": [{
      city: "武威市",
      label: "市辖区",
      value: "620601"
    },
    {
      city: "武威市",
      label: "凉州区",
      value: "620602"
    },
    {
      city: "武威市",
      label: "民勤县",
      value: "620621"
    },
    {
      city: "武威市",
      label: "古浪县",
      value: "620622"
    },
    {
      city: "武威市",
      label: "天祝藏族自治县",
      value: "620623"
    }
  ],
  "620700": [{
      city: "张掖市",
      label: "市辖区",
      value: "620701"
    },
    {
      city: "张掖市",
      label: "甘州区",
      value: "620702"
    },
    {
      city: "张掖市",
      label: "肃南裕固族自治县",
      value: "620721"
    },
    {
      city: "张掖市",
      label: "民乐县",
      value: "620722"
    },
    {
      city: "张掖市",
      label: "临泽县",
      value: "620723"
    },
    {
      city: "张掖市",
      label: "高台县",
      value: "620724"
    },
    {
      city: "张掖市",
      label: "山丹县",
      value: "620725"
    }
  ],
  "620800": [{
      city: "平凉市",
      label: "市辖区",
      value: "620801"
    },
    {
      city: "平凉市",
      label: "崆峒区",
      value: "620802"
    },
    {
      city: "平凉市",
      label: "泾川县",
      value: "620821"
    },
    {
      city: "平凉市",
      label: "灵台县",
      value: "620822"
    },
    {
      city: "平凉市",
      label: "崇信县",
      value: "620823"
    },
    {
      city: "平凉市",
      label: "华亭县",
      value: "620824"
    },
    {
      city: "平凉市",
      label: "庄浪县",
      value: "620825"
    },
    {
      city: "平凉市",
      label: "静宁县",
      value: "620826"
    }
  ],
  "620900": [{
      city: "酒泉市",
      label: "市辖区",
      value: "620901"
    },
    {
      city: "酒泉市",
      label: "肃州区",
      value: "620902"
    },
    {
      city: "酒泉市",
      label: "金塔县",
      value: "620921"
    },
    {
      city: "酒泉市",
      label: "瓜州县",
      value: "620922"
    },
    {
      city: "酒泉市",
      label: "肃北蒙古族自治县",
      value: "620923"
    },
    {
      city: "酒泉市",
      label: "阿克塞哈萨克族自治县",
      value: "620924"
    },
    {
      city: "酒泉市",
      label: "玉门市",
      value: "620981"
    },
    {
      city: "酒泉市",
      label: "敦煌市",
      value: "620982"
    }
  ],
  "621000": [{
      city: "庆阳市",
      label: "市辖区",
      value: "621001"
    },
    {
      city: "庆阳市",
      label: "西峰区",
      value: "621002"
    },
    {
      city: "庆阳市",
      label: "庆城县",
      value: "621021"
    },
    {
      city: "庆阳市",
      label: "环县",
      value: "621022"
    },
    {
      city: "庆阳市",
      label: "华池县",
      value: "621023"
    },
    {
      city: "庆阳市",
      label: "合水县",
      value: "621024"
    },
    {
      city: "庆阳市",
      label: "正宁县",
      value: "621025"
    },
    {
      city: "庆阳市",
      label: "宁县",
      value: "621026"
    },
    {
      city: "庆阳市",
      label: "镇原县",
      value: "621027"
    }
  ],
  "621100": [{
      city: "定西市",
      label: "市辖区",
      value: "621101"
    },
    {
      city: "定西市",
      label: "安定区",
      value: "621102"
    },
    {
      city: "定西市",
      label: "通渭县",
      value: "621121"
    },
    {
      city: "定西市",
      label: "陇西县",
      value: "621122"
    },
    {
      city: "定西市",
      label: "渭源县",
      value: "621123"
    },
    {
      city: "定西市",
      label: "临洮县",
      value: "621124"
    },
    {
      city: "定西市",
      label: "漳县",
      value: "621125"
    },
    {
      city: "定西市",
      label: "岷县",
      value: "621126"
    }
  ],
  "621200": [{
      city: "陇南市",
      label: "市辖区",
      value: "621201"
    },
    {
      city: "陇南市",
      label: "武都区",
      value: "621202"
    },
    {
      city: "陇南市",
      label: "成县",
      value: "621221"
    },
    {
      city: "陇南市",
      label: "文县",
      value: "621222"
    },
    {
      city: "陇南市",
      label: "宕昌县",
      value: "621223"
    },
    {
      city: "陇南市",
      label: "康县",
      value: "621224"
    },
    {
      city: "陇南市",
      label: "西和县",
      value: "621225"
    },
    {
      city: "陇南市",
      label: "礼县",
      value: "621226"
    },
    {
      city: "陇南市",
      label: "徽县",
      value: "621227"
    },
    {
      city: "陇南市",
      label: "两当县",
      value: "621228"
    }
  ],
  "622900": [{
      city: "临夏回族自治州",
      label: "临夏市",
      value: "622901"
    },
    {
      city: "临夏回族自治州",
      label: "临夏县",
      value: "622921"
    },
    {
      city: "临夏回族自治州",
      label: "康乐县",
      value: "622922"
    },
    {
      city: "临夏回族自治州",
      label: "永靖县",
      value: "622923"
    },
    {
      city: "临夏回族自治州",
      label: "广河县",
      value: "622924"
    },
    {
      city: "临夏回族自治州",
      label: "和政县",
      value: "622925"
    },
    {
      city: "临夏回族自治州",
      label: "东乡族自治县",
      value: "622926"
    },
    {
      city: "临夏回族自治州",
      label: "积石山保安族东乡族撒拉族自治县",
      value: "622927"
    }
  ],
  "623000": [{
      city: "甘南藏族自治州",
      label: "合作市",
      value: "623001"
    },
    {
      city: "甘南藏族自治州",
      label: "临潭县",
      value: "623021"
    },
    {
      city: "甘南藏族自治州",
      label: "卓尼县",
      value: "623022"
    },
    {
      city: "甘南藏族自治州",
      label: "舟曲县",
      value: "623023"
    },
    {
      city: "甘南藏族自治州",
      label: "迭部县",
      value: "623024"
    },
    {
      city: "甘南藏族自治州",
      label: "玛曲县",
      value: "623025"
    },
    {
      city: "甘南藏族自治州",
      label: "碌曲县",
      value: "623026"
    },
    {
      city: "甘南藏族自治州",
      label: "夏河县",
      value: "623027"
    }
  ],
  "630100": [{
      city: "西宁市",
      label: "市辖区",
      value: "630101"
    },
    {
      city: "西宁市",
      label: "城东区",
      value: "630102"
    },
    {
      city: "西宁市",
      label: "城中区",
      value: "630103"
    },
    {
      city: "西宁市",
      label: "城西区",
      value: "630104"
    },
    {
      city: "西宁市",
      label: "城北区",
      value: "630105"
    },
    {
      city: "西宁市",
      label: "大通回族土族自治县",
      value: "630121"
    },
    {
      city: "西宁市",
      label: "湟中县",
      value: "630122"
    },
    {
      city: "西宁市",
      label: "湟源县",
      value: "630123"
    }
  ],
  "630200": [{
      city: "海东市",
      label: "乐都区",
      value: "630202"
    },
    {
      city: "海东市",
      label: "平安区",
      value: "630203"
    },
    {
      city: "海东市",
      label: "民和回族土族自治县",
      value: "630222"
    },
    {
      city: "海东市",
      label: "互助土族自治县",
      value: "630223"
    },
    {
      city: "海东市",
      label: "化隆回族自治县",
      value: "630224"
    },
    {
      city: "海东市",
      label: "循化撒拉族自治县",
      value: "630225"
    }
  ],
  "632200": [{
      city: "海北藏族自治州",
      label: "门源回族自治县",
      value: "632221"
    },
    {
      city: "海北藏族自治州",
      label: "祁连县",
      value: "632222"
    },
    {
      city: "海北藏族自治州",
      label: "海晏县",
      value: "632223"
    },
    {
      city: "海北藏族自治州",
      label: "刚察县",
      value: "632224"
    }
  ],
  "632300": [{
      city: "黄南藏族自治州",
      label: "同仁县",
      value: "632321"
    },
    {
      city: "黄南藏族自治州",
      label: "尖扎县",
      value: "632322"
    },
    {
      city: "黄南藏族自治州",
      label: "泽库县",
      value: "632323"
    },
    {
      city: "黄南藏族自治州",
      label: "河南蒙古族自治县",
      value: "632324"
    }
  ],
  "632500": [{
      city: "海南藏族自治州",
      label: "共和县",
      value: "632521"
    },
    {
      city: "海南藏族自治州",
      label: "同德县",
      value: "632522"
    },
    {
      city: "海南藏族自治州",
      label: "贵德县",
      value: "632523"
    },
    {
      city: "海南藏族自治州",
      label: "兴海县",
      value: "632524"
    },
    {
      city: "海南藏族自治州",
      label: "贵南县",
      value: "632525"
    }
  ],
  "632600": [{
      city: "果洛藏族自治州",
      label: "玛沁县",
      value: "632621"
    },
    {
      city: "果洛藏族自治州",
      label: "班玛县",
      value: "632622"
    },
    {
      city: "果洛藏族自治州",
      label: "甘德县",
      value: "632623"
    },
    {
      city: "果洛藏族自治州",
      label: "达日县",
      value: "632624"
    },
    {
      city: "果洛藏族自治州",
      label: "久治县",
      value: "632625"
    },
    {
      city: "果洛藏族自治州",
      label: "玛多县",
      value: "632626"
    }
  ],
  "632700": [{
      city: "玉树藏族自治州",
      label: "玉树市",
      value: "632701"
    },
    {
      city: "玉树藏族自治州",
      label: "杂多县",
      value: "632722"
    },
    {
      city: "玉树藏族自治州",
      label: "称多县",
      value: "632723"
    },
    {
      city: "玉树藏族自治州",
      label: "治多县",
      value: "632724"
    },
    {
      city: "玉树藏族自治州",
      label: "囊谦县",
      value: "632725"
    },
    {
      city: "玉树藏族自治州",
      label: "曲麻莱县",
      value: "632726"
    }
  ],
  "632800": [{
      city: "海西蒙古族藏族自治州",
      label: "格尔木市",
      value: "632801"
    },
    {
      city: "海西蒙古族藏族自治州",
      label: "德令哈市",
      value: "632802"
    },
    {
      city: "海西蒙古族藏族自治州",
      label: "乌兰县",
      value: "632821"
    },
    {
      city: "海西蒙古族藏族自治州",
      label: "都兰县",
      value: "632822"
    },
    {
      city: "海西蒙古族藏族自治州",
      label: "天峻县",
      value: "632823"
    }
  ],
  "640100": [{
      city: "银川市",
      label: "市辖区",
      value: "640101"
    },
    {
      city: "银川市",
      label: "兴庆区",
      value: "640104"
    },
    {
      city: "银川市",
      label: "西夏区",
      value: "640105"
    },
    {
      city: "银川市",
      label: "金凤区",
      value: "640106"
    },
    {
      city: "银川市",
      label: "永宁县",
      value: "640121"
    },
    {
      city: "银川市",
      label: "贺兰县",
      value: "640122"
    },
    {
      city: "银川市",
      label: "灵武市",
      value: "640181"
    }
  ],
  "640200": [{
      city: "石嘴山市",
      label: "市辖区",
      value: "640201"
    },
    {
      city: "石嘴山市",
      label: "大武口区",
      value: "640202"
    },
    {
      city: "石嘴山市",
      label: "惠农区",
      value: "640205"
    },
    {
      city: "石嘴山市",
      label: "平罗县",
      value: "640221"
    }
  ],
  "640300": [{
      city: "吴忠市",
      label: "市辖区",
      value: "640301"
    },
    {
      city: "吴忠市",
      label: "利通区",
      value: "640302"
    },
    {
      city: "吴忠市",
      label: "红寺堡区",
      value: "640303"
    },
    {
      city: "吴忠市",
      label: "盐池县",
      value: "640323"
    },
    {
      city: "吴忠市",
      label: "同心县",
      value: "640324"
    },
    {
      city: "吴忠市",
      label: "青铜峡市",
      value: "640381"
    }
  ],
  "640400": [{
      city: "固原市",
      label: "市辖区",
      value: "640401"
    },
    {
      city: "固原市",
      label: "原州区",
      value: "640402"
    },
    {
      city: "固原市",
      label: "西吉县",
      value: "640422"
    },
    {
      city: "固原市",
      label: "隆德县",
      value: "640423"
    },
    {
      city: "固原市",
      label: "泾源县",
      value: "640424"
    },
    {
      city: "固原市",
      label: "彭阳县",
      value: "640425"
    }
  ],
  "640500": [{
      city: "中卫市",
      label: "市辖区",
      value: "640501"
    },
    {
      city: "中卫市",
      label: "沙坡头区",
      value: "640502"
    },
    {
      city: "中卫市",
      label: "中宁县",
      value: "640521"
    },
    {
      city: "中卫市",
      label: "海原县",
      value: "640522"
    }
  ],
  "650100": [{
      city: "乌鲁木齐市",
      label: "市辖区",
      value: "650101"
    },
    {
      city: "乌鲁木齐市",
      label: "天山区",
      value: "650102"
    },
    {
      city: "乌鲁木齐市",
      label: "沙依巴克区",
      value: "650103"
    },
    {
      city: "乌鲁木齐市",
      label: "新市区",
      value: "650104"
    },
    {
      city: "乌鲁木齐市",
      label: "水磨沟区",
      value: "650105"
    },
    {
      city: "乌鲁木齐市",
      label: "头屯河区",
      value: "650106"
    },
    {
      city: "乌鲁木齐市",
      label: "达坂城区",
      value: "650107"
    },
    {
      city: "乌鲁木齐市",
      label: "米东区",
      value: "650109"
    },
    {
      city: "乌鲁木齐市",
      label: "乌鲁木齐县",
      value: "650121"
    }
  ],
  "650200": [{
      city: "克拉玛依市",
      label: "市辖区",
      value: "650201"
    },
    {
      city: "克拉玛依市",
      label: "独山子区",
      value: "650202"
    },
    {
      city: "克拉玛依市",
      label: "克拉玛依区",
      value: "650203"
    },
    {
      city: "克拉玛依市",
      label: "白碱滩区",
      value: "650204"
    },
    {
      city: "克拉玛依市",
      label: "乌尔禾区",
      value: "650205"
    }
  ],
  "650400": [{
      city: "吐鲁番市",
      label: "高昌区",
      value: "650402"
    },
    {
      city: "吐鲁番市",
      label: "鄯善县",
      value: "650421"
    },
    {
      city: "吐鲁番市",
      label: "托克逊县",
      value: "650422"
    }
  ],
  "650500": [{
      city: "哈密市",
      label: "伊州区",
      value: "650502"
    },
    {
      city: "哈密市",
      label: "巴里坤哈萨克自治县",
      value: "650521"
    },
    {
      city: "哈密市",
      label: "伊吾县",
      value: "650522"
    }
  ],
  "652300": [{
      city: "昌吉回族自治州",
      label: "昌吉市",
      value: "652301"
    },
    {
      city: "昌吉回族自治州",
      label: "阜康市",
      value: "652302"
    },
    {
      city: "昌吉回族自治州",
      label: "呼图壁县",
      value: "652323"
    },
    {
      city: "昌吉回族自治州",
      label: "玛纳斯县",
      value: "652324"
    },
    {
      city: "昌吉回族自治州",
      label: "奇台县",
      value: "652325"
    },
    {
      city: "昌吉回族自治州",
      label: "吉木萨尔县",
      value: "652327"
    },
    {
      city: "昌吉回族自治州",
      label: "木垒哈萨克自治县",
      value: "652328"
    }
  ],
  "652700": [{
      city: "博尔塔拉蒙古自治州",
      label: "博乐市",
      value: "652701"
    },
    {
      city: "博尔塔拉蒙古自治州",
      label: "阿拉山口市",
      value: "652702"
    },
    {
      city: "博尔塔拉蒙古自治州",
      label: "精河县",
      value: "652722"
    },
    {
      city: "博尔塔拉蒙古自治州",
      label: "温泉县",
      value: "652723"
    }
  ],
  "652800": [{
      city: "巴音郭楞蒙古自治州",
      label: "库尔勒市",
      value: "652801"
    },
    {
      city: "巴音郭楞蒙古自治州",
      label: "轮台县",
      value: "652822"
    },
    {
      city: "巴音郭楞蒙古自治州",
      label: "尉犁县",
      value: "652823"
    },
    {
      city: "巴音郭楞蒙古自治州",
      label: "若羌县",
      value: "652824"
    },
    {
      city: "巴音郭楞蒙古自治州",
      label: "且末县",
      value: "652825"
    },
    {
      city: "巴音郭楞蒙古自治州",
      label: "焉耆回族自治县",
      value: "652826"
    },
    {
      city: "巴音郭楞蒙古自治州",
      label: "和静县",
      value: "652827"
    },
    {
      city: "巴音郭楞蒙古自治州",
      label: "和硕县",
      value: "652828"
    },
    {
      city: "巴音郭楞蒙古自治州",
      label: "博湖县",
      value: "652829"
    }
  ],
  "652900": [{
      city: "阿克苏地区",
      label: "阿克苏市",
      value: "652901"
    },
    {
      city: "阿克苏地区",
      label: "温宿县",
      value: "652922"
    },
    {
      city: "阿克苏地区",
      label: "库车县",
      value: "652923"
    },
    {
      city: "阿克苏地区",
      label: "沙雅县",
      value: "652924"
    },
    {
      city: "阿克苏地区",
      label: "新和县",
      value: "652925"
    },
    {
      city: "阿克苏地区",
      label: "拜城县",
      value: "652926"
    },
    {
      city: "阿克苏地区",
      label: "乌什县",
      value: "652927"
    },
    {
      city: "阿克苏地区",
      label: "阿瓦提县",
      value: "652928"
    },
    {
      city: "阿克苏地区",
      label: "柯坪县",
      value: "652929"
    }
  ],
  "653000": [{
      city: "克孜勒苏柯尔克孜自治州",
      label: "阿图什市",
      value: "653001"
    },
    {
      city: "克孜勒苏柯尔克孜自治州",
      label: "阿克陶县",
      value: "653022"
    },
    {
      city: "克孜勒苏柯尔克孜自治州",
      label: "阿合奇县",
      value: "653023"
    },
    {
      city: "克孜勒苏柯尔克孜自治州",
      label: "乌恰县",
      value: "653024"
    }
  ],
  "653100": [{
      city: "喀什地区",
      label: "喀什市",
      value: "653101"
    },
    {
      city: "喀什地区",
      label: "疏附县",
      value: "653121"
    },
    {
      city: "喀什地区",
      label: "疏勒县",
      value: "653122"
    },
    {
      city: "喀什地区",
      label: "英吉沙县",
      value: "653123"
    },
    {
      city: "喀什地区",
      label: "泽普县",
      value: "653124"
    },
    {
      city: "喀什地区",
      label: "莎车县",
      value: "653125"
    },
    {
      city: "喀什地区",
      label: "叶城县",
      value: "653126"
    },
    {
      city: "喀什地区",
      label: "麦盖提县",
      value: "653127"
    },
    {
      city: "喀什地区",
      label: "岳普湖县",
      value: "653128"
    },
    {
      city: "喀什地区",
      label: "伽师县",
      value: "653129"
    },
    {
      city: "喀什地区",
      label: "巴楚县",
      value: "653130"
    },
    {
      city: "喀什地区",
      label: "塔什库尔干塔吉克自治县",
      value: "653131"
    }
  ],
  "653200": [{
      city: "和田地区",
      label: "和田市",
      value: "653201"
    },
    {
      city: "和田地区",
      label: "和田县",
      value: "653221"
    },
    {
      city: "和田地区",
      label: "墨玉县",
      value: "653222"
    },
    {
      city: "和田地区",
      label: "皮山县",
      value: "653223"
    },
    {
      city: "和田地区",
      label: "洛浦县",
      value: "653224"
    },
    {
      city: "和田地区",
      label: "策勒县",
      value: "653225"
    },
    {
      city: "和田地区",
      label: "于田县",
      value: "653226"
    },
    {
      city: "和田地区",
      label: "民丰县",
      value: "653227"
    }
  ],
  "654000": [{
      city: "伊犁哈萨克自治州",
      label: "伊宁市",
      value: "654002"
    },
    {
      city: "伊犁哈萨克自治州",
      label: "奎屯市",
      value: "654003"
    },
    {
      city: "伊犁哈萨克自治州",
      label: "霍尔果斯市",
      value: "654004"
    },
    {
      city: "伊犁哈萨克自治州",
      label: "伊宁县",
      value: "654021"
    },
    {
      city: "伊犁哈萨克自治州",
      label: "察布查尔锡伯自治县",
      value: "654022"
    },
    {
      city: "伊犁哈萨克自治州",
      label: "霍城县",
      value: "654023"
    },
    {
      city: "伊犁哈萨克自治州",
      label: "巩留县",
      value: "654024"
    },
    {
      city: "伊犁哈萨克自治州",
      label: "新源县",
      value: "654025"
    },
    {
      city: "伊犁哈萨克自治州",
      label: "昭苏县",
      value: "654026"
    },
    {
      city: "伊犁哈萨克自治州",
      label: "特克斯县",
      value: "654027"
    },
    {
      city: "伊犁哈萨克自治州",
      label: "尼勒克县",
      value: "654028"
    }
  ],
  "654200": [{
      city: "塔城地区",
      label: "塔城市",
      value: "654201"
    },
    {
      city: "塔城地区",
      label: "乌苏市",
      value: "654202"
    },
    {
      city: "塔城地区",
      label: "额敏县",
      value: "654221"
    },
    {
      city: "塔城地区",
      label: "沙湾县",
      value: "654223"
    },
    {
      city: "塔城地区",
      label: "托里县",
      value: "654224"
    },
    {
      city: "塔城地区",
      label: "裕民县",
      value: "654225"
    },
    {
      city: "塔城地区",
      label: "和布克赛尔蒙古自治县",
      value: "654226"
    }
  ],
  "654300": [{
      city: "阿勒泰地区",
      label: "阿勒泰市",
      value: "654301"
    },
    {
      city: "阿勒泰地区",
      label: "布尔津县",
      value: "654321"
    },
    {
      city: "阿勒泰地区",
      label: "富蕴县",
      value: "654322"
    },
    {
      city: "阿勒泰地区",
      label: "福海县",
      value: "654323"
    },
    {
      city: "阿勒泰地区",
      label: "哈巴河县",
      value: "654324"
    },
    {
      city: "阿勒泰地区",
      label: "青河县",
      value: "654325"
    },
    {
      city: "阿勒泰地区",
      label: "吉木乃县",
      value: "654326"
    }
  ],
  "659000": [{
      city: "自治区直辖县级行政区划",
      label: "石河子市",
      value: "659001"
    },
    {
      city: "自治区直辖县级行政区划",
      label: "阿拉尔市",
      value: "659002"
    },
    {
      city: "自治区直辖县级行政区划",
      label: "图木舒克市",
      value: "659003"
    },
    {
      city: "自治区直辖县级行政区划",
      label: "五家渠市",
      value: "659004"
    },
    {
      city: "自治区直辖县级行政区划",
      label: "北屯市",
      value: "659005"
    },
    {
      city: "自治区直辖县级行政区划",
      label: "铁门关市",
      value: "659006"
    },
    {
      city: "自治区直辖县级行政区划",
      label: "双河市",
      value: "659007"
    },
    {
      city: "自治区直辖县级行政区划",
      label: "可克达拉市",
      value: "659008"
    },
    {
      city: "自治区直辖县级行政区划",
      label: "昆玉市",
      value: "659009"
    }
  ],
  "710100": [{
      city: "台北市",
      label: "中正区",
      value: "710101"
    },
    {
      city: "台北市",
      label: "大同区",
      value: "710102"
    },
    {
      city: "台北市",
      label: "中山区",
      value: "710103"
    },
    {
      city: "台北市",
      label: "万华区",
      value: "710104"
    },
    {
      city: "台北市",
      label: "信义区",
      value: "710105"
    },
    {
      city: "台北市",
      label: "松山区",
      value: "710106"
    },
    {
      city: "台北市",
      label: "大安区",
      value: "710107"
    },
    {
      city: "台北市",
      label: "南港区",
      value: "710108"
    },
    {
      city: "台北市",
      label: "北投区",
      value: "710109"
    },
    {
      city: "台北市",
      label: "内湖区",
      value: "710110"
    },
    {
      city: "台北市",
      label: "士林区",
      value: "710111"
    },
    {
      city: "台北市",
      label: "文山区",
      value: "710112"
    },
  ],
  "710200": [{
      city: "新北市",
      label: "板桥区",
      value: "710201"
    },
    {
      city: "新北市",
      label: "土城区",
      value: "710202"
    },
    {
      city: "新北市",
      label: "新庄区",
      value: "710203"
    },
    {
      city: "新北市",
      label: "新店区",
      value: "710204"
    },
    {
      city: "新北市",
      label: "深坑区",
      value: "710205"
    },
    {
      city: "新北市",
      label: "石碇区",
      value: "710206"
    },
    {
      city: "新北市",
      label: "坪林区",
      value: "710207"
    },
    {
      city: "新北市",
      label: "乌来区",
      value: "710208"
    },
    {
      city: "新北市",
      label: "五股区",
      value: "710209"
    },
    {
      city: "新北市",
      label: "八里区",
      value: "710210"
    },
    {
      city: "新北市",
      label: "林口区",
      value: "710211"
    },
    {
      city: "新北市",
      label: "淡水区",
      value: "710212"
    },
    {
      city: "新北市",
      label: "中和区",
      value: "710213"
    },
    {
      city: "新北市",
      label: "永和区",
      value: "710214"
    },
    {
      city: "新北市",
      label: "三重区",
      value: "710215"
    },
    {
      city: "新北市",
      label: "芦洲区",
      value: "710216"
    },
    {
      city: "新北市",
      label: "泰山区",
      value: "710217"
    },
    {
      city: "新北市",
      label: "树林区",
      value: "710218"
    },
    {
      city: "新北市",
      label: "莺歌区",
      value: "710219"
    },
    {
      city: "新北市",
      label: "三峡区",
      value: "710220"
    },
    {
      city: "新北市",
      label: "汐止区",
      value: "710221"
    },
    {
      city: "新北市",
      label: "金山区",
      value: "710222"
    },
    {
      city: "新北市",
      label: "万里区",
      value: "710223"
    },
    {
      city: "新北市",
      label: "三芝区",
      value: "710224"
    },
    {
      city: "新北市",
      label: "石门区",
      value: "710225"
    },
    {
      city: "新北市",
      label: "瑞芳区",
      value: "710226"
    },
    {
      city: "新北市",
      label: "贡寮区",
      value: "710227"
    },
    {
      city: "新北市",
      label: "双溪区",
      value: "710228"
    },
    {
      city: "新北市",
      label: "平溪区",
      value: "710229"
    },
  ],
  "710300": [{
      city: "桃园市",
      label: "桃园区",
      value: "710301"
    },
    {
      city: "桃园市",
      label: "中坜区",
      value: "710302"
    },
    {
      city: "桃园市",
      label: "平镇区",
      value: "710303"
    },
    {
      city: "桃园市",
      label: "八德区",
      value: "710304"
    },
    {
      city: "桃园市",
      label: "杨梅区",
      value: "710305"
    },
    {
      city: "桃园市",
      label: "芦竹区",
      value: "710306"
    },
    {
      city: "桃园市",
      label: "大溪区",
      value: "710307"
    },
    {
      city: "桃园市",
      label: "龙潭区",
      value: "710308"
    },
    {
      city: "桃园市",
      label: "龟山区",
      value: "710309"
    },
    {
      city: "桃园市",
      label: "大园区",
      value: "710310"
    },
    {
      city: "桃园市",
      label: "观音区",
      value: "710311"
    },
    {
      city: "桃园市",
      label: "新屋区",
      value: "710312"
    },
    {
      city: "桃园市",
      label: "复兴区",
      value: "710313"
    },
  ],
  "710400": [{
      city: "台中市",
      label: "中区",
      value: "710401"
    },
    {
      city: "台中市",
      label: "东区",
      value: "710402"
    },
    {
      city: "台中市",
      label: "西区",
      value: "710403"
    },
    {
      city: "台中市",
      label: "南区",
      value: "710404"
    },
    {
      city: "台中市",
      label: "北区",
      value: "710405"
    },
    {
      city: "台中市",
      label: "西屯区",
      value: "710406"
    },
    {
      city: "台中市",
      label: "南屯区",
      value: "710407"
    },
    {
      city: "台中市",
      label: "北屯区",
      value: "710408"
    },
    {
      city: "台中市",
      label: "丰原区",
      value: "710409"
    },
    {
      city: "台中市",
      label: "大里区",
      value: "710410"
    },
    {
      city: "台中市",
      label: "太平区",
      value: "710411"
    },
    {
      city: "台中市",
      label: "东势区",
      value: "710412"
    },
    {
      city: "台中市",
      label: "大甲区",
      value: "710413"
    },
    {
      city: "台中市",
      label: "清水区",
      value: "710414"
    },
    {
      city: "台中市",
      label: "沙鹿区",
      value: "710415"
    },
    {
      city: "台中市",
      label: "梧栖区",
      value: "710416"
    },
    {
      city: "台中市",
      label: "后里区",
      value: "710417"
    },
    {
      city: "台中市",
      label: "神冈区",
      value: "710418"
    },
    {
      city: "台中市",
      label: "潭子区",
      value: "710419"
    },
    {
      city: "台中市",
      label: "大雅区",
      value: "710420"
    },
    {
      city: "台中市",
      label: "新小区",
      value: "710421"
    },
    {
      city: "台中市",
      label: "石岗区",
      value: "710422"
    },
    {
      city: "台中市",
      label: "外埔区",
      value: "710423"
    },
    {
      city: "台中市",
      label: "大安区",
      value: "710424"
    },
    {
      city: "台中市",
      label: "乌日区",
      value: "710425"
    },
    {
      city: "台中市",
      label: "大肚区",
      value: "710426"
    },
    {
      city: "台中市",
      label: "龙井区",
      value: "710427"
    },
    {
      city: "台中市",
      label: "雾峰区",
      value: "710428"
    },
    {
      city: "台中市",
      label: "和平区",
      value: "710429"
    },
  ],
  "710500": [{
      city: "台南市",
      label: "中西区",
      value: "710501"
    },
    {
      city: "台南市",
      label: "东区",
      value: "710502"
    },
    {
      city: "台南市",
      label: "南区",
      value: "710503"
    },
    {
      city: "台南市",
      label: "北区",
      value: "710504"
    },
    {
      city: "台南市",
      label: "安平区",
      value: "710505"
    },
    {
      city: "台南市",
      label: "安南区",
      value: "710506"
    },
    {
      city: "台南市",
      label: "永康区",
      value: "710507"
    },
    {
      city: "台南市",
      label: "归仁区",
      value: "710508"
    },
    {
      city: "台南市",
      label: "新化区",
      value: "710509"
    },
    {
      city: "台南市",
      label: "左镇区",
      value: "710510"
    },
    {
      city: "台南市",
      label: "玉井区",
      value: "710511"
    },
    {
      city: "台南市",
      label: "楠西区",
      value: "710512"
    },
    {
      city: "台南市",
      label: "南化区",
      value: "710513"
    },
    {
      city: "台南市",
      label: "仁德区",
      value: "710514"
    },
    {
      city: "台南市",
      label: "关庙区",
      value: "710515"
    },
    {
      city: "台南市",
      label: "龙崎区",
      value: "710516"
    },
    {
      city: "台南市",
      label: "官田区",
      value: "710517"
    },
    {
      city: "台南市",
      label: "麻豆区",
      value: "710518"
    },
    {
      city: "台南市",
      label: "佳里区",
      value: "710519"
    },
    {
      city: "台南市",
      label: "西港区",
      value: "710520"
    },
    {
      city: "台南市",
      label: "七股区",
      value: "710521"
    },
    {
      city: "台南市",
      label: "将军区",
      value: "710522"
    },
    {
      city: "台南市",
      label: "学甲区",
      value: "710523"
    },
    {
      city: "台南市",
      label: "北门区",
      value: "710524"
    },
    {
      city: "台南市",
      label: "新营区",
      value: "710525"
    },
    {
      city: "台南市",
      label: "后壁区",
      value: "710526"
    },
    {
      city: "台南市",
      label: "白河区",
      value: "710527"
    },
    {
      city: "台南市",
      label: "东山区",
      value: "710528"
    },
    {
      city: "台南市",
      label: "六甲区",
      value: "710529"
    },
    {
      city: "台南市",
      label: "下营区",
      value: "710530"
    },
    {
      city: "台南市",
      label: "柳营区",
      value: "710531"
    },
    {
      city: "台南市",
      label: "盐水区",
      value: "710532"
    },
    {
      city: "台南市",
      label: "善化区",
      value: "710533"
    },
    {
      city: "台南市",
      label: "大内区",
      value: "710534"
    },
    {
      city: "台南市",
      label: "山上区",
      value: "710535"
    },
    {
      city: "台南市",
      label: "新市区",
      value: "710536"
    },
    {
      city: "台南市",
      label: "安定区",
      value: "710537"
    },
  ],
  "710600": [{
      city: "高雄市",
      label: "楠梓区",
      value: "710601"
    },
    {
      city: "高雄市",
      label: "左营区",
      value: "710602"
    },
    {
      city: "高雄市",
      label: "鼓山区",
      value: "710603"
    },
    {
      city: "高雄市",
      label: "三民区",
      value: "710604"
    },
    {
      city: "高雄市",
      label: "盐埕区",
      value: "710605"
    },
    {
      city: "高雄市",
      label: "前金区",
      value: "710606"
    },
    {
      city: "高雄市",
      label: "新兴区",
      value: "710607"
    },
    {
      city: "高雄市",
      label: "苓雅区",
      value: "710608"
    },
    {
      city: "高雄市",
      label: "前镇区",
      value: "710609"
    },
    {
      city: "高雄市",
      label: "旗津区",
      value: "710610"
    },
    {
      city: "高雄市",
      label: "小港区",
      value: "710611"
    },
    {
      city: "高雄市",
      label: "凤山区",
      value: "710612"
    },
    {
      city: "高雄市",
      label: "大寮区",
      value: "710613"
    },
    {
      city: "高雄市",
      label: "鸟松区",
      value: "710614"
    },
    {
      city: "高雄市",
      label: "林园区",
      value: "710615"
    },
    {
      city: "高雄市",
      label: "仁武区",
      value: "710616"
    },
    {
      city: "高雄市",
      label: "大树区",
      value: "710617"
    },
    {
      city: "高雄市",
      label: "大社区",
      value: "710618"
    },
    {
      city: "高雄市",
      label: "冈山区",
      value: "710619"
    },
    {
      city: "高雄市",
      label: "路竹区",
      value: "710620"
    },
    {
      city: "高雄市",
      label: "桥头区",
      value: "710621"
    },
    {
      city: "高雄市",
      label: "梓官区",
      value: "710622"
    },
    {
      city: "高雄市",
      label: "弥陀区",
      value: "710623"
    },
    {
      city: "高雄市",
      label: "永安区",
      value: "710624"
    },
    {
      city: "高雄市",
      label: "燕巢区",
      value: "710625"
    },
    {
      city: "高雄市",
      label: "阿莲区",
      value: "710626"
    },
    {
      city: "高雄市",
      label: "茄萣区",
      value: "710627"
    },
    {
      city: "高雄市",
      label: "湖内区",
      value: "710628"
    },
    {
      city: "高雄市",
      label: "旗山区",
      value: "710629"
    },
    {
      city: "高雄市",
      label: "美浓区",
      value: "710630"
    },
    {
      city: "高雄市",
      label: "内门区",
      value: "710631"
    },
    {
      city: "高雄市",
      label: "杉林区",
      value: "710632"
    },
    {
      city: "高雄市",
      label: "甲仙区",
      value: "710633"
    },
    {
      city: "高雄市",
      label: "六龟区",
      value: "710634"
    },
    {
      city: "高雄市",
      label: "茂林区",
      value: "710635"
    },
    {
      city: "高雄市",
      label: "桃源区",
      value: "710636"
    },
    {
      city: "高雄市",
      label: "那玛夏区",
      value: "710637"
    },
  ],
  "710700": [{
      city: "基隆市",
      label: "那中正区",
      value: "710701"
    },
    {
      city: "基隆市",
      label: "七堵区",
      value: "710702"
    },
    {
      city: "基隆市",
      label: "暖暖区",
      value: "710703"
    },
    {
      city: "基隆市",
      label: "仁爱区",
      value: "710704"
    },
    {
      city: "基隆市",
      label: "中山区",
      value: "710705"
    },
    {
      city: "基隆市",
      label: "安乐区",
      value: "710706"
    },
    {
      city: "基隆市",
      label: "信义区",
      value: "710707"
    },
  ],
  "710800": [{
      city: "新竹市",
      label: "东区",
      value: "710801"
    },
    {
      city: "新竹市",
      label: "北区",
      value: "710802"
    },
    {
      city: "新竹市",
      label: "香山区",
      value: "710803"
    },
  ],
  "710900": [{
      city: "嘉义市",
      label: "东区",
      value: "710901"
    },
    {
      city: "嘉义市",
      label: "西区",
      value: "710902"
    },
  ],
  "810100": [{
      city: "香港岛",
      label: "中西区",
      value: "810101"
    },
    {
      city: "香港岛",
      label: "湾仔区",
      value: "810102"
    },
    {
      city: "香港岛",
      label: "东区",
      value: "810103"
    },
    {
      city: "香港岛",
      label: "南区",
      value: "810104"
    },
    {
      city: "香港岛",
      label: "油尖旺区",
      value: "810105"
    },
    {
      city: "香港岛",
      label: "深水埗区",
      value: "810106"
    },
    {
      city: "香港岛",
      label: "九龙城区",
      value: "810107"
    },
    {
      city: "香港岛",
      label: "黄大仙区",
      value: "810108"
    },
    {
      city: "香港岛",
      label: "观塘区",
      value: "810109"
    },
    {
      city: "香港岛",
      label: "北区",
      value: "810110"
    },
    {
      city: "香港岛",
      label: "大埔区",
      value: "810111"
    },
    {
      city: "香港岛",
      label: "沙田区",
      value: "810112"
    },
    {
      city: "香港岛",
      label: "西贡区",
      value: "810113"
    },
    {
      city: "香港岛",
      label: "荃湾区",
      value: "810114"
    },
    {
      city: "香港岛",
      label: "屯门区",
      value: "810115"
    },
    {
      city: "香港岛",
      label: "元朗区",
      value: "810116"
    },
    {
      city: "香港岛",
      label: "葵青区",
      value: "810117"
    },
    {
      city: "香港岛",
      label: "离岛区",
      value: "810118"
    },
  ],
  "820100": [{
      city: "澳门半岛",
      label: "花地玛堂区",
      value: "820101"
    },
    {
      city: "澳门半岛",
      label: "圣安多尼堂区",
      value: "820102"
    },
    {
      city: "澳门半岛",
      label: "大堂区",
      value: "820103"
    },
    {
      city: "澳门半岛",
      label: "望徳堂区",
      value: "820104"
    },
    {
      city: "澳门半岛",
      label: "风顺堂区",
      value: "820105"
    },
    {
      city: "澳门半岛",
      label: "嘉模堂区",
      value: "820106"
    },
    {
      city: "澳门半岛",
      label: "圣方济各堂区",
      value: "820107"
    },
    {
      city: "澳门半岛",
      label: "路氹城",
      value: "820108"
    },
    {
      city: "澳门半岛",
      label: "澳门新城",
      value: "820109"
    },
  ]
};

"use strict";(self.webpackChunkantd_mini=self.webpackChunkantd_mini||[]).push([[6408],{13790:function(n,e,a){a.r(e),a.d(e,{demos:function(){return I}});var d=a(67294),t=a(89380),I={"src-select-contact-demo-selectcontact":{component:d.memo(d.lazy(function(){return a.e(2433).then(a.bind(a,29911))})),asset:{type:"BLOCK",id:"src-select-contact-demo-selectcontact",refAtomIds:[],dependencies:{},entry:"index.ts"},context:{},renderOpts:void 0}}},15925:function(n,e,a){a.r(e),a.d(e,{texts:function(){return t}});var d=a(89380);const t=[{value:"\u627E\u4EBA\u80FD\u529B\uFF1A\u5171\u4EAB\u7C7B\u9762\u5411\u5BF9 C \u7528\u6237\u7684\u4E1A\u52A1\uFF0C\u5B9E\u9645\u4E0A\u90FD\u5B58\u5728\u8FD9\u627E\u4EBA\u7684\u8BC9\u6C42\u3002\u4E3E\u4F8B\uFF1A\u4EB2\u60C5\u5361\u4E3B\u5361\u7528\u6237\u201C\u627E\u4EBA\u201D\u8D60\u9001\u4EB2\u60C5\u5361\uFF0C\u6C42\u8D60\u5361\u7528\u6237\u201C\u627E\u4EBA\u201D\u5E2E\u5FD9\u5F00\u901A\uFF0C\u4EE3\u4ED8\u7684\u7528\u6237\u5728\u4F7F\u7528\u4EE3\u4ED8\u65F6\u627E\u4EBA\u5E2E\u5FD9\u4EE3\u4ED8\uFF0C\u5C0F\u8377\u5305\u7684\u7528\u6237\u62C9\u7FA4\u65F6\u9700\u8981\u201C\u627E\u4EBA\u201D\u6765\u52A0\u5165\u3002",paraId:0,tocIndex:0},{value:"\u5728 ",paraId:1,tocIndex:1},{value:"index.json",paraId:1,tocIndex:1},{value:" \u4E2D\u5F15\u5165\u7EC4\u4EF6",paraId:1,tocIndex:1},{value:`"usingComponents": {
#if ALIPAY
  "ant-select-contact": "antd-mini/es/SelectContact/index"
#endif
}
`,paraId:2,tocIndex:1},{value:`<SelectContact
  className="stepper"
  value="{{0}}"
  min="{{0}}"
  max="{{10}}"
  step="{{1}}"
  disabled="{{false}}"
#if ALIPAY
  onChange="handleChange"
#endif
/>
`,paraId:3,tocIndex:3},{value:`Page({
  handleChange(value) {
    console.log(value);
  },
});
`,paraId:4,tocIndex:3},{value:"\u5C5E\u6027",paraId:5,tocIndex:5},{value:"\u8BF4\u660E",paraId:5,tocIndex:5},{value:"\u7C7B\u578B",paraId:5,tocIndex:5},{value:"\u9ED8\u8BA4\u503C",paraId:5,tocIndex:5},{value:"className",paraId:5,tocIndex:5},{value:"\u7C7B\u540D",paraId:5,tocIndex:5},{value:"string",paraId:5,tocIndex:5},{value:"-",paraId:5,tocIndex:5},{value:"height",paraId:5,tocIndex:5},{value:"\u7EC4\u4EF6\u9AD8\u5EA6",paraId:5,tocIndex:5},{value:"string",paraId:5,tocIndex:5},{value:"-",paraId:5,tocIndex:5},{value:"source",paraId:5,tocIndex:5},{value:"\u4E1A\u52A1\u6765\u6E90\uFF0C\u533A\u5206\u573A\u666F\u76D1\u63A7\u3001\u57CB\u70B9",paraId:5,tocIndex:5},{value:"string",paraId:5,tocIndex:5},{value:"-",paraId:5,tocIndex:5},{value:"bizScene",paraId:5,tocIndex:5},{value:"\u63A5\u5165\u65B9\u573A\u666F\uFF0C\u540E\u6BB5\u6821\u9A8C",paraId:5,tocIndex:5},{value:"number",paraId:5,tocIndex:5},{value:"-",paraId:5,tocIndex:5},{value:"#if ALIPAY onSelect",paraId:5,tocIndex:5},{value:"\u9009\u4E2D\u8054\u7CFB\u4EBA\u65F6\u89E6\u53D1",paraId:5,tocIndex:5},{value:"(IOnSelectParams) => void",paraId:5,tocIndex:5},{value:"-",paraId:5,tocIndex:5},{value:"#if ALIPAY onError",paraId:5,tocIndex:5},{value:"\u83B7\u53D6\u6570\u636E\u63A5\u53E3\u62A5\u9519\u89E6\u53D1",paraId:5,tocIndex:5},{value:"(error: any) => void",paraId:5,tocIndex:5},{value:"-",paraId:5,tocIndex:5},{value:"#if ALIPAY onContactListEmpty",paraId:5,tocIndex:5},{value:"\u63A8\u8350\u5217\u8868\u4E3A\u7A7A\u65F6\u89E6\u53D1",paraId:5,tocIndex:5},{value:"() => void",paraId:5,tocIndex:5},{value:"-",paraId:5,tocIndex:5},{value:"\u7EC4\u4EF6\u63D0\u4F9B\u4E86\u4E0B\u5217 CSS \u53D8\u91CF\uFF0C\u53EF\u7528\u4E8E\u81EA\u5B9A\u4E49\u6837\u5F0F\uFF0C\u4F7F\u7528\u65B9\u6CD5\u8BF7\u53C2\u8003 ConfigProvider \u7EC4\u4EF6\u3002",paraId:6,tocIndex:7},{value:"\u53D8\u91CF\u540D",paraId:7,tocIndex:7},{value:"\u9ED8\u8BA4\u503C",paraId:7,tocIndex:7},{value:"\u6DF1\u8272\u6A21\u5F0F\u9ED8\u8BA4\u503C",paraId:7,tocIndex:7},{value:"\u5907\u6CE8",paraId:7,tocIndex:7},{value:"--select-contact-search-bar-focus-color",paraId:7,tocIndex:7},{value:"#1677ff",paraId:7,tocIndex:7},{value:"#3086ff",paraId:7,tocIndex:7},{value:"\u641C\u7D22\u680F\u805A\u7126\u989C\u8272",paraId:7,tocIndex:7},{value:"--select-contact-search-cancel-color",paraId:7,tocIndex:7},{value:"#333333",paraId:7,tocIndex:7},{value:"#c5cad1",paraId:7,tocIndex:7},{value:"\u53D6\u6D88\u6309\u94AE\u989C\u8272",paraId:7,tocIndex:7},{value:"--select-contact-loading-bg",paraId:7,tocIndex:7},{value:"#ffffff",paraId:7,tocIndex:7},{value:"#1a1a1a",paraId:7,tocIndex:7},{value:"\u52A0\u8F7D\u80CC\u666F\u989C\u8272",paraId:7,tocIndex:7},{value:"--select-contact-scroll-bg",paraId:7,tocIndex:7},{value:"#ffffff",paraId:7,tocIndex:7},{value:"#1a1a1a",paraId:7,tocIndex:7},{value:"\u6EDA\u52A8\u80CC\u666F\u989C\u8272",paraId:7,tocIndex:7},{value:"--select-contact-list-bg",paraId:7,tocIndex:7},{value:"#ffffff",paraId:7,tocIndex:7},{value:"#1a1a1a",paraId:7,tocIndex:7},{value:"\u5217\u8868\u80CC\u666F\u989C\u8272",paraId:7,tocIndex:7},{value:"--select-contact-title-bg",paraId:7,tocIndex:7},{value:"#ffffff",paraId:7,tocIndex:7},{value:"#000000",paraId:7,tocIndex:7},{value:"\u6807\u9898\u80CC\u666F\u989C\u8272",paraId:7,tocIndex:7},{value:"--select-contact-title-color",paraId:7,tocIndex:7},{value:"#999",paraId:7,tocIndex:7},{value:"#999",paraId:7,tocIndex:7},{value:"\u6807\u9898\u6587\u5B57\u989C\u8272",paraId:7,tocIndex:7},{value:"--select-contact-title-first-color",paraId:7,tocIndex:7},{value:"#333",paraId:7,tocIndex:7},{value:"#c5cad1",paraId:7,tocIndex:7},{value:"\u4E00\u7EA7\u6807\u9898\u989C\u8272",paraId:7,tocIndex:7},{value:"--select-contact-title-first-border",paraId:7,tocIndex:7},{value:"#eee",paraId:7,tocIndex:7},{value:"#2b2b2b",paraId:7,tocIndex:7},{value:"\u4E00\u7EA7\u6807\u9898\u8FB9\u6846\u989C\u8272",paraId:7,tocIndex:7},{value:"--select-contact-tag-color",paraId:7,tocIndex:7},{value:"#ff6010",paraId:7,tocIndex:7},{value:"#ff6010",paraId:7,tocIndex:7},{value:"\u6807\u7B7E\u989C\u8272",paraId:7,tocIndex:7},{value:"--select-contact-tag-border",paraId:7,tocIndex:7},{value:"#ffcfb7",paraId:7,tocIndex:7},{value:"#ffcfb7",paraId:7,tocIndex:7},{value:"\u6807\u7B7E\u8FB9\u6846\u989C\u8272",paraId:7,tocIndex:7},{value:"--select-contact-empty-bg",paraId:7,tocIndex:7},{value:"#ffffff",paraId:7,tocIndex:7},{value:"#1a1a1a",paraId:7,tocIndex:7},{value:"\u7A7A\u72B6\u6001\u80CC\u666F\u989C\u8272",paraId:7,tocIndex:7},{value:"--select-contact-empty-color",paraId:7,tocIndex:7},{value:"#999",paraId:7,tocIndex:7},{value:"#616161",paraId:7,tocIndex:7},{value:"\u7A7A\u72B6\u6001\u6587\u5B57\u989C\u8272",paraId:7,tocIndex:7},{value:"--select-contact-loading-bg",paraId:7,tocIndex:7},{value:"#999",paraId:7,tocIndex:7},{value:"#616161",paraId:7,tocIndex:7},{value:"\u52A0\u8F7D\u72B6\u6001\u80CC\u666F\u989C\u8272",paraId:7,tocIndex:7},{value:"--select-contact-display-light-color",paraId:7,tocIndex:7},{value:"#fa6300",paraId:7,tocIndex:7},{value:"#fa6300",paraId:7,tocIndex:7},{value:"\u9AD8\u4EAE\u663E\u793A\u989C\u8272",paraId:7,tocIndex:7}]}}]);

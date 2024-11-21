"use strict";(self.webpackChunkantd_mini=self.webpackChunkantd_mini||[]).push([[257],{2145:function(t,e,a){a.r(e),a.d(e,{demos:function(){return n}});var r=a(67294),o=a(721),n={"src-progress-demo-progress":{component:r.memo(r.lazy(function(){return a.e(2433).then(a.bind(a,45806))})),asset:{type:"BLOCK",id:"src-progress-demo-progress",refAtomIds:[],dependencies:{},entry:"index.ts"},context:{},renderOpts:void 0}}},26179:function(t,e,a){a.r(e),a.d(e,{texts:function(){return o}});var r=a(721);const o=[{value:"Displays the progress of user operations and tasks.",paraId:0,tocIndex:0},{value:"In ",paraId:1,tocIndex:1},{value:"index.json",paraId:1,tocIndex:1},{value:" Introducing Components in",paraId:1,tocIndex:1},{value:`"usingComponents": {
#if ALIPAY
  "ant-progress": "antd-mini/es/Progress/index"
#endif
#if WECHAT
  "ant-progress": "antd-mini/Progress/index"
#endif
}
`,paraId:2,tocIndex:1},{value:"The progress bar defaults to a blue bar,",paraId:3,tocIndex:3},{value:"percent",paraId:3,tocIndex:3},{value:" Property to set the current progress. Use ",paraId:3,tocIndex:3},{value:"type",paraId:3,tocIndex:3},{value:"Property to set the shape, currently supports bar and ring two forms.",paraId:3,tocIndex:3},{value:`<ant-progress percent="{{ 50 }}" />
<ant-progress type="line" percent="{{ 50 }}" />
<ant-progress type="circle" percent="{{ 50 }}" />
`,paraId:4,tocIndex:3},{value:"In line mode, semantic status bars for success and failure states are supported by setting ",paraId:5,tocIndex:4},{value:"status",paraId:5,tocIndex:4},{value:"Property implementation.",paraId:5,tocIndex:4},{value:`<ant-progress status="success" percent="100" />
<ant-progress status="exception" percent="50" />
`,paraId:6,tocIndex:4},{value:"strokeWidth",paraId:7,tocIndex:5},{value:" You can set the thickness of the progress bar,",paraId:7,tocIndex:5},{value:"strokeColor",paraId:7,tocIndex:5},{value:" You can set the color of the progress bar,",paraId:7,tocIndex:5},{value:"trailColor",paraId:7,tocIndex:5},{value:" You can set the track color,",paraId:7,tocIndex:5},{value:"style",paraId:7,tocIndex:5},{value:" The style can be highly customized.",paraId:7,tocIndex:5},{value:`<ant-progress percent="{{ 50 }}" strokeWidth="{{12}}" />
<ant-progress percent="{{ 50 }}" strokeColor="#00B578" />
<ant-progress percent="{{ 50 }}" trailColor="#FFCF9F" />
<ant-progress percent="{{ 50 }}" style="width: 70%" />
`,paraId:8,tocIndex:5},{value:"Property",paraId:9,tocIndex:7},{value:"Description",paraId:9,tocIndex:7},{value:"Type",paraId:9,tocIndex:7},{value:"Default Value",paraId:9,tocIndex:7},{value:"className",paraId:9,tocIndex:7},{value:"Class Name",paraId:9,tocIndex:7},{value:"string",paraId:9,tocIndex:7},{value:"-",paraId:9,tocIndex:7},{value:"percent",paraId:9,tocIndex:7},{value:"Percentage",paraId:9,tocIndex:7},{value:"number",paraId:9,tocIndex:7},{value:"0",paraId:9,tocIndex:7},{value:"status",paraId:9,tocIndex:7},{value:"status, available in line mode only, optional ",paraId:9,tocIndex:7},{value:"success",paraId:9,tocIndex:7},{value:" ",paraId:9,tocIndex:7},{value:"exception",paraId:9,tocIndex:7},{value:"string",paraId:9,tocIndex:7},{value:"-",paraId:9,tocIndex:7},{value:"strokeColor",paraId:9,tocIndex:7},{value:"Progress bar color",paraId:9,tocIndex:7},{value:"string",paraId:9,tocIndex:7},{value:"-",paraId:9,tocIndex:7},{value:"strokeWidth",paraId:9,tocIndex:7},{value:"Width of progress bar, in px",paraId:9,tocIndex:7},{value:"number",paraId:9,tocIndex:7},{value:"8",paraId:9,tocIndex:7},{value:"style",paraId:9,tocIndex:7},{value:"Style",paraId:9,tocIndex:7},{value:"string",paraId:9,tocIndex:7},{value:"-",paraId:9,tocIndex:7},{value:"trailColor",paraId:9,tocIndex:7},{value:"Track Color",paraId:9,tocIndex:7},{value:"string",paraId:9,tocIndex:7},{value:"-",paraId:9,tocIndex:7},{value:"type",paraId:9,tocIndex:7},{value:"type, optional ",paraId:9,tocIndex:7},{value:"line",paraId:9,tocIndex:7},{value:" ",paraId:9,tocIndex:7},{value:"circle",paraId:9,tocIndex:7},{value:"string",paraId:9,tocIndex:7},{value:"line",paraId:9,tocIndex:7},{value:"width",paraId:9,tocIndex:7},{value:"Circular progress bar canvas width, in px",paraId:9,tocIndex:7},{value:"number",paraId:9,tocIndex:7},{value:"100",paraId:9,tocIndex:7},{value:"animation",paraId:9,tocIndex:7},{value:"Whether to turn on transition animation",paraId:9,tocIndex:7},{value:"boolean",paraId:9,tocIndex:7},{value:"true",paraId:9,tocIndex:7},{value:"Component provides the following CSS variables, which can be used to customize styles. For details, see ConfigProvider Components.",paraId:10,tocIndex:9},{value:"Variable name",paraId:11,tocIndex:9},{value:"Light Mode Default",paraId:11,tocIndex:9},{value:"Dark Mode Default",paraId:11,tocIndex:9},{value:"Remarks",paraId:11,tocIndex:9},{value:"--progress-stroke-color",paraId:11,tocIndex:9},{value:"#1677ff",paraId:11,tocIndex:9},{value:"#3086ff",paraId:11,tocIndex:9},{value:"Main color of progress bar",paraId:11,tocIndex:9},{value:"--progress-trail-color",paraId:11,tocIndex:9},{value:"#f5f5f5",paraId:11,tocIndex:9},{value:"#121212",paraId:11,tocIndex:9},{value:"Progress bar track color",paraId:11,tocIndex:9},{value:"--progress-success-color",paraId:11,tocIndex:9},{value:"#22b35e",paraId:11,tocIndex:9},{value:"#34b368",paraId:11,tocIndex:9},{value:"Progress bar success color",paraId:11,tocIndex:9},{value:"--progress-indicator-color",paraId:11,tocIndex:9},{value:"#333333",paraId:11,tocIndex:9},{value:"#c5cad1",paraId:11,tocIndex:9},{value:"Progress bar indicator color",paraId:11,tocIndex:9},{value:"--progress-exception-color",paraId:11,tocIndex:9},{value:"#ff3141",paraId:11,tocIndex:9},{value:"#ff4a58",paraId:11,tocIndex:9},{value:"Progress bar exception color",paraId:11,tocIndex:9},{value:"--progress-assist-color",paraId:11,tocIndex:9},{value:"#999999",paraId:11,tocIndex:9},{value:"#616161",paraId:11,tocIndex:9},{value:"Progress bar auxiliary color",paraId:11,tocIndex:9}]}}]);

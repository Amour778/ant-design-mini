"use strict";(self.webpackChunkantd_mini=self.webpackChunkantd_mini||[]).push([[8662],{94955:function(n,e,a){a.r(e),a.d(e,{demos:function(){return o}});var t=a(67294),d=a(50018),o={"src-skeleton-demo-skeleton":{component:t.memo(t.lazy(function(){return a.e(2433).then(a.bind(a,11517))})),asset:{type:"BLOCK",id:"src-skeleton-demo-skeleton",refAtomIds:[],dependencies:{},entry:"index.ts"},context:{},renderOpts:void 0}}},14457:function(n,e,a){a.r(e),a.d(e,{texts:function(){return d}});var t=a(50018);const d=[{value:"Provide a placeholder graphic combination where you need to wait for content to load.",paraId:0,tocIndex:0},{value:"The network is slow, requires a long wait to load, and is only used when it is loaded for the first time.",paraId:1,tocIndex:0},{value:"On the premise of ensuring the performance of the mobile phone, try to use preloading, preferably without skeleton screen.",paraId:1,tocIndex:0},{value:"It is suitable for home pages, lists and cards with more graphic information and important information. Do not use small module class components (such as pop-up windows).",paraId:1,tocIndex:0},{value:"In ",paraId:2,tocIndex:1},{value:"index.json",paraId:2,tocIndex:1},{value:" Introducing Components in",paraId:2,tocIndex:1},{value:`"usingComponents": {
#if ALIPAY
  "ant-skeleton": "antd-mini/es/Skeleton/index",
  "skeleton-avatar": "antd-mini/es/Skeleton/Avatar/index",
  "skeleton-title": "antd-mini/es/Skeleton/Title/index",
  "skeleton-button": "antd-mini/es/Skeleton/Button/index",
  "skeleton-paragraph": "antd-mini/es/Skeleton/Paragraph/index",
  "skeleton-input": "antd-mini/es/Skeleton/Input/index",
#endif
#if WECHAT
  "ant-skeleton": "antd-mini/Skeleton/index",
  "skeleton-avatar": "antd-mini/Skeleton/Avatar/index",
  "skeleton-title": "antd-mini/Skeleton/Title/index",
  "skeleton-button": "antd-mini/Skeleton/Button/index",
  "skeleton-paragraph": "antd-mini/Skeleton/Paragraph/index",
  "skeleton-input": "antd-mini/Skeleton/Input/index",
#endif
}
`,paraId:3,tocIndex:1},{value:`<skeleton animate="{{ true }}" />
`,paraId:4,tocIndex:3},{value:`<skeleton avatar="{{ true }}" />
`,paraId:5,tocIndex:4},{value:`<skeleton-avatar />
<skeleton-paragraph rows="{{ 1 }}" />
<skeleton-input />
<skeleton-input />
<skeleton-input />
<skeleton-button size="small" />
`,paraId:6,tocIndex:5},{value:`<skeleton
  loading="{{ showLoading }}"
  title="{{ false }}"
  avatar="{{ true }}"
  paragraph="{{ paragraph }}">
  <view class="container">
    <avatar
      src="https://images.unsplash.com/photo-1546967191-fdfb13ed6b1e?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ" />
    <view class="content">
        We supply a series of design principles, practical patterns and high
        quality design resources, to help people create their product prototypes
        beautifully and efficiently.
    </view>
  </view>
</skeleton>
`,paraId:7,tocIndex:6},{value:"Property",paraId:8,tocIndex:9},{value:"Description",paraId:8,tocIndex:9},{value:"Type",paraId:8,tocIndex:9},{value:"Default Value",paraId:8,tocIndex:9},{value:"animate",paraId:8,tocIndex:9},{value:"Show animation effect",paraId:8,tocIndex:9},{value:"boolean",paraId:8,tocIndex:9},{value:"false",paraId:8,tocIndex:9},{value:"avatar",paraId:8,tocIndex:9},{value:"Whether to display avatar bitmap",paraId:8,tocIndex:9},{value:"boolean | Avatar",paraId:8,tocIndex:9},{value:"false",paraId:8,tocIndex:9},{value:"className",paraId:8,tocIndex:9},{value:"Class Name",paraId:8,tocIndex:9},{value:"string",paraId:8,tocIndex:9},{value:"-",paraId:8,tocIndex:9},{value:"loading",paraId:8,tocIndex:9},{value:"When true, displays the accounting bitmap. Otherwise, the subassembly is displayed directly.",paraId:8,tocIndex:9},{value:"boolean",paraId:8,tocIndex:9},{value:"true",paraId:8,tocIndex:9},{value:"paragraph",paraId:8,tocIndex:9},{value:"Paragraph",paraId:8,tocIndex:9},{value:"number | Paragraph",paraId:8,tocIndex:9},{value:"true",paraId:8,tocIndex:9},{value:"style",paraId:8,tocIndex:9},{value:"Style",paraId:8,tocIndex:9},{value:"CSSProperties",paraId:8,tocIndex:9},{value:"-",paraId:8,tocIndex:9},{value:"title",paraId:8,tocIndex:9},{value:"Whether to display title bitmap",paraId:8,tocIndex:9},{value:"boolean",paraId:8,tocIndex:9},{value:"true",paraId:8,tocIndex:9},{value:"Property",paraId:9,tocIndex:10},{value:"Description",paraId:9,tocIndex:10},{value:"Type",paraId:9,tocIndex:10},{value:"Default Value",paraId:9,tocIndex:10},{value:"animate",paraId:9,tocIndex:10},{value:"Show animation effect",paraId:9,tocIndex:10},{value:"boolean",paraId:9,tocIndex:10},{value:"false",paraId:9,tocIndex:10},{value:"className",paraId:9,tocIndex:10},{value:"Class Name",paraId:9,tocIndex:10},{value:"string",paraId:9,tocIndex:10},{value:"-",paraId:9,tocIndex:10},{value:"loading",paraId:9,tocIndex:10},{value:"When true, displays the accounting bitmap. Otherwise, the subassembly is displayed directly.",paraId:9,tocIndex:10},{value:"boolean",paraId:9,tocIndex:10},{value:"true",paraId:9,tocIndex:10},{value:"shape",paraId:9,tocIndex:10},{value:"Avatar Shape ",paraId:9,tocIndex:10},{value:"circle",paraId:9,tocIndex:10},{value:" or ",paraId:9,tocIndex:10},{value:"square",paraId:9,tocIndex:10},{value:"string",paraId:9,tocIndex:10},{value:"square",paraId:9,tocIndex:10},{value:"size",paraId:9,tocIndex:10},{value:"Avatar size ",paraId:9,tocIndex:10},{value:"x-small",paraId:9,tocIndex:10},{value:"\u3001",paraId:9,tocIndex:10},{value:"small",paraId:9,tocIndex:10},{value:"\u3001",paraId:9,tocIndex:10},{value:"medium",paraId:9,tocIndex:10},{value:" or ",paraId:9,tocIndex:10},{value:"large",paraId:9,tocIndex:10},{value:"string",paraId:9,tocIndex:10},{value:"medium",paraId:9,tocIndex:10},{value:"style",paraId:9,tocIndex:10},{value:"Style",paraId:9,tocIndex:10},{value:"CSSProperties",paraId:9,tocIndex:10},{value:"-",paraId:9,tocIndex:10},{value:"Property",paraId:10,tocIndex:11},{value:"Description",paraId:10,tocIndex:11},{value:"Type",paraId:10,tocIndex:11},{value:"Default Value",paraId:10,tocIndex:11},{value:"animate",paraId:10,tocIndex:11},{value:"Show animation effect",paraId:10,tocIndex:11},{value:"boolean",paraId:10,tocIndex:11},{value:"false",paraId:10,tocIndex:11},{value:"className",paraId:10,tocIndex:11},{value:"Class Name",paraId:10,tocIndex:11},{value:"string",paraId:10,tocIndex:11},{value:"-",paraId:10,tocIndex:11},{value:"loading",paraId:10,tocIndex:11},{value:"When true, displays the accounting bitmap. Otherwise, the subassembly is displayed directly.",paraId:10,tocIndex:11},{value:"boolean",paraId:10,tocIndex:11},{value:"true",paraId:10,tocIndex:11},{value:"rows",paraId:10,tocIndex:11},{value:"Number of paragraph lines, greater than 0",paraId:10,tocIndex:11},{value:"number",paraId:10,tocIndex:11},{value:"3",paraId:10,tocIndex:11},{value:"style",paraId:10,tocIndex:11},{value:"Style",paraId:10,tocIndex:11},{value:"CSSProperties",paraId:10,tocIndex:11},{value:"-",paraId:10,tocIndex:11},{value:"Property",paraId:11,tocIndex:12},{value:"Description",paraId:11,tocIndex:12},{value:"Type",paraId:11,tocIndex:12},{value:"Default Value",paraId:11,tocIndex:12},{value:"animate",paraId:11,tocIndex:12},{value:"Show animation effect",paraId:11,tocIndex:12},{value:"boolean",paraId:11,tocIndex:12},{value:"false",paraId:11,tocIndex:12},{value:"className",paraId:11,tocIndex:12},{value:"Class Name",paraId:11,tocIndex:12},{value:"string",paraId:11,tocIndex:12},{value:"-",paraId:11,tocIndex:12},{value:"loading",paraId:11,tocIndex:12},{value:"When true, displays the accounting bitmap. Otherwise, the subassembly is displayed directly.",paraId:11,tocIndex:12},{value:"boolean",paraId:11,tocIndex:12},{value:"true",paraId:11,tocIndex:12},{value:"style",paraId:11,tocIndex:12},{value:"Style",paraId:11,tocIndex:12},{value:"CSSProperties",paraId:11,tocIndex:12},{value:"-",paraId:11,tocIndex:12},{value:"Property",paraId:12,tocIndex:13},{value:"Description",paraId:12,tocIndex:13},{value:"Type",paraId:12,tocIndex:13},{value:"Default Value",paraId:12,tocIndex:13},{value:"animate",paraId:12,tocIndex:13},{value:"Show animation effect",paraId:12,tocIndex:13},{value:"boolean",paraId:12,tocIndex:13},{value:"false",paraId:12,tocIndex:13},{value:"className",paraId:12,tocIndex:13},{value:"Class Name",paraId:12,tocIndex:13},{value:"string",paraId:12,tocIndex:13},{value:"-",paraId:12,tocIndex:13},{value:"loading",paraId:12,tocIndex:13},{value:"When true, displays the accounting bitmap. Otherwise, the subassembly is displayed directly.",paraId:12,tocIndex:13},{value:"boolean",paraId:12,tocIndex:13},{value:"true",paraId:12,tocIndex:13},{value:"size",paraId:12,tocIndex:13},{value:"size,",paraId:12,tocIndex:13},{value:"small",paraId:12,tocIndex:13},{value:"\u3001",paraId:12,tocIndex:13},{value:"medium",paraId:12,tocIndex:13},{value:" or ",paraId:12,tocIndex:13},{value:"large",paraId:12,tocIndex:13},{value:"string",paraId:12,tocIndex:13},{value:"medium",paraId:12,tocIndex:13},{value:"style",paraId:12,tocIndex:13},{value:"Style",paraId:12,tocIndex:13},{value:"CSSProperties",paraId:12,tocIndex:13},{value:"-",paraId:12,tocIndex:13},{value:"Property",paraId:13,tocIndex:14},{value:"Description",paraId:13,tocIndex:14},{value:"Type",paraId:13,tocIndex:14},{value:"Default Value",paraId:13,tocIndex:14},{value:"animate",paraId:13,tocIndex:14},{value:"Show animation effect",paraId:13,tocIndex:14},{value:"boolean",paraId:13,tocIndex:14},{value:"false",paraId:13,tocIndex:14},{value:"className",paraId:13,tocIndex:14},{value:"Class Name",paraId:13,tocIndex:14},{value:"string",paraId:13,tocIndex:14},{value:"-",paraId:13,tocIndex:14},{value:"loading",paraId:13,tocIndex:14},{value:"When true, displays the accounting bitmap. Otherwise, the subassembly is displayed directly.",paraId:13,tocIndex:14},{value:"boolean",paraId:13,tocIndex:14},{value:"true",paraId:13,tocIndex:14},{value:"style",paraId:13,tocIndex:14},{value:"Style",paraId:13,tocIndex:14},{value:"CSSProperties",paraId:13,tocIndex:14},{value:"-",paraId:13,tocIndex:14},{value:"Component provides the following CSS variables, which can be used to customize styles. For details, see ConfigProvider Components.",paraId:14,tocIndex:16},{value:"Variable name",paraId:15,tocIndex:16},{value:"Default Value",paraId:15,tocIndex:16},{value:"Dark Mode Default",paraId:15,tocIndex:16},{value:"Remarks",paraId:15,tocIndex:16},{value:"--selector-background-color",paraId:15,tocIndex:16},{value:"#ffffff",paraId:15,tocIndex:16},{value:"#1a1a1a",paraId:15,tocIndex:16},{value:"Selector Background Color",paraId:15,tocIndex:16},{value:"--selector-item-background",paraId:15,tocIndex:16},{value:"#f5f5f5",paraId:15,tocIndex:16},{value:"#121212",paraId:15,tocIndex:16},{value:"Selector item background color",paraId:15,tocIndex:16},{value:"--selector-item-active-background",paraId:15,tocIndex:16},{value:"#e7f1ff",paraId:15,tocIndex:16},{value:"#0d2543",paraId:15,tocIndex:16},{value:"Selector Activate Item Background Color",paraId:15,tocIndex:16},{value:"--selector-item-color",paraId:15,tocIndex:16},{value:"#1677ff",paraId:15,tocIndex:16},{value:"#3086ff",paraId:15,tocIndex:16},{value:"Selector item color",paraId:15,tocIndex:16},{value:"--selector-item-sub-color",paraId:15,tocIndex:16},{value:"#999999",paraId:15,tocIndex:16},{value:"#616161",paraId:15,tocIndex:16},{value:"Selector item sub-color",paraId:15,tocIndex:16}]}}]);

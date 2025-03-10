import {
  Component,
  getValueFromProps,
  triggerEvent,
  triggerEventOnly,
} from '../_util/simply';
import { CardDefaultProps } from './props';
Component(
  CardDefaultProps,
  {
    // 点击展开收起按钮
    handleTapFoldBtn(e) {
      const { finalConfig = {}, finalFoldStatus } = this.data;
      if (finalConfig.foldTapArea === 'btn') {
        this.setData({
          finalFoldStatus: !finalFoldStatus,
        });
        triggerEvent(this, 'foldChange', !finalFoldStatus, e);
      }
    },
    // 点击标题整栏
    handleTapCardHeader(e) {
      const { finalConfig = {}, finalFoldStatus } = this.data;
      if (finalConfig.foldTapArea === 'header' && this.props.needFold) {
        this.setData({
          finalFoldStatus: !finalFoldStatus,
        });
        triggerEvent(this, 'foldChange', !finalFoldStatus, e);
      }
    },
    // 点击更多
    handleTapLink(e) {
      triggerEventOnly(this, 'operateClick', e);
    },
    // 处理title的sticky状态变化
    handleStickyChange(status) {
      triggerEvent(this, 'titleSticky', status);
    },
  },
  {
    finalFoldStatus: false,
  },
  undefined,
  {
    onInit() {
      const [foldStatus, config] = getValueFromProps(this, [
        'foldStatus',
        'config',
      ]);
      this.setData({
        finalFoldStatus: foldStatus,
        finalConfig: {
          ...CardDefaultProps.config,
          ...config,
        },
      });
    },
    didUpdate(prevProps) {
      const foldStatus = getValueFromProps(this, 'foldStatus');
      if (prevProps.foldStatus !== foldStatus) {
        this.setData({
          finalFoldStatus: foldStatus,
        });
      }
    },
  }
);

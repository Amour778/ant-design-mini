/* eslint-disable @typescript-eslint/ban-ts-comment */
import fmtEvent from '../_util/fmtEvent';
import { ButtonDefaultProps } from './props';

Component({
  props: ButtonDefaultProps,
  methods: {
    onTap(e) {
      const { onTap, disabled, loading, onDisabledTap } = this.props;
      if (disabled && onDisabledTap) {
        const event = fmtEvent(this.props, e);
        onDisabledTap(event);
      }
      if (onTap && !disabled && !loading) {
        const event = fmtEvent(this.props, e);
        return onTap(event);
      }
    },
    catchTap(e) {
      const { catchTap, disabled, loading, onDisabledTap } = this.props;
      if (disabled && onDisabledTap) {
        const event = fmtEvent(this.props, e);
        onDisabledTap(event);
      }
      if (catchTap && !disabled && !loading) {
        const event = fmtEvent(this.props, e);
        return catchTap(event);
      }
    },
    onGetAuthorize(e) {
      if (this.props.onGetAuthorize) {
        this.props.onGetAuthorize(fmtEvent(this.props, e));
      }
    },
    onFollowLifestyle(e) {
      if (this.props.onFollowLifestyle) {
        this.props.onFollowLifestyle(fmtEvent(this.props, e));
      }
    },
    onError(e) {
      if (this.props.onError) {
        this.props.onError(fmtEvent(this.props, e));
      }
    },
    onGetUserInfo(e) {
      if (this.props.onGetUserInfo) {
        this.props.onGetUserInfo(fmtEvent(this.props, e));
      }
    },
    onGetPhoneNumber(e) {
      if (this.props.onGetPhoneNumber) {
        this.props.onGetPhoneNumber(fmtEvent(this.props, e));
      }
    },
  },
});

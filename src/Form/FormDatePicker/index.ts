import { useEvent } from 'functional-mini/component';
import { mountComponent } from '../../_util/component';
import { useComponentEvent } from '../../_util/hooks/useComponentEvent';
import {
  useHandleCustomEvent,
  useMultipleValueHandleCustomEvent,
} from '../../_util/hooks/useHandleCustomEvent';
import { useFormItem } from '../use-form-item';
import { FormDatePickerDefaultProps, FormDatePickerProps } from './props';

const FormDatePicker = (props: FormDatePickerProps) => {
  const { formData, emit } = useFormItem(props);
  const { triggerEventValues, triggerEventOnly, triggerEvent } =
    useComponentEvent(props);

  useMultipleValueHandleCustomEvent('onOk', (date, dateStr, e) => {
    emit('onChange', date);
    triggerEventValues('ok', [date, dateStr], e);
  });

  useMultipleValueHandleCustomEvent('onPickerChange', (date, dateStr, e) => {
    triggerEventValues('pickerChange', [date, dateStr], e);
  });

  useHandleCustomEvent('onVisibleChange', (visible, e) => {
    triggerEvent('visibleChange', visible, e);
  });

  useEvent('onDismissPicker', (e) => {
    triggerEventOnly('dismissPicker', e);
  });

  useEvent('onFormat', (date, dateStr) => {
    if (props.onFormat) {
      return props.onFormat(date, dateStr);
    }
  });

  useEvent('onFormatLabel', (type, value) => {
    if (props.onFormatLabel) {
      return props.onFormatLabel(type, value);
    }
  });

  return {
    formData,
  };
};

mountComponent(
  FormDatePicker,
  FormDatePickerDefaultProps as FormDatePickerProps
);

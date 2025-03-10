Page({
    data: {
        checked: false,
        value: 'banana',
        options: [
            { value: 'apple', label: '苹果' },
            { value: 'orange', label: '橘子' },
            { value: 'banana', label: '香蕉' },
        ],
        optionsWithDisabled: [
            { value: 'apple', label: '苹果' },
            { value: 'orange', label: '橘子' },
            { value: 'watermelon', label: '西瓜', disabled: true },
            { value: 'banana', label: '香蕉' },
        ],
    },
    onChange(value, e) {
        console.log(value, e);
    },
    handleChange(checked) {
        this.setData({
            checked: checked.detail,
        });
    },
    onRadioGroupChange(value, e) {
        console.log(value, e);
    },
    handleRadioGroupChange(value) {
        this.setData({
            value: value.detail,
        });
    },
});

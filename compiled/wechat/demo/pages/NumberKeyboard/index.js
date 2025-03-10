Page({
    data: {
        visible: false,
        visible1: false,
        visible2: false,
        visible3: false,
        visible4: false,
        visible5: false,
        visible6: false,
        visible7: false,
        value8: '',
    },
    // 默认键盘
    onTap() {
        this.setData({ visible: !this.data.visible });
    },
    // 没有小数点
    onTap1() {
        this.setData({ visible1: !this.data.visible1 });
    },
    // 带确认按钮
    onTap2() {
        this.setData({ visible2: !this.data.visible2 });
    },
    // 带向下箭头
    onTap3() {
        this.setData({ visible3: !this.data.visible3 });
    },
    // 乱序键盘
    onTap4() {
        this.setData({ visible4: !this.data.visible4 });
    },
    // 带标题
    onTap5() {
        this.setData({ visible5: !this.data.visible5 });
    },
    // 自定义标题
    onTap6() {
        this.setData({ visible6: !this.data.visible6 });
    },
    // 自定义确认按钮
    onTap7() {
        this.setData({ visible7: !this.data.visible7 });
    },
    onNumberFocus() {
        this.setData({ visible8: true });
    },
    onChange8(e) {
        e = e.detail;
        this.setData({ value8: e ? parseFloat(e) : '' });
    },
    onClose8() {
        this.setData({ visible8: false });
    },
    onCodeFocus9() {
        this.setData({ visible9: true });
    },
    onChange9(e) {
        e = e.detail;
        this.setData({ value9: e });
        e.length === 4 && this.onClose9();
    },
    onClose9() {
        this.setData({ visible9: false });
    },
});

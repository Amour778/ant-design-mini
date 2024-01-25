Page({
    data: {
        typeList: ['default', 'error', 'info', 'primary'],
    },
    handleTapAction() {
        this.showToast('点击按钮');
    },
    handleTapLink() {
        this.showToast('link 类型被点击了');
    },
    handleClose() {
        this.showToast('点击关闭');
    },
    showToast(content) {
        my.showToast({
            content: content,
            duration: 1000,
        });
    },
});

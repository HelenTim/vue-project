// miniprogram/pages/index/index.js
import Notify from '../../miniprogram_npm/@vant/weapp/notify/notify';
Page({

  /**
   * 页面的初始数据
   */
  data: {
    newGroupModal: false,
    groupName: ''
  },

  showNewGroupModal() {
    // console.log('a')
    this.setData({
      newGroupModal: true
    })
  },
  closeDialog() {
    this.setData({
      newGroupModal: false
    })
  },
  createGroup() {
    // console.log(this.data.groupName)
    const self = this
    if (this.data.groupName === '') {
      //出现Notify
      Notify({
        message: '起个名字吧',
        duration: 2000,
        selector: '#notify-selector',
        background: '#dc3545'
      });
      this.selectComponent("#new-group-modal").stopLoading()  //通过component选中某个组件执行某个方法
      return
    }
    //调用云函数
    wx.cloud.callFunction({
      name: 'createGroup',  //调用的云函数的名称
      data: {
        groupName: self.data. groupName   //需要传递给数据库的信息
      },
      success(res) {
        console.log(res)
        self.setData({
          groupName: '' ,  //清空输入框信息
          newGroupModal: false  //创建框消失
        })
        Notify({
          message: '新建成功',
          duration: 2000,
          selector: '#notify-selector',
          background: '#28a745'
        });
        setTimeout(() => {
          wx.switchTab({
            url: '/pages/group/group'
          })
        }, 2000)
      },
      fail(error) {
        console.log(error)
      }
    })
  },
  onGroupNameChange(event) {
    console.log(event)
    this.setData({
      groupName: event.detail
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})
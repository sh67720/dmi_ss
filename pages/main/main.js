// pages/main/main.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    companyname: '德麦设计',
    companytype: '公司企业·企业/工厂',
    companyaddress: '上海市徐汇区凌云路388号',
    companytime: '09:00-18:00',
    companytel: '13311905678',
    companypic: '作品照片',
    companylatitude: 31.14337,
    companylongitude: 121.425923,

    imagelist: [
      'http://www.shdmi.cn/upload/pic1.png',
      'http://www.shdmi.cn/upload/pic2.png',
      'http://www.shdmi.cn/upload/pic3.png',
      'http://www.shdmi.cn/upload/pic4.png',
      'http://www.shdmi.cn/upload/pic5.png',
      'http://www.shdmi.cn/upload/pic6.png',
      'http://www.shdmi.cn/upload/pic7.png',
      'http://www.shdmi.cn/upload/pic8.png',
      'http://www.shdmi.cn/upload/pic9.png'
    ],

    array: [{
      mode: 'aspectFill',
      src: 'http://www.shdmi.cn/upload/pic1.png'
    }, {
      mode: 'aspectFill',
      src: 'http://www.shdmi.cn/upload/pic2.png'
    }, {
      mode: 'aspectFill',
      src: 'http://www.shdmi.cn/upload/pic3.png'
    }, {
      mode: 'aspectFill',
      src: 'http://www.shdmi.cn/upload/pic4.png'
    }, {
      mode: 'aspectFill',
      src: 'http://www.shdmi.cn/upload/pic5.png'
    }, {
      mode: 'aspectFill',
      src: 'http://www.shdmi.cn/upload/pic6.png'
    }, {
      mode: 'aspectFill',
      src: 'http://www.shdmi.cn/upload/pic7.png'
    }, {
      mode: 'aspectFill',
      src: 'http://www.shdmi.cn/upload/pic8.png'
    }, {
      mode: 'aspectFill',
      src: 'http://www.shdmi.cn/upload/pic9.png'
    }]
  },

  //事件处理函数
  bindViewTap: function (event) {
    var p = event.currentTarget.id
    /*wx.navigateTo({
      url: '../picshow/picshow?src='+p
    })*/
    wx.previewImage({
      current: this.data.imagelist[p], // 当前显示图片的http链接
      urls: this.data.imagelist
    })
  },
  tomap: function () {
    wx.openLocation({
      latitude: this.data.companylatitude,
      longitude: this.data.companylongitude,
      scale: 28,
      success: function () {
        console.log("查看位置成功！")
      },
      fail: function () {
        console.log("查看位置失败！")
      }
    })
  },
  calling: function () {
    wx.makePhoneCall({
      phoneNumber: this.data.companytel, //此号码并非真实电话号码，仅用于测试  
      success: function () {
        console.log("拨打电话成功！")
      },
      fail: function () {
        console.log("拨打电话失败！")
      }
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
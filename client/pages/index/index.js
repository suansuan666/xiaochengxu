// var postsData=require('..')

Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrls:[
      '../../images/CD.jpg',
      '../../images/书.jpg',
      '../../images/时钟.png',
      '../../images/照相机.jpg',
      '../../images/茶杯.png'
    ],
    indicatorDots:true,
    interval:5000,
    duration:1000
    
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (option) {
  //   var postId=option.id;
  //   this.data.currentPostId=postId;
  //   var postData=postsData.postList[postId];
  //   this.setData({
  //     postData:postData
  //   })
    
  //   var postsCollected=wx.getStorageSync('posts_collected')
  //   if(postsCollected){
  //     var postCollected=postsCollected[postId]
  //     this.setData({
  //       collected:postCollected
  //     })
  //   }
  //   else{
  //     var postsCollected={}
  //     postsCollected[postId]=false;
  //     wx.setStorageSync('posts_collected', postsCollected)
  //   }
      
  // },
  // onCollectionTap:function(event){
  //   var postsCollected=wx.getStorageSync('posts_collected');
  //   var postCollected=postsCollected[this.data.currentPostId];
  //   postCollected=!postCollected;
  //   postsCollected[this.data.currentPostId]=postCollected;
  //   wx:wx.setStorageSync('posts_collected',postsCollected)
  //   this.setData({
  //     collected:postCollected
  //   })
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

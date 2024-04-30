// index.js
Page({
  data: {
    value: '',
  },
  handleChange:function(e){
    let value = e.detail.value;
    this.setData({value});
  },
  handleSubmit:function(){
    let value = this.data.value;
    if(!value){
      wx.showToast({
        icon: 'none',
        title: '请输入快递号',
      })
    }else{
      let url=`/pages/detail/detail?order_id=${value}`
      wx.navigateTo({
        url: url,
      })
    }
  },
  handleScancode:function(){
    wx.scanCode({
      success(res){
        let order_id=res.result.trim();
        let url=`/pages/detail/detail?order_id=${order_id}`;
        wx.navigateTo({
          url: url,
        })
      }
    })
  }

})
import {
  BookModel
} from '../../models/book.js'
import {
  KeywordModel
} from '../../models/keyword.js'

const keywordModel = new KeywordModel()
const bookModel = new BookModel()


Page({

  /**
   * 页面的初始数据
   */
  data: {
    books: [],
    searching: false,
    hotSearch: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    // 获取热门精选书籍
    bookModel.getHotList().then((res) => {
      this.setData({
        books: res
      })
    })

    // 子组件search中的热门搜索数据
    keywordModel.getHot().then((res) => {
      this.setData({
        hotSearch: res.hot
      })
    })
  },

  onShowSearch() {
    this.setData({
      searching: true
    })
  },

  onHideSearch() {
    this.setData({
      searching: false
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})
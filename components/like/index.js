// components/like/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    like: {
      type: Boolean
    },
    count: {
      type: Number
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    yesSrc: 'images/like.png',
    noSrc: 'images/like@dis.png'
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onLike: function(event) {
      let like = this.properties.like
      let count = this.properties.count
      count = like ? count -1 : count + 1
      this.setData({
        count,
        like: !like
      })

      // 定义一个标志位判断是点赞收藏还是取消
      let behavior = this.properties.like ? 'like' : 'cancle'
      // 触发一个like事件，把behavior传进去，在监听这个事件的地方可以通过event中的detail对象访问behavior
      this.triggerEvent('like', {
        behavior: behavior
      }, {})
    }
  }
})

// components/navi/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    title: {
      type: String
    },
    first: { // 定义两个标志位判断是最后一期还是第一期
      type: Boolean
    },
    last: {
      type: Boolean
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    disLeftSrc: 'images/triangle.dis@left.png',
    leftSrc: 'images/triangle@left.png',
    disRightSrc: 'images/triangle.dis@right.png',
    rightSrc: 'images/triangle@right.png'
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onPrev: function() {
      if(!this.properties.last) {
        this.triggerEvent('left', {}, {})
      }
    },
    onNext: function() {
      if(!this.properties.first) {
        this.triggerEvent('right', {}, {})
      }
    }
  }
})

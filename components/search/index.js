import {
  KeywordModel
} from '../../models/keyword.js'
const keywordModel = new KeywordModel()

Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    onCancel() {
      this.triggerEvent('cancel', {}, {})
    },
    onConfirm(event) {
      const word = event.detail.value
      keywordModel.addToHistory(word)
    }
  }
})

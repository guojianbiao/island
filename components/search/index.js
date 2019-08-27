import {
  KeywordModel
} from '../../models/keyword.js'
import {
  BookModel
} from '../../models/book.js'

const keywordModel = new KeywordModel()
const bookModel = new BookModel()

Component({
  /**
   * 组件的属性列表
   */
  properties: {
    hotSearch: {
      type: Array
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    historyWords: [],
    dataArray: [],
    searching: false,
    q: ''
  },

  attached() {
    this.setData({
      historyWords: keywordModel.getHistory()
    })
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onCancel() {
      this.triggerEvent('cancel', {}, {})
    },
    onConfirm(event) {
      this.setData({
        searching: true
      })

      const q = event.detail.value || event.detail.text
      bookModel.search(0, q).then((res) => {
        this.setData({
          dataArray: res.books,
          q: q
        })
        keywordModel.addToHistory(q)
      })
    },

    onClear(event) {
      this.setData({
        searching: false,
        q: '',
        dataArray: []
      })
    }
  }
})

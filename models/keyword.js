class KeywordModel {
  key = 'q'
  maxLength = 10
  // 获取搜索历史记录,直接从缓存中获取
  getHistory() {
    // 有可能第一次获取的时候没有值，直接返回一个空数组
    const keyval = wx.getStorageSync(this.key)
    if(!keyval) {
      return []
    }
    return keyval
  }

  // 获取热门搜索数据
  getHot() {

  }

  // 搜索的值存入缓存,是一个数组，不是单个值
  addToHistory(keyword) {
    const words = this.getHistory()
    // 判断keyword是否存在在这个数组中
    let has = words.includes(keyword)
    // 如果不存在，则添加到words中，在一起设置到缓存中
    if(!has) {
      // 如果words长度大于10，则删除最后一个
      const length = words.length
      if(length >= this.maxLength) {
        words.pop()
      }
      words.unshift(keyword)
      wx.setStorageSync(this.key, words)
    }
  }
}

export {
  KeywordModel
}
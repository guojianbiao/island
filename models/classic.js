import { HTTP } from '../util/http.js'

class ClassicModel extends HTTP { // 让ClassicModel继承HTTP里面的方法
  getLatest(sCallback) {
    this.request({
      url: 'classic/latest',
      success: (res) => {
        wx.setStorageSync(this._getKey(res.index), res)
        sCallback(res)
        this._setLastIndex(res.index)
      }
    })
  }

  // 获取当前一期的上一期,获取当前一期的下一期,参数动态传入
  getClassic(index, nextOrPrevious, sCallback) {
    let key = nextOrPrevious === 'next' ? this._getKey(index + 1) : this._getKey(index - 1)
    let classic = wx.getStorageSync(key)
    if(!classic) {
      this.request({
        url: 'classic/' + index + '/' + nextOrPrevious,
        success: (res) => {
          wx.setStorageSync(this._getKey(res.index), res)
          sCallback(res)
        }
      })
    } else {
      sCallback(classic)
    }
  }

  // 判断是否是第一期
  isFirst(index) {
    return index === 1 ? true : false
  }

  //判断是否是最后一期
  isLast(currentIndex) { // 新期号与缓存中的期号进行比较
    let lastIndex = this._getLastIndex()
    return currentIndex === lastIndex ? true : false
  }
  // 使用缓存保存最新一期,只需保存期号就行
  _setLastIndex(index) {
    wx.setStorageSync('last', index)
  }

  // 获取缓存
  _getLastIndex() {
    let index = wx.getStorageSync('last')
    return index
  }

  // 获取每一期存到缓存中的key
  _getKey(index) {
    return 'classic-' + index
  }
}

export {
  ClassicModel
}
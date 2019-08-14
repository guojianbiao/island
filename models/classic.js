import { HTTP } from '../util/http.js'

class ClassicModel extends HTTP { // 让ClassicModel继承HTTP里面的方法
  getLatest(sCallback) {
    this.request({
      url: 'classic/latest',
      success: (res) => {
        sCallback(res)
      }
    })
  }
}

export {
  ClassicModel
}
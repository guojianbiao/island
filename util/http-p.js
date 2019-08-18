import {
  config
} from '../config.js'

const tips = {
  1: '出现一个错误',
  1005: 'appkey不存在，请先去申请',
  3000: '期刊不存在'
}

class HTTP {
  request({url, data = {}, method = "GET"}) {
    return new Promise((resolve, reject) => {
      this._request(url, resolve, reject, data, method)
    })
  }

  _request(url, resolve, reject, data = {}, method = "GET") {
    wx.request({
      url: config.api_base_url + url,
      data: data,
      header: {
        'Content-Type': 'application/json',
        'appkey': config.appkey
      },
      method: method,
      success: (res) => {
        const code = res.statusCode.toString()
        if (code.startsWith('2')) {
          resolve(res.data)
        } else {
          reject()
          let error_code = res.data.error_code
          this._show_error(error_code)
        }
      },
      fail: (err) => {
        reject()
        this._show_error(1)
      },
    })
  }

  _show_error(error_code) {
    // 容错处理，假如外部没有error_code让其等于1
    if (!error_code) {
      error_code = 1
    }
    const tip = tips[error_code]
    wx.showToast({
      title: tip ? tip : tips[1],
      icon: 'none',
      duration: 2000
    })
  }
}

export {
  HTTP
}
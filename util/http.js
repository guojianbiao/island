import { config } from '../config.js'

const tips = {
  1: '出现一个错误',
  1005: 'appkey不存在，请先去申请',
  3000: '期刊不存在'
}

class HTTP {
  request(params) {
    // 还可以使用promise处理
      if (!params.method) {
        params.method = 'GET'
      }
      wx.request({
        url: config.api_base_url + params.url,
        data: params.data,
        header: {
          'Content-Type': 'application/json',
          'appkey': config.appkey
        },
        method: params.method,
        success: (res) => {
          let code = res.statusCode.toString()
          if (code.startsWith('2')) {
            params.success(res.data)
          } else {
            let error_code = res.data.error_code
            this._show_error(error_code)
          }
        },
        fail: (err) => {
          this._show_error(1)
        },
      })
  }

  _show_error(error_code) {
    // 容错处理，假如外部没有error_code让其等于1
    if(!error_code) {
      error_code = 1
    }
    wx.showToast({
      title: tips[error_code],
      icon: 'none',
      duration: 2000
    })
  }
}

export { HTTP }
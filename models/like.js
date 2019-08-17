import { HTTP } from '../util/http.js'

// 点赞和取消点赞都需要把数据提交到服务器
class LikeModel extends HTTP {
  like(behavior, artId, category) {

// artId: 点赞对象,例如你想对电影进行点赞，那这个参数就是电影的id号;category：点赞类型分为四种：100 电影 200 音乐... 
    let url = behavior === 'like' ? 'like' : 'like/cancel'
    this.request({
      url: url,
      method: 'POST',
      data: {
        art_id: artId,
        type: category
      }
    })
  }

  // 获取点赞信息
  getClassicLikeStatus(artId, category, sCallback) {
    this.request({
      // url: 'classic/' + category + '/' + artId + '/favor',
      url: `classic/${category}/${artId}/favor`,
      success: sCallback
    })
  }
}

export { LikeModel }
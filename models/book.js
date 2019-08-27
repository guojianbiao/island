import {
  HTTP
} from '../util/http-p.js'

class BookModel extends HTTP {
  // 获取热门书籍
  getHotList() {
    return this.request({
      url: '/book/hot_list'
    })
  }

  // 获取书籍详细信息
  getDetail(id) {
    return this.request({
      url: `/book/${id}/detail`
    })
  }

  // 获取书籍短评
  getComments(id) {
    return this.request({
      url: `/book/${id}/short_comment`
    })
  }

  // 获取喜欢书籍数量
  getMyBookCount() {
    return this.request({
      url: `/book/favor/count`
    })
  }

  // 获取书籍点赞状态
  getLikeStatus(id) {
    return this.request({
      url: `/book/${id}/favor`
    })
  }

  // 新增短评
  postComment(bid, comment) {
    return this.request({
      url: `/book/add/short_comment`,
      data: {
        book_id: bid,
        content: comment
      },
      method: "POST"
    })
  }

  // 获取书籍搜索数据
  search(start, q) {
    return this.request({
      url: `/book/search?summary=1`,
      data: {
        start: start,
        q: q
      }
    })
  }
}

export { BookModel }
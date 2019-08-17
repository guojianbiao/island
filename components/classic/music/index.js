import { classicBeh } from '../classic-beh.js'

const mMgr = wx.getBackgroundAudioManager()

Component({
  behaviors: [classicBeh],
  /**
   * 组件的属性列表
   */
  properties: {
    src: {
      type: String
    },
    title: {
      type: String
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    playing: false,
    pauseSrc: 'images/player@pause.png',
    playSrc: 'images/player@play.png'
  },

  attached: function() {
    this._recoverStatus()
    this._monitorSwitch()
  },

  /**
   * 组件的方法列表
   */
  methods: {
    //音乐播放
    onPlay: function() {
      // 图片切换
      if(!this.data.playing) {
        this.setData({
          playing: true
        })
        mMgr.title = this.properties.title
        mMgr.src = this.properties.src
      } else {
        this.setData({
          playing: false
        })
        mMgr.pause()
      }
    },
    
    // 期刊进行切换时，恢复播放状态
    _recoverStatus: function() {
      if(mMgr.paused) {
        this.setData({
          playing: false
        })
        return
      }
      if(mMgr.src === this.properties.src) {
        this.setData({
          playing: true
        })
      }
    },

    // 点击播放面板，播放状态与自定义的播放事件进行同步
    _monitorSwitch: function() {
      mMgr.onPlay(() => {
        this._recoverStatus()
      })
      mMgr.onPause(() => {
        this._recoverStatus()
      })
      mMgr.onStop(() => {
        this._recoverStatus()
      })
      mMgr.onEnded(() => {
        this._recoverStatus()
      })
    }
  }
})

<!--
 * @Author: SunJianFeng
 * @LastEditors: SunJianFeng
 * @Email: jianfengtheboy@163.com
 * @Date: 2020-04-05 16:01:45
 * @LastEditTime: 2020-04-21 12:52:27
 * @Description: banner
 -->
<template>
  <slider
    ref="slider"
    :autoPlay="true"
    :data-w="width"
    :height="width * 0.7 * 0.372"
    :list="banners"
    @sliderClick="onSliderClick"
  />
</template>

<script>
import Slider from '@/components/Slider'

export default {
  name: 'banner',
  props: {
    banners: {
      type: Array,
      default () {
        return []
      }
    }
  },
  data () {
    return {
      width: 1000
    }
  },
  components: {
    Slider
  },
  deactivated () {
    this.$refs.slider.pause()
    window.removeEventListener('resize', this.handleResize)
  },
  activated () {
    this.$nextTick(() => {
      var dom = this.$refs.slider.$el.parentNode
      this.width = dom.clientWidth || 1000
    })
    window.addEventListener('resize', this.handleResize)
  },
  mounted () {
    this.$nextTick(() => {
      var dom = this.$refs.slider.$el.parentNode
      this.width = dom.clientWidth || 1000
    })
    window.addEventListener('resize', this.handleResize)
  },
  methods: {
    onSliderClick (i, item) {
      if (item.url) {
        this.$electron.remote.shell.openExternal(item.url)
      }
    },
    handleResize () {
      this.$nextTick(() => {
        var dom = this.$refs.slider.$el.parentNode
        this.width = dom.clientWidth
      })
    }
  }
}
</script>

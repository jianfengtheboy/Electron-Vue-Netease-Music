<!--
 * @Author: SunJianFeng
 * @LastEditors: SunJianFeng
 * @Email: jianfengtheboy@163.com
 * @Date: 2020-04-05 16:01:45
 * @LastEditTime: 2020-04-20 22:51:11
 * @Description: 喜欢的歌曲组件
 -->
<template>
  <span :class="{'disable' : disable}">
    <a-icon
      type="heart"
      theme="filled"
      style="color:#c62f2f"
      @click.stop="handleClick(false)"
      v-if="isLiked"
    />
    <a-icon type="heart" theme="outlined" @click.stop="handleClick(true)" v-else />
  </span>
</template>

<script>
export default {
  props: {
    isLiked: {
      type: Boolean,
      default: false
    },
    disable: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    handleClick (isLike) {
      if (this.disable) return
      this.$emit('heartClick', isLike)
    }
  }
}
</script>

<style scoped>
.disable {
  opacity: .5;
}
</style>

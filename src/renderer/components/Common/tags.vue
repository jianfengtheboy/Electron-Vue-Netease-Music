<!--
 * @Author: SunJianFeng
 * @LastEditors: SunJianFeng
 * @Email: jianfengtheboy@163.com
 * @Date: 2020-04-05 16:01:45
 * @LastEditTime: 2020-06-14 17:32:58
 * @Description: tags组件
 -->
<template>
  <section>
    <dl class="tags" v-for="(val, key, index) in tags" :key="index">
      <dt>{{key}}:</dt>
      <dd v-for="(tag, i) in val"
          :key="tag.id"
          @click="selectTag(tag, index, i)"
          :class="{'current': currentIndex == `${index}_${i}`}">
        {{tag.name}}
      </dd>
    </dl>
  </section>
</template>

<script>
export default {
  name: 'tags',
  data () {
    return {
      currentIndex: -1
    }
  },
  props: {
    tags: {
      type: Object,
      default () {
        return []
      }
    },
    useHoverHighlight: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    selectTag (tag, index, i) {
      this.currentIndex = `${index}_${i}`
      this.$emit('change', tag)
    }
  }
}
</script>

<style lang="less" scoped>
.tags {
  margin: 15px 0;
  dd, dt {
    display: inline-block;
    font-size: 13px;
  }
  dd {
    padding: 0 10px;
    cursor: pointer;
    line-height: 22px;
    &.current {
      background: @primary-color;
      color: #fff;
      border-radius: 4px;
      &:hover {
        color: #fff;
      }
    }
    &:hover {
      color: @primary-color;
    }
  }
  dt {
    margin-right: 4px;
    font-weight: 600;
  }
  dd:not(:last-child) {
    margin-right: 4px;
  }
}
</style>

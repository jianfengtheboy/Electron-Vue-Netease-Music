<!--
 * @Author: SunJianFeng
 * @LastEditors: SunJianFeng
 * @Email: jianfengtheboy@163.com
 * @Date: 2020-04-05 16:01:45
 * @LastEditTime: 2020-04-21 20:58:34
 * @Description: 推荐歌单
 -->
<template>
  <div class="playlist">
    <ul class="list">
      <li class="list-item" @click="goLink" v-if="userId">
        <div class="date">
          <div class="info">
            <div class="week">{{getWeek()}}</div>
            <div class="day">{{getDate()}}</div>
          </div>
        </div>
        <div class="list-text">每日歌曲推荐</div>
      </li>
      <list-item class="list-item" v-for="item in playlist" :item="item" :key="item.id">
        <div slot="copywriter" class="copywriter" v-if="item.copywriter">{{item.copywriter}}</div>
      </list-item>
    </ul>
  </div>
</template>

<script>
import listItem from '@/components/Common/list-item'
import { mapGetters } from 'vuex'

export default {
  name: 'playlist',
  props: {
    list: {
      type: Array,
      default () {
        return []
      }
    }
  },
  components: {
    listItem
  },
  computed: {
    ...mapGetters('User', ['userId']),
    playlist () {
      return this.userId ? this.list.slice(0, 9) : this.list.slice(0, 10)
    }
  },
  methods: {
    getWeek () {
      return '星期' + '日一二三四五六'.charAt(new Date().getDay())
    },
    getDate () {
      return new Date().getDate()
    },
    goLink () {
      this.$router.push({
        path: '/recomment_songs'
      })
    }
  }
}
</script>

<style lang="less" scoped>
@gutter: 1%;
.list {
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  margin: 0 -@gutter;
  .list-item {
    width: 18%;
    margin-left: @gutter;
    margin-right: @gutter;
    margin-bottom: 5px;
    cursor: pointer;
    .date {
      position: relative;
      padding-top: 100%;
      border: 1px solid #eee;
      border-radius: 6px;
      overflow: hidden;
      .info {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        line-height: 1.1;
        background: #fff;
        .week {
          font-size: 20px;
        }
        .day {
          font-size: 90px;
          color: @primary-color;
        }
      }
    }
    .list-text {
      margin-top: 4px;
    }
    &:hover {
      .copywriter {
        transform: translateY(0);
      }
      /deep/ .top {
        display: none;
      }
    }
    .copywriter {
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      padding: 6px;
      background: rgba(0, 0, 0, 0.3);
      font-size: 12px;
      color: #fff;
      transform: translateY(-100%);
      transition: all 0.3s;
    }
  }
}
</style>

<!--
 * @Author: SunJianFeng
 * @LastEditors: SunJianFeng
 * @Email: jianfengtheboy@163.com
 * @Date: 2020-04-05 16:01:45
 * @LastEditTime: 2020-06-15 22:03:26
 * @Description: 热门歌曲
 -->
<template>
  <div class="tracks">
    <track-list :tracks="tracks" @dblclick="play" @download="download" />
    <infinite-loading
      forceUseInfiniteWrapper=".ant-layout-content"
      :identifier="infiniteId"
      @infinite="loadmore"
    />
  </div>
</template>

<script>
import { normalSong } from '@/utils/song'
import { getArtistSongs } from '@/api/artist'
import TrackList from '@/components/Common/track-list/index.js'
import Artists from '@/components/Common/artists'

export default {
  name: 'artist-id-songs',
  data () {
    return {
      songUrl: '',
      currentTime: 0,
      buffered: 0,
      songs: [],
      limit: 10,
      offset: 10,
      infiniteId: +new Date()
    }
  },
  components: {
    TrackList,
    Artists
  },
  props: {
    tracks: {
      type: Array,
      default () {
        return []
      }
    }
  },
  methods: {
    async loadmore ($state) {
      let params = {
        id: this.$route.params.id,
        limit: this.limit,
        offset: this.offset
      }
      try {
        let { hotSongs, more } = await getArtistSongs(params)
        let tracks = []
        hotSongs.forEach(song => {
          tracks.push(normalSong(song))
        })
        this.songs.push(...tracks)
        this.$emit('loadmore', this.songs)
        $state.loaded()
        if (more) {
          this.offset += this.limit
        } else {
          $state.complete()
        }
      } catch (error) {
        $state.error()
      }
    },
    play (tracks, index) {
      this.$store.dispatch('play/selectPlay', { tracks, index })
    },
    download (song) {
      this.$store.dispatch('Download/download', song)
    }
  }
}
</script>

<style scoped>
.tracks {
  margin-top: -1px;
}
</style>

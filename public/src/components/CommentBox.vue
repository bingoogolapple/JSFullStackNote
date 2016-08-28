<template>
  <div>
    <x-header :left-options="{showBack: false}" style="background-color:#69BF1C">Vue.js、Node.js 学习笔记</x-header>
    <comment-list></comment-list>
    <comment-form></comment-form>
    <toast :show.sync="isShowMsg" type="cancel">{{msg}}</toast>
  </div>
</template>
<style scoped>
</style>
<script>
  import CommentList from './CommentList.vue'
  import CommentForm from './CommentForm.vue'
  import XHeader from 'vux-components/x-header'
  import Toast from 'vux-components/toast'

  import { setComments } from '../vuex/actions'

  export default{
    data: function () {
      return {
        msg: "",
        isShowMsg: false
      }
    },
    components: {CommentList, CommentForm, XHeader, Toast},
    methods: {
      fetchComments: function () {
        this.$http.get('/comment').then((response) => {
            let result = response.json()

            if (result.code == 0) {
              this.setComments(result.data)
            } else {
              this.msg = result.msg
              this.isShowMsg = true
            }
          }, (response) => {
            this.msg = "获取数据失败"
            this.isShowMsg = true
          });
      }
    },
    vuex: {
      actions: {
        setComments
      }
    },
    ready: function () {
      this.fetchComments()
    }
  }
</script>

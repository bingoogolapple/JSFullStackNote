<template>
  <div>
    <x-header :left-options="{showBack: false}" style="background-color:#69BF1C">Vue.js、Node.js 学习笔记</x-header>
    <comment-list :comments="comments"></comment-list>
    <comment-form></comment-form>
  </div>
</template>
<style scoped>
</style>
<script>
  import CommentList from './CommentList.vue'
  import CommentForm from './CommentForm.vue'
  import XHeader from 'vux-components/x-header'

  export default{
    data: function () {
      return {
        comments: []
      }
    },
    components: {CommentList, CommentForm, XHeader},
    events: {
      onSubmitComment:function(author, text) {
        var formData = new FormData();

        // append string
        formData.append('author', author);
        formData.append('text', text);

        this.$http.post('/comment', formData).then((response) => {
          let result = response.json()

          if (result.code == 0) {
            this.comments = result.data
            // 父组件向子组件传递用dispatch
            this.$broadcast('onSubmitCommentSuccess')
          } else {
              alert(result.msg);
          }
          }, (response) => {
            alert("评论失败");
          });
      }
    },
    ready: function () {
      this.$http.get('/comment').then((response) => {
        let result = response.json()

        if (result.code == 0) {
          this.comments = result.data
        } else {
          alert(result.msg);
        }
      }, (response) => {
        alert("获取数据失败");
      });
    }
  }
</script>

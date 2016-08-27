<template>
  <div>
    <h1>Vue.js、Node.js学习笔记</h1>
    <div></div>
    <comment-list :comments="comments"></comment-list>
    <comment-form></comment-form>
  </div>
</template>
<style>
  h1 {
    color: #42b983;
  }
</style>
<script>
  import CommentList from './CommentList.vue'
  import CommentForm from './CommentForm.vue'

  export default{
    data: function () {
      return {
        comments: []
      }
    },
    components: {CommentList, CommentForm},
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

<template>
  <form v-on:submit.prevent="onSubmitComment">
    <div>
      <input type="text" placeholder="姓名" v-model="author"/>
    </div>
    <div>
      <textarea type="text" placeholder="评论" v-model="text"></textarea>
    </div>
    <button type="submit">添加评论</button>
  </form>
</template>
<style>
  input {
    margin: 4px;
  }
  textarea {
    margin: 4px;
  }
  button {
    background-color: #6C9FFC;
    font-size: 16px;
    color: #ffffff;
    border-radius: 8px;
  }
</style>
<script>

  export default{
    data: function () {
      return {
        author: "",
        text: ""
      }
    },
    methods: {
      onSubmitComment: function() {
        if (this.author.length > 0 && this.text.length > 0) {
          // 子组件向父组件传递用dispatch
          this.$dispatch('onSubmitComment', this.author, this.text)
        } else {
          alert("用户名或评论不能为空")
        }
      }
    },
    events: {
      onSubmitCommentSuccess: function() {
        this.author = ""
        this.text = ""
      }
    }
  }
</script>
